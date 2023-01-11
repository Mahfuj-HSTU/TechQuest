import React from "react";
import Developers from "../../../layout/Developers.js";
import LifeEasier from "../LifeEasier/LifeEasier.js";

const Home = () => {
  return (
    <div>
            <LookingJobs></LookingJobs>
            <Review></Review>
      <LifeEasier />
      <Developers  />
            <Events></Events>
            <LatestNews/>
            <WeAreSpecialist />
    </div>
  );
};

export default Home;
