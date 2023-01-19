import React from "react";
import DevelopersCategory from "../DevelopersTab/DevelopersCategory.js";
import Banner from "../Banner/Banner.js";
import EmployersCategories from "../EmployersCategories/EmployersCategories.js";
import Events from "../Events/Events.js";
import GetCandidateForm from "../GetCandidateForm/GetCandidateForm.js";
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
      <DevelopersCategory />
      <EmployersCategories />
      <GetCandidateForm />
      <LifeEasier />
      <Events></Events>
      <LatestNews />
      <WeAreSpecialist />
    </div>
  );
};

export default Home;
