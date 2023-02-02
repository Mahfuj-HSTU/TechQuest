import React from "react";
// import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  // const navigate = useNavigate();

  const handleAddCourse = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const instructor = form.instructor.value;
    const image = form.image.value;
    const courseInfo = {
        title, description, instructor, image
    }
    console.log(courseInfo);
    // navigate('/')
  };
  
  return (
    <div>
      <form onSubmit={handleAddCourse}>
        {/* The button to open modal */}
        <label htmlFor="add-course-modal" className="btn">
          Add Course
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="add-course-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="add-course-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold bg-sky-200 rounded-md py-3 my-5">
              Add Course
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {/* course title */}
              <input
                type="text"
                name="title"
                className="input input-bordered w-full"
                placeholder="course title"
              />
              {/* course description */}
              <input
                type="text"
                name="description"
                className="input input-bordered w-full"
                placeholder="course description"
              />
              {/* course instructor */}
              <input
                type="text"
                name="instructor"
                className="input input-bordered w-full"
                placeholder="course instructor"
              />
              {/* course image link */}
              <input
                type="text"
                name="image"
                className="input input-bordered w-full"
                placeholder="course image link"
              />
            </div>
            <div className="my-3 flex justify-center gap-3">
              <label htmlFor="add-course-modal" className="btn btn-sm  ">
                close
              </label>
              <input type="submit" value="submit" className="btn btn-sm" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
