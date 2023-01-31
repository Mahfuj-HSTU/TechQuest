import React from "react";

const RemoveJob = () => {
    const removeJob = (id) =>{
        console.log(id);
    }
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
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="my-5">
            <label
            onClick={()=>removeJob(12)}
              htmlFor="remove-job"
              className="btn btn-error absolute right-2 bottom-5"
            >
              Yay
            </label>
            <label
            onClick={()=>removeJob(20)}
              htmlFor="remove-job"
              className="btn btn-warning absolute right-20 bottom-5"
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
