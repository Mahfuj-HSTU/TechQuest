import React from "react";
// import "./GetCandidateForm.css";

const GetCandidateForm = () => {
  return (
    <div className="bg-[#03b2cb] mt-12 p-12 lg:h-96  lg:flex md:flex">
      <div className="col-75 justify-center items-center mt-14  md:w-full  responsive1">
        <h1 className="lg:text-4xl md:text-3xl  text-white mx-auto">
          We have the tech talent
          <br />
          you're looking for
        </h1>
        <br />
        <p className="lg:text-xl text-white">
          Search our talent pool of highly qualified candidates
        </p>
      </div>
      <div className=" col-25 md:w-full">
        <form className=" mt-12 mx-auto">
          <input
            type="text"
            placeholder="what skills set are you looking for?"
            className="lg:input sm:input-sm input-bordered input-primary lg:w-96 md:32  rounded-full"
          />
          <br />
          <div>
            <input
              type="text"
              placeholder="work E-mail"
              className="lg:input input-bordered input-primary lg:w-96 md:32 m-4   rounded-full"
            />
            <br></br>
            <input
              type="submit"
              className=" mx-2 my-2 py-2 px-4 btn bg-blue-500 text-white "
              value="Get Candidate"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetCandidateForm;
