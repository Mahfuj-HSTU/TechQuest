import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AllJobsView = () => {
    const jobs = useSelector(state => state.jobsReducer.jobs);
    console.log(jobs);

    return (
        <div className='mt-20'>
            <h1 className='text-3xl font-semibold'>Find your dream job abroad or remote</h1>
            {jobs && jobs.map(job => {
                const { id,
                    jobTitle,
                    jobDescription,
                    jobStatus,
                    jobType,
                    location,
                    salary,
                    salaryCurrency,
                    experience,
                    mustSkills,
                    optionalSkills,
                    openings } = job;

                return (
                    <div key={id} className="text-left border rounded-lg mx-10 my-5 p-5 w-3/4 hover:shadow-lg">
                        {openings === 1 ? <small>{openings} position</small>
                            :
                            <small>{openings} positions</small>
                        }
                        <h1 className='text-xl font-semibold text-cyan-600'>{jobTitle}</h1>
                        <div className='flex flex-col md:flex-row justify-start  md:gap-0'>
                            <small className='m-1'>{location}</small>
                            <small className='m-1'>{jobStatus}</small>
                            <small className='m-1'>{jobType}</small>
                        </div>
                        <div className=''>
                            <small className='m-1'>{salary}</small>
                            <small className='m-1'>{salaryCurrency}</small>
                        </div>
                        <p className='my-2'>{jobDescription}</p>
                        {/* .slice(0,250) */}
                        <div className='flex gap-3 w-auto p-1 font-semibold text-gray-400'>
                            <p className='border rounded-3xl text-sm p-1 text-sky-800'>{mustSkills}</p>
                            <p className='border rounded-3xl text-sm p-1'>{optionalSkills}</p>
                            <p className='border rounded-3xl text-sm p-1'>{experience}</p>
                        </div>
                            <Link state={job} className='btn btn-info text-white hover:bg-white hover:text-black' to="/job-details">See Details</Link>
                    </div>)
            })}
        </div>
    );
};

export default AllJobsView;