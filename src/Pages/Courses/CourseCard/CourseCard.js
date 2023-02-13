import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { title, img, _id } = course;
  const {role} = useSelector(state => state.roleReducer.role)
//   console.log( role );

  return (
    <div
      data-aos="fade-up"
      className="border rounded-md bg-base-100 shadow-lg"
    >
      <div className="mb-5 rounded-lg">
        <img className="h-auto md:h-80 rounded-md" src={img} alt="#" />
        <div className="text-start pl-5">
          <h3 className="my-7 text-3xl">{title}</h3>
        </div>
        { role === 'admin' && <Link
          className="btn btn-primary w-1/2 text-decoration-none text-white fs-5 fw-semibold"
          to={`/admin/courses/${_id}`}
        >
          More details
        </Link>}
        { role === 'jobSeeker' && <Link
          className="btn btn-primary w-1/2 text-decoration-none text-white fs-5 fw-semibold"
          to={`/job-seeker/courses/${_id}`}
        >
          More details
        </Link>}
      </div>
    </div>
  );
};

export default CourseCard;
