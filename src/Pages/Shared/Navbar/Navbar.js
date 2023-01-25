import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

import useRecruiter from "../../../Hooks/useRecruiter";
import useJobSeeker from "../../../Hooks/useJobSeeker";

import SignUpModal from "../../SignUp/SignUpModal";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isRecruiter] = useRecruiter(user?.email);
  const [isJobSeeker] = useJobSeeker(user?.email);

  // console.log( user )

  const handleLogOut = () => {
    logOut().then().catch();
  };

  const menuItems = (
    <>
      <li className="font-semibold">
        <Link to="/">Features</Link>
      </li>
      <li className="font-semibold">
        <Link to="/myjobs">My Jobs</Link>
      </li>

      {user?.email ? (
        <>
          {isRecruiter && (
            <>
              <li className="font-medium">
                <Link to="/all-employers">All Employers</Link>
              </li>
              <li className="font-semibold">
                <Link to="/addjob">Add Job</Link>
              </li>
              <li className="font-semibold">
                <Link to="/MyJobPost">MyPost</Link>
              </li>
            </>
          )}
          {isJobSeeker && (
            <>
              <li className="font-semibold">
                <Link to="/all-jobs">All Jobs</Link>
              </li>
              <li className="font-semibold">
                <Link to="/courses">Courses</Link>
              </li>
            </>
          )}
          <li className="font-semibold">
            <button onClick={handleLogOut} className="btn-ghost">
              Log Out
            </button>
          </li>
        </>
      ) : (
        <>
          <li className="font-semibold">
            <Link to="/login">Login</Link>{" "}
          </li>
          <li className="font-semibold">
            <label htmlFor="sign-up-modal">Sign Up</label>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar fixed h-16 top-0 z-30 left-0 right-0 max-w-screen-xl mx-auto bg-slate-200 rounded-md">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            tabIndex={0}
            className="menu menu-compact dropdown-content p-2 shadow bg-gray-200 rounded-box w-52"
          >
            {menuItems}
          </u>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          {" "}
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
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
            TechQuest
          </span>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0 justify-end flex-nowrap">{menuItems}</ul>
      </div>
      <SignUpModal></SignUpModal>
    </div>
  );
};

export default Navbar;
