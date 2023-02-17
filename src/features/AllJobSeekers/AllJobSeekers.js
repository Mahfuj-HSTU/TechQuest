import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ServerLink } from "../../Hooks/useServerLink";
import AllJobSeekerCard from "../AllJobSeekerCard/AllJobSeekerCard";
import ContactNow from "../AllJobSeekerCard/ContactNow";

const AllJobSeekers = () => {
  const [jobSeekers, setJobSeekers] = useState([]);
  const [contact, setContact] = useState(null);
  useEffect(() => {
    fetch(`${ServerLink}/jobSeekersCollection`)
      .then((res) => res.json())
      .then((data) => setJobSeekers(data));
  }, []);

  return (
    <div className="grid">
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
                <Link>Sidebar Item 1</Link>
              </li>
              <li>
                <Link>Sidebar Item 2</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllJobSeekers;
