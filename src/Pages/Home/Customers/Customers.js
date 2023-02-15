import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllJobs } from '../../../features/AllJobs/AllJobsSlice';
import { fetchAllUsers } from '../../../features/AllUsers/AllUsersSlice';
import { FaUsers, FaUserTie, FaUserGraduate } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';

const Customers = () => {
    const users = useSelector( ( state ) => state.usersReducer.users );
    const jobs = useSelector( ( state ) => state.jobsReducer.jobs );
    const dispatch = useDispatch();


    useEffect( () => {
        dispatch( fetchAllUsers() );
        dispatch( fetchAllJobs() );
    }, [ dispatch ] );

    const jobSeeker = users.filter(
        user => {
            return ( user.role === 'jobSeeker' );
        }
    );
    const recruiter = users.filter(
        user => {
            return ( user.role === 'recruiter' );
        }
    );
    // console.log( recruiter.length );

    // const array = [ users.length, jobSeeker.length, recruiter.length, jobs.length ]
    // console.log( array );

    return (
        <div className='my-16 '>
            <h2 className='uppercase text-3xl mb-10 font-semibold'>Happy Customers</h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 justify-items-center lg:px-0 px-4'>
                <div className="card lg:w-[300px] w-[350px] bg-base-100 shadow-[inset_0_-1px_5px_rgba(0,0,0,0.5)] mb-3">
                    <div className="card-body">
                        <h2 className="card-title"><FaUsers />Total Created Account</h2>
                        <h1 className='text-3xl'>{ users.length }</h1>
                    </div>
                </div>
                <div className="card lg:w-[300px] w-[350px] bg-base-100 shadow-[inset_0_-1px_5px_rgba(0,0,0,0.5)] mb-3">
                    <div className="card-body">
                        <h2 className="card-title"><FaUserTie />Total Employees</h2>
                        <h1 className='text-3xl'>{ jobSeeker.length }</h1>
                    </div>
                </div>
                <div className="card lg:w-[300px] w-[350px] bg-base-100 shadow-[inset_0_-1px_5px_rgba(0,0,0,0.5)] mb-3">
                    <div className="card-body">
                        <h2 className="card-title"><FaUserGraduate />Total Recruiter</h2>
                        <h1 className='text-3xl'>{ recruiter.length }</h1>
                    </div>
                </div>
                <div className="card lg:w-[300px] w-[350px] bg-base-100 shadow-[inset_0_-1px_5px_rgba(0,0,0,0.5)] mb-1">
                    <div className="card-body">
                        <h2 className="card-title"><MdWork />Total Posted Jobs</h2>
                        <h1 className='text-3xl'>{ jobs.length }</h1>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Customers;
