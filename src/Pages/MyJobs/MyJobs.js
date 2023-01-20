import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';


const MyJobs = () => {
    const jobs = useSelector(state => state.jobsReducer.jobs);
    console.log(jobs);
    const { user, logOut } = useContext(AuthContext);
    const location = useLocation();
    // const job = location.state;
    // const { jobTitle, jobDescription, jobRequirements, jobResponsibilities, jobStatus, jobType, salary,
    //      salaryCurrency, experience, language, mustSkills, optionalSkills } = job;
    // console.log(job);

    // const { data: jobs, isLoading, refetch } = useQuery({
    //     queryKey: ['jobs'],
    //     queryFn: async () => {
    //         try {
    //             const res = await fetch('', {
    //                 headers: {
    //                     authorization: `bearer ${localStorage.getItem('accessToken')}`
    //                 }
    //             });
    //             const data = await res.json();
    //             return data;
    //         }
    //         catch (error) {

    //         }
    //     }
    // });

    


    // if (isLoading) {
    //     return <Loading></Loading>
    // }z
    return (
        <div className='mt-48'>
           
          <div>
           
            <h2 className="text-3xl">My Applied Jobs: 3</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Job Title</th>
                            <th>Job Type</th>
                            <th>Location</th>
                            <th>Required Skill</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            jobs.map((job, i) => <tr key={job.id}>
                                <th>{i + 1}</th>
                                <td><div className="">
                                    <div className="">
                                        <p> {user?.email}</p>
                                    </div>
                                </div></td>
                                <td>{job?.jobTitle}</td>
                                <td>{job?.jobType}</td>
                                <td>{job?.location}</td>
                                <td>{job?.mustSkills}</td>
                                {/* <td>
                                    <label onClick={() => setDeletingjob(job)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td> */}
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
          
        </div>
        
       </div>
    );
};

export default MyJobs;