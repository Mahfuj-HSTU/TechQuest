import React from "react";
import { Outlet } from "react-router-dom";
import AllStackDevelopers from "../Pages/Home/AllStackDevelopers/AllStackDevelopers";

const Developers = () => {
  return (
    <div>
      <AllStackDevelopers />
      <Outlet />
    </div>
  );
};

export default Developers;
