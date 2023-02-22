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
                    <h3 className="text-xl font-bold overline underline text-info">{title}</h3>
                    <p className="py-4  text-black">Instructors: {instructor}</p>

                    <p className='py-4 text-primary font-bold'>Price : {price}</p>
                    <p className="py-4 text-sm  ">{description }</p>
                </div>
            </div>
        </>
        </div>
    );
};

export default EnrolmentModal;