import React from "react";
import { Outlet } from "react-router-dom";
import AllStackDevelopers from "../Pages/Home/AllStackDevelopers/AllStackDevelopers";

const Developers = () => {
  return (
    <div className="mb-20">
      <AllStackDevelopers />
      <Outlet />
    </div>
  );
};

export default Developers;
