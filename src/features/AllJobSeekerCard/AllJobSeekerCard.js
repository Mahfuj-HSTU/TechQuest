import React from "react";

const AllJobSeekerCard = ({ jobSeeker }) => {
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

//   const sendEmail = (email) =>{
//     email.preventDefault()
//   }
  return (
    <div>
      <div className="bg-slate-200 card w-96 shadow-xl mx-96 my-20">
        <figure className="px-10 pt-10">
          <img
            src={jobSeekerImage}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{jobSeekerName}</h2>
          <p className="font-semibold">{jobSeekerTitle}</p>
          <p className="font-semibold">Skills : {jobSeekerSkills}</p>
          <p>Email : {jobSeekerEmail}</p>
          <p>Educational Institute : {jobSeekerEducationalInstitute}</p>
          <p>Location : {jobSeekerlocation}</p>
          <p>Experience : {jobSeekerExperience}</p>
          <form action="">
          <div className="card-actions">
            <button className="btn btn-primary">Contact Now</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AllJobSeekerCard;
