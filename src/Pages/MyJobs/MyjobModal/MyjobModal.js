import React from 'react';

const MyjobModal = ( { myjob } ) => {
    const { jobType, jobTitle, jobDescription, jobStatus, location, mustSkills, optionalSkills, jobRequirements } = myjob.job;
    // console.log(myjob)
    return (
        <>


            <div className="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    
    <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Close drawer</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold overline underline text-indigo-300">{ jobTitle } ({ jobType })</h3>
                    <p className="py-4 leading-3 text-amber-500">Mandatory skill: { mustSkills }</p>
                    <p className="py-4 leading-3">Other skills: { optionalSkills }</p>
                    <p className='py-4 leading-3'>{ jobStatus } { location }</p>
                    <p className="py-4 text-sm">job Requirements: { jobRequirements }</p>
                    <p className="py-4 text-sm ">{ jobDescription }</p>
    </ul>
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
