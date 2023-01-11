import React from 'react';
import LifeEasier from '../LifeEasier/LifeEasier.js';
import LookingJobs from '../LookingJobs/LookingJobs.js';
import WeAreSpecialist from '../WeAreSpecialist/WeAreSpecialtist.js';

const Home = () => {
    return (
        <div>
            <LookingJobs></LookingJobs>
            <LifeEasier />
            <WeAreSpecialist/>
        </div>
    );
};

export default Home;