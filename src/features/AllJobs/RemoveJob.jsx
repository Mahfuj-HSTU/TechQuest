import React from "react";

const RemoveJob = ({ id, title, des, openings }) => {
  // console.log(id, title, des, openings);
  const removeJob = (id) => {
    // console.log(id);
    const t = window.confirm ('Do you want to delete this job post? \n Undo is not possible after clicking "ok".');
    console.log(t);
  };
  return (
    <div>
      <label htmlFor="remove-job" className="btn btn-warning">
        remove
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="remove-job" className="modal-toggle" />
      <label htmlFor="remove-job" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <label
            htmlFor="remove-job"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          {openings <= 1 ? (
            <small>{openings} position</small>
          ) : (
            <small>{openings} positions</small>
          )}
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="py-4">{des}</p>
          <div className="my-7">
            <label
              onClick={() => removeJob(12)}
              htmlFor="remove-job"
              className="btn btn-error absolute right-2 bottom-5"
            >
              Delete
            </label>
            <label
              onClick={() => removeJob(20)}
              htmlFor="remove-job"
              className="btn btn-warning absolute right-28 bottom-5"
            >
              Flag
            </label>
          </div>
        </label>
      </label>
    </div>
  );
};

export default RemoveJob;
