import React from "react";

const WeAreSpecialist = () => {
  return (
    <div className="mt-10">
      {/* <div className="bg-sky-600 rounded-lg w-4/5 mx-auto items-center">
        <div className="h-24 w-24 rounded-full bg-sky-600 border border-white">

        </div>
        <div className="avatar top-7">
          <div className="w-80 rounded-full ring ring-white opacity-75">
          </div>
        </div>
      </div> */}
      <div className="bg-sky-600 rounded-lg  mx-auto h-64 items-center flex flex-col justify-center gap-6">
        <p className="text-3xl font-bold text-white w-3/4">
          We are specialists in finding candidates for the hardest tech roles!
        </p>
        <button className="btn bg-white text-black">get started</button>
      </div>
    </div>
  );
};

export default WeAreSpecialist;
