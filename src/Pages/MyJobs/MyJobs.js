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



        <table className="table table-compact w-full border-2 shadow-lg">
          <thead className="text-center">
            <tr>
              <th>Sl No</th>
              <th>Job Title</th>
              <th>Job Type</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {
              jobs.map( ( job, i ) =>
                <tr key={ i } className='border-2'>
                  <td className='border-2'>{ i + 1 }</td>
                  <td className='border-2'>{ job.job?.jobTitle }</td>
                  <td className='border-2'>{ job.job?.jobType }</td>
                  <td className='border-2 text-center'>
                    <button onClick={ () => setMyjob( job ) }> <label htmlFor="my-modal-3" className="btn btn-outline btn-info rounded-lg">details</label></button>
                  </td>
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






