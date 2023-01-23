import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApplicationData } from './ApplyJobSlice';

const ApplyJobView = () => {
    const { isLoading, error, applications } = useSelector(state => state.applicationReducer);
    console.log(applications);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchApplicationData())
    }, [dispatch])

    return (
        <div className='my-20'>
            <h1>MY JOBS</h1>
            {isLoading && <h1>Loading..</h1>}
            {error && <h1>{error}</h1>}
            {applications && applications?.map(app => {
                return <div key={app._id}>
                    {app.email}
                </div>
            })}
        </div>
    );
};

export default ApplyJobView;