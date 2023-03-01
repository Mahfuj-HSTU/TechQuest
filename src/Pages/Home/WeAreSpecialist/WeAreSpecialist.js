import React from "react";
import { Link } from "react-router-dom";

const WeAreSpecialist = () => {
  return (
    <div data-aos="fade-up" className="mt-10 ">
      <div className="bg-primary rounded-lg shadow-lg mx-2 h-72 lg:h-96 items-center flex flex-col justify-center gap-6">
        <p className="text-3xl font-semibold text-white w-3/4">
          We are specialists in finding candidates for the hardest tech roles!
        </p>
        {/* <label
          htmlFor="sign-up-modal"
          className="btn  bg-white text-black border-none transition duration-300 hover:shadow-lg hover:text-white"
        >
          get started
        </label> */}
        <Link to="/recruiter/all-job-seekers" className="btn btn-info bg-white text-black border-none transition duration-300 hover:shadow-lg hover:text-white">Start Hiring</Link>
      </div>
    </div>
  );
};

export default WeAreSpecialist;
