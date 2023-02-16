import React from 'react';
import './EnrolmentCourse.css';


const EnrolmentCourse = ({course}) => {
    const {instructor , img , title} = course;
    return (
        <div className= 'animate m-8'>
            <span> </span>
            <span> </span>
            <span> </span>
            <span> </span>
     
             <div className="card bg-base-100 shadow-lg hover:shadow-2xl text-left border rounded-lg w-full m-2 p-4 ">
                    
                    
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body bg-black">
                        <h2 className="card-title">{title}</h2>
                        <p className=''> Instructors: <small> {instructor}</small></p>
                        {/* <p>{course.description}</p> */}
                        <div className="card-actions justify-end"> 
                            <button className="btn btn-primary">Enroll</button>
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                    </div>
                </div>   
        
    );
};

export default EnrolmentCourse;