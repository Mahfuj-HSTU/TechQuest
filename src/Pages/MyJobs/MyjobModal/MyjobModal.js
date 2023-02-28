import React, { useState } from "react";
import { IoIosPeople } from "react-icons/io";
import { BsSticky } from "react-icons/bs";
import { FaBusinessTime } from "react-icons/fa";
import { ServerLink } from "../../../Hooks/useServerLink";


const MyjobModal = ({ myjob }) => {
  const [deleting ,setDeleting] = useState(null);
  const {job } = myjob;
  const {
    jobTitle,
    jobDescription,
    jobStatus,
    location,
    mustSkills,
    optionalSkills,
    jobRequirements,
    _id,
  } = job;
  // console.log(job,"added job");
  console.log(myjob);



  const handleDelete = myjob => {
// console.log(job,"deleted job");
    const agree = window.confirm(`Are sure, you want to delete: ${jobTitle}`);
    if (agree) {
      fetch(`${ServerLink}/applications/${myjob._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
        console.log( data, 'deleted data' )
          if (data.deletedCount > 0) {
            alert("user deleted successfully.");
          }
        });
    }
  };

  return (
    <>
      <hr></hr>
      <div className="drawer drawer-end mx-auto">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="drawer-side overflow-x-hidden">
            <div className="grid grid-cols-2 overflow-hidden">
              <div>
                <div className="animate m-8 p-2 rounded-lg">
             
                  <p className="text-primary-focus text-2xl">{jobTitle}</p>
                </div>

                <div className="m-8 shadow-lg bordered-8 text-center ">
                  <h3 className="text-2xl">About The Company</h3>
                  <p>This company has already hired 1 Techquest</p>
                  <p>More information on interview stage</p>
                </div>
                <p className="text-left text-gray-700 text-2xl mt-4 ">
                  Job Activity
                </p>
                <br />
                <div className="flex  border-2 border-r-slate-500 mt-1">
                  <BsSticky className="mt-1" />{" "}
                  <span className="mx-3 text-xl">
                    {" "}
                    15 candidates were screened for {jobTitle}
                  </span>
                </div>
                <div className="flex  border-2 border-r-slate-500 mt-1">
                  <IoIosPeople className="mt-1" />{" "}
                  <span className="mx-2 text-xl">
                    350 candidates applied for the {jobTitle}{" "}
                  </span>
                </div>
                <div className="justify-start">
                  <div className="flex mx-auto border-2 shadow-2xl mt-2 p-4">
                    <FaBusinessTime className="mt-2 " />{" "}
                    <span className="mx-3 text-2xl">About The Job</span>
                  </div>
                  <div className=" card-body bg-secondary bg-opacity-30 text-black text-justify shadow-2xl">
                    <p>
                      {" "}
                      <span className=" text-xl text-gray">
                        Requirements
                      </span>: {jobRequirements}
                    </p>
                    <p>
                      {" "}
                      <span className="text-xl text-gray">
                        {" "}
                        Mandatory{" "}
                      </span>{" "}
                      {mustSkills}
                    </p>
                    <p>
                      {" "}
                      <span className="text-xl text-gray"> Optional </span>{" "}
                      {optionalSkills}
                    </p>
                    <p>
                      {" "}
                      <span className="text-xl text-gray">
                        {" "}
                        Location:{" "}
                      </span>{" "}
                      {location}
                    </p>
                    <p>
                      {" "}
                      <span className="text-xl text-gray">
                        {" "}
                        Job Type:{" "}
                      </span>{" "}
                      {jobStatus}
                    </p>
                    <p>
                      {" "}
                      <span className="text-xl text-gray">
                        {" "}
                        Applied Date{" "}
                      </span>{" "}
                      2023-02-26T17:51:22.718Z
                    </p>
                  </div>
                </div>
              
              </div>

              <div>
                <p className="text-center text-green-900 text-xl">
                  Our Hiring Process
                </p>
                <ul className="steps steps-vertical lg:steps-vertical w-80 bordered border-4 shadow-lg bordered-lg text-center m-4 p-4">
                  <li className="step step-primary">Applied</li>
                  <li className="step step-primary">Screening</li>
                  <li className="step">1st round</li>
                  <li className="step">2nd round</li>
                  <li className="step">Final round</li>
                  <li className="step">Interview</li>
                  <li className="step">Reference Check</li>
                </ul>
                <button
                  onClick={() => handleDelete(myjob)}
                  className="btn btn-outline btn-error rounded-lg mb-8 "
                >
                  Withdraw My Application
                
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyjobModal;
