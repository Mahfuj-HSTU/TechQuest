import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllJobs } from '../../../features/AllJobs/AllJobsSlice';
import { fetchAllUsers } from '../../../features/AllUsers/AllUsersSlice';
import { FaUsers, FaUserTie, FaUserGraduate } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';

import "../../../assets/customers/bg-image.jfif"
import CountUp from 'react-countup';

const Customers = () => {
    const users = useSelector((state) => state.usersReducer.users);
    const jobs = useSelector((state) => state.jobsReducer.jobs);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchAllUsers());
        dispatch(fetchAllJobs());
    }, [dispatch]);

    const jobSeeker = users.filter(
        user => {
            return (user.role === 'jobSeeker');
        }
    );
    const recruiter = users.filter(
        user => {
            return (user.role === 'recruiter');
        }
    );
    // console.log( recruiter.length );

    // const array = [ users.length, jobSeeker.length, recruiter.length, jobs.length ]
    // console.log( array );

    return (
        // <div data-aos="fade-up" className='  my-16'>
        //     <h2 className='uppercase text-3xl mb-10 font-semibold'>Happy Customers</h2>
        //     <div className='bg-[url("https://web.protildo.com/wp-content/uploads/elementor/thumbs/Background-Verification-Process-in-MNCs-pkhfove0iprn15hkdvkd47nc3lxv2u4afg54pczxbk.jpeg")] h-full lg:h-96 w-full bg-cover bg-center p-24  grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 justify-items-center lg:px-0 px-4'>
        //         <div className="card lg:w-[300px] w-[350px] bg-base-100 shadow-[inset_0_-1px_5px_rgba(0,0,0,0.5)] mb-3">
        //             <div className="card-body">
        //                 <h2 className="card-title"><FaUsers />Total Created Account</h2>
        //                 <h1 className='text-3xl'>{users.length}</h1>
        //             </div>
        //         </div>
        //         <div className="card lg:w-[300px] w-[350px] bg-base-100 shadow-[inset_0_-1px_5px_rgba(0,0,0,0.5)] mb-3">
        //             <div className="card-body">
        //                 <h2 className="card-title"><FaUserTie />Total Employees</h2>
        //                 <h1 className='text-3xl'>{jobSeeker.length}</h1>
        //             </div>
        //         </div>
        //         <div className="card lg:w-[300px] w-[350px] bg-base-100 shadow-[inset_0_-1px_5px_rgba(0,0,0,0.5)] mb-3">
        //             <div className="card-body">
        //                 <h2 className="card-title"><FaUserGraduate />Total Recruiter</h2>
        //                 <h1 className='text-3xl'>{recruiter.length}</h1>
        //             </div>
        //         </div>
        //         <div className="card lg:w-[300px] w-[350px] bg-base-100 shadow-[inset_0_-1px_5px_rgba(0,0,0,0.5)] mb-1 lg:mb-3">
        //             <div className="card-body">
        //                 <h2 className="card-title"><MdWork />Total Posted Jobs</h2>
        //                 <h1 className='text-3xl'>{jobs.length}</h1>
        //             </div>
        //         </div>
        //     </div>
        // </div >

        <div data-aos="fade-up" className='my-16'>
            <h2 className='uppercase text-4xl font-bold mb-10'>Happy Customers</h2>
            <div className=' bg-gradient-to-b from-slate-800 to-slate-700 h-full lg:h-96 w-full bg-cover bg-center relative'>
                <img src="https://web.protildo.com/wp-content/uploads/elementor/thumbs/Background-Verification-Process-in-MNCs-pkhfove0iprn15hkdvkd47nc3lxv2u4afg54pczxbk.jpeg" alt="" className=' w-full h-full object-cover absolute mix-blend-overlay' />
                <div data-aos="fade-up" className='p-24 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 justify-items-center lg:px-0 px-4'>
                    <div data-aos="fade-up" className="card grid lg:w-[300px] w-[350px] text-white mb-3">
                        <div className="card-body items-center">
                            <h1 className=' card-title text-7xl'><FaUsers className='text-warning text-5xl' /> <CountUp start={0} end={users.length} duration={2} delay={0} /></h1>
                            <h2 className=" text-xl">Total Created Account</h2>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="card lg:w-[300px] w-[350px] text-white mb-3">
                        <div className="card-body items-center">
                            <h1 className=' card-title text-7xl'><FaUserTie className='text-warning text-5xl' /> <CountUp start={0} end={jobSeeker.length} duration={2} delay={0} /></h1>
                            <h2 className=" text-xl">Total Employees</h2>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="card lg:w-[300px] w-[350px] text-white mb-3">
                        <div className="card-body items-center">
                            <h1 className=' card-title text-7xl'><FaUserGraduate className='text-warning text-5xl' /> <CountUp start={0} end={recruiter.length} duration={2} delay={0} /></h1>
                            <h2 className=" text-xl">Total Recruiters</h2>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="card lg:w-[300px] w-[350px] text-white mb-1 lg:mb-3">
                        <div className="card-body items-center">
                            <h1 className=' card-title text-7xl'><MdWork className='text-warning text-5xl' /> <CountUp start={0} end={jobs.length} duration={2} delay={0} /></h1>
                            <h2 className=" text-xl">Total Posted Jobs</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Customers;
