import Lottie from "lottie-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import animation from "../../../assets/Animation2/animation2.json";

const Banner = () => {
  const [startHiring, setStartHiring] = useState(true);
  const [getAJob, setGetAJob] = useState(false);

  const handleStartHiring = () => {
    setStartHiring(true);
    setGetAJob(false);
  };

  const handleGetAJob = () => {
    setGetAJob(true);
    setStartHiring(false);
  };

  return (
    // dividing into two part by grid 2 col
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-full px-4 md:px-8 lg:max-w-screen-xl -mt-8 rounded-md -mx-5 bg-gradient-to-r from-violet-600 via-sky-600 to-[#0675CE] shadow-lg shadow-info">
      {/* left side of the banner // from-[#7209B7] */}
      <div className="flex flex-col mt-20 lg:mt-40 gap-5 mx-5">
        <div className="tabs gap-5 mb-5">
          <p
            onClick={handleStartHiring}
            // className="rounded pb-2 text-white font-semibold border-b-4 hover:border-b-4 hover:border-blue-500"
            className={startHiring ? "rounded pb-2 text-white font-semibold border-b-4 border-blue-500 cursor-pointer"
            : "rounded pb-2 text-white font-semibold border-b-4 hover:border-b-4 hover:border-blue-500 cursor-pointer" }
          >
            Start Hiring
          </p>
          <p
            onClick={handleGetAJob}
            className={getAJob ? "rounded pb-2 text-white font-semibold border-b-4 border-blue-500 cursor-pointer":
          "rounded pb-2 text-white font-semibold border-b-4 hover:border-b-4 hover:border-blue-500 cursor-pointer"}
          >
            Get A Job
          </p>
        </div>
        {startHiring && (
          <div className="text-white flex flex-col gap-4 items-start">
            <h2 className="text-3xl text-left font-bold tracking-tight text-white sm:text-4xl">
              Hire Skillful
            </h2>
            <div>
              <TypeAnimation
                className="text-4xl font-bold tracking-tight text-white text-left whitespace-nowrap"
                sequence={[
                  "Frontend Developers",
                  1000,
                  "Backend Developers",
                  1000,
                  "Full Stack Engineers",
                  1000,
                  "Game Developers",
                  1000,
                  "Q.A Specialists",
                  1000,
                  "UI/UX Designers",
                  1000,
                ]}
                style={{ fontSize: "2em" }}
                speed={1}
                wrapper={"p"}
                repeat={Infinity}
                omitDeletionAnimation={true}
              />
            </div>
            <p className="whitespace-nowrap">
              Get your first 10 candidates in 48 hours!
            </p>
            <Link to='/recruiter' className="bg-white text-black p-3 rounded-md text-center font-bold w-2/3">
              Get Started
            </Link>
          </div>
        )}
        {getAJob && (
          <div className="text-left text-white grid gap-5 w-2/3 mb-24">
            <p className="text-4xl font-bold tracking-tighter leading-normal">Find your dream Tech job in Canada, the US & Europe</p>
            <small className="text-lg">Remote & International Positions</small>
            <Link to='/all-jobs' className="bg-white text-black p-3 rounded-md text-center font-bold">Apply</Link>
          </div>
        )}
      </div>
      {/* right side of the banner */}
      <div className="md:mt-24">
        <Lottie animationData={animation}></Lottie>
      </div>
    </div>
  );
};

export default Banner;
