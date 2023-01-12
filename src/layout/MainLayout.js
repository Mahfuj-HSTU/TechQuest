import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
