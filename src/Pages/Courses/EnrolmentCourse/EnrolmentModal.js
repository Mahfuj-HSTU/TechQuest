import React from 'react';

const EnrolmentModal = ({course}) => {
    const {title,instructor,description,price,img} = course;
    console.log(course)
    return (
        <div>
              <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal text-start">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <figure><img src={img} alt="course" /></figure>
                    <h3 className="text-lg font-bold overline underline text-indigo-300">{title}</h3>
                    <p className="py-4 leading-3 text-amber-500">Instructors: {instructor}</p>
                    <p className="py-4 leading-3"></p>
                    <p className='py-4 leading-3'>Price : {price}</p>
                    <p className="py-4 text-sm ">{description }</p>
                </div>
            </div>
        </>
        </div>
    );
};

export default EnrolmentModal;