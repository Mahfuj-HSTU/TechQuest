import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSavedJob } from "./SavedJobSlice";

const SavedJobView = () => {
  const state = useSelector((state) => state);
  //   console.log(state);
  const user = state.roleReducer.role;
  const savedJob = state.savedJobReducer.savedJobs;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSavedJob());
  }, [dispatch]);

  return (
    <div className="flex-col flex gap-5 text-center md:text-left w-full mt-2 md:mx-5 pb-5">
      <h1 className="text-2xl font-bold">Saved Jobs</h1>
      <hr />

      <table className="table table-compact mx-auto w-[70%]">
        <thead className="bg-gray-200">
          <tr className="">
            {/* <th>Sl No</th> */}
            <th>Job Title</th>
            <th>Action</th>
          </tr>
        </thead>
        {savedJob?.map((job, i) => (
          <tbody key={job._id}>
            {job.email === user?.email && (
              <tr className="">
                {/* <td>{i+1}</td> */}
                <td><Link to={`/job-details/${job?.jobID}`}>{job.jobTitle}</Link></td>
                <td><button className="btn btn-error btn-sm text-white">
                  Delete
                </button></td>
              </tr>
            )}
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default SavedJobView;
