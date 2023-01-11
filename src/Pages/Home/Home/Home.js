import React from 'react';
import LifeEasier from '../LifeEasier/LifeEasier.js';
import LookingJobs from '../LookingJobs/LookingJobs.js';

const Home = () => {
    return (
        <div>
            <LookingJobs></LookingJobs>
            <LifeEasier />
        </div>
    );
};

export default Home;