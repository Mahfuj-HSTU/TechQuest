import React from 'react';
import Events from '../Events/Events.js';
import LifeEasier from '../LifeEasier/LifeEasier.js';
import LookingJobs from '../LookingJobs/LookingJobs.js';
import Review from '../Review/Review.js';

import WeAreSpecialist from '../WeAreSpecialist/WeAreSpecialtist.js';

const Home = () => {
    return (
        <div>
            <LookingJobs></LookingJobs>
            <Review></Review>
            <LifeEasier />
            <Events></Events>
            <WeAreSpecialist />
        </div>
    );
};

export default Home;
