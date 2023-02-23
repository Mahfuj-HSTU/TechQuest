import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const MyAccount = () => {
  const user = useSelector((state) => state.roleReducer.role);
  //   console.log(user);

  return (
    <div>
      <Navbar />
      <div className="mx-auto bg-gray-100 my-32 max-w-[1100px]">
        <div className="flex flex-col mt-5 p-5">
          <div className="flex bg-white items-center mt-5">
            <div className="m-3 bg-gray-100">
              <img
                className="w-52 p-2 rounded-lg"
                src={user?.photoUrl}
                alt=""
              />
            </div>
            <div className="p-2 rounded-lg text-left">
              <h1 className="text-3xl font-bold">{user?.name}</h1>
              <br />
              <span>
                <p>{user?.email}</p>
              </span>
            </div>
          </div>
          {/* profile section  */}
          <div className="flex flex-col md:flex-row justify-start mt-5 bg-white">
            <div className="w-[90%] md:w-[30%]">
              <div className=" flex flex-col whitespace-nowrap text-left font-semibold h-[92%] bg-gray-200 gap-5 m-3 rounded-lg md:mr-0 p-5">
                <Link to="/my-account/profile">Profile</Link>
                <Link>Applied Jobs</Link>
                <Link to="/my-account/saved-jobs">Saved Jobs</Link>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
