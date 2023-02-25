import React from "react";
import ApplyForm from "./ApplyForm";

const ApplyJobModal = () => {
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="apply-form-modal" className="modal-toggle" />
      <label htmlFor="apply-form-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <ApplyForm />
          <label
            htmlFor="apply-form-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
        </label>
      </label>
    </div>
  );
};

export default ApplyJobModal;
