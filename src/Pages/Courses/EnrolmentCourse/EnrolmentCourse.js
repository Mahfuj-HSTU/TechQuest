import React from 'react';

const EnrolmentCourse = ({course}) => {
    const {instructor , img , title} = course;
    return (
        <div>
             <div className="card bg-base-100 shadow-lg hover:shadow-5xl text-left border rounded-lg  mt-24 ">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body">
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