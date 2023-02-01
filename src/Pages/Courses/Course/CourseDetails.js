import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  // console.log( course );
  const { name, img, details, inst } = course;

  return (
    <div className="mt-20 p-5 card bg-base-100 shadow-xl">
      <div className="m-5 rounded-lg">
        <img className="w-full" src={img} alt="#" />
        <div className="text-start">
          <Link>Remove</Link>
          <h3 className="card-title my-7 text-3xl">{name}</h3>
          <p className="text-justify	">{details}</p>
          <p className="mt-7">
            <b>Our Experienced Instructors : </b> {inst}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
