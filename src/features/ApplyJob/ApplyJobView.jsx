import React from 'react';
import { useSelector } from 'react-redux';

const ApplyJobView = () => {
    const application = useSelector(state => state.applicationReducer.apply);
    console.log(application);
    return (
        <div>
            apply
        </div>
    );
};

export default ApplyJobView;