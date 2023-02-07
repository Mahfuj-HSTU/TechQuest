import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const RecruiterLayout = () => {
  return (
    <div>
      <div className="mb-20">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default RecruiterLayout;
