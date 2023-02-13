import React, { useState } from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import animation from "../../../assets/Animation2/animation2.json";
import Circle from "../../../assets/Animation/Circle/Circle";

const Banner = () => {
  const [ startHiring, setStartHiring ] = useState( true );
  const [ getAJob, setGetAJob ] = useState( false );

  const handleStartHiring = () => {
    setStartHiring( true );
    setGetAJob( false );
  };

  const handleGetAJob = () => {
    setGetAJob( true );
    setStartHiring( false );
  };

  return (
    // dividing into two part by grid 2 col
    <div className="grid grid-cols-1 mt-16  justify-items-center md:grid-cols-2 px-4 md:px-8 rounded-md bg-gradient-to-r from-[#773cff]   to-[#135dd3] shadow-lg">
      {/* left side of the banner // from-[#7209B7] */ }
      <div className="flex flex-col mt-20 md:t-0 gap-5 mx-5 top-0">
        <div className="tabs gap-5 mb-5">
          <p
            onClick={ handleStartHiring }
            // className="rounded pb-2 text-white font-semibold border-b-4 hover:border-b-4 hover:border-blue-500"
            className={
              startHiring
                ? "rounded pb-2 text-white font-semibold border-b-4 border-blue-500 cursor-pointer"
                : "rounded pb-2 text-white font-semibold border-b-4 hover:border-b-4 hover:border-blue-500 cursor-pointer"
            }
          >
            Start Hiring
          </p>
          <p
            onClick={ handleGetAJob }
            className={
              getAJob
                ? "rounded pb-2 text-white font-semibold border-b-4 border-blue-500 cursor-pointer"
                : "rounded pb-2 text-white font-semibold border-b-4 hover:border-b-4 hover:border-blue-500 cursor-pointer"
            }
          >
            Get A Job
          </p>
        </div>
        { startHiring && (
          <div className="text-white flex flex-col gap-4 items-start">
            <h2 className="text-3xl text-left font-bold tracking-tight text-white sm:text-4xl">
              Hire Skillful
            </h2>
            <div>
              <TypeAnimation
                className="text-4xl font-bold tracking-tight text-white text-left whitespace-nowrap"
                sequence={ [
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
                ] }
                style={ { fontSize: "2em" } }
                speed={ 1 }
                wrapper={ "p" }
                repeat={ Infinity }
                omitDeletionAnimation={ true }
              />
            </div>
            <p className="whitespace-nowrap mr-10">
              Get your first 10 candidates in 48 hours!
            </p>
            <Link
              to="/auth/recruiter"
              className="bg-white hover:bg-secondary text-black p-3 rounded-md text-center font-semibold w-1/2"
            >
              Get Started
            </Link>
          </div>
        ) }
        { getAJob && (
          <div className="text-white flex flex-col gap-4 items-start w-80 mb-32">
            <p className="text-4xl text-left font-bold leading-normal">
              Find your dream Tech job in Canada, the US & Europe
            </p>
            <small className="text-lg">Remote & International Positions</small>
            <Link
              to="/all-jobs"
              className="bg-white hover:bg-secondary text-black p-3 rounded-md text-center font-semibold w-1/2"
            >
              Apply
            </Link>
          </div>
        ) }
      </div>
      {/* right side of the banner  */ }
      { getAJob && (
        <div
        // className="lg:my-52 md:my-10"
        >
          <Circle />
        </div>
      ) }
      { startHiring && (
        <div className="md:mt-10">
          <Lottie animationData={ animation }></Lottie>
        </div>
      ) }
    </div>
  );
};

export default Banner;
