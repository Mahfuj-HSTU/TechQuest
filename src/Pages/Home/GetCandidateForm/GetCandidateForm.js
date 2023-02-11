import React from "react";
// import "./GetCandidateForm.css";

const GetCandidateForm = () => {
  return (
    <div
      // data-aos="fade-up"
      className="bg-primary mt-12 p-12 lg:h-96  lg:flex md:flex shadow-lg"
    >
      <div className="col-75 justify-center items-center mt-14  md:w-full  responsive1">
        <h1 className="lg:text-4xl md:text-3xl font-semibold text-white mx-auto">
          We have the tech talent
          <br />
          you're looking for
        </h1>
        <br />
        <p className="lg:text-xl text-white">
          Search our talent pool of highly qualified candidates
        </p>
      </div>
      <div className="md:w-full">
        <form className=" flex flex-col">
          <input
            type="text"
            placeholder="what skills set are you looking for?"
            className="input rounded-full"
          />
          <br />
          <br />
          <div className="rounded-full flex justify-between bg-white">
            <div className="">
              <input
                type="text"
                placeholder="work E-mail"
                className="input  bg-transparent"
              />
            </div>
            <div className="">
              <input
                type="submit"
                className="rounded-full btn bg-black text-white "
                value="Get Candidate"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetCandidateForm;
