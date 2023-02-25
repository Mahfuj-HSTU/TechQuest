import React from 'react';
import { IoIosPeople } from 'react-icons/io';
import { BsSticky } from 'react-icons/bs';
import { ServerLink } from '../../../Hooks/useServerLink';

const MyjobModal = ( { myjob } ) => {
    const { jobType, jobTitle, jobDescription, jobStatus, location, mustSkills, optionalSkills, jobRequirements,_id } = myjob?.job;
    console.log(myjob)

    const handleDelete = myjob => {
      const agree = window.confirm( `Are sure, you want to delete: ${ jobTitle }` )
      if ( agree ) {
          fetch( `${ ServerLink }/applications/${ myjob?.job?._id }`, {
              method: 'DELETE'
          } )
              .then( res => res.json() )
              .then( data => {
                  // console.log( data )
                  if ( data.deletedCount > 0 ) {
                      alert( 'user deleted successfully.' )
                  }
              } )
      }
  }

    return (
        <>
        <hr></hr>
<div className="drawer drawer-end mx-auto">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">

    <div className="drawer-side overflow-x-hidden">
   
    {/* <label htmlFor="" className=" text-2xl m-8 p-6 rounded-full text-left text-info"> Actively Recruiting</label> */}
{/* <p className=" text-2xl m-8 p-6 rounded-full text-left text-info"> Actively Recruiting</p> */}
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
            <div className='flex  border-2 border-r-slate-500 mt-1'><BsSticky className='mt-1'/> <span className='mx-3 text-xl'> 15 candidates were screened for {jobTitle}</span></div>
            <div className='flex  border-2 border-r-slate-500 mt-1'><IoIosPeople className='mt-1'/> <span className='mx-2 text-xl'>350 candidates applied for the {jobTitle} </span></div>
            <div className='justify-start'>
          <h3 className='text-3xl underline-offset-8 mt-8'> About The Job</h3>
         <div className=' card-body bg-secondary bg-opacity-30 text-black text-justify shadow-2xl'>
            <p> <span className=' text-xl text-info'> Job Requirements</span>: {jobRequirements }</p>
          <p> <span className='text-xl text-info'> Mandatory Skill: </span> {mustSkills}</p>
          <p> <span className='text-xl text-info'> Nice to have Skill: </span> {optionalSkills}</p>
          <p> <span className='text-xl text-info'> Location: </span> {location}</p>
          <p> <span className='text-xl text-info'> Job Type: </span> {jobStatus}</p>
         </div>
        </div>
        {/* <button className="btn btn-warning mt-2" >Delete The Job</button> */}
        <button onClick={ () => handleDelete( myjob ) } className='btn btn-outline btn-error rounded-lg mt-3'>Delete</button>
        </div>
        
        
        <div>

          <div className='m-8 shadow-lg bordered-8 text-center '>
            <h3  className='text-2xl'>About The Company</h3>
            <p>This company has already hired 1 Techquest</p>
            <p>More information on interview stage</p>
          </div>

          
          <p className='text-center text-green-900 text-xl'>Our Hiring Process</p>
          <ul className="steps steps-vertical lg:steps-vertical w-80 bordered border-4 shadow-lg bordered-lg text-center m-4 p-4">
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
  </>

    );
};

export default MyjobModal;
