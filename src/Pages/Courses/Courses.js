import React from "react";
import { useQuery } from "@tanstack/react-query";
import CourseCard from "./CourseCard/CourseCard";
import AddCourse from "./AddCourse/AddCourse";

const Courses = () => {
  const { data: courses = [] } = useQuery({
    queryKey: ["courses"],
    queryFn: () =>
      fetch("http://localhost:5000/courses").then((res) => res.json()),
  });
  // console.log( courses )

  return (
    <div>
      <div className="flex justify-center mx-10">
        <h1 className="text-4xl font-semibold flex-grow underline">All Courses</h1>
        <AddCourse/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mx-5">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Courses;
