import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { fetchAllPayment } from "../../../features/CoursePayment/AllPaymentSlice";
import { fetchRole } from "../../../Hooks/Role/useRoleSlice";
import RemoveCourse from "../RemoveCourse/RemoveCourse";
import PlayVideo from "../Video/PlayVideo";

const CourseDetails = () => {
  const [ isPaid, setIsPaid ] = useState( false )
  const course = useLoaderData();
  const dispatch = useDispatch();
  const { user } = useContext( AuthContext );
  const role = useSelector( ( state ) => state.roleReducer.role.role );
  const details = useSelector( ( state ) => state.allPaymentReducer.payments );
  // console.log(details);

  const { title, img, description, instructor, price, _id, videoUrl } = course;

  // checking logged in user is made payment
  const paid = details?.map( detail =>
    ( _id === detail.course_id && user?.email === detail.email )
  )
  // console.log( paid.values() );
  // paid?.map( i => ( i === true ) && setIsPaid( i ) )
  useEffect( () => {
    for ( let elements of paid ) {
      if ( elements === true ) {
        setIsPaid( elements )
      }
    }
  }, [ paid ] )

  // console.log( isPaid );

  // console.log(course);
  useEffect( () => {
    dispatch( fetchRole( user?.email ) );
    dispatch( fetchAllPayment() );
  }, [ dispatch, user?.email ] );

  return (
    <div className="p-5 card bg-base-100 shadow-xl">
      <div className="m-5 rounded-lg">
        <img className="w-full" src={ img } alt="#" />
        <div className="text-start">
          { role === "admin" && <RemoveCourse name={ title } img={ img } /> }
          <h3 className="card-title my-3 text-3xl">{ title }</h3>
          { role === "jobSeeker" && (
            <div>
              {
                !isPaid &&
                <div>
                  { price !== "0" && (
                    <span className="bg-sky-600 rounded-md p-1 text-white">
                      Price: { price }
                    </span>
                  ) }
                  { price !== "0" && (
                    <Link
                      to={ `/job-seeker/courses/payment/${ _id }` }
                      className="bg-green-600 rounded-lg p-1 m-1 text-white"
                    >
                      Buy This Course
                    </Link>
                  ) }
                </div>
              }
            </div>
          ) }
          <p className="text-justify mt-3">{ description }</p>
          <p className="mt-7">
            <b>Our Experienced Instructors : </b> { instructor }
          </p>
        </div>
        {
          isPaid &&
          <div>
            { videoUrl && <PlayVideo videoUrl={ videoUrl } /> }
          </div>
        }
      </div>
    </div>
  );
};

export default CourseDetails;
