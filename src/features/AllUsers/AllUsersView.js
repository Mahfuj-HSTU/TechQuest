import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "./AllUsersSlice";
import UsersDetails from "./UsersDetails";
// import { Link } from "react-router-dom";

const AllUsersView = () => {
    const users = useSelector( ( state ) => state.usersReducer.users );
    const [ selected, setSelected ] = useState( null )
    // console.log( users );

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch( fetchAllUsers() );
    }, [ dispatch ] );

    return (
        <div className="mt-20 mx-10 ">
            <h2 className='text-4xl mb-4'>All Users</h2>
            <table className="table table-compact w-full border-2 ">
                <thead className="text-center">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        users.map( user =>
                            <tr className='border-2'>
                                <td className='border-2 font-semibold'><label htmlFor="my-modal" className="link link-primary" onClick={ () => setSelected( user ) }>{ user.name }</label></td>
                                <td className='border-2'>{ user.email }</td>
                                <td className='border-2'>{ user.role }</td>
                                <td className='border-2 text-center'>
                                    <button className='btn btn-outline btn-error rounded-lg'>Delete</button>
                                </td>
                            </tr> )
                    }
                </tbody>
            </table>
            <UsersDetails selected={ selected }></UsersDetails>
        </div >
    );
};

export default AllUsersView;
