import React from 'react';
import { IoIosPeople } from 'react-icons/io';
import { BsSticky } from 'react-icons/bs';

const MyjobModal = ( { myjob } ) => {
    const { jobType, jobTitle, jobDescription, jobStatus, location, mustSkills, optionalSkills, jobRequirements } = myjob.job;
    // console.log(myjob)
    return (
        <>
<div className="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">

    <div className="drawer-side">
   
    <label htmlFor="my-drawer-4" className="drawer-overlay text-2xl m-8 p-6 rounded-full"> Actively Recruiting</label>
  <div className="grid grid-cols-2 overflow-hidden">
        <div>
        <div className= 'animate m-8 p-2 rounded-lg'>
            <span> </span>
            <span> </span>
            <span> </span>
            <span> </span>
            <p className='text-primary-focus text-3xl'>{jobTitle}</p>
            </div>

            <p className='text-left text-gray-700 text-2xl mt-4 '>Job Activity</p>  
            <br/> 
            <div className='flex  border-8 border-r-slate-500 mt-1'><BsSticky className='mt-1'/> <span className='mx-2'>  15 candidates were screened for {jobTitle}</span></div>
            <div className='flex  border-8 border-r-slate-500 mt-1'><IoIosPeople className='mt-1'/> <span className='mx-4'>  350 candidates applied for the {jobTitle} </span></div>
            <div className=''>
          <h3 className='text-3xl underline-offset-8'> About The Job</h3>
          <p> <span className='text-amber-300'>Job Requirements</span>: {jobRequirements }</p>
        </div>
        </div>
        
        
        <div>

          <div className='m-8 shadow-lg bordered-8 text-center '>
            <h3  className='text-2xl'>About The Company</h3>
            <p>This company has already hired 1 Techquest</p>
            <p>More information on interview stage</p>
          </div>

          
          <p className='text-center text-green-900 text-xl'>Our Hiring Process</p>
          <ul className="steps steps-vertical lg:steps-vertical w-48 bordered border-4 shadow-lg bordered-lg text-center">
            <li className="step step-primary">Applied</li>
            <li className="step step-primary">Screening</li>
            <li className="step">1st round</li>
            <li className="step">2nd round</li>
            <li className="step">Final round</li>
            <li className="step">Interview</li>
            <li className="step">Reference Check</li>
        </ul>
    </div>

    </div>   
  </div>
  </div> 
 
</div>








            {/* <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal text-start">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold overline underline text-indigo-300">{ jobTitle } ({ jobType })</h3>
                    <p className="py-4 leading-3 text-amber-500">Mandatory skill: { mustSkills }</p>
                    <p className="py-4 leading-3">Other skills: { optionalSkills }</p>
                    <p className='py-4 leading-3'>{ jobStatus } { location }</p>
                    <p className="py-4 text-sm">job Requirements: { jobRequirements }</p>
                    <p className="py-4 text-sm ">{ jobDescription }</p>
                </div>
            </div> */}
        </>

    );
};

export default MyjobModal;
