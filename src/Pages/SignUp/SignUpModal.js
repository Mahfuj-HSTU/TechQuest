import React from 'react';
import { Link } from 'react-router-dom';

const SignUpModal = () => {
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
                    <Link to='/recruiter' className="btn  btn-outline btn-info w-full mb-5">Recruiter</Link>
                    <Link to='/jobSeeker' className="btn  btn-outline btn-info w-full">Job Seeker</Link>
                    <div className="modal-action">
                        <label htmlFor="sign-up-modal" className="btn">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpModal;


