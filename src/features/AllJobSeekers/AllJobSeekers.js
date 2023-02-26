import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AllJobSeekerCard from "../AllJobSeekerCard/AllJobSeekerCard";
import ContactNow from "../AllJobSeekerCard/ContactNow";
import { fetchAllJobSeekers } from "./AllJobSeekersSlice";

const AllJobSeekers = () => {
  // const [jobSeekers, setJobSeekers] = useState([]);
  const searchRef = useRef();
  const [search, setSearch] = useState("");
  const [contact, setContact] = useState(null);
  const dispatch = useDispatch();
  const jobSeekerData = useSelector((state) => state.allJobSeekersReducer);
  const jobSeekers = jobSeekerData.jobSeeker;

  // console.log(jobSeekerData);
  useEffect(() => {
    dispatch(fetchAllJobSeekers(search));
  }, [dispatch, search]);

  const handleSearch = () => {
    setSearch(searchRef.current.value);
  };

  return (
    <div className="mx-10 mt-24">
      <div className="my-5">
        <h1 className="text-4xl font-bold text-left my-5">
          Find Your Next Top Tech Employee.
        </h1>
        <div className="form-control">
          <div className="input-group">
            <input
              ref={searchRef}
              type="text"
              placeholder="Search For Talents"
              className="input input-bordered"
            />
            <button onClick={handleSearch} className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="">
        {jobSeekers?.map((jobSeeker) => (
          <AllJobSeekerCard
            key={jobSeeker?._id}
            jobSeeker={jobSeeker}
            setContact={setContact}
          ></AllJobSeekerCard>
        ))}
      </div>
      {contact && <ContactNow contact={contact}></ContactNow>}
    </div>
  );
};

export default AllJobSeekers;
