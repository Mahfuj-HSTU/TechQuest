import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ServerLink } from "../../Hooks/useServerLink";
import AllJobSeekerCard from "../AllJobSeekerCard/AllJobSeekerCard";
import ContactNow from "../AllJobSeekerCard/ContactNow";

const AllJobSeekers = () => {
  const [jobSeekers, setJobSeekers] = useState([]);
  const searchRef = useRef();
  const [search, setSearch] = useState("");
  const [contact, setContact] = useState(null);
  useEffect(() => {
    fetch(`${ServerLink}/jobSeekersCollection?search=${search}`)
      .then((res) => res.json())
      .then((data) => setJobSeekers(data));
  }, [search]);

  const handleSearch = () => {
    setSearch(searchRef.current.value);
  }

  return (
    <div className="grid">
      <div className="my-5">
        <h1 className="text-4xl font-bold text-left ml-8">
          Find your next top tech employee.
        </h1>
      </div>
      <div className="">
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <>
              <div className="">
                {jobSeekers.map((jobSeeker) => (
                  <AllJobSeekerCard
                    key={jobSeeker._id}
                    jobSeeker={jobSeeker}
                    setContact={setContact}
                  ></AllJobSeekerCard>
                ))}
              </div>
              {contact && <ContactNow contact={contact}></ContactNow>}
            </>
            <label
              htmlFor="my-drawer-2 bg-slate-200"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open Drawer
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
              <li>
                <Link>
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
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllJobSeekers;
