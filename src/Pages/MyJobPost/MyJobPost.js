import React, { useEffect, useState } from 'react';

import JobPostCard from './JobPostCard';

const MyJobPost = () => {
    const [MyJobPost, setMyJobPost] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/recruiterJobPosts')
            .then(res => res.json())
            .then(data => setMyJobPost(data))
    }, [])




    return (
        <div className='lg:mt-24 mt-20 grid lg:grid-cols-4 md:grid-cols-3 gap-4'>
            <div className='lg:col-span-3 md:col-span-2 text-left'>
                {
                    MyJobPost.map(jobPost => <JobPostCard key={MyJobPost._id} jobPost={jobPost}></JobPostCard>)
                }
            </div>
            <div className='md:col-span-1 hidden lg:inline md:inline'>
                <div className="card bg-base-100 shadow-xl text-left">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Travel!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card lg:w-96 bg-base-100 shadow-xl my-8">
                    <div className="card-body">
                        <h2 className="card-title">Job Search</h2>
                        <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis.</p>
                        <div className="card-actions justify-end">
                            <p className='text-info text-left'>See More</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl text-left my-8">
                    <figure><img src="https://www.offlinepost.gr/wp-content/uploads/2022/09/flat-world-music-day-background_23-2149386277.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Play Music</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-warning">Play Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyJobPost;