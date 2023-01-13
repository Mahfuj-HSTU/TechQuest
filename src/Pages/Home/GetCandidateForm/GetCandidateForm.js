import React from "react";
import "./GetCandidateForm.css";

const GetCandidateForm = () => {
  return (
    <div className="bg-[#03b2cb] mt-12 p-12 h-96 flex ">
      <div className="flex-1 justify-center items-center mt-14 w-1/2">
        <h1 className="text-4xl  text-white mx-auto">
          We have the tech talent
          <br />
          you're looking for
        </h1>
        <br />
        <p className="text-xl text-white">
          Search our talent pool of highly qualified candidates
        </p>
      </div>
      <div className="flex-1 w-1/2">
        <form className=" mt-12">
          <input
            type="text"
            placeholder="what skills set are you looking for?"
            className="input input-bordered input-primary w-96 m-4 rounded-full"
          />
          <br />
          <div>
            <input
              type="text"
              placeholder="work E-mail"
              className="input input-bordered input-primary w-96 mt-4 my-4  rounded-full"
            />
            <input
              type="submit"
              className=" mx-2 my-2 py-2 px-4 btn bg-blue-500 text-white  inline-block "
              value="Get Candidate"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetCandidateForm;
