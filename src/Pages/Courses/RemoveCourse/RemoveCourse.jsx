import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const RemoveCourseData = ({ name, img }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
//   console.log(id);

  const from = location.state?.from?.pathname || "/courses";

  const removeCourse = (id) => {
    // console.log(id);
    const confirm = window.confirm(
      'Do you want to delete this job post? \n Undo is not possible after clicking "ok".'
    );
    // console.log(confirm);
    if (confirm === true) {
      //   dispatch(deleteJob(id));

      //   if (state.deleteCount.deletedCount > 0) {
      //     toast.success("Job deleted");
      // state.deleteCount.deletedCount=0;
      navigate(from, { replace: true });
    }
  };

  return (
    <div className="my-5">
      <label htmlFor="remove-course" className="btn btn-warning">
        remove Course
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="remove-course" className="modal-toggle" />
      <label htmlFor="remove-course" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <label
            htmlFor="remove-course"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center">{name}</h3>
          <img src={img} className="w-72 mx-auto" alt="" />
          <div className="my-7">
            <label
              onClick={() => removeCourse(id)}
              htmlFor="remove-course"
              className="btn btn-error absolute right-2 bottom-5"
            >
              Delete
            </label>
          </div>
        </label>
      </label>
    </div>
  );
};

export default RemoveCourseData;
