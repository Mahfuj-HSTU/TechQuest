import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearch } from './SearchOptionSlice';
import SearchResult from './SearchResult';

const SearchOptionView = () => {

    const search = useSelector(state => state.searchReducer.searchData);
    // console.log(search.length);

    const dispatch = useDispatch();
    // console.log(dispatch);

    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const country = form.country.value;
        const status = form.status.value;
        const searchData = { title, country, status }
        // console.log(searchData);
        dispatch(fetchSearch(searchData))
    }

    return (
        <form onSubmit={handleSearch}>
            <div className='mt-10 p-5 border rounded-lg shadow-lg text-left'>
                <div className='flex flex-col justify-evenly  gap-2 md:flex-row'>
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
                    </div>
                </div>
            </div>
            <input type="submit" name='submit' value='search' className='btn mt-2' />
            <div>
                {search.length !== 0 && <SearchResult />}
            </div>
        </form>
    );
};

export default SearchOptionView;