import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const RecruiterLayout = () => {
  return (
    <div>
      <div className="mb-20">
        <Navbar />
      </div>
      <div className="max-w-[1240px] mx-auto">
      <Outlet />
      </div>
    </div>
  );
};

export default RecruiterLayout;
