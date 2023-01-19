import React from 'react';
import { useLocation } from 'react-router';
import { ImLocation } from 'react-icons/im';
import { RiRemoteControlLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const SingleJobView = () => {
    const location = useLocation();
    const job = location.state;
    const { jobTitle, jobDescription, jobRequirements, jobResponsibilities, jobStatus, jobType, salary, salaryCurrency, experience, language, mustSkills, optionalSkills } = job;
    console.log(job);
    return (<div>
        {job && <div className='m-20 text-left'>
            <h1 className='text-4xl font-semibold text-cyan-600'>{jobTitle}</h1>
            <div className='flex gap-3 my-3'>
                <p className='border p-1 rounded-lg'><ImLocation className='inline' />{job.location}</p>
                <p className='border p-1 rounded-lg'><RiRemoteControlLine className='inline' /> {jobStatus}</p>
                <p className='border p-1 rounded-lg'>{jobType}</p>
                <p className='border p-1 rounded-lg'>{salary} {salaryCurrency}</p>
            </div>
            <hr className='w-auto my-5' />
            <div className='my-2'>
                <p className='font-semibold inline mr-1'>Must-have skills:</p>
                <small className=' rounded-3xl px-2 text-xs font-semibold bg-gray-200 '>{mustSkills}</small>
            </div>
            <div className='my-2'>
                <p className='font-semibold inline mr-1'>Nice-to-have Skills</p>
                <small className=' rounded-3xl px-2 text-xs font-semibold bg-gray-200'>{optionalSkills}</small>
            </div>
            <div className='my-2'>
                <p className='font-semibold inline'>Language Required: </p>
                <small className=' rounded-3xl px-2 text-xs font-semibold bg-gray-200'>{language}</small>
            </div>
            <div className='my-2'>
                <p className='font-semibold inline'>Experience: </p>
                <small className=' rounded-3xl px-2 text-xs font-semibold bg-gray-200'>{experience}</small>
            </div>
            <p className='my-5 text-justify'>{jobDescription}</p>
            <p className='font-bold'>Responsibilities:</p>
            <ul className='my-5 ml-5'>
                {
                    jobResponsibilities.map((jobRes, i) =>
                        <li key={i}>* {jobRes}</li>
                    )
                }
            </ul>
            <p className='font-bold'>Requirements:</p>
            <ul className='my-5 ml-5'>
                {
                    jobRequirements.map((jobReq, i) =>
                        <li key={i}>* {jobReq}</li>
                    )}
            </ul>

            <div>
                <Link to='/' className='btn'>Apply Now</Link>
            </div>
        </div>}
    </div>
    );
};

export default SingleJobView;