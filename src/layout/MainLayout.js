import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="mx-auto">
      <div className="mb-10">
        <Navbar />
      </div>
      <div className="mx-auto">
        <Outlet />
      </div>
      <div className="mx-auto mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
