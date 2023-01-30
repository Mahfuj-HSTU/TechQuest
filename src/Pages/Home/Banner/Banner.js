import Lottie from "lottie-react";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import animation from "../../../assets/Animation2/animation2.json";

const Banner = () => {
  return (
    <div className="flex flex-col justify-between max-w-xl px-4 mx-auto lg:flex-row md:px-8 lg:max-w-screen-xl lg:-mt-10">
      <div className="lg:mb-0 lg:pt-16 lg:max-w-lg mt-44">
        <div className="max-w-xl mb-6">
          <div style={{ marginRight: "40px" }}>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full border-0">
              <button className="btn rounded shadow-md bg-purple-700 hover:bg-purple-400 focus:shadow-outline focus:outline-none">
                Start Hiring
              </button>
            </p>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full ">
              <button className="btn">Get A Job</button>
            </p>
          </div>
          <div>
            <h2
              style={{ marginRight: "110px" }}
              className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
            >
              Hire Skillful
            </h2>
          </div>
          <div>
            <h2
              style={{ marginRight: "120px" }}
              className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
            >
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  "Front-End ",
                  5000,
                  "Back-End ",
                  5000,
                  "Fullstack ",
                  5000,
                ]}
              />
            </h2>
          </div>
    // dividing into two part by grid 2 col
    {/* <div className="grid grid-cols-1 md:grid-cols-2 px-4  lg:flex-row md:px-8 lg:max-w-screen-xl">
      {/* left side of the banner */}
      <div className="flex flex-col my-auto items-center gap-5">
        <div className=" flex gap-2">
          <button className="btn rounded shadow-md bg-purple-700 hover:bg-purple-900 focus:shadow-outline focus:outline-none">
            Start Hiring
          </button>
          <button className="btn">Get A Job</button>
        </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Hire Skillful
          </h2>
        <div> */}
          <div>
            <TypeAnimation
              className="font-sans text-4xl font-extrabold tracking-tight text-gray-900 whitespace-nowrap"
              sequence={[
                "Frontend developers",
                1000,
                "Backend developers",
                1000,
                "Full-stack engineers",
                1000,
                "Game developers",
                1000,
                "Q.A specialist",
                1000,
                "UI/UX designer",
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
      <div style={{ marginLeft: "200px" }}>
        <div style={{ marginTop: "60px" }} className="animation sm:">
          <Lottie animationData={animation}></Lottie>
        </div>
      {/* right side of the banner */}
      {/* <div className="md:w-96">
        <Lottie animationData={animation}></Lottie> */}
      </div>
    </div>
  );
};

export default Banner;
