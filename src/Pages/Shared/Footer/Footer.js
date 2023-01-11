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
    <div>
      <footer className="footer p-10 bg-white text-base-content">
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
        <div>
          <span className="footer-title">For Employers</span>
          <Link>Talent Pool</Link>
          <Link>Employer Events</Link>
          <Link>Client Success Cases</Link>
          <Link>Referral Program</Link>
        </div>

        <div>
          <span className="footer-title">For Candidates</span>
          <Link>How VanHack Works</Link>
          <Link>Find a Job</Link>
          <Link>Learning Hub</Link>
          <Link>VanHack Academy</Link>
          <Link>Events</Link>
        </div>
        <div>
          <span className="footer-title">Why VanHack</span>
          <Link>About</Link>
          <Link>Careers</Link>
        </div>
        <div>
          <span className="footer-title"> Resources</span>
          <Link>Employer Blog</Link>
          <Link>Candidate Blog</Link>
          <Link>Podcast</Link>
          <Link>Salary Guide</Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
