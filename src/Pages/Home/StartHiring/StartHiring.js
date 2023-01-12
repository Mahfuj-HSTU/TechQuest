import React from "react";
import { Link } from "react-router-dom";

const StartHiring = () => {
  return (
    <div className="">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
          <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <div className="mr-5">
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-green-300 text-teal-900 rounded-full ">
                Hire from Anywhere
                </p>
              </div>
              <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
              Hire From Anywhere
                
              </h2>
              <p className="text-gray-700 text-base md:text-lg">
              Our Global Mobility team helps with the visa process, doing all the heavy lifting. We also support fully remote hires. Or combine both by starting remotely and then relocating.
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Link
                href="/"
                className="w-32 transition duration-300 hover:shadow-lg"
              >
                      <button className="btn btn-primary">Start Hiring</button>

              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center lg:w-1/2">
            <div className="w-2/5">
              <img
                className="object-cover"
                src="https://kitwind.io/assets/kometa/one-girl-phone.png"
                alt=""
              />
            </div>
            <div className="w-5/12 -ml-16 lg:-ml-10">
              <img
                className="object-cover"
                src="https://kitwind.io/assets/kometa/two-girls-phone.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartHiring;
