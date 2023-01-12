import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
