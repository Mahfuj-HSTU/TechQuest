import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="max-w-[1240px] mx-auto">
        <Navbar></Navbar>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
