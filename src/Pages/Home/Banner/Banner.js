import Lottie from "lottie-react";
import React from "react";
import { TypeAnimation } from "react-type-animation";
// import { TypeAnimation } from "react-type-animation";
import animation from "../../../assets/Animation2/animation2.json";

const Banner = () => {
  return (
    // dividing into two part by grid 2 col
     <div className="grid grid-cols-1 md:grid-cols-2 px-4  lg:flex-row md:px-8 lg:max-w-screen-xl">
      {/* left side of the banner */}
      <div className="flex flex-col mt-20 items-center gap-5">
        <div className=" flex gap-2">
          <button className="btn rounded shadow-md bg-purple-700 hover:bg-purple-900 focus:shadow-outline focus:outline-none">
            Start Hiring
          </button>
          <button className="btn">Get A Job</button>
        </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Hire Skillful
          </h2>
        <div> 
          <div>
            <TypeAnimation
              className="font-sans text-4xl font-extrabold tracking-tight text-gray-900 whitespace-nowrap"
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
        </div>
          <p className="text-base text-gray-700 whitespace-nowrap">
            Get your first 10 candidates in 48 hours!
          </p>
          <p className="inline-flex items-center justify-center h-12 px-6 font-medium transition duration-200 rounded shadow-md bg-purple-700 hover:bg-purple-900 focus:shadow-outline focus:outline-none text-white">
            Get Started
          </p>
      </div>
      {/* right side of the banner */}
      <div className="md:w-96">
        <Lottie animationData={animation}></Lottie>
      </div>
    </div>
  );
};

export default Banner;
