import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const RecruiterLayout = () => {

  return (
    <div>
      <div className=" mb-20">
        <Navbar />
      </div>
      <div className="max-w-[1240px] mx-auto">
        <Outlet />
      </div>

      {/* <div className="drawer drawer-end">
        <input id="my-drawer-6" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <!-- Page content here -->
          <Outlet />
          <label htmlFor="my-drawer-6" className="drawer-button btn btn-primary">Open drawer</label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-6" className="drawer-overlay"></label>
          <ul className="menu w-80 bg-base-100 text-base-content">
            <div className=" bg-primary flex justify-between p-3 mb-2">
              <button onClick={() => handleNotification(user?.email)} className="text-white">Clear All</button>
              <label htmlFor="my-drawer-6" className="text-white text-xl font-semibold drawer-overlay cursor-pointer">X</label>
            </div>
            {
              Applicants.length !== 0 && (
                <>
                  {
                    Applicants.map(Applicant => <li key={Applicant._id}>
                      <div className=" px-4 dark:bg-gray-900 dark:text-gray-100 grid justify-center lg:justify-start md:justify-start mb-2">
                        <div className="flex flex-col md:flex-row">
                          <img src={Applicant.photoUrl} alt="" className="self-center flex-shrink-0 w-12 h-12 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
                          <div className="flex flex-col ml-2">
                            <h4 className=" font-semibold text-center md:text-left">{Applicant.name}</h4>
                            <p className="dark:text-gray-400">Applied for your job</p>
                          </div>
                        </div>
                      </div>
                    </li>)
                  }
                </>
              )
            }
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default RecruiterLayout;
