import React from 'react';

const SearchOptionView = () => {

    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const country = form.country.value;
        const status = form.status.value;
        const searchData = { title, country, status}
        console.log(searchData);
    }

    return (
        <form onSubmit={handleSearch}>
            <div className='mt-10 p-5 border rounded-lg shadow-lg'>
                <div className='flex justify-evenly gap-5 '>

                    <div>
                        <input name='title' type="text" className='input border' placeholder='Job Title' />
                    </div>
                    <div className='divider-horizontal bg-gray-300 w-1'></div>
                    <div>
                        <input name='country' type="text" className='input border' placeholder='Country' />
                    </div>
                    <div className='divider-horizontal bg-gray-300 w-1'></div>
                    <div>
                        <select
                        name='status'
                            className="select select-bordered w-full "
                        >
                            <option disabled>
                                Select job status
                            </option>
                            <option>On Site</option>
                            <option>Remote</option>
                            <option>Hybrid</option>
                        </select>
                        {/* <input type="text" placeholder='Job Title' /> */}
                    </div>
                </div>
            </div>
            <input type="submit" name='submit' value='search' className='btn mt-2' />
        </form>
    );
};

export default SearchOptionView;