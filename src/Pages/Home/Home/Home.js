import React from 'react';
import Banner from '../Banner/Banner.js';
import Events from '../Events/Events.js';
import LatestNews from '../LatestNews/LatestNews.js';
import LifeEasier from '../LifeEasier/LifeEasier.js';
import LookingJobs from '../LookingJobs/LookingJobs.js';
import Review from '../Review/Review.js';
import WeAreSpecialist from '../WeAreSpecialist/WeAreSpecialist.js';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LookingJobs></LookingJobs>
            <Review></Review>
            <LifeEasier />
            <Events></Events>
            <LatestNews />
            <WeAreSpecialist />
        </div>
    );
};

export default Home;
