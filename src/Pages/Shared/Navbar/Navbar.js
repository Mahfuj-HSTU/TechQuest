import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import SignUpModal from "../../SignUp/SignUpModal";
import EditProfile from "./EditProfile";
import { useDispatch, useSelector } from "react-redux";
import { fetchRole } from "../../../Hooks/Role/useRoleSlice";
import { useEffect } from "react";
import Notification from "./Notification";

const Navbar = () => {
  const { user } = useContext( AuthContext );
  const role = useSelector( ( state ) => state.roleReducer.role.role );
  const admin = "admin";
  const recruiter = "recruiter";
  const jobSeeker = "jobSeeker";
  const dispatch = useDispatch();
  // console.log( role )

  useEffect( () => {
    user?.email && dispatch( fetchRole( user?.email ) );
  }, [ dispatch, user?.email ] );

  const menuItems = (
    <>
      <li className="font-semibold">
        <Link to="/">Features</Link>
        <Link to="/all-jobs">All Jobs</Link>
        <Link to="/about">About Us</Link>
        <Link to="/blogs">Blogs</Link>
      </li>
      { user?.email ? (
        <>
          { role === admin && (
            <>
              <li className="font-medium">
                <Link to="admin/courses">Courses</Link>
                <Link to="admin/users">All Users</Link>
              </li>
            </>

          ) }

          { role === recruiter && (

            <>
              <li className="font-medium">
                <Link to="/recruiter/all-job-seekers">All Job Seekers</Link>
                <Link to="/recruiter/add-job">Add Job</Link>
                <Link to="/recruiter/MyJobPost">MyPost</Link>
              </li>
            </>

          ) }

          { role === jobSeeker && (

            <>
              <li className="font-semibold">
                <Link to="/job-seeker/myjobs">My Jobs</Link>
                <Link to="/job-seeker/courses">Courses</Link>
              </li>
            </>
          ) }
        </>
      ) : (
        <>
          <li className="font-semibold">
            <Link to="/auth/login">Login</Link>
          </li>
          <li className="font-semibold">
            <label htmlFor="sign-up-modal" className="bg-primary rounded-full px-4 text-white">Get Started</label>
          </li>
        </>
      ) }
    </>
  );

  return (
    <div>
      <div className="navbar justify-evenly shadow-lg bg-white fixed h-20 top-0 z-30 left-0 right-0 backdrop-blur-lg rounded-md tracking-tighter mx-auto">
        <div className="">
          <div className="dropdown">
            <label tabIndex={ 0 } className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <u
              tabIndex={ 0 }
              className="menu menu-compact dropdown-content p-2 shadow bg-gray-200 rounded-box w-52"
            >
              { menuItems }
            </u>
          </div>
          <Link to="/" className="btn btn-ghost">
            <svg
              className="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-1 text-xl font-bold tracking-wide text-gray-800 uppercase">
              TechQuest
            </span>
          </Link>
        </div>
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal p-0 justify-end flex-nowrap">
            { menuItems }
          </ul>
        </div>
        { user?.email && <div className="">
          <div className="flex justify-center">
            <Notification></Notification>
            <EditProfile></EditProfile>
          </div>
        </div>}
      </div>
      <SignUpModal></SignUpModal>
    </div>
  );
};

export default Navbar;