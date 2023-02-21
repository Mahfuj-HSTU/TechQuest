import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    <div className="my-28">
      <h1 className="text-lg">Saved Jobs</h1>
      <hr />
      {savedJob?.map((job) => (
        <div key={job._id}>
          {
            job.email === user?.email && <div>
            <h1>{job.jobTitle}</h1>
          </div>
          }
        </div>
      ))}
    </div>
  );
};

export default SavedJobView;
