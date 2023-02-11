import React from 'react';
import { Link } from 'react-router-dom';

const Events = () => {
    return (
        <div 
        // data-aos="fade-up" 
        className='my-20 shadow-md py-28 mx-5 bg-secondary bg-opacity-30'>
            <h3 className='text-blue-700 font-semibold text-2xl my-5'>HIRING EVENTS</h3>
            <h2 className='text-4xl font-bold my-3'>Join us at our next speed-interviewing event!</h2>
            <p className='text-lg my-3'>Meet hundreds of pre-vetted candidates with diverse backgrounds and skills</p>
            <Link to='/all-jobs' className="btn btn-primary text-white mt-5 w-44 text-lg font-semibold ">See Details</Link>
        </div>
    );
};

export default Events;
