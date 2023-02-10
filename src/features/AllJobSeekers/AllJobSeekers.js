import React, { useState } from "react";
import { useEffect } from "react";
import { ServerLink } from "../../Hooks/useServerLink";
import AllJobSeekerCard from "../AllJobSeekerCard/AllJobSeekerCard";
import ContactNow from "../AllJobSeekerCard/ContactNow";

const AllJobSeekers = () => {
  const [ jobSeekers, setJobSeekers ] = useState( [] );
  const [ contact, setContact ] = useState( null );
  useEffect( () => {
    fetch( `${ ServerLink }/jobSeekersCollection` )
      .then( ( res ) => res.json() )
      .then( ( data ) => setJobSeekers( data ) );
  }, [] );

  return (
    <>
      <div className="grid grid-cols-2">
        { jobSeekers.map( ( jobSeeker ) => (
          <AllJobSeekerCard
            key={ jobSeeker._id }
            jobSeeker={ jobSeeker }
            setContact={ setContact }
          ></AllJobSeekerCard>
        ) ) }
      </div>
      { contact && <ContactNow contact={ contact }></ContactNow> }
    </>
  );
};

export default AllJobSeekers;
