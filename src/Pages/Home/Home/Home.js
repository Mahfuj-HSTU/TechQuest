import React from 'react';
import Banner from '../Banner/Banner.js';
import Events from '../Events/Events.js';
import LifeEasier from '../LifeEasier/LifeEasier.js';
import LookingJobs from '../LookingJobs/LookingJobs.js';
import StartHiring from '../StartHiring/StartHiring.js';
import WeAreSpecialist from '../WeAreSpecialist/WeAreSpecialist.js';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LookingJobs></LookingJobs>
            <LifeEasier />
            <StartHiring></StartHiring>
            <Events></Events>
            <WeAreSpecialist />
        </div>
    );
};

export default Home;
