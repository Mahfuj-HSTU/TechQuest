import React, { useState } from "react";
import { useEffect } from "react";
import AllJobSeekerCard from "../AllJobSeekerCard/AllJobSeekerCard";
import ContactNow from "../AllJobSeekerCard/ContactNow";

const AllJobSeekers = () => {
  const [jobSeekers, setJobSeekers] = useState([]);
  const [contact, setContact] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/jobSeekersCollection")
      .then((res) => res.json())
      .then((data) => setJobSeekers(data));
  }, []);

  return (
    <>
      <div>
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
  );
};

export default AllJobSeekers;
