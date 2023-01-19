import Lottie from "lottie-react";
import React from "react";
import Typical from "react-typical";
import animation from "../../../assets/Animation2/animation2.json";

const Banner = () => {
  return (
    <div className="flex flex-col justify-between max-w-xl px-4 mx-auto lg:flex-row md:px-8 lg:max-w-screen-xl">
      <div className="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5">
        <div className="max-w-xl mb-6">
          <div style={ { marginRight: "40px" } }>
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
              style={ { marginRight: "110px" } }
              className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
            >
              Hire Skillful
            </h2>
          </div>
          <div>
            <h2
              style={ { marginRight: "120px" } }
              className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
            >
              <Typical
                loop={ Infinity }
                wrapper="b"
                steps={ [ "Front-End", 5000, "Back-End", 5000, "Fullstack", 5000 ] }
              />
            </h2>
          </div>
          <div>
            <h2
              style={ { marginRight: "90px" } }
              className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-purple-700 sm:text-4xl sm:leading-none"
            >
              <Typical
                loop={ Infinity }
                wrapper="b"
                steps={ [
                  "Developers",
                  4000,
                  "Developers",
                  4000,
                  "Developers",
                  4000,
                ] }
              />
            </h2>
          </div>
          <p
            style={ { whiteSpace: "nowrap", marginLeft: "30px" } }
            className="text-base text-gray-700 md:text-lg"
          >
            Get your first 10 candidates in 48 hours!
          </p>
        </div>
        <div style={ { marginLeft: "30px" } } className="flex items-center">
          <a
            href="/"
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-purple-700 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white"
          >
            Get Started
          </a>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-400 hover:text-purple-800"
          >
            Learn More
          </a>
        </div>
      </div>
      <div style={ { marginLeft: "200px" } }>
        <div style={ { marginTop: "60px" } } className="animation">
          <Lottie animationData={ animation }></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Banner;
