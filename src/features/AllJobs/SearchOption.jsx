import React from 'react';

const SearchOption = () => {
    return (
        <div className='my-10 p-5 flex justify-evenly gap-5 border rounded-lg shadow-lg'>
            <div>
                <input type="text" className='input border' placeholder='Job Title' />
            </div>
            <div className='divider-horizontal bg-gray-300 w-1'></div>
            <div>
                <input type="text" className='input border' placeholder='Country' />
            </div>
            <div className='divider-horizontal bg-gray-300 w-1'></div>
            <div>
                <p>Choose an option</p>
                {/* <input type="text" placeholder='Job Title' /> */}
            </div>
        </div>
    );
};

export default SearchOption;