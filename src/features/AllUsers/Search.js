import React from 'react';

const Search = ( { filteredSearch, setSelected, handleDelete } ) => {
    // console.log( filteredSearch )
    return (
        <div className='mb-9 border-2 shadow-lg p-6 bg-teal-200'>
            <h2 className='text-3xl mb-4'>Search Result</h2>
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

                        filteredSearch.map( user =>
                            <tr className='border-2'>
                                <td className='border-2 font-semibold'><label htmlFor="my-modal" className="link link-primary" onClick={ () => setSelected( user ) }>{ user.name }</label></td>
                                <td className='border-2'>{ user.email }</td>
                                <td className='border-2'>{ user.role }</td>
                                <td className='border-2 text-center'>
                                    <button onClick={ () => handleDelete( user ) } className='btn btn-outline btn-error rounded-lg'>Delete</button>
                                </td>
                            </tr> )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Search;
