import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
// import { useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';


const MyJobs = () => {
    const { user } = useContext( AuthContext );

    const url = `http://localhost:5000/myjobs?email=${ user?.email }`;

    const { data: jobs = [] } = useQuery( {
        queryKey: [ 'jobs', user?.email ],
        queryFn: async () => {
            const res = await fetch( url );
            const data = await res.json();
            return data;

        }
    } )

    return (
        <div className='mt-20 mb-12'>
            <h3 className="text-3xl mb-5">My Appointments</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Your Email</th>
                            <th>Applied Post</th>
                            <th>Job Type</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map( ( job, i ) => <tr key={ job._id }>
                                <th>{ i + 1 }</th>
                                <td>{ job.email }</td>
                                <td>{ job.job.jobTitle }</td>
                                <td>{ job.job.jobType }</td>
                                <td>{ job.job.location }</td>

                            </tr> )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyJobs;
