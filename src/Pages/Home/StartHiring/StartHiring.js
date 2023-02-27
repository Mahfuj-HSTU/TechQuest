import React from "react";
import Lottie from "lottie-react";
import animation from "../../../assets/Animation/animation.json";
import { Link } from "react-router-dom";

const StartHiring = () => {
  return (
    <div data-aos="fade-up" className="mt-20 border rounded-md p-5 mx-5">
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 my-20">
        <div className="flex flex-col  w-full lg:flex-row">
          <div className="mb-10 ml-8 lg:mb-0 lg:max-w-lg ">
            <div className="mt-10 mb-6 text-center lg:text-left">
              <div className="">
                <p
                  style={ { whiteSpace: "nowrap" } }
                  className="inline-block px-1 lg:px-3 mb-4 text-lg font-semibold tracking-wider uppercase bg-green-300  rounded-full ">
                  Hire The Best Professionals
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold  text-black sm:text-4xl sm:leading-none mb-6">
                  Hire From Anywhere
                </h2>
              </div>
              <div>
                <p className="text-gray-700 text-base  md:text-lg">
                  Our Global Mobility team helps with the visa process, doing
                  all the heavy lifting. We also support fully remote hires. Or
                  combine both by starting remotely and then relocating.
                </p>
              </div>
              <Link to="/recruiter/all-job-seekers" className="btn btn-primary text-white my-5 transition duration-300 hover:shadow-lg">Start Hiring</Link>
            </div>
          </div>
          <div className="flex items-center ml-10 justify-center lg:w-1/2">
            <div>
              <div style={ { marginTop: "-40px" } } className="animation">
                <Lottie animationData={ animation }></Lottie>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartHiring;
