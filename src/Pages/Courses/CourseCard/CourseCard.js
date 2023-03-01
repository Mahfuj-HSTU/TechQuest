import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { title, img, _id } = course;
  const { role } = useSelector((state) => state.roleReducer.role);
  //   console.log( role );

  return (
    <div
      data-aos="fade-up"
      className="border rounded-md shadow-lg w-1/2 md:w-2/3 mx-auto"
    >
      <div className="mb-5 rounded-lg ">
        <img className="h-60 w-full rounded-md" src={img} alt="#" />
        <h3 className="mt-3 mb-5 text-xl lg:text-3xl tracking-tighter px-2">
          {title}
        </h3>
        {role === "admin" && (
          <Link
            className="btn btn-primary w-1/2 text-white whitespace-nowrap"
            to={`/admin/courses/${_id}`}
          >
            More details
          </Link>
        )}
        {role === "jobSeeker" && (
          <Link
            className="btn btn-primary w-1/2 text-white whitespace-nowrap "
            to={`/job-seeker/courses/${_id}`}
          >
            More details
          </Link>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
