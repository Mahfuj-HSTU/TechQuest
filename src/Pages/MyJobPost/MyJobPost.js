import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { ServerLink } from '../../Hooks/useServerLink';

import JobPostCard from './JobPostCard';

const MyJobPost = () => {
    const { user } = useContext( AuthContext );

    const { data: MyJobPost = [], refetch } = useQuery( {
        queryKey: [ 'MyJobPost', user?.email ],
        queryFn: async () => {
            const res = await fetch( `${ ServerLink }/recruiterJobPosts?email=${ user?.email }` )
            const data = await res.json()
            return data
        }
    } );


    return (
        <div>
            <h3 className='text-4xl font-bold text-center my-5'>Search for applicants by posting</h3>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 mx-5 gap-5'>
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
                        <figure><img src="https://quickbooks.intuit.com/oidam/intuit/sbseg/en_ca/blog/images/part-time-vs-full-time-photo-qbo-ca-desktop.jpeg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Candidates</h2>
                            <p>If you hit the target every time, it’s too near or too big.</p>
                            <div className="card-actions justify-end">
                                <Link to="/recruiter/all-job-seekers"><button className="btn btn-primary">See Candidates</button></Link>
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
                        <figure><img src="https://surejob.in/wp-content/uploads/2022/12/job-posting-sites-1024x585.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Search Jobs</h2>
                            <p>There is no greater thing you can do with your life and your work than follow your passions in a way that serves the world and you.</p>
                            <div className="card-actions justify-end">
                                <Link to="/all-jobs"><button className="btn btn-warning">Search Jobs</button></Link>
                                {/* <label className="text-lg cursor-pointer" htmlFor="my-modal">Edit Profile</label> */ }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyJobPost;
