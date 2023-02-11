import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApplicationData } from "./ApplyJobSlice";

const ApplyJobView = () => {
  const { isLoading, error, applications } = useSelector(
    (state) => state.applicationReducer
  );
  // console.log(applications);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApplicationData());
  }, [dispatch]);

  return (
    <div className="my-20 ">
      <h1 className="text-2xl my-10">All jobs from application collection</h1>

      <div className="flex gap-5 justify-center my-5">
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">secondary</button>
        <button className="btn btn-accent">accent</button>
        <button className="btn btn-neutral">neutral</button>
        <button className="btn btn-info">info</button>
        <button className="btn btn-success">success</button>
        <button className="btn btn-warning">warning</button>
        <button className="btn btn-error">error</button>
      </div>

      {isLoading && <h1>Loading..</h1>}
      {error && <h1>{error}</h1>}
      {applications &&
        applications?.map((app) => {
          return (
            <div className="flex " key={app._id}>
              {/* <p>Email: {app.email} </p>
                    <p className='text-3xl'>{app.job.jobTitle}</p> */}
              <div className="card w-96 bg-base-100 shadow-xl flex-1 ">
                <div className="card-body border-inherit m-6 rounded-lg border-8 bg-slate-700 text-white">
                  <h2 className="card-title">
                    {app.job.jobTitle}
                    <div className="badge badge-secondary">
                      {app.job.jobStatus}
                    </div>
                  </h2>
                  <p>{app.job.jobDescription}</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">
                      Required Skill: {app.job.mustSkills}
                    </div>
                    <div className="badge badge-outline">
                      Optional Skill: {app.job.optionalSkills}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ApplyJobView;
