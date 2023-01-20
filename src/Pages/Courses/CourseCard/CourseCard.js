import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ( { course } ) => {
    const { name, img } = course;
    // console.log( course );

    return (
        <div className='mt-20 p-5 card bg-base-100 shadow-xl'>
            <div className='m-5 rounded-lg'>
                <img className='w-full h-80' src={ img } alt="#" />
                <div className="text-start">
                    <h3 className="card-title my-7 text-3xl">{ name }</h3>
                </div>
                <button type="button" className="btn btn-info w-1/2"><Link className='text-decoration-none text-dark fs-5 fw-semibold' to={ `/course/${ course.id }` }>More details</Link></button>
            </div>
        </div>
    );
};

export default CourseCard;
