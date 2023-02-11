import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const AuthenticationLayout = () => {
  return (
    <div>
      <div className="mb-24">
        <Navbar />
      </div>
      <div className="max-w-[1240px] mx-auto">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default AuthenticationLayout;
