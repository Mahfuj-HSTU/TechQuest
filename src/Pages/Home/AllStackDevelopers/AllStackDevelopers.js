import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BackendDeveloperCard from "./BackendDevelopers/BackendDeveloperCard/BackendDeveloperCard";
import BackendDevelopers from "./BackendDevelopers/BackendDevelopers";
import DevopsEngineers from "./DevopsEngineers/DevopsEngineers";
import FrontEndDevelopers from "./FrontEndDevelopers/FrontEndDevelopers";
import FullStackDevelopers from "./FullstackDevelopers/FullStackDevelopers";
import MobileDevelopers from "./MobileDevelopers/MobileDevelopers";

const AllStackDevelopers = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="font-sans">
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-center">
          The world is your talent pool
        </h2>
      </div>

      {/* <div>
        <ul className="grid gap-8 md:flex md:justify-between ">
          <li>
            <NavLink
              className="font-bold pb-3  text-[#646464] hover:text-[#0675CE]  hover:border-b-4 hover:border-[#0675CE]  "
              style={({ isActive }) => ({
                color: isActive ? "rgb(6, 117, 206)" : undefined,
                borderBottom: isActive
                  ? "5px solid rgb(6, 117, 206)"
                  : undefined,
              })}
              to="/forntend_developers"
            >
              {" "}
              FRONTEND DEVELOPERS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/backend_developers"
              className="font-bold pb-3 text-[#646464]  hover:text-[#0675CE]  hover:border-b-4 hover:border-[#0675CE]  "
              style={({ isActive }) => ({
                color: isActive ? "rgb(6, 117, 206)" : undefined,
                borderBottom: isActive
                  ? "5px solid rgb(6, 117, 206) "
                  : undefined,
              })}
            >
              {" "}
              BACKEND DEVELOPERS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/fullstack_developers"
              className="font-bold  pb-3 text-[#646464]  hover:text-[#0675CE]  hover:border-b-4 hover:border-[#0675CE]  "
              style={({ isActive }) => ({
                color: isActive ? "#0675CE" : undefined,
                borderBottom: isActive ? "5px solid #0675CE " : undefined,
              })}
            >
              {" "}
              FULLSTACK DEVELOPERS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mobile_developers"
              className="font-bold text-[#646464] pb-3   hover:text-[#0675CE]  hover:border-b-4 hover:border-[#0675CE]  "
              style={({ isActive }) => ({
                color: isActive ? "rgb(6, 117, 206)" : undefined,
                borderBottom: isActive
                  ? "5px solid rgb(6, 117, 206) "
                  : undefined,
              })}
            >
              {" "}
              MOBILE DEVELOPERS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/devops_engineers"
              className="font-bold pb-3 text-[#646464]  hover:text-[#0675CE]  hover:border-b-4 hover:border-[#0675CE]  "
              style={({ isActive }) => ({
                color: isActive ? "rgb(6, 117, 206)" : undefined,
                borderBottom: isActive
                  ? "5px solid rgb(6, 117, 206) "
                  : undefined,
              })}
            >
              {" "}
              DEVOPS ENGINEERS
            </NavLink>
          </li>
        </ul>
      </div> */}

      <div>
        <div className="tabs flex justify-between">
          <div
            onClick={() => setIndex(0)}
            className={
              index === 0
                ? " text-xl  font-bold pb-3 text-[#0675CE] border-b-4 border-[#0675CE]  hover:text-[#0675CE]  hover:border-b-4 hover:border-[#0675CE] "
                : " text-xl font-bold pb-3 text-[#646464]  hover:text-[#0675CE]  hover:border-b-4 hover:border-[#0675CE]"
            }
          >
            Frontend Developers
          </div>
          <div
            onClick={() => setIndex(1)}
            className={
              index === 1
                ? " text-xl font-bold pb-3 text-[#0675CE] border-b-4 border-[#0675CE]  hover:text-[#0675CE]  hover:border-b-4 hover:border-[#0675CE] "
                : " text-xl font-bold pb-3 text-[#646464]  hover:text-[#0675CE]  hover:border-b-4 hover:border-[#0675CE]"
            }
          >
            Backend Developers
          </div>
          <div
            onClick={() => setIndex(2)}
            className={
              index === 2
                ? " text-xl font-bold pb-3 text-[#0675CE] border-b-4 border-[#0675CE]  hover:text-[#0675CE]  hover:border-b-4 hover:border-[#0675CE] "
                : " text-xl font-bold pb-3 text-[#646464]  hover:text-[#0675CE]  hover:border-b-4 hover:border-[#0675CE]"
            }
          >
            Fullstack Developers
          </div>
          <div
            onClick={() => setIndex(3)}
            className={
              index === 3
                ? " text-xl font-bold pb-3 text-[#0675CE] border-b-4 border-[#0675CE]  hover:text-[#0675CE]  hover:border-b-4 hover:border-[#0675CE] "
                : " text-xl font-bold pb-3 text-[#646464]  hover:text-[#0675CE]  hover:border-b-4 hover:border-[#0675CE]"
            }
          >
            Mobile Developers
          </div>
          <div
            onClick={() => setIndex(4)}
            className={
              index === 4
                ? " text-xl font-bold pb-3 text-[#0675CE] border-b-4 border-[#0675CE]  hover:text-[#0675CE]  hover:border-b-4 hover:border-[#0675CE] "
                : " text-xl font-bold pb-3 text-[#646464]  hover:text-[#0675CE]  hover:border-b-4 hover:border-[#0675CE]"
            }
          >
            Devops Developers
          </div>
        </div>
        <div>
          <div className="" hidden={index !== 0}>
            <FrontEndDevelopers />
          </div>
          <div hidden={index !== 1}>
            <BackendDevelopers />
          </div>
          <div hidden={index !== 2}>
            <FullStackDevelopers />
          </div>
          <div hidden={index !== 3}>
            <MobileDevelopers />
          </div>
          <div hidden={index !== 4}>
            <DevopsEngineers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllStackDevelopers;
