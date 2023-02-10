import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { ServerLink } from '../../../Hooks/useServerLink';

const Notification = () => {
    const { user } = useContext(AuthContext);
    // console.log( user )
    const { data: Applicants = [], refetch } = useQuery({
        queryKey: ['Applicants', user?.email],
        queryFn: async () => {
            const res = await fetch(`${ServerLink}/applicant?email=${user?.email}`)
            const data = await res.json()
            // console.log(data)
            return data
        }
    });

    const handleNotification = email => {
        fetch(`${ServerLink}/applicant/${email}`, {
            method: "PUT",
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    refetch()
                }
            })
    }

    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="inline-flex cursor-pointer m-1">
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        {
                            Applicants.length !== 0 && (
                                <>
                                    <span className="badge badge-xs badge-primary indicator-item"></span>
                                </>
                            )
                        }
                    </div>
                </button>
            </label>
            <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-box w-56"
            >
                <li>
                    <div className="flex items-center p-2">
                        <div className="text-start font-semibold">
                            {
                                Applicants.length !== 0 && (
                                    <>
                                        <p onClick={() => handleNotification(user?.email)} className="text-xs">
                                            <span className='text-success'>
                                                {Applicants.length} people applied for your job.

                                            </span>

                                        </p>
                                    </>
                                )
                            }

                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Notification;