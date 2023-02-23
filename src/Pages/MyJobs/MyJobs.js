import React, { useContext, useState } from "react";
import "./MyJobs.css";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import MyjobModal from "./MyjobModal/MyjobModal";
import { ServerLink } from "../../Hooks/useServerLink";

const MyJobs = () => {
  const { user } = useContext(AuthContext);

  const [myjob, setMyjob] = useState(null);

  const url = `${ServerLink}/applications?email=${user?.email}`;

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

  return (
    <div className="mt-24 mb-16">
      <h3 className="lg:text-4xl md:text-3xl mb-5 font-semibold text-info">
        My Applied Jobs
      </h3>
      <div className=" gap-4 lg:w-full ">
        <div className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content ">
            {jobs.map((job,i) => (
              <div key={i}>
                <div className=" p-2 inline-grid gap-4 grid-cols-4 border-2 shadow-lg  m-8 w-full">
                  <div className=" text-2xl">{job?.job?.jobTitle}</div>
                  <div className="">{job?.job?.jobType}</div>
                  <div className="">{job?.job?.jobStatus}</div>

                  <button onClick={() => setMyjob(job)}>
                    {" "}
                    <label
                      htmlFor="my-drawer-4"
                      className="drawer-button btn btn-primary"
                    >
                      Open drawer
                    </label>
                  </button>
                  {/* <button onClick={ () => setMyjob( job ) }> <label htmlFor="my-drawer-4" className="btn btn-outline btn-info rounded-lg">details</label></button> */}
                </div>
              </div>
            ))}
            <label
              htmlFor="my-drawer-4"
              className="drawer-button btn btn-primary"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side w-full">
            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
            <ul className="menu p-4 w-2/3 bg-base-100 text-base-content">
              {myjob && (
                <MyjobModal
                  jobs={jobs}
                  myjob={myjob}
                  setMyjob={setMyjob}
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

// {/* <div className=" text-2xl">
// <button onClick={ () => setMyjob( job ) }> <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">
//   { job.job.jobTitle }</label></button></div> */}

// {/* <table className="table table-compact w-full border-2 shadow-lg">
// <thead className="text-center">
//   <tr>
//     <th>Sl No</th>
//     <th>Job Title</th>
//     <th>Job Type</th>
//     <th>Details</th>
//   </tr>
// </thead>
// <tbody>
//   {
//     jobs.map( ( job, i ) =>
//       <tr key={ user?._id } className='border-2'>
//         <td className='border-2'>{ i + 1 }</td>
//         <td className='border-2'>{ job.job.jobTitle }</td>
//         <td className='border-2'>{ job.job.jobType }</td>
//         <td className='border-2 text-center'>
//           <button onClick={ () => setMyjob( job ) }> <label htmlFor="my-modal-3" className="btn btn-outline btn-info rounded-lg">details</label></button>
//         </td>
//       </tr> )
//   }
// </tbody>
// </table> */}
