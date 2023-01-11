import React from 'react';
import skipLogo from '../../../assets/brandLogo/skip.svg'
import booking from '../../../assets/brandLogo/booking.svg'
import dapper from '../../../assets/brandLogo/dapper.svg'
import deloitte from '../../../assets/brandLogo/deloitte.svg'
import brex from '../../../assets/brandLogo/brex.svg'
import zalando from '../../../assets/brandLogo/zalando.svg'

const LookingJobs = () => {
    return (
        <div className=' my-12'>
            <h1 className=' text-2xl font-semibold text-blue-500'>Looking for tech jobs in Canada, the US or Europe?</h1>
            <button className="mt-8 rounded-3xl btn btn-outline font-semibold text-blue-500">Apply for jobs now</button>
            <div className=' grid lg:grid-cols-7 justify-items-center mt-12'>
                <div>
                    <h3 className=' font-bold text-md'>Trusted by 600+ companies</h3>
                </div>
                <div className='flex justify-center'>
                    <img src={skipLogo} alt="" />
                </div>
                <div className='flex justify-center'>
                    <img src={booking} alt="" />
                </div>
                <div className='flex justify-center'>
                    <img src={dapper} alt="" />
                </div>
                <div className='flex justify-center'>
                    <img src={deloitte} alt="" />
                </div>
                <div className='flex justify-center'>
                    <img src={brex} alt="" />
                </div>
                <div className='flex justify-center'>
                    <img src={zalando} alt="" />
                </div>

            </div>
        </div>
    );
};

export default LookingJobs;