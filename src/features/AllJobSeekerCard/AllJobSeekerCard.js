import React from "react";
import { Link } from "react-router-dom";

const AllJobSeekerCard = ({ jobSeeker, setContact }) => {
  const {
    jobSeekerName,
    jobSeekerEmail,
    jobSeekerImage,
    jobSeekerEducationalInstitute,
    jobSeekerTitle,
    jobSeekerSkills,
    jobSeekerlocation,
    jobSeekerExperience,
  } = jobSeeker;

  return (
    <div>
      <div className="bg-slate-200 card w-96 shadow-xl mx-96 my-20">
        <figure className="px-10 pt-10">
          <img src={jobSeekerImage} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title ml-28">{jobSeekerName}</h2>
          <p className="font-semibold text-blue-500 text-left ml-24">
            {jobSeekerTitle}
          </p>
          <p className="font-semibold text-start">Skills: {jobSeekerSkills}</p>
          <p className="text-start">Email: {jobSeekerEmail}</p>
          <p className="text-start">
            Educational Institute: {jobSeekerEducationalInstitute}
          </p>
          <p className="text-start">Location: {jobSeekerlocation}</p>
          <p className="text-left">Experience: {jobSeekerExperience}</p>
          <form action="">
            <div className="card-actions">
              <label
                onClick={() => setContact(jobSeeker)}
                htmlFor="contact-modal"
                className="btn btn-primary ml-24"
                
              >
                Contact Now
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AllJobSeekerCard;
