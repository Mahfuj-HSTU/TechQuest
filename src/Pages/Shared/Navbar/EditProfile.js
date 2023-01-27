import React from 'react';
import { useContext } from 'react';
import { FaEdit, FaPowerOff, } from "react-icons/fa"
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const EditProfile = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    };

    return (
        <li tabIndex={1}>
            <a>
                <div className="avatar">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://source.unsplash.com/100x100/?portrait" />
                    </div>
                </div>

            </a>
            <ul className="relative">
                <div className=" p-3 space-y-2 w-60 bg-slate-200 fixed top-10 right-40">
                    <div className="flex items-center p-2 space-x-4">
                        <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-full bg-gray-500" />
                        <div>
                            <h2 className="text-lg font-semibold">Loreyan Jacks</h2>
                            <span className="flex items-center space-x-1">
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline">{user?.email}</a>
                            </span>
                        </div>
                    </div>
                    <div className="divide-y divide-gray-400">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li>
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <div className=" text-gray-500">
                                        <FaEdit></FaEdit>
                                    </div>
                                    <span>Edit Profile</span>
                                </a>
                            </li>

                        </ul>
                        <ul className="pt-4 pb-2 space-y-1 text-sm">
                            <li>
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <div className=" text-gray-500">
                                        <FaPowerOff></FaPowerOff>
                                    </div>
                                    <span onClick={handleLogOut}>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </ul>
        </li>
    );
};

export default EditProfile;