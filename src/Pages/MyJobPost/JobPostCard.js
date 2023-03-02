import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ServerLink } from "../../Hooks/useServerLink";

const JobPostCard = ({ jobPost, refetch }) => {
  // console.log(jobPost)
  const { _id, jobDescription, jobTitle, location, jobType, jobStatus, allow } =
    jobPost;

  const handleDelete = (_id) => {
    fetch(`${ServerLink}/recruiterJobPosts/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success(`Your Post deleted successfully`);
          refetch();
        }
      });
  };

  const handleAllowBtn = (id) => {
    fetch(`${ServerLink}/recruiterJobPosts/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
        }
      });
  };

  return (
    <div data-aos="fade-up" className="bg-base-100 shadow-2xl my-6 rounded-lg">
      <div className="flex flex-col w-full p-6 mx-auto divide-y divide-gray-700">
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <div>
              <h1 className="text-2xl font-semibold text-primary">
                {jobTitle}
              </h1>
            </div>
          </div>
          <div>
            <label
              htmlFor="my-modal-3"
              className="text-2xl cursor-pointer text-red-600"
            >
              {" "}
              <AiFillDelete></AiFillDelete>
            </label>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <h3 className="text-lg font-bold">
                  Are you sure, You Want to delete it?
                </h3>
                <div className="modal-action ">
                  <label htmlFor="my-modal-3" className="btn btn-primary">
                    NO
                  </label>
                  <label
                    onClick={() => handleDelete(_id)}
                    htmlFor="my-modal-3"
                    className="btn btn-primary"
                  >
                    YES
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 space-y-2 text-sm ">
          <div className=" text-sm font-semibold text-gray-400">
            <span>Location: {location}</span>
            <span className=" ml-8">jobType: {jobType}</span>
            <span className=" ml-8">Job Status: {jobStatus}</span>
          </div>
          <p>{jobDescription}.</p>
          <div>
            <Link to={`/recruiter/applicant/${_id}`}>
              {" "}
              <button className="btn btn-sm btn-primary">Applicant</button>
            </Link>
            <button
              onClick={() => handleAllowBtn(_id)}
              className={
                allow
                  ? "btn btn-sm btn-success ml-3"
                  : "btn btn-sm btn-warning ml-3"
              }
            >
              {allow ? <>Allowed</> : <>Not Allowed</>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPostCard;
