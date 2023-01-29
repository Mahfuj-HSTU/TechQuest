import React from 'react';
import { useContext } from 'react';
import { FaEdit, FaPowerOff, } from "react-icons/fa"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { useState } from 'react';
import { useEffect } from 'react';

const EditProfile = () => {
    const [ theme, setTheme ] = useState( "cupcake" )
    const { user, logOut } = useContext( AuthContext );
    // console.log( user )
    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    };

    const handleMode = () => {
        // console.log( 'clicked' );
        setTheme( theme === 'luxury' ? 'cupcake' : 'luxury' );
    }
    useEffect( () => {
        document.querySelector( 'html' ).setAttribute( 'data-theme', theme );
    }, [ theme ] );

    return (
        <li tabIndex={ 1 }>
            <Link>
                <div className="avatar">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://source.unsplash.com/100x100/?portrait" alt='' />
                    </div>
                </div>

            </Link>
            <ul className="relative">
                <div className=" p-3 pb-5 space-y-2 w-64 bg-slate-200 font-semibold fixed top-10 lg:right-40 left-16 lg:left-auto rounded-lg">
                    <div className="flex items-center p-2 space-x-4">
                        <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-full bg-gray-500" />
                        <div className='text-start'>
                            <h2 className="text-lg font-semibold">{ user?.displayName } ? { user?.displayName } : Name not found</h2>
                            <span className="">
                                <Link rel="noopener noreferrer" href="#" className="text-xs hover:underline">{ user?.email }</Link>
                            </span>
                        </div>
                    </div>
                    <div className="divide-y divide-gray-600">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li>
                                <Link rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <div className=" text-gray-500">
                                        <FaEdit></FaEdit>
                                    </div>
                                    <span className='text-lg'>Edit Profile</span>
                                </Link>
                            </li>

                        </ul>
                        <ul className="pt-4 pb-2 space-y-1 text-sm">
                            <li>
                                <Link rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <div className=" text-gray-500">
                                        <FaPowerOff></FaPowerOff>
                                    </div>
                                    <span className='text-lg' onClick={ handleLogOut }>Logout</span>
                                </Link>
                            </li>
                        </ul>
                        <input onClick={ handleMode } type="checkbox" className="toggle text-start" />
                    </div>
                </div>
            </ul>
        </li>
    );
};

export default EditProfile;
