import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
<<<<<<< HEAD
      <div className="max-w-5xl mx-auto">
=======
      <div className="max-w-[1240px] mx-auto">
        <Navbar></Navbar>
>>>>>>> 85e9f2c7a6300d13773ab46b58427f50bdf16499
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
