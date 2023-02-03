import React, { useState } from 'react';
import { useEffect } from 'react';
import AllJobSeekerCard from '../AllJobSeekerCard/AllJobSeekerCard';

const AllJobSeekers = () => {
    const [jobSeekers , setJobSeekers] = useState([])
    // const [] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/jobSeekersCollection')
        .then(res => res.json())
        .then(data => setJobSeekers(data))
    },[])

    return (
        <div>
            {
                jobSeekers.map( jobSeeker => <AllJobSeekerCard
                key={jobSeeker._id}
                jobSeeker={jobSeeker}
                ></AllJobSeekerCard> )
            }
        </div>
    );
};

export default AllJobSeekers; 