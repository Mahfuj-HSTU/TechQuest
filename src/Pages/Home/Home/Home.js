import React from "react";
import Developers from "../../../layout/Developers.js";
import Events from "../Events/Events.js";
import LatestNews from "../LatestNews/LatestNews.js";
import LifeEasier from "../LifeEasier/LifeEasier.js";
import LookingJobs from "../LookingJobs/LookingJobs.js";
import Review from "../Review/Review.js";
import WeAreSpecialist from "../WeAreSpecialist/WeAreSpecialist.js";

const Home = () => {
  return (
    <div>
      <LookingJobs />
      <Review />
      <LifeEasier />
      <Developers />
      <Events />
      <LatestNews />
      <WeAreSpecialist />
    </div>
  );
};

export default Home;
