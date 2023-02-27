import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EnrolmentCourse.css';
import EnrolmentModal from './EnrolmentModal';


const EnrolmentCourse = ({course}) => {
    const [enroll, setEnroll] = useState(null)
    const {instructor , img , title ,_id} = course;
    return (
        <div className= ' hover-bordered  animate m-8 p-2 rounded-lg course'>
            <span> </span>
            <span> </span>
            <span> </span>
            <span> </span>
             <div className="card border-black shadow-lg hover:shadow-2xl text-left border  rounded-lg w-full  p-2 ">
                    <figure><img src={img} alt="course" /></figure>
                    <div className="card-body bg-secondary bg-opacity-30 text-black">
                        <h2 className="card-title">{title}</h2>
                        <p className=''> Instructors: <small> {instructor}</small></p>
                        {/* <p>{course.description}</p> */}
                        <div className="card-actions justify-end"> 
                        <Link to={`/job-seeker/courses/payment/${_id}`}
                         className="btn-sm btn btn-primary text-white">Enroll</Link>
                            <button onClick={ () => setEnroll( course ) }> <label htmlFor="my-modal-3" className="btn btn-sm btn-primary text-white">details</label></button>
                        </div>
                    </div>
                    </div>
                    {

                        enroll &&
                        <EnrolmentModal course={ course }
                        enroll={ enroll }
                        setEnroll={ setEnroll }
                        ></EnrolmentModal>

}
                    
                </div>   
        
    );
};

export default EnrolmentCourse;