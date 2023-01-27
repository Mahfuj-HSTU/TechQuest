import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
// import { useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';


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
    // console.log(jobs)

    return (
        <div className='mt-32 mb-12'>
            <h3 className="text-3xl mb-5">My Applied Jobs</h3>
            <div className="overflow-x-auto gap-4">
                {
                    jobs.map( ( job ) => <div key={ job._id } className=' card flex flex-wrap'>
                        <div className=" bg-base-700 shadow-xl card-body align-middle ">
                            <h2 className="card-title text-blue-700">{ job.job.jobTitle } </h2>
                            <span className="card-title" >({ ( job.job.jobType ) }) <span className='bg-base-500'> { job.job.jobStatus }</span></span>
                            <h2 className="card-title">{ job.job.location }</h2>
                            <h2 className="card-title">Must Have skill : { job.job.mustSkills }</h2>
                            <h2 className="card-title">Nice to have skill: { job.job.optionalSkills }</h2>
                            <div className="card-actions">
                                <Link to='/all-jobs'><button className="btn btn-primary">Apply another</button></Link>
                            </div>

                        </div>

                    </div>
                    )
                }

                {/* <table className="table w-full table-auto md:flex-row">
                    <thead>
                        <tr>
                            <th></th>

                            <th>Applied Post</th>
                            <th>Job Type</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map((job, i) => <tr key={job._id}>
                                <th>{i+1}</th>

                                <td>{job.job.jobTitle}</td>
                                <td>{job.job.jobType}</td>
                                <td>{job.job.location}</td>

                            </tr>)
                        }
                    </tbody>
                </table> */}
            </div>
        </div>
    );
};

export default MyJobs;
