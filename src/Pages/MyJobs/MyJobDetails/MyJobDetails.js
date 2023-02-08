import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
// import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const MyJobDetails = ({job}) => {
    // const [applied, setApplied] = useState(false);
    
    // const job = useLoaderData();
    
    console.log(job)
    return (


        <>
         <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">{job.job.jobTitle }</h3>
                <p className="py-4">{job.job.jobDescription}</p>
            </div>
            </div>
        </>
//         <div>
//                 <div className="card w-full bg-slate-200  shadow-xl image-full card-compact card-bordered">
//         {/* <figure><img src="https://jobflare-wordpress-public.s3.amazonaws.com/wp-content/uploads/2020/08/Computer-Programmer-Header.png"/></figure> */}
//         <div className="card-body items-center text-center">
//             <h2 className="card-title text-3xl"> {job.job.jobTitle}</h2>
//             <p> Job Location: { job.job.jobStatus} <span> {job.job.location}</span></p> 
//             <p>Job Type: {job.job.jobType}</p>
//             <p>Required Skill: {job.job.mustSkills}</p>
//             <p>Nice to have : {job.job.optionalSkills}</p>
//             <p className="border rounded-3xl text-sm py-1 px-3">
//                     {job.job.experience}
//                   </p>
//             <p className='w-3/4 py-4'>{job.job.jobDescription}</p>
//             <div className="card-actions justify-end">
//             <Link to= '/all-jobs'> <button className="btn btn-secondary">Apply Another</button></Link>
//             </div>
//         </div>
// </div>
//         </div>
    );
};

export default MyJobDetails;