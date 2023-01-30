import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllJobs } from "./AllJobsSlice";
import SearchOption from "../Search/SearchOptionView";
import RemoveJob from "./RemoveJob";

const AllJobsView = () => {
  const jobs = useSelector((state) => state.jobsReducer.jobs);
  // console.log(jobs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllJobs());
  }, [dispatch]);

  return (
    <div className="mt-20 mx-10 ">
      <h1 className="text-3xl font-bold text-left">
        Find your dream job abroad or remote
      </h1>
      <SearchOption />
      {jobs &&
        jobs.map((job) => {
          const {
            _id,
            jobTitle,
            jobDescription,
            jobStatus,
            jobType,
            location,
            salary,
            salaryCurrency,
            experience,
            mustSkills,
            optionalSkills,
            openings,
          } = job;

          return (
            <Link
              key={_id}
              state={job}
              to={`/job-details/${_id}`}
              // className="btn btn-info text-white hover:bg-white hover:text-black mt-5"
            >
              <div className="text-left border rounded-lg my-5 p-5 w-3/4 shadow-lg hover:shadow-2xl">
                {openings <= 1 ? (
                  <small>{openings} position</small>
                ) : (
                  <small>{openings} positions</small>
                )}
                <div className="flex gap-5">
                  <div>
                    <h1 className="text-xl font-semibold text-cyan-600">
                      {jobTitle}
                    </h1>
                    <div className="flex flex-col md:flex-row justify-start  md:gap-0">
                      <small className="m-1">{location}</small>
                      <small className="m-1">{jobStatus}</small>
                      <small className="m-1">{jobType}</small>
                    </div>
                    <div className="">
                      <small className="m-1">{salary}</small>
                      <small className="m-1">{salaryCurrency}</small>
                    </div>
                  </div>

                  <div className="justify-end">
                    <RemoveJob/>
                  </div>
                </div>
                <p className="my-2">{jobDescription}</p>
                {/* .slice(0,250) */}
                <div className="flex gap-3 w-auto p-1 font-semibold text-gray-400">
                  <p className="border rounded-3xl text-sm py-1 px-3 text-sky-800">
                    {mustSkills}
                  </p>
                  <p className="border rounded-3xl text-sm py-1 px-3">
                    {optionalSkills}
                  </p>
                  <p className="border rounded-3xl text-sm py-1 px-3">
                    {experience}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default AllJobsView;
