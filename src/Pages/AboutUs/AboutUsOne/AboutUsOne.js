import React from "react";
import { Link } from "react-router-dom";

const AboutUsOne = () => {
  return (
    <div className="my-20">
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 bg-slate-200">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/1080066370SeniorWebDeveloper.jpg"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            TechQuest is one of the 
            <br className="hidden md:block" />
            fastest ways to 
            <span className="inline-block text-deep-purple-accent-400">
              hire tech talents.
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            We are on a mission to create a borderless world by empowering tech
            talent worldwide to improve their soft skills and achieve their goal
            of getting hired abroad or remote.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUsOne;
