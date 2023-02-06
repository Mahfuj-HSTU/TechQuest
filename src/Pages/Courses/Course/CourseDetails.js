import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { fetchRole } from "../../../Hooks/Role/useRoleSlice";
import RemoveCourse from "../RemoveCourse/RemoveCourse";

const CourseDetails = () => {
  const course = useLoaderData();
  const dispatch = useDispatch();
  const { user } = useContext(AuthContext);
  const state = useSelector(state => state.roleReducer.role.role)
  // console.log(state);

  const { title, img, description, instructor, price, _id } = course;
  useEffect(() => {
    dispatch(fetchRole(user?.email));
  }, [dispatch, user?.email]);

  return (
    <div className="mt-20 p-5 card bg-base-100 shadow-xl">
      <div className="m-5 rounded-lg">
        <img className="w-full" src={img} alt="#" />
        <div className="text-start">
          { state === 'admin' && <RemoveCourse name={title} img={img} />}
          <h3 className="card-title my-3 text-3xl">{title}</h3>
          <span className="bg-sky-600 rounded-md p-1 text-white">
            Price: {price}
          </span>
          <Link to={`/courses/payment/${_id}`} className="btn">
            make payment
          </Link>
          <p className="text-justify mt-3">{description}</p>
          <p className="mt-7">
            <b>Our Experienced Instructors : </b> {instructor}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
