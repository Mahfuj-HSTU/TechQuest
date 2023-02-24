import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { TfiYoutube } from "react-icons/tfi";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import img1 from "../../../assets/footer img/footer img 1.webp";
import img2 from "../../../assets/footer img/footer img 2.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="shadow-lg p-5 border">
      <footer className="footer p-2  rounded-md text-left">
        <div className="w-52 text-left">
          <p className="text-xl font-bold">Connecting Cultures Through Codes</p>
          <div className="text-xl flex flex-row gap-6 my-3">
            <AiFillLinkedin />
            <TfiYoutube />
            <BsInstagram />
            <FaFacebookSquare />
          </div>
          <div className="w-24 flex items-center">
            <img src={ img1 } alt="" />
            <img className="w-20 h-20" src={ img2 } alt="" />
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
          <Link>How TechQuest Works</Link>
          <Link>Find a Job</Link>
          <Link>Learning Hub</Link>
          <Link>TechQuest Academy</Link>
          <Link>Events</Link>
        </div>
        <div className=" text-slate-400">
          <span className="text-black font-semibold">Why TechQuest</span>
          <Link to="/about">About</Link>
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
        <div className="border border-b-gray-400 my-5 "></div>
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
