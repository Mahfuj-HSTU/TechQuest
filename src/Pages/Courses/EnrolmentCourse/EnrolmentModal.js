import React from "react";

const EnrolmentModal = ({ course }) => {
  const { title, instructor, description, price, img } = course;
  console.log(course);
  return (
    <div>
      <>
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal text-start">
          <div className="flex flex-col gap-2 modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <figure>
              <img className="border rounded-lg" src={img} alt="course" />
            </figure>
            <h3 className="text-xl font-bold text-primary">{title}</h3>
            <p className=" text-black"><small className="text-primary font-bold">Instructors: </small> {instructor}</p>
            <p className="text-primary font-bold">Price : {price}</p>
            <p className="text-sm  ">{description}</p>
          </div>
        </div>
      </>
    </div>
  );
};

export default EnrolmentModal;
