import React from "react";
import { useLoaderData } from "react-router-dom";
import RemoveCourse from "../RemoveCourse/RemoveCourse";

const CourseDetails = () => {
  const course = useLoaderData();
//   console.log( course );
  const { name, img, description, instructor, price } = course;

  return (
    <div className="mt-20 p-5 card bg-base-100 shadow-xl">
      <div className="m-5 rounded-lg">
        <img className="w-full" src={img} alt="#" />
        <div className="text-start">
          <RemoveCourse name={name} img={img}/>
          <h3 className="card-title my-7 text-3xl">{name}</h3>
          <p className="text-justify	">{description}</p>
          <p className="mt-7">
            <b>Our Experienced Instructors : </b> {instructor}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
