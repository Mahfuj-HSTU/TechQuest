import React, { useContext } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const JobPostCard = ({ jobPost }) => {
    // console.log(jobPost)
    const { jobDescription, jobTitle, location, jobType, jobStatus } = jobPost;
    const { user } = useContext(AuthContext);
    return (
        <div className="container flex flex-col w-full  p-6 mx-auto divide-y rounded-md divide-gray-700 ">
            <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                    <div>
                        {/* <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" /> */}
                        <h1 className='text-2xl font-semibold text-info'>{jobTitle}</h1>
                    </div>
                    {/* <div>
                        <h4 className="font-bold">Leroy Jenkins</h4>
                        <span className="text-xs text-gray-400">{user?.email}</span>
                    </div> */}
                </div>
                <div>
                    <button className='text-2xl'><AiFillDelete></AiFillDelete></button>

                </div>
            </div>
            <div className="p-4 space-y-2 text-sm ">
                <div className=' text-sm font-semibold text-gray-400'>
                    <span>Location: {location}</span>
                    <span className=' ml-8'>jobType: {jobType}</span>
                    <span className=' ml-8'>Job Status: {jobStatus}</span>
                </div>
                <p>{jobDescription}.</p>
            </div>
        </div>
    );
};

export default JobPostCard;