import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const EditProfileModal = () => {
    const { user } = useContext(AuthContext);
    const [loginUser, setLoginUser] = useState({});


    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setLoginUser(data))
    }, [user?.email])

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleEditProfile = (data) => {
        const editProfile = {
            name: data.FullName,
            email: user?.email,
            PresentAddress: data.PresentAddress,
            ParmanentAddress: data.ParmanentAddress,
            mobile: data.mobile

        };
        // console.log(editProfile)

        fetch(`http://localhost:5000/users/${user?.email}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editProfile)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success(`Your Profile Updated successfully`)
                }
            })
    }
    return (
        <div className="my-20 py-9 px-6 lg:w-10/12 md:w-full mx-auto bg-base-100 shadow-2xl rounded-3xl">
            <h5 className="text-2xl font-semibold mb-10">
                Update Your Profile Now.
            </h5>
            <form onSubmit={handleSubmit(handleEditProfile)}>

                <div className="form-control mb-4 w-full ">
                    <label className="label font-semibold">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="text"
                        {...register("email")}
                        defaultValue={loginUser?.email}
                        className="input input-bordered w-full "
                        readOnly
                    />
                    {errors.openings && (
                        <span className="text-red-500 font-semibold">
                            This field is required
                        </span>
                    )}
                </div>
                <div className="form-control w-full ">
                    <label className="label font-semibold">
                        <span className="label-text">FullName</span>
                    </label>
                    <input
                        type="text"
                        {...register("FullName", { required: true })}
                        defaultValue={loginUser?.name}
                        className="input input-bordered w-full "
                    />
                    {errors.FullName && (
                        <span className="text-red-500 font-semibold">
                            This field is required
                        </span>
                    )}
                </div>
                <div className="form-control w-full ">
                    <label className="label font-semibold">
                        <span className="label-text">Present Address</span>
                    </label>
                    <input
                        type="text"
                        {...register("PresentAddress", { required: true })}
                        defaultValue={loginUser?.PresentAddress}
                        className="input input-bordered w-full "
                    />
                    {errors.PresentAddress && (
                        <span className="text-red-500 font-semibold">
                            This field is required
                        </span>
                    )}
                </div>
                <div className="form-control mb-4 w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Permanent address</span>
                    </label>
                    <input
                        type="text"
                        {...register("ParmanentAddress", { required: true })}
                        defaultValue={loginUser?.ParmanentAddress}
                        className="input input-bordered w-full "
                    />
                    {errors.ParmanentAddress && (
                        <span className="text-red-500 font-semibold">
                            This field is required
                        </span>
                    )}
                </div>
                <div className="form-control mb-4 w-full ">
                    <label className="label font-semibold">
                        <span className="label-text">Mobile</span>
                    </label>
                    <input
                        type="text"
                        {...register("mobile", { required: true })}
                        defaultValue={loginUser?.mobile}
                        className="input input-bordered w-full "
                    />
                    {errors.mobile && (
                        <span className="text-red-500 font-semibold">
                            This field is required
                        </span>
                    )}
                </div>
                <input
                    className="btn bg-[#0675CE] hover:bg-blue-500 w-1/5 border-0 text-white mt-4"
                    type="submit"
                    value="Update"
                />
            </form>
        </div>
    );
};

export default EditProfileModal;