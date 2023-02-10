import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ( { course } ) => {
    const { title, img, _id } = course;
    // console.log( course );

    return (
        <div data-aos="fade-up" className='p-5 bg-base-100 shadow-lg'>
            <div className='m-5 rounded-lg'>
                <img className='h-80' src={ img } alt="#" />
                <div className="text-start">
                    <h3 className="my-7 text-3xl">{ title }</h3>
                </div>
                <Link className='btn btn-info w-1/2 text-decoration-none text-dark fs-5 fw-semibold' to={ `/admin/courses/${ _id }` }>More details</Link>
            </div>
        </div>
    );
};

export default CourseCard;
