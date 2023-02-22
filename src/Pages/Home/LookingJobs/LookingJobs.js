import React from "react";
import skipLogo from "../../../assets/brandLogo/skip.svg";
import booking from "../../../assets/brandLogo/booking.svg";
import dapper from "../../../assets/brandLogo/dapper.svg";
import deloitte from "../../../assets/brandLogo/deloitte.svg";
import brex from "../../../assets/brandLogo/brex.svg";
import zalando from "../../../assets/brandLogo/zalando.svg";
import { Link } from "react-router-dom";

const LookingJobs = () => {
  return (
    <div data-aos="fade-up" className="mx-10 mt-20">
      <h1 className=" text-2xl font-semibold text-info">
        Looking for tech jobs in Canada, the US or Europe?
      </h1>
      <Link to='/auth/login' className="mt-8 rounded-3xl btn btn-outline font-semibold text-accent hover:bg-accent">
        Apply for jobs now
      </Link>
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:grid-cols-7 justify-items-center my-14"> */ }
      <div className="lg:flex flex-col md:flex-row flex-wrap gap-4 justify-items-center justify-center my-14 hidden ">
        <div>
          <h3 className=" font-bold text-md whitespace-nowrap">Trusted <span className="bg-blue-300 p-1 rounded-md ">by 600+</span> companies</h3>
        </div>
        <div className="flex justify-center">
          <img src={ skipLogo } alt="" />
        </div>
        <div className="flex justify-center">
          <img src={ booking } alt="" />
        </div>
        <div className="flex justify-center">
          <img src={ dapper } alt="" />
        </div>
        <div className="flex justify-center">
          <img src={ deloitte } alt="" />
        </div>
        <div className="flex justify-center">
          <img src={ brex } alt="" />
        </div>
        <div className="flex justify-center">
          <img src={ zalando } alt="" />
        </div>
      </div>
    </div>
  );
};

export default LookingJobs;
