import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ServerLink } from "../../Hooks/useServerLink";
import { fetchAllUsers } from "./AllUsersSlice";
import Search from "./Search";
import UsersDetails from "./UsersDetails";
// import { Link } from "react-router-dom";

const AllUsersView = () => {
    const users = useSelector( ( state ) => state.usersReducer.users );
    const [ selected, setSelected ] = useState( null )
    const [ search, setSearch ] = useState( '' )
    const dispatch = useDispatch();


    useEffect( () => {
        dispatch( fetchAllUsers() );
    }, [ dispatch ] );


    const handleDelete = user => {
        const agree = window.confirm( `Are sure, you want to delete: ${ user.name }` )
        if ( agree ) {
            fetch( `${ ServerLink }/users/${ user._id }`, {
                method: 'DELETE'
            } )
                .then( res => res.json() )
                .then( data => {
                    // console.log( data )
                    if ( data.deletedCount > 0 ) {
                        alert( 'user deleted successfully.' )
                    }
                } )
        }
    }

    const handleSearch = ( e ) => {
        e.preventDefault();
        const form = e.target;
        const search = form.search.value;
        // console.log( search );
        setSearch( search )
    }

    const filteredSearch = users.filter(
        user => {
            return (
                user.name?.toLowerCase().includes( search.toLowerCase() ) ||
                user.email?.includes( search ) ||
                user.role?.toLowerCase().includes( search.toLowerCase() )
            );
        }
    );


    return (
        <div className="mt-20  mx-3 md:mx-12 lg:mx-10 ">
            <div className='lg:flex lg:justify-between mb-5 py-2 px-4 bg-slate-300 rounded-lg'>
                <h2 className='text-4xl mb-4'>All Users</h2>
                <form onSubmit={ handleSearch } className="flex justify-between gap-4 ">
                    <input type="text" placeholder="search" name='search' className="input input-bordered lg:max-w-2xl sm:max-w-lg rounded-xl sm:mb-5" />
                    <input className="btn btn-primary rounded-xl " type="submit" value="Submit" />
                </form>
            </div>
            <div>
                <div>
                    { search.length !== 0 &&
                        <Search filteredSearch={ filteredSearch } setSelected={ setSelected } handleDelete={ handleDelete }></Search>
                    }
                </div>

                <table className="table table-compact w-full border-2 shadow-lg">
                    <thead className="text-center">
                        <tr>
                            <th>Name</th>
                            <th className="hidden lg:block">Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map( user =>
                                <tr key={ user?._id } className='border-2'>
                                    <td className='border-2 font-semibold'><label htmlFor="my-modal" className="link link-primary" onClick={ () => setSelected( user ) }>{ user.name }</label></td>
                                    <td className='border-none mt-2 hidden lg:block'>{ user.email }</td>
                                    <td className='border-2'>{ user.role }</td>
                                    <td className='border-2 text-center'>
                                        <button onClick={ () => handleDelete( user ) } className='btn btn-outline btn-error rounded-lg'>Delete</button>
                                    </td>
                                </tr> )
                        }
                    </tbody>
                </table>
                {
                    selected &&
                    <UsersDetails selected={ selected }></UsersDetails>
                }
            </div>
        </div >
    );
};

export default AllUsersView;
