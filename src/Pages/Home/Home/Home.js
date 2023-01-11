import React from 'react';
import Banner from '../Banner/Banner.js';
import Events from '../Events/Events.js';
import LifeEasier from '../LifeEasier/LifeEasier.js';
import LookingJobs from '../LookingJobs/LookingJobs.js';
import WeAreSpecialist from '../WeAreSpecialist/WeAreSpecialtist.js';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LookingJobs></LookingJobs>
            <LifeEasier />
            <Events></Events>
            <WeAreSpecialist />
        </div>
    );
};

export default Home;
