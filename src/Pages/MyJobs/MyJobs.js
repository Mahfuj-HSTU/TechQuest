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
    <div className="mt-24 mb-16 m">
      <h3 className="lg:text-4xl md:text-3xl mb-5 font-semibold text-info">
        My Applied Jobs
      </h3>
      <div className="mx-10">
        <div className="drawer drawer-end ">
          <input id="my-job-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content ">
            {jobs.map((job) => (
              <div key={job?._id}>
                <div className=" p-2 grid grid-cols-3 border shadow m-1 w-11/12 text-left ">
                  <label
                    onClick={() => setMyJob(job)}
                    htmlFor="my-job-drawer"
                    className="text-primary text-xl cursor-pointer"
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
