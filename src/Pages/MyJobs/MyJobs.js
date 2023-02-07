import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import MyJobDetails from './MyJobDetails/MyJobDetails';


const MyJobs = () => {
  const { user } = useContext( AuthContext );

  const url = `http://localhost:5000/applications?email=${ user?.email }`;

  const { data: jobs = [] } = useQuery( {
    queryKey: [ "jobs", user?.email ],
    queryFn: async () => {
      const res = await fetch( url, {
        headers: {
          authorization: `bearer ${ localStorage.getItem( "accessToken" ) }`,
        },
      } );
      const data = await res.json();
      return data;
    },
  } );
  // console.log(jobs)
  const showDetails =(e)=>{
        console.log("clicked", e)
  }

    return (
        <div className='mt-24 mb-16'>
            <h3 className="lg:text-4xl md:text-3xl mb-5 font-semibold">My Applied Jobs</h3>
            <div className="overflow-x-auto gap-4 lg:w-full md:table-fixed">
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
              jobs.map( ( job, i ) => <tr key={ job._id }>
                <th>{ i + 1 }</th>

                <td>{ job.job.jobTitle }</td>
                <td>{ job.job.jobType }</td>
                <td>{ job.job.location }</td>
                <td> <Link to={ `/job-seeker/myjob-details/${ job._id }` }><button className="btn btn-primary">Details</button></Link></td>

              </tr> )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyJobs;






