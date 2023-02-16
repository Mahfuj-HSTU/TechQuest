import React from "react";

const AllJobSeekerCard = ( { jobSeeker, setContact } ) => {
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
    <div>
      <div className="bg-slate-200 card w-96  shadow-xl mx-28 my-20">
        <figure className="px-10 pt-10 object-cover">
          <img src={ photoUrl } alt="" className="rounded-xl h-96" />
        </figure>
        <div className="card-body ">
          <h2 className="font-bold text-2xl text-center">{ name }</h2>
          <p className="font-semibold text-blue-500  text-center">
            { title }
          </p>
          <p className="font-semibold text-start">Skills: { skills }</p>
          <p className="text-start">Email: { email }</p>
          <p className="text-start">
            Educational Institute: { institute }
          </p>
          <p className="text-start">Location: { address }</p>
          <p className="text-left">Experience: { experience }</p>
          <form action="">
            <div className="card-actions">
              <label
                onClick={ () => setContact( jobSeeker ) }
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
