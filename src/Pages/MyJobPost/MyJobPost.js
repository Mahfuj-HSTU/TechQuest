import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

import JobPostCard from './JobPostCard';

const MyJobPost = () => {
    const { user } = useContext( AuthContext );

    const { data: MyJobPost = [], refetch } = useQuery( {
        queryKey: [ 'MyJobPost', user?.email ],
        queryFn: async () => {
            const res = await fetch( `http://localhost:5000/recruiterJobPosts?email=${ user?.email }` )
            const data = await res.json()
            return data
        }
    } );


    return (
        <div className='lg:mt-24 mt-20 grid lg:grid-cols-4 md:grid-cols-3 gap-5'>
            <div className='lg:col-span-3 md:col-span-2 text-left'>
                <>
                    {
                        MyJobPost.length !== 0 ? (
                            <>
                                {
                                    MyJobPost.map( jobPost => <JobPostCard key={ jobPost._id } jobPost={ jobPost } refetch={ refetch }></JobPostCard> )
                                }
                            </>
                        ) : <h1 className=' text-4xl font-semibold text-center'>No post done yet</h1>
                    }
                </>
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
                            {/* <label className="text-lg cursor-pointer" htmlFor="my-modal">Edit Profile</label> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyJobPost;
