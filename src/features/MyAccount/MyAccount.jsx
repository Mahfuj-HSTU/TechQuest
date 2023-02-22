import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SavedJobView from "../SavedJob/SavedJobView";

const MyAccount = () => {
  const user = useSelector((state) => state.roleReducer.role);
  //   console.log(user);

  return (
    <div className="max-w-[1240px] mx-auto bg-gray-100 my-32 ">
      <div className="flex flex-col mt-5 p-5">
        <div className="flex bg-white items-center mt-5">
          <div className="m-3 bg-gray-100">
            <img className="w-52 p-2 rounded-lg" src={user?.photoUrl} alt="" />
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
          <div className="mx-auto w-[90%] md:w-[30%]">
            <div className=" flex flex-col whitespace-nowrap text-left font-semibold h-[92%] bg-gray-200 gap-5 m-3 rounded-lg w-[92%] md:mr-0 p-5">
              <Link>Profile</Link>
              <Link>Applied Jobs</Link>
              <Link to='/my-account/saved-jobs'>Saved Jobs</Link>
            </div>
          </div>
          <div className="flex-col flex gap-5 text-center md:text-left w-full mt-2 md:mx-5 pb-5 ">
            <div>
              <h1 className="text-2xl font-bold">Profile</h1>
            </div>
            <div className="mx-auto w-[90%]">
              <div className="flex flex-col md:flex-row gap-5">
                <div className="bg-gray-200 px-2 py-5 rounded-lg w-[92%]">
                  <span className="font-bold">Name</span>{" "}
                  <span>{user?.name}</span>
                  <br />
                  <span className="font-bold">Gender</span>
                </div>

                <div className="bg-gray-200 px-2 py-5 rounded-lg w-[92%]">
                  <span className="font-bold">Email</span>{" "}
                  <span>{user?.email}</span>
                  <p className="font-bold">Mobile</p>
                </div>
              </div>{" "}
              <br />
              <div className="flex flex-col md:flex-row gap-5 ">
                <div className="bg-gray-200 px-2 py-5 rounded-lg w-[92%]">
                  <p className="font-bold">Education</p>
                  <span className="font-bold">Institute</span>{" "}
                  <span>{user?.institute}</span>
                </div>

                <div className="bg-gray-200 px-2 py-5 rounded-lg w-[92%]">
                  <span className="font-bold">Address</span>{" "}
                  <span>{user?.address}</span>
                  <br />
                  <span className="font-bold">Zip Code</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SavedJobView />
    </div>
  );
};

export default MyAccount;
