import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ShowApplicant = () => {
    const applicants = useLoaderData()

    return (
        <>
            {
                applicants.length !== 0 ? (
                    <>
                        <div>
                            <h3 className='text-4xl font-bold text-center my-5'>Applicants for this job</h3>
                            <table className="table table-zebra table-compact w-full border-2 shadow-lg">
                                <thead className="text-center">
                                    <tr>
                                        <th>Applicant</th>
                                        <th>Email</th>
                                        <th>Experience</th>
                                        <th>Job Title</th>
                                        {/* <th>Action</th> */}
                                    </tr>
                                </thead>
                                <tbody className="">
                                    {

                                        applicants.map(applicant =>
                                            <tr key={applicant?._id} className=' border-2 bg-red-300'>
                                                <td>
                                                    <div className="flex items-center space-x-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle w-12 h-12">
                                                                <img src={applicant.photoUrl} alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">{applicant?.name}</div>
                                                            <div className="text-sm opacity-50">{applicant?.address}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='border-2'>
                                                    {applicant?.email}
                                                </td>
                                                <td className='border-2'>{applicant?.experience}</td>
                                                <td className='border-2 font-semibold'>{applicant?.job?.jobTitle}
                                                    <br />
                                                    <span className="badge badge-accent badge-sm">{applicant?.job?.jobType}</span>
                                                    <span className="badge badge-info badge-sm ml-1">{applicant?.job?.jobStatus}</span>
                                                </td>
                                                {/* <td className='border-2 text-center'>
                                    <button className='btn btn-outline btn-error rounded-lg'>Delete</button>
                                </td> */}
                                            </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </>
                ) : <h1 className=' text-4xl font-semibold text-center'>No One Applied for this Job</h1>
            }
        </>

    );
};

export default ShowApplicant;