import React from "react";
import { useDispatch } from "react-redux";
import { fetchAddCourse } from "../AddCourseSlice";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const navigate = useNavigate();
  const dispatch =  useDispatch();

  const handleAddCourse = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const instructor = form.instructor.value;
    const image = form.image.value;
    const videoUrl = form.video.value;
    const price = form.price.value;
    const courseInfo = {
        title, description, instructor, image,price, videoUrl
    }

    dispatch(fetchAddCourse(courseInfo))
    // console.log(courseInfo);
    navigate('/')
  };

  return (
    <div>
      <form onSubmit={handleAddCourse}>
        {/* The button to open modal */}
        <label htmlFor="add-course-modal" className="btn btn-info text-white">
          Add Course
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="add-course-modal" className="modal-toggle" />
        <div className="modal bg-transparent backdrop-brightness-50">
          <div className="modal-box relative">
            <label
              htmlFor="add-course-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold text-white bg-primary rounded-md py-3 my-5">
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
              <textarea
                type="textarea"
                name="description"
                className="textarea textarea-bordered w-full"
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
              {/* course video link */}
              <input
                type="text"
                name="video"
                className="input input-bordered w-full"
                placeholder="course video link"
              />
              {/* course price */}
              <input
                type="number"
                name="price"
                className="input input-bordered w-full"
                placeholder="course price"
              />
            </div>
            <div className="my-3 flex justify-center gap-3">
              <label htmlFor="add-course-modal" className="cursor-pointer bg-gray-500 btn-sm btn text-white  uppercase p-1 hover:bg-gray-700">
                close
              </label>
              <input type="submit" value="submit" className="btn btn-success btn-sm hover:text-white " />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
