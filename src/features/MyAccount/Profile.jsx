import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.roleReducer.role);

  return (
      <div className="flex-col flex gap-5 text-center md:text-left w-full mt-2 md:mx-5 pb-5 ">
        <div>
          <h1 className="text-2xl font-bold">Profile</h1>
        </div>
        <div className="mx-auto w-[90%]">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="bg-gray-200 px-2 py-5 rounded-lg w-[92%]">
              <span className="font-bold">Name</span> <span>{user?.name}</span>
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
  );
};

export default Profile;
