import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSavedJob } from "./SavedJobSlice";

const SavedJobView = () => {
  const state = useSelector((state) => state.savedJobReducer);
  //   console.log(state.savedJobs);
  const savedJob = state.savedJobs;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSavedJob());
  }, [dispatch]);
  return (
    <div className="my-28">
      <h1 className="text-lg">Saved Jobs</h1>
      <hr />
      {savedJob?.map((job) => (
        <>
          <h1>{job.jobTitle}</h1>
        </>
      ))}
    </div>
  );
};

export default SavedJobView;
