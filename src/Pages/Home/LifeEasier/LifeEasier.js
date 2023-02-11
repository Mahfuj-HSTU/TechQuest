import React from "react";

const LifeEasier = () => {
  return (///data-aos="fade-up"
    <div  className=" my-32 w-[90%] mx-auto shadow-lg p-5 rounded-md">
      <div className="lg:flex">
        <div className="lg:w-[50%] w-11/12 lg:text-start m-1 lg:my-40 my-20">
          <h1 className="text-4xl font-bold">
            We make life easier for 600+ companies since 2015
          </h1>
          <p className="py-6">
            Find senior tech talent who fit your needs from our global community
            of over 400,000 candidates who are ready to relocate or work remotely.
          </p>
          <label
            htmlFor="sign-up-modal"
            className="btn btn-primary text-white my-5 transition duration-300 hover:shadow-lg"
          >
            Start Hiring
          </label>
        </div>
        <div className="lg:relative grid justify-items-center md:grid-cols-2 grid-cols-1 justify-evenly gap-6">
          <div
            data-aos="fade-up"
            className="w-52 h-40 p-5 rounded-lg border-2 lg:absolute top-0 left-0"
          >
            <p>Build Diverse Teams</p>
          </div>
          <div
            data-aos="fade-up"
            className="w-52 h-40 p-5 rounded-lg border-2 lg:absolute top-10 left-60"
          >
            <p>Vetted Tech Talent</p>
          </div>
          <div
            data-aos="fade-up"
            className="w-52 h-40 p-5 rounded-lg border-2 lg:absolute top-48 left-0"
          >
            <p>Long Term Retention</p>
          </div>
          <div
            data-aos="fade-up"
            className="w-52 h-40 p-5 rounded-lg border-2 lg:absolute top-56 left-60 lg:mt-2"
          >
            <p>Risk Free</p>
          </div>
          <div
            data-aos="fade-up"
            className="w-52 h-40 p-5 rounded-lg border-2 lg:absolute top-96 left-0"
          >
            <p>The fastest way to hire</p>
          </div>
          <div
            data-aos="fade-up"
            className="w-52 h-40 p-5 rounded-lg border-2 lg:absolute top-96 left-60 lg:mt-10"
          >
            <p>Maximize your budget</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeEasier;
