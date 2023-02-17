import React, { useState } from 'react';
import './EnrolmentCourse.css';
import EnrolmentModal from './EnrolmentModal';


const EnrolmentCourse = ({course}) => {
    const [enroll, setEnroll] = useState(null)
    const {instructor , img , title} = course;
    return (
        <div className= 'animate m-8'>
            <span> </span>
            <span> </span>
            <span> </span>
            <span> </span>
     
             <div className="card bg-base-100 shadow-lg hover:shadow-2xl text-left border rounded-lg w-full m-2 p-4 ">
                    
                    
                    <figure><img src={img} alt="course" /></figure>
                    <div className="card-body bg-black">
                        <h2 className="card-title">{title}</h2>
                        <p className=''> Instructors: <small> {instructor}</small></p>
                        {/* <p>{course.description}</p> */}
                        <div className="card-actions justify-end"> 
                            <button className="btn btn-primary">Enroll</button>
                            {/* <button className="btn btn-primary">Details</button> */}
                            <button onClick={ () => setEnroll( course ) }> <label htmlFor="my-modal-3" className="btn btn-primary">details</label></button>
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