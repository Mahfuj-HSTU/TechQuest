<<<<<<< HEAD
import React from "react";
import Developers from "../../../layout/Developers.js";
import Banner from "../Banner/Banner.js";
import Events from "../Events/Events.js";
import LatestNews from "../LatestNews/LatestNews.js";
import LifeEasier from "../LifeEasier/LifeEasier.js";
import LookingJobs from "../LookingJobs/LookingJobs.js";
import Review from "../Review/Review.js";
import StartHiring from "../StartHiring/StartHiring.js";
import WeAreSpecialist from "../WeAreSpecialist/WeAreSpecialist.js";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LookingJobs></LookingJobs>
      <StartHiring></StartHiring>
      <Review></Review>
      <Developers />
      <LifeEasier />
      <Events></Events>
      <LatestNews />
      <WeAreSpecialist />
    </div>
  );
}
=======
import React from 'react';
import EmployersCategories from '../EmployersCategories/EmployersCategories.js';
import GetCandidateForm from '../GetCandidateForm/GetCandidateForm.js';
import LifeEasier from '../LifeEasier/LifeEasier.js';
import LookingJobs from '../LookingJobs/LookingJobs.js';

const Home = () => {
    return (
        <div>
            <LookingJobs></LookingJobs>
            <LifeEasier />
            <EmployersCategories></EmployersCategories>
            <GetCandidateForm></GetCandidateForm>

        </div>
    );
};
>>>>>>> bdcd302866f115846ce59bdcc27fc628ebe92b12

export default Home;
