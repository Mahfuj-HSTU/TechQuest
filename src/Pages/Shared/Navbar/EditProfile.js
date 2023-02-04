import React from "react";
import { useContext } from "react";
import { FaEdit, FaPowerOff } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";

const EditProfile = () => {
  const [theme, setTheme] = useState("cupcake");
  const { user, logOut } = useContext(AuthContext);
  // console.log( user )
  const handleLogOut = () => {
    logOut().then().catch();
  };

  const handleMode = () => {
    // console.log( 'clicked' );
    setTheme(theme === "light" ? "mytheme" : "light");
  };
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="navbar-end mr-5">
      {user?.email ? (
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="inline-flex cursor-pointer m-1">
            <div className="avatar">
              <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL} alt="" />
              </div>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow-lg bg-slate-200 rounded-box w-56"
          >
            <li>
              <div className="flex items-center p-2">
                <img
                  src={user?.photoURL}
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
                <div className="text-start font-semibold">
                  {/* checking user has name or not */}
                  {user?.displayName}
                  <p>
                    <span className="text-xs hover:underline">
                      {user?.email}
                    </span>
                  </p>
                </div>
              </div>
            </li>
            <li className="flex flex-col items-start">
              <Link
                to="/EditProfile"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <div className=" text-gray-500">
                  <FaEdit></FaEdit>
                </div>
                <label className="text-lg cursor-pointer">Edit Profile</label>
              </Link>
              <Link
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <div className=" text-gray-500">
                  <FaPowerOff></FaPowerOff>
                </div>
                <span className="text-lg" onClick={handleLogOut}>
                  Logout
                </span>
              </Link>
              <div className="">
                <input
                  onClick={handleMode}
                  type="checkbox"
                  className="toggle mx-auto"
                />
              </div>
            </li>
          </ul>
        </div>
      ) : (
        <div className="">
          <input
            onClick={handleMode}
            type="checkbox"
            className="toggle mx-auto"
          />
        </div>
      )}
    </div>
  );
};

export default EditProfile;
