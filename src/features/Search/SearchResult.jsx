import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SearchResult = () => {
    const search = useSelector(state => state.searchReducer.searchData);

    // console.log((search));
    return (
        <div>
            {search && <div className='border border-black mt-2 rounded-md p-3'>
                <h1>Search Result</h1>
                {
                    search.map(data => {
                        const { _id, jobTitle, jobStatus, jobType, location, salary, salaryCurrency, experience, mustSkills, optionalSkills, openings } = data;

                        return (
                            <div key={_id} className="text-left border rounded-lg my-5 p-5 w-3/4 hover:shadow-lg">
                                {openings <= 1 ? <small>{openings} position</small>
                                    :
                                    <small>{openings} positions</small>
                                }
                                <br />
                                <Link state={data}
                                    to={`/job-details/${_id}`} className='text-xl font-semibold text-cyan-600'>{jobTitle}</Link>
                                <div className='flex flex-col md:flex-row justify-start  md:gap-0'>
                                    <small className='m-1'>{location}</small>
                                    <small className='m-1'>{jobStatus}</small>
                                    <small className='m-1'>{jobType}</small>
                                </div>
                                <div className=''>
                                    <small className='m-1'>{salary}</small>
                                    <small className='m-1'>{salaryCurrency}</small>
                                </div>
                                {/* .slice(0,250) */}
                                <div className='flex gap-3 w-auto p-1 font-semibold text-gray-400'>
                                    <p className='border rounded-3xl text-sm p-1 text-sky-800'>{mustSkills}</p>
                                    <p className='border rounded-3xl text-sm p-1'>{optionalSkills}</p>
                                    <p className='border rounded-3xl text-sm p-1'>{experience}</p>
                                </div>
                            </div>)
                    })
                }
            </div>}
        </div>
    );
};

export default SearchResult;