import React from 'react';
import { useQuery } from '@tanstack/react-query';
import CourseCard from './CourseCard/CourseCard';

const Courses = () => {
    const { data: courses = [] } = useQuery( {
        queryKey: [ 'courses' ],
        queryFn: () => fetch( 'http://localhost:5000/courses' )
            .then( res => res.json() )
    } )
    // console.log( courses )

    return (
        <div className='mt-20'>
            {
                courses.map( course => <CourseCard key={ course.id } course={ course }></CourseCard> )
            }
        </div>
    );
};

export default Courses;
