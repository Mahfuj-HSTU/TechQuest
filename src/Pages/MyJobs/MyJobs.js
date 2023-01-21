import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import toast from 'react-hot-toast';
const MyJobs = () => {


    const { data: doctors, isLoading, refetch } = useQuery( {
        queryKey: [ 'doctors' ],
        queryFn: async () => {
            try {
                const res = await fetch( '', {
                    headers: {
                        authorization: `bearer ${ localStorage.getItem( 'accessToken' ) }`
                    }
                } );
                const data = await res.json();
                return data;
            }
            catch ( error ) {
            }
        }
    } );




    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    return (
        <div>
            <h1>My Jobs</h1>
            <h2 className="text-3xl">Manage Jobs: 0</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyJobs;
