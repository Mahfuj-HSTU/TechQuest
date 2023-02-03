import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';


const MyJobs = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/applications?email=${user?.email}`;

  const { data: jobs = [] } = useQuery({
    queryKey: ["jobs", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  // console.log(jobs)

    return (
        <div className='mt-24 mb-16'>
            <h3 className="lg:text-4xl md:text-3xl mb-5 font-semibold">My Applied Jobs</h3>
            <div className="overflow-x-auto gap-4">
                <table className="table w-full table-auto md:flex-row">
                    <thead>
                        <tr>
                            <th></th>

                            <th>Applied Post</th>
                            <th>Job Type</th>
                            <th>Location </th> 
                            <th>Details</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map((job, i) => <tr key={job._id}>
                                <th>{i+1}</th>

                                <td>{job.job.jobTitle}</td>
                                <td>{job.job.jobType}</td>
                                <td>{job.job.location}</td>
                                <td> <Link to={`/myjob-details/${job._id}`}><button className="btn btn-primary">Details</button></Link></td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyJobs;








// {
//     jobs.map( ( job ) => <div key={ job._id } className=' card flex flex-wrap'>
//         <div className="border bg-slate-100 shadow-lg hover:shadow-2xl card-body align-middle rounded-xl my-5">
//             <h2 className="card-title text-blue-700">{ job.job.jobTitle } </h2>
//             <span className="card-title" >({ ( job.job.jobType ) }) <span className='bg-base-500'> { job.job.jobStatus }</span></span>
//             <h2 className="card-title">{ job.job.location }</h2>
//             <h2 className="card-title">Must Have skill : { job.job.mustSkills }</h2>
//             <h2 className="card-title">Nice to have skill: { job.job.optionalSkills }</h2>
//             <div className="card-actions">
//                 <Link to={`/myjob-details/${job._id}`}><button className="btn btn-primary">Details</button></Link>
//             </div>
//             {/* to={`/job-details/${job._id}`} */}
//         </div>

//     </div>
//     )
// }