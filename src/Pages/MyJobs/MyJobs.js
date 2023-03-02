import React, { useContext, useState } from "react";
import "./MyJobs.css";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import MyjobModal from "./MyjobModal/MyjobModal";
import { ServerLink } from "../../Hooks/useServerLink";
import './MyModal.css'

const MyJobs = () => {
  const { user } = useContext(AuthContext);

  const [myJob, setMyJob] = useState(null);


  const url = `${ServerLink}/myjobs?email=${user?.email}`;


  const { data: jobs = [] } = useQuery({
    queryKey: ["jobs", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  // console.log(jobs);
  return (
    <div className="mt-2 mb-16 md:text-left w-full md:mx-5 pb-5 ">
      <h3 className="text-2xl font-bold mb-5">
        My Applied Jobs
      </h3>
      <div className="mx-10">
        <div className="drawer drawer-end ">
          <input id="my-job-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content ">
          <p className="text-green-700 font-bold text-lg text-left">Applied ({jobs.length})</p>
            {jobs.map((job) => (
              <div key={job?._id}>
                <div className="bg-gray-100 p-2 grid grid-cols-3 border shadow m-3 w-11/12 text-left ">
                  <label
                    onClick={() => setMyJob(job)}
                    htmlFor="my-job-drawer"
                    className="font-bold cursor-pointer"
                  >
                    {job?.job?.jobTitle}
                  </label>
                  <div className="">{job?.job?.jobType}</div>
                  <div className="">{job?.job?.jobStatus}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="drawer-side w-full  ">
            <label htmlFor="my-job-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-5/6 bg-base-100 text-base-content ">
              {myJob && (
                <MyjobModal
                key={jobs._id}
                  jobs={jobs}
                  myjob={myJob}
                  setMyjob={setMyJob}
                ></MyjobModal>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyJobs;
