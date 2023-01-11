import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { TfiYoutube } from "react-icons/tfi";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import img1 from "../../../assets/footer img 1.webp";
import img2 from "../../../assets/footer img 2.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mx-5">
      <footer className="footer p-10 bg-white text-left">
        <div className="w-52 text-left">
          <p className="text-xl font-bold">Connecting cultures through code</p>
          <div className="text-xl flex flex-row gap-6 my-3">
            <AiFillLinkedin />
            <TfiYoutube />
            <BsInstagram />
            <FaFacebookSquare />
          </div>
          <div className="w-24 flex">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
          </div>
        </div>
        <div className=" text-slate-400">
          <span className="text-black font-semibold">For Employers</span>
          <Link>Talent Pool</Link>
          <Link>Employer Events</Link>
          <Link>Client Success Cases</Link>
          <Link>Referral Program</Link>
        </div>

        <div className=" text-slate-400">
          <span className="text-black font-semibold">For Candidates</span>
          <Link>How VanHack Works</Link>
          <Link>Find a Job</Link>
          <Link>Learning Hub</Link>
          <Link>VanHack Academy</Link>
          <Link>Events</Link>
        </div>
        <div className=" text-slate-400">
          <span className="text-black font-semibold">Why VanHack</span>
          <Link>About</Link>
          <Link>Careers</Link>
        </div>
        <div className=" text-slate-400">
          <span className="text-black font-semibold"> Resources</span>
          <Link>Employer Blog</Link>
          <Link>Candidate Blog</Link>
          <Link>Podcast</Link>
          <Link>Salary Guide</Link>
        </div>
      </footer>
      <div>
        <div className="border border-b-gray-200 mb-5 "></div>
        <div className="flex flex-col-reverse md:flex-row text-left mb-5">
          <div className=" md:basis-1/2 flex-1 ">
            <p>&copy; TechQuest 2023 Technologies Inc.</p>
          </div>
          <div className="mb-2">
            <Link className="mr-6">Terms of Services</Link>
            <Link>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
