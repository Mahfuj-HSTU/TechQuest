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

export default Home;