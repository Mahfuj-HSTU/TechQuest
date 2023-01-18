import React from 'react';
import { useSelector } from 'react-redux';

const AllJobsView = () => {
    const jobs = useSelector(state => state.jobsReducer.jobs);
    console.log(jobs);

    return (
        <div className='mt-32'>
            <h1>All Jobs</h1>
            {jobs && jobs.map(job => {
                const { id, title, location } = job;
                return (
                    <div key={id}>
                        <h1>{title}</h1>
                        <h2>{location}</h2>
                    </div>)
            })}
        </div>
    );
};

export default AllJobsView;