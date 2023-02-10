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
                            <table className="table table-compact w-full border-2 shadow-lg">
                                <thead className="text-center">
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Job Title</th>
                                        {/* <th>Action</th> */}
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {

                                        applicants.map(applicant =>
                                            <tr className=' border-2 bg-red-300'>
                                                <td className='border-2 font-semibold'> {applicant?.name} </td>
                                                <td className='border-2'>{applicant?.email}</td>
                                                <td className='border-2'>{applicant?.job?.jobTitle}</td>
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