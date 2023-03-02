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
  const { user } = useContext(AuthContext);
  const state = useSelector((state) => state.roleReducer.role.role);
  // console.log(state);

  useEffect(() => {
    dispatch(fetchRole(user?.email));
  }, [dispatch, user?.email]);

  const { data: courses = [] } = useQuery({
    queryKey: ["courses"],
    queryFn: () => fetch(`${ServerLink}/courses`).then((res) => res.json()),
  });
  // console.log( courses )

  return (
    <div className="mx-5">
      <div className="flex justify-center">
        <h1 className="lg:text-4xl md:text-3xl flex-1 mb-10 font-semibold text-info">
          All Courses
        </h1>
        <div className="">{state === "admin" && <AddCourse />}</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Courses;
