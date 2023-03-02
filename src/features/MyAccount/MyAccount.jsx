import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Profile from "./Profile";

const MyAccount = () => {
  const user = useSelector((state) => state.roleReducer.role);
  // console.log(user);
  const [routeChanged, isRouteChanged] = useState(false);
  return (
    <div>
      <Navbar />
      <div className="mx-auto bg-secondary rounded-lg my-32 max-w-[1100px]">
        <div className="flex flex-col p-5">
          <div className="flex bg-white items-center mt-16 rounded-lg">
            <div className="m-5 bg-white shadow-lg rounded-lg -mt-10">
              <img
                className="w-40 h-44 p-2 rounded-lg"
                src={user?.photoUrl}
                alt="user img"
              />
            </div>
            <div className="p-2 rounded-lg text-left">
              <h1 className="text-3xl font-bold">{user?.name}</h1>
              <span className="text-xs">( {user?.role} )</span>
              <br />
              <span>
                <p>{user?.email}</p>
              </span>
            </div>
          </div>
          {/* profile section  */}
          <div className="flex flex-col md:flex-row justify-start mt-5 bg-white rounded-lg">
            <div
              className="w-[90%] md:w-[30%] py-3"
              onFocus={() => isRouteChanged(true)}
            >
              <div className=" flex flex-col whitespace-nowrap text-left font-semibold h-[92%] bg-gray-100 gap-5 m-3 rounded-lg md:mr-0 p-5">
                <Link to="/my-account/profile">Profile</Link>
                {user?.role === "jobSeeker" && <Link to='/my-account/applied-jobs' >Applied Jobs</Link>}
                {user?.role === "jobSeeker" && (
                  <Link to="/my-account/saved-jobs">Saved Jobs</Link>
                )}
              </div>
            </div>
            {routeChanged === false && <Profile />}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
