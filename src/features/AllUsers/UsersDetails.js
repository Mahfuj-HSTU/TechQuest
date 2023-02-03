import React from 'react';

const UsersDetails = ( { selected } ) => {
    // console.log( selected );
    const { name, email, address, photoUrl, experience, institute, role, company } = selected

    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="card w-full">
                        <figure><img src={ photoUrl } alt="Profile" /></figure>
                        <div className="card-body text-start">
                            <h2 className="card-title">Name: { name }</h2>
                            <p> <span className='font-semibold'>Email:</span>  { email }</p>
                            <p> <span className='font-semibold'>Address:</span>  { address }</p>
                            {
                                company ? <p> <span className='font-semibold'>Company:</span>  { company }</p> : <p> <span className='font-semibold'>Experience:</span>  { experience }</p>
                            }
                            {
                                institute && <p> <span className='font-semibold'>Institute:</span>  { institute }</p>
                            }
                            <p> <span className='font-semibold'>Role:</span>  { role }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersDetails;
