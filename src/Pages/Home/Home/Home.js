import React from 'react';
import LifeEasier from '../LifeEasier/LifeEasier.js';
import LookingJobs from '../LookingJobs/LookingJobs.js';
import Review from '../Review/Review.js';

const Home = () => {
    return (
        <div>
            <LookingJobs></LookingJobs>
            <Review></Review>
            <LifeEasier />
        </div>
    );
};

export default Home;