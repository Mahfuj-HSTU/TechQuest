import React from "react";

const AllJobSeekerCard = ({ jobSeeker, setContact }) => {
  const { name, email, photoUrl, institute, skills,title, address, experience } =
    jobSeeker;
  // console.log(jobSeeker);
  return (
    <div className="">
      <hr className="mb-2 shadow-lg hidden md:flex " />
      <div className="flex flex-col md:flex-row justify-between gap-5 mt-5 ">
        <div className="flex text-left gap-4">
          {/* left side  */}
          <div>
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src={photoUrl} alt="" />
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="max-w-xl mb-6 flex flex-col gap-3">
            <div>
            <h2 className="font-bold text-2xl ">{name}</h2>
            <p>{title}</p>
            </div>
            <hr className="mb-2 shadow-lg md:hidden" />
            <p className="font-semibold text-start mt-1">Skills: {skills}</p>
            <p className="text-start mt-1">Email: {email}</p>
            <p className="text-start mt-1">
              Educational Institute: {institute}
            </p>
            <p className="text-start mt-1">Location: {address}</p>
            <p className="text-left mt-1">Experience: {experience}</p>
          </div>
        </div>
        <div className="mb-10">
          <figure className="hidden md:flex">
            <img src={photoUrl} alt="" className="rounded w-56 h-72" />
          </figure>
          <label
            onClick={() => setContact(jobSeeker)}
            htmlFor="contact-modal"
            className="btn btn-primary rounded-none mt-2 w-full text-white"
          >
            Contact Now
          </label>
        </div>
      </div>
      {/* <hr className="mt-12" /> */}
    </div>
  );
};

export default AllJobSeekerCard;
