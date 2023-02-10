import React from "react";
import { useNavigate } from "react-router-dom";

const SignUpModal = () => {
  const navigate = useNavigate();
  const handleRecruiter = () => {
    navigate( "/auth/recruiter" );
  };
  const handleJobSeeker = () => {
    navigate( "/auth/jobSeeker" );
  };
  return (
    // <div>
    //     <input type="checkbox" id="my-modal-4" className="modal-toggle" />
    //     <label htmlFor="my-modal-4" className="modal cursor-pointer">
    //         <div className='modal-action'>
    //             <label className="modal-box relative" htmlFor="my-modal-4">
    //                 <Link to='/recruiter' className="btn  btn-outline btn-info w-full mb-5">Recruiter</Link>
    //                 <Link to='/employer' className="btn  btn-outline btn-info w-full">Employer</Link>
    //             </label>
    //         </div>
    //     </label>
    // </div>
    <div>
      <input type="checkbox" id="sign-up-modal" className="modal-toggle" />
      <div className="modal">

        <div className="modal-box">
          <label htmlFor="sign-up-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <div className="grid grid-cols-1 gap-5 mt-6 mb-3">
            <label
              onClick={ handleRecruiter }
              htmlFor="sign-up-modal"
              className="btn btn-outline btn-info"
            >
              Recruiter
            </label>
            <label
              onClick={ handleJobSeeker }
              htmlFor="sign-up-modal"
              className="btn btn-outline btn-info"
            >
              JobSeeker
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
