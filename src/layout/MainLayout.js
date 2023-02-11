import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="mx-auto">
      <div className="mb-24">
        <Navbar />
      </div>
      <div className="mx-auto  ml-1 mr-1">
        <Outlet />
      </div>
      <div className="mx-auto mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
