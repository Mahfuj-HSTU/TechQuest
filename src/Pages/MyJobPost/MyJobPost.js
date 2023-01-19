import React from 'react';

const MyJobPost = () => {
    return (
        <div className=' my-14 grid lg:grid-cols-4 md:grid-cols-2 gap-4'>
            <div className='lg:col-span-3 text-left'>
                <div className="container flex flex-col w-full  p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                            </div>
                            <div>
                                <h4 className="font-bold">Leroy Jenkins</h4>
                                {/* <span className="text-xs dark:text-gray-400">2 days ago</span> */}
                            </div>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                        <h1 className='text-2xl font-semibold text-info'>Company Name</h1>
                        <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                        <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                    </div>
                </div>
            </div>
            <div className=' hidden lg:inline md:inline'>
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
            </div>
        </div>
    );
};

export default MyJobPost;