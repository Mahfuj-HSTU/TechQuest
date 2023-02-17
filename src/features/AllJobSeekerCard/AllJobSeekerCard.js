import React from "react";

const AllJobSeekerCard = ({ jobSeeker, setContact }) => {
  const {
    name,
    email,
    photoUrl,
    institute,
    title,
    skills,
    address,
    experience,
  } = jobSeeker;

  return (

    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <hr className="mb-5" />
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="font-bold text-2xl text-center">{name}</h2>
            <p className="font-semibold text-blue-500  text-center mt-2">{title}</p>
            <p className="font-semibold text-start mt-1">Skills: {skills}</p>
            <p className="text-start mt-1">Email: {email}</p>
            <p className="text-start mt-1">Educational Institute: {institute}</p>
            <p className="text-start mt-1">Location: {address}</p>
            <p className="text-left mt-1">Experience: {experience}</p>
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
          <form action="">
                <div className="card-actions">
                  <label
                    onClick={() => setContact(jobSeeker)}
                    htmlFor="contact-modal"
                    className="btn btn-primary ml-24 mt-8"
                  >
                    Contact Now
                  </label>
                </div>
              </form>
            
          </div>
        </div>
        <div>
          <figure className="px-10 pt-10 object-cover">
            <img src={photoUrl} alt="" className="rounded-xl h-96" />
          </figure>
        </div>
      </div>
      <hr className="mt-16" />
    </div>
  );
};

export default AllJobSeekerCard;
