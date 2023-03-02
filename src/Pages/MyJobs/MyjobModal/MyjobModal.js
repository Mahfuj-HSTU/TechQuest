import React from "react";
import { FaBusinessTime } from "react-icons/fa";
import { ServerLink } from "../../../Hooks/useServerLink";
import { Link, useNavigate } from "react-router-dom";

const MyjobModal = ({ myjob }) => {
  const navigate = useNavigate();
  const { job } = myjob;
  const {
    jobTitle,
    jobStatus,
    location,
    mustSkills,
    optionalSkills,
    jobRequirements,
  } = job;
  // console.log(job,"added job");
  // console.log(myjob);

  const handleDelete = (myjob) => {
    // console.log(job,"deleted job");
    const agree = window.confirm(`Are sure, you want to delete: ${jobTitle}`);
    if (agree) {
      fetch(`${ServerLink}/applications/${myjob._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "deleted data");
          if (data.deletedCount > 0) {
            alert("user deleted successfully.");
          }
          navigate("/job-seeker/myJobs");
        });
    }
  };

  return (
    <>
      <hr></hr>
      <div className="drawer drawer-end mx-auto">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="drawer-side overflow-x-hidden">
            <div className="grid grid-cols-2 overflow-hidden">
              <div>
                <div className="animate m-8 p-2 rounded-lg">
                  <p className="text-primary text-xl tracking-tighter">
                    {jobTitle}
                  </p>
                </div>

                {/* <div className="m-8 shadow-lg bordered-8 text-center ">
                  <h3 className="text-2xl">About The Company</h3>
                  <p>This company has already hired 1 Techquest</p>
                  <p>More information on interview stage</p>
                </div> */}
                {/* <p className="text-left text-gray-700 text-2xl mt-4 ">
                  Job Activity
                </p>
                <br />
                <div className="flex  border-2 border-r-slate-500 mt-1">
                  <BsSticky className="mt-1" />
                  <span className="mx-3 text-xl">
                    
                    15 candidates were screened for {jobTitle}
                  </span>
                </div> */}
                {/* <div className="flex  border-2 border-r-slate-500 mt-1">
                  <IoIosPeople className="mt-1" />
                  <span className="mx-2 text-xl">
                    350 candidates applied for the {jobTitle}
                  </span>
                </div> */}
                <div className="justify-start">
                  <div className="flex mx-auto border-2 bg-secondary rounded-lg mt-2 p-4">
                    <FaBusinessTime className="mt-2 " />
                    <span className="mx-3 text-2xl">About The Job</span>
                  </div>
                  <div className=" card-body bg-secondary bg-opacity-30 text-black text-justify shadow-xl">
                    <p>
                      <span className=" text-info">Requirements</span>
                      <p>{jobRequirements}</p>
                    </p>
                    <p>
                      <span className="text-info">Skills </span>
                      <p>{mustSkills}</p>
                    </p>
                    <p>{optionalSkills}</p>
                    <p>
                      <span className="text-info">Location: </span>
                      <p>{location}</p>
                    </p>
                    <p>
                      <span className="text-info">Job Type: </span>
                      <p>{jobStatus}</p>
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <p className="text-center text-green-700 font-semibold border rounded-md p-5 my-7 text-xl">
                  Our Hiring Process
                </p>
                <ul className="steps steps-vertical lg:steps-vertical w-72 bordered border-2 shadow-lg bordered-lg text-center m-4 p-4">
                  <li className="step step-success">Applied</li>
                  <li className="step step-success">Screening</li>
                  <li className="step">Interview</li>
                  <li className="step">Final round</li>
                  <li className="step">Reference Check</li>
                </ul>
                <Link
                  to={`/job-details/${_id}`}
                  className="text-info hover:text-primary"
                >
                  See details
                </Link>
                <label
                  htmlFor="my-job-drawer"
                  onClick={() => handleDelete(myjob)}
                  className="btn btn-outline hover:bg-error hover:border-none btn-sm hover:text-white rounded-lg my-3 w-1/2"
                >
                  Revert Application
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyjobModal;
