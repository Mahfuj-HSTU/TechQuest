import React from "react";
import { Outlet } from "react-router-dom";

const RecruiterLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default RecruiterLayout;
