import React from "react";
import Lottie from "lottie-react";
import animation from "../../../assets/Animation/animation.json";

const StartHiring = () => {
  return (
    <div className="mt-20">
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="flex flex-col  w-full lg:flex-row">
          <div className="mb-10 lg:mb-0 lg:max-w-lg ">
            <div className="mb-6 text-center lg:text-left">
              <div className="">
                <p
                  style={{ whiteSpace: "nowrap" }}
                  className="inline-block px-3 mb-4 text-xl font-semibold tracking-wider uppercase bg-green-300  rounded-full "
                >
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
              <button className="btn btn-primary my-5 transition duration-300 hover:shadow-lg">
                Start Hiring
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center lg:w-1/2">
            <div>
              <div style={{ marginTop: "-20px" }} className="animation">
                <Lottie animationData={animation}></Lottie>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartHiring;
