import React, { useContext, useState } from "react";
import "./MyJobs.css";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import MyjobModal from "./MyjobModal/MyjobModal";
import { ServerLink } from "../../Hooks/useServerLink";

const MyJobs = () => {
  const { user } = useContext(AuthContext);

  const [myjob, setMyjob] = useState(null);

  const url = `${ServerLink}/applications?.email=${user?.email}`;

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

  return (
    <div className="mt-24 mb-16">
      <h3 className="lg:text-4xl md:text-3xl mb-5 font-semibold text-info">
        My Applied Jobs
      </h3>
      <div className=" gap-4 lg:w-full ">

      <div className="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content ">
  {
  jobs.map(job => 
 
    <>
      {/* key ={job?.job?._id} */}
     
    <div className=" p-2 inline-grid  grid-cols-4 border-2 shadow-lg  m-1 w-full ">
  <div className=" text-2xl">{ job?.job?.jobTitle }</div>
  <div className="">{ job?.job?.jobType }</div>
  <div className="">{ job?.job?.jobStatus}</div>

  <button onClick={ () => setMyjob( job ) }> <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary ">Details</label></button>
</div>
    
    </>
  )
}
    {/* <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Details</label> */}
  </div> 
  <div className="drawer-side w-full  ">
    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
    <ul className="menu p-4 w-5/6 bg-base-100 text-base-content overflow-y-hidden">
 
    {
          myjob &&
          <MyjobModal jobs={ jobs }
          key ={jobs._id}
            myjob={ myjob }
            setMyjob={ setMyjob }
          ></MyjobModal>
        }
        
    
    </ul>
  </div>

  
</div>
</div>
</div>
  );
};

export default MyJobs;


