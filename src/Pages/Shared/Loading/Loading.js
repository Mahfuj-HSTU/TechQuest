import React from 'react';

const Loading = () => {
    return (
        <div className="flex justify-center items-center">
            {/* <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
            <span className="visually-hidden">...</span>
        </div> */}

            <div className=" w-20 h-20 mt-16 border-4 border-dashed rounded-full animate-spin border-primary"></div>
        </div>
    );
};

export default Loading;