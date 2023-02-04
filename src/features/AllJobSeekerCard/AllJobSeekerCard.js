import React from "react";

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
      <div className="bg-slate-200 card w-96  shadow-xl mx-28 my-20">
        <figure className="px-10 pt-10 object-cover">
          <img src={jobSeekerImage} alt="" className="rounded-xl h-96" />
        </figure>
        <div className="card-body ">
          <h2 className="font-bold text-2xl text-center">{jobSeekerName}</h2>
          <p className="font-semibold text-blue-500  text-center">
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
