import React from "react";
import { useContext } from "react";
import { FaPowerOff } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const EditProfile = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then().catch();
  };
  return (
    <div className="navbar-end mt-2">
      {user?.email && (
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
            className="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-box w-56"
          >
            <li>
              <div className="flex items-center p-2">
                <img
                  src={user?.photoURL}
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
                <Link to="/my-account" className="text-start font-semibold">
                  {/* checking user has name or not */}
                  {user?.displayName}
                  <p>
                    <span className="text-xs hover:underline">
                      {user?.email}
                    </span>
                  </p>
                </Link>
              </div>
            </li>
            <li className="flex flex-col items-start">
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
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
