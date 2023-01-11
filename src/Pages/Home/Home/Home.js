import React from 'react';
import Events from '../Events/Events.js';
import LifeEasier from '../LifeEasier/LifeEasier.js';
import LookingJobs from '../LookingJobs/LookingJobs.js';
import WeAreSpecialist from '../WeAreSpecialist/WeAreSpecialtist.js';

const Home = () => {
    return (
        <div>
            <LookingJobs></LookingJobs>
            <LifeEasier />
            <Events></Events>
            <WeAreSpecialist />
        </div>
    );
};

export default Home;
