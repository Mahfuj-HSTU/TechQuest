import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AiFillDelete } from 'react-icons/ai';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const JobPostCard = ({ jobPost, refetch }) => {
    // console.log(jobPost)
    const { _id, jobDescription, jobTitle, location, jobType, jobStatus } = jobPost;
    const { user } = useContext(AuthContext);

    const handleDelete = (_id) => {

        fetch(`http://localhost:5000/recruiterJobPosts/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success(`Your Product deleted successfully`);
                    refetch()
                }

            })
    }
    return (
        <div className='bg-base-100 shadow-2xl my-6 rounded-lg'>
            <div className="container flex flex-col w-full p-6 mx-auto divide-y divide-gray-700 ">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <div>
                            <h1 className='text-2xl font-semibold text-info'>{jobTitle}</h1>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="my-modal-3" className='text-2xl cursor-pointer'> <AiFillDelete></AiFillDelete></label>
                        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box relative">
                                <h3 className="text-lg font-bold">Are you sure, You Want to delete it?</h3>
                                <div className="modal-action ">
                                    <label htmlFor="my-modal-3" className="btn btn-primary">NO</label>
                                    <label onClick={() => handleDelete(_id)} htmlFor="my-modal-3" className="btn btn-primary">YES</label>
                                </div>
                            </div>
                        </div>
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

            {/* <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default JobPostCard;
