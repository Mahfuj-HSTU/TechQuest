import React from "react";
import LatestNews from "../LatestNews/LatestNews.js";
import LifeEasier from "../LifeEasier/LifeEasier.js";
import LookingJobs from "../LookingJobs/LookingJobs.js";
import WeAreSpecialist from "../WeAreSpecialist/WeAreSpecialtist.js";

const Home = () => {
  return (
    <div>
      <LookingJobs />
      <LifeEasier />
      <LatestNews />
      <WeAreSpecialist />
    </div>
  );
};

export default Home;
