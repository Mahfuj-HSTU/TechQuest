import React from "react";
import { NavLink } from "react-router-dom";

const AllStackDevelopers = () => {
  return (
    <div className="font-sans">
      <div>
        <h2>The world is your talent pool</h2>
      </div>

      <div>
        <ul className="flex justify-between ">
          <li>
            <NavLink
              className="font-bold mb-4  text-[#646464] hover:text-[#0675CE]  hover:border-b-4 hover:border-[#0675CE]  "
              style={({ isActive }) => ({
                color: isActive ? "rgb(6, 117, 206)" : undefined,
                borderBottom: isActive
                  ? "5px solid rgb(6, 117, 206) "
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
              className="font-bold mb-4 text-[#646464]  hover:text-[#0675CE]  hover:border-b-4 hover:border-[#0675CE]  "
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
              className="font-bold  mb-4 text-[#646464]  hover:text-[#0675CE]  hover:border-b-4 hover:border-[#0675CE]  "
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
              className="font-bold text-[#646464]   hover:text-[#0675CE]  hover:border-b-4 hover:border-[#0675CE]  "
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
              className="font-bold mb-4 text-[#646464]  hover:text-[#0675CE]  hover:border-b-4 hover:border-[#0675CE]  "
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
      </div>
    </div>
  );
};

export default AllStackDevelopers;
