import React, { useContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import CourseCard from "./CourseCard/CourseCard";
import AddCourse from "./AddCourse/AddCourse";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { fetchRole } from "../../Hooks/Role/useRoleSlice";
import { ServerLink } from "../../Hooks/useServerLink";

const Courses = () => {

  const dispatch = useDispatch();
  const { user } = useContext( AuthContext );
  const state = useSelector( state => state.roleReducer.role.role )
  // console.log(state);

  useEffect( () => {
    dispatch( fetchRole( user?.email ) );
  }, [ dispatch, user?.email ] );

  const { data: courses = [] } = useQuery( {
    queryKey: [ "courses" ],
    queryFn: () =>
      fetch( `${ ServerLink }/courses` ).then( ( res ) => res.json() ),
  } );
  // console.log( courses )

  return (
    <div>
      <div className="flex justify-center ">
        <h1 className="text-4xl font-semibold flex-grow underline my-10">All Courses</h1>
        { state === 'admin' && <AddCourse /> }
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mx-5">
        { courses.map( ( course ) => (
          <CourseCard key={ course._id } course={ course }></CourseCard>
        ) ) }
      </div>
    </div>
  );
};

export default Courses;
