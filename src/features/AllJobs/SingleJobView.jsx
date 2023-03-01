import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchApplicationData } from "../ApplyJob/ApplyJobSlice";
import Loading from "../../Pages/Shared/Loading/Loading";
import { useState } from "react";
import RemoveJob from "./RemoveJob";
import { fetchRole } from "../../Hooks/Role/useRoleSlice";
import axios from "axios";
import { ServerLink } from "../../Hooks/useServerLink";
import { toast } from "react-hot-toast";
import { fetchSavedJob } from "../SavedJob/SavedJobSlice";
import ApplyJobModal from "../ApplyJob/ApplyJobModal";
import { fetchSingleJob } from "./SingleJobSlice";
// react icons
import { ImLocation } from "react-icons/im";
import { RiRemoteControlLine } from "react-icons/ri";

const SingleJobView = () => {
  const [isApplied, setApplied] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  // const { user: userInfo } = useContext(AuthContext);

  const id = useParams();
  // console.log(id)

  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  const { isLoading, error, applications } = data?.applicationReducer;
  const { jobDetails } = data.jobDetailsReducer;
  const role = data?.roleReducer?.role?.role;
  const userInfo = data?.roleReducer?.role;
  const savedJob = data?.savedJobReducer?.savedJobs;
  // console.log(jobDetails,jobDetails);

  const checkSavedJob = savedJob?.map(
    (job) => userInfo?.email === job?.email && job?.jobID === jobDetails?._id
  );

  const checkApplied = applications?.map(
    (application) =>
      // console.log(applied.job)
      userInfo?.email === application?.email && application?.job?._id === jobDetails?._id
  );

  useEffect(() => {
    // checking and storing if any job is saved
    for (let i of checkSavedJob) {
      if (i === true) {
        setIsSaved(i);
      }
    }

    // checking and storing if any job is applied
    for (let i of checkApplied) {
      // console.log(i);
      if (i === true) {
        setApplied(i);
      }
    }
  }, [checkApplied, checkSavedJob]);

  // console.log(applied);
  useEffect(() => {
    dispatch(fetchApplicationData());
    dispatch(fetchRole(userInfo?.email));
    dispatch(fetchSavedJob());
    dispatch(fetchSingleJob(id));
  }, [dispatch, id, userInfo?.email]);

  const {
    _id,
    openings,
    jobTitle,
    jobDescription,
    jobRequirements,
    jobResponsibilities,
    jobStatus,
    jobType,
    salary,
    salaryCurrency,
    experience,
    language,
    mustSkills,
    optionalSkills,
    allow,
  } = jobDetails;

  // storing saved job
  const handleSave = () => {
    const jobDetails = {
      jobID: _id,
      openings,
      jobTitle,
      jobDescription,
      jobRequirements,
      jobResponsibilities,
      jobStatus,
      jobType,
      salary,
      salaryCurrency,
      experience,
      language,
      mustSkills,
      optionalSkills,
      email: userInfo?.email,
    };
    if (!isSaved) {
      axios
        .post(`${ServerLink}/save-job`, jobDetails)
        .then((data) => {
          // console.log(data)
          if (data.status === 200) {
            toast.success("Job saved to your account.");
          }
        })
        .catch((e) => console.error("save job error => ", e));
    }
    setIsSaved(!isSaved);
  };

  //   const handleDeleteSaveJob = () =>{
  // 	console.log("clicked");
  //   }

  return (
    <div className="max-w-[1240px] mx-auto mt-24">
      {isLoading && <Loading />}
      {error && <div className="text-red-600">{error}</div>}
      {jobDetails && (
        <div className="m-20 text-left">
          {/* <div className='flex gap-5'> */}
          <h1 className="text-4xl font-semibold text-primary">{jobTitle}</h1>
          <div className="flex gap-3 my-3">
            <p className="border p-1 rounded-lg">
              <ImLocation className="inline" />
              {jobDetails.location}
            </p>
            <p className="border p-1 rounded-lg">
              <RiRemoteControlLine className="inline" /> {jobStatus}
            </p>
            <p className="border p-1 rounded-lg">{jobType}</p>
            <p className="border p-1 rounded-lg">
              {salary} {salaryCurrency}
            </p>
          </div>
          <hr className="w-auto my-5" />
          <div className="my-2">
            <p className="font-semibold inline mr-1">Must-have skills:</p>
            <small className=" rounded-3xl px-2 text-xs font-semibold bg-gray-200 ">
              {mustSkills}
            </small>
          </div>
          <div className="my-2">
            <p className="font-semibold inline mr-1">Nice-to-have Skills</p>
            <small className=" rounded-3xl px-2 text-xs font-semibold bg-gray-200">
              {optionalSkills}
            </small>
          </div>
          <div className="my-2">
            <p className="font-semibold inline">Language Required: </p>
            <small className=" rounded-3xl px-2 text-xs font-semibold bg-gray-200">
              {language}
            </small>
          </div>
          <div className="my-2">
            <p className="font-semibold inline">Experience: </p>
            <small className=" rounded-3xl px-2 text-xs font-semibold bg-gray-200">
              {experience}
            </small>
          </div>
          <p className="my-5 text-justify">{jobDescription}</p>
          <p className="font-bold">Responsibilities:</p>
          <ul className="my-5 ml-5">
            {
              jobResponsibilities
              // .map((jobRes, i) =>
              //     <li key={i}>* {jobRes}</li>
              // )
            }
          </ul>
          <p className="font-bold">Requirements:</p>
          <ul className="my-5 ml-5">
            {
              jobRequirements
              // .map((jobReq, i) =>
              //     <li key={i}>* {jobReq}</li>
              // )
            }
          </ul>

          <div>
            {/* if role is admin he can remove a job */}
            {role === "admin" ? (
              <RemoveJob
                id={_id}
                title={jobTitle}
                openings={openings}
                des={jobDescription}
              ></RemoveJob>
            ) : (
              <>
                {/* if role is jobSeeker he will be able to apply with some conditions */}
                {role === "jobSeeker" ? (
                  <>
                    {isApplied === true ? (
                      // if apply button is clicked or already applied then this paragraph will be displayed
                      <p className="text-white font-semibold bg-success rounded-lg w-fit px-3 py-4">
                        Your application is submitted successfully
                      </p>
                    ) : (
                      // if button is not clicked or applied before
                      <div className="flex gap-2">
                        {/* <button
                          onClick={() => handleApply()}
                          className="btn btn-primary hover:bg-info text-white"
                        >
                          Apply Now
                        </button> */}

                        <label
                          htmlFor="apply-form-modal"
                          className={allow? "btn btn-primary text-white" : "btn btn-disabled"}
                        >
                          Apply Now
                        </label>

                        {/* if user not applied then he can save this if he wants */}

                        {!isSaved ? (
                          <button
                            onClick={() => handleSave()}
                            className="btn btn-outline border-primary hover:bg-secondary text-primary hover:text-primary font-bold hover:border-primary"
                          >
                            Save
                          </button>
                        ) : (
                          <button
                            // onClick={() => handleDeleteSaveJob()}
                            className="btn btn-outline border-primary hover:bg-secondary text-primary hover:text-primary font-bold hover:border-primary"
                          >
                            Saved
                          </button>
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <h2 className="text-xl font-semibold mt-10 text-green-600">
                    Please Log in as a employee to apply the job
                  </h2>
                )}
              </>
            )}
          </div>

          <ApplyJobModal />
        </div>
      )}
    </div>
  );
};

export default SingleJobView;
