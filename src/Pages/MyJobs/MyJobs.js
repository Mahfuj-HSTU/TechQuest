import React, { useContext, useState } from 'react';
import "./MyJobs.css";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import MyjobModal from './MyjobModal/MyjobModal';
import { ServerLink } from '../../Hooks/useServerLink';


const MyJobs = () => {
  const { user } = useContext( AuthContext );

  const [ myjob, setMyjob ] = useState( null );

  const url = `${ ServerLink }/applications?email=${ user?.email }`;

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
  // const showDetails =(e)=>{
  //       console.log("clicked", e)
  // }

  return (
    <div className='mt-24 mb-16'>
     {/* <div id="BrushCursor" className='mt-24'>
  <div className="container">
    <div className="p p1">My Applied Jobs</div>
    <div className="p p2">My Applied Jobs</div>
    <div className="p p3">
      My Applied Jobs
      <div className="cursor"></div>
    </div>
  </div>
</div> */}


      <h3 className="lg:text-4xl md:text-3xl mb-5 font-semibold text-info">My Applied Jobs</h3>
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
                <td className='text-sky-400 text-2xl'>{ job.job.jobTitle }</td>
                <td>{ job.job.jobType }</td>
                <td>{ job.job.location }</td>
              
                <button onClick={ () => setMyjob( job ) }> <label htmlFor="my-modal-3" className="btn">details</label></button>

                {/* <td> <Link to={ `/job-seeker/myjob-details/${ job._id }` }><button className="btn btn-primary">Details</button></Link></td> */ }

              </tr> )
            }
          </tbody>
        </table>
        {

          myjob &&
          <MyjobModal jobs={ jobs }
            myjob={ myjob }
            setMyjob={ setMyjob }
          ></MyjobModal>

        }

      </div>

    </div>
  );
};

export default MyJobs;






