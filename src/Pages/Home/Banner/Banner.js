import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import animation from "../../../assets/Animation2/animation2.json";
import Circle from "../../../assets/Animation/Circle/Circle";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllJobs } from "../../../features/AllJobs/AllJobsSlice";
import { fetchAllUsers } from "../../../features/AllUsers/AllUsersSlice";
import "./Banner.css";

const Banner = () => {
  const [ startHiring, setStartHiring ] = useState( true );
  const [ getAJob, setGetAJob ] = useState( false );
  const jobs = useSelector( ( state ) => state.jobsReducer.jobs );
  const users = useSelector( ( state ) => state.usersReducer.users );
  const [ jobSearch, setJobSearch ] = useState( '' )
  const [ employeeSearch, setEmployeeSearch ] = useState( '' )
  const dispatch = useDispatch();

  // console.log( users );
  useEffect( () => {
    dispatch( fetchAllJobs() );
    dispatch( fetchAllUsers() );
  }, [ dispatch ] );

  // filter jobSeeker
  const jobSeekers = users.filter(
    user => {
      return ( user.role === 'jobSeeker' );
    }
  );

  const handleStartHiring = () => {
    setStartHiring( true );
    setGetAJob( false );
  };

  const handleGetAJob = () => {
    setGetAJob( true );
    setStartHiring( false );
  };

  const handleJobSearch = ( e ) => {
    e.preventDefault();
    const form = e.target;
    const search = form.search.value;
    // console.log( search );
    setJobSearch( search )
  }

  // filter jobs by search
  const filteredJobSearch = jobs.filter(
    job => {
      return (
        job.jobTitle.toLowerCase().includes( jobSearch.toLowerCase() ) ||
        job.jobType.toLowerCase().includes( jobSearch.toLowerCase() ) ||
        job.location.toLowerCase().includes( jobSearch.toLowerCase() ) ||
        job.jobStatus.toLowerCase().includes( jobSearch.toLowerCase() )
      );
    }
  );

  const handleEmployeeSearch = ( e ) => {
    e.preventDefault();
    const form = e.target;
    const search = form.search.value;
    setEmployeeSearch( search )
  }

  // filter employee by search
  const filteredEmployeeSearch = jobSeekers?.filter(
    jobSeeker => {
      return (
        jobSeeker?.skills?.toLowerCase().includes( employeeSearch.toLowerCase() ) ||
        jobSeeker?.title?.toLowerCase().includes( employeeSearch.toLowerCase() )
      );
    }
  );

  return (
    // from-violet-600  to-[#0675CE]
    // dividing into two part by grid 2 col
    <div className="grid grid-cols-1 mt-16 justify-items-center md:grid-cols-2 px-4 md:px-8 rounded-b-md bg-gradient-to-r

    from-info  to-primary
    shadow-lg">
      {/* left side of the banner // from-[#7209B7] */ }
      <div className="flex flex-col mt-20 md:t-0 gap-5 mx-5 top-0">
        <div className="tabs gap-5 mb-5">
          <p
            onClick={ handleStartHiring }
            className={
              startHiring
                ? "rounded pb-2 text-white font-semibold border-b-4 border-gray-400 cursor-pointer"
                : "rounded pb-2 text-white font-semibold border-b-4 hover:border-b-4 hover:border-gray-400 cursor-pointer"
            }
          >
            Start Hiring
          </p>
          <p
            onClick={ handleGetAJob }
            className={
              getAJob
                ? "rounded pb-2 text-white font-semibold border-b-4 border-gray-400 cursor-pointer"
                : "rounded pb-2 text-white font-semibold border-b-4 hover:border-b-4 hover:border-gray-400 cursor-pointer"
            }
          >
            Get A Job
          </p>
        </div>
        { startHiring && (
          <div className="text-white flex flex-col gap-4 items-start">
            <h2 className="text-3xl text-left font-bold tracking-tight text-white sm:text-4xl">
              Hire Skillful
            </h2>
            <div>
              <TypeAnimation
                className="text-4xl font-bold tracking-tight text-white text-left whitespace-nowrap"
                sequence={ [
                  "Frontend Developers",
                  1000,
                  "Backend Developers",
                  1000,
                  "Full Stack Engineers",
                  1000,
                  "Game Developers",
                  1000,
                  "Q.A Specialists",
                  1000,
                  "UI/UX Designers",
                  1000,
                ] }
                style={ { fontSize: "2em" } }
                speed={ 1 }
                wrapper={ "p" }
                repeat={ Infinity }
                omitDeletionAnimation={ true }
              />
            </div>
            <p className="whitespace-nowrap mr-10">
              Get your first 10 candidates in 48 hours!
            </p>
            <form onSubmit={ handleEmployeeSearch } className="flex flex-col text-black">
              <input id="inputID" type="text" placeholder="Search For Skilled Professionals" name='search' className="input input-bordered lg:max-w-2xl sm:max-w-lg rounded-xl sm:mb-5 py-9 w-96" />
              {/* <input className="btn btn-primary rounded-xl " type="submit" value="Submit" /> */ }
              { employeeSearch.length !== 0 &&
                <ul className="bg-white -mt-4 text-start rounded-lg">
                  {
                    filteredEmployeeSearch.map( employee => <li className="px-3 py-2 m-2 hover:bg-slate-300 rounded-lg ">
                      <Link to={ `` }>{ employee.name }</Link>
                    </li> )
                  }
                </ul> }
            </form>
          </div>
        ) }
        { getAJob && (
          <div className="text-white flex flex-col gap-4 items-start w-96 mb-24">
            <p className="text-4xl text-left font-bold leading-normal">
              Find your dream Tech job in Canada, the US & Europe
            </p>
            <small className="text-lg">Remote & International Positions</small>
            <form onSubmit={ handleJobSearch } className="flex flex-col text-black">
              <input type="text" placeholder="Find Your Dream Job" name='search' className="input input-bordered lg:max-w-2xl sm:max-w-lg rounded-xl sm:mb-5 py-9 w-96" />
              { jobSearch.length !== 0 &&
                <ul className="bg-white -mt-4 text-start rounded-lg">
                  {
                    filteredJobSearch.map( job => <li className="px-3 py-2 m-2 hover:bg-slate-300 rounded-lg ">
                      <Link to={ `/job-details/${ job._id }` }>{ job.jobTitle }</Link>
                    </li> )
                  }
                </ul> }
            </form>
          </div>
        ) }
      </div>
      {/* right side of the banner  */ }
      { getAJob && (
        <div>
          <Circle />
        </div>
      ) }
      { startHiring && (
        <div className="">
          <Lottie animationData={ animation } className="h-[600px]"></Lottie>
        </div>
      ) }
    </div>
  );
};

export default Banner;
