import React from 'react';

const MyjobModal = ( { myjob } ) => {
    const { jobType, jobTitle, jobDescription, jobStatus, location, mustSkills, optionalSkills, jobRequirements } = myjob.job;
    // console.log(myjob)
    return (
        <>
<div className="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">

    <div className="drawer-side">
   
    <label htmlFor="my-drawer-4" className="drawer-overlay "> Actively Recruiting</label>
  <div className="grid grid-cols-2">
        <div>
            <p className='text-primary-focus text-3xl'>{jobTitle}</p>
            <br/>
            <p className='text-left text-lg text-black'>Job Activity</p>   
            <p>350 candidates applied for the {jobTitle} </p>
            <p>15 candidates were screened for {jobTitle}</p>  
        </div>
        
        <div><ul className="steps steps-vertical lg:steps-horizontal w-96 bordered border-4 shadow-lg bordered-lg">
  <li className="step step-primary">Applied</li>
  <li className="step step-primary">Screening</li>
  <li className="step">Job Task</li>
  <li className="step">Interview</li>
</ul></div>
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
