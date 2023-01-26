import React from 'react';

const Review = () => {
    return (
        <div className="carousel h-56 w-full mb-16">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5'>
                    <div className="container flex flex-col w-full max-w-lg p-2 mx-auto divide-y rounded-md divide-gray-700 border-2 ">
                        <div className="p-3">
                            <div className="flex space-x-4">
                                <div>
                                    <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                                </div>
                                <div className='text-left'>
                                    <h4 className="font-bold">Leroy Jenkins</h4>
                                    <span className="text-xs ">2 days ago</span>
                                </div>
                            </div>
                            <div className="flex ml-16 rating rating-sm">
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                        <div className="p-3 space-y-2 text-sm ">
                            <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae.</p>
                        </div>
                    </div>
                    <div className="container flex flex-col w-full max-w-lg p-2 mx-auto divide-y rounded-md divide-gray-700 border-2 ">
                        <div className="p-3">
                            <div className="flex space-x-4">
                                <div>
                                    <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                                </div>
                                <div className='text-left'>
                                    <h4 className="font-bold">Leroy Jenkins</h4>
                                    <span className="text-xs ">2 days ago</span>
                                </div>
                            </div>
                            <div className="flex ml-16 rating rating-sm">
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" defaultChecked />
                            </div>
                        </div>
                        <div className="p-3 space-y-2 text-sm ">
                            <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae.</p>
                        </div>
                    </div>
                    <div className="container flex flex-col w-full max-w-lg p-2 mx-auto divide-y rounded-md divide-gray-700 border-2 ">
                        <div className=" p-3">
                            <div className="flex space-x-4">
                                <div>
                                    <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                                </div>
                                <div className='text-left'>
                                    <h4 className="font-bold">Leroy Jenkins</h4>
                                    <span className="text-xs ">2 days ago</span>
                                </div>
                            </div>
                            <div className="flex ml-16 rating rating-sm">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                        <div className="p-3 space-y-2 text-sm ">
                            <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae.</p>
                        </div>
                    </div>
                    <div className="container flex flex-col w-full max-w-lg p-2 mx-auto divide-y rounded-md divide-gray-700 border-2 ">
                        <div className=" p-3">
                            <div className="flex space-x-4">
                                <div>
                                    <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                                </div>
                                <div className='text-left'>
                                    <h4 className="font-bold">Leroy Jenkins</h4>
                                    <span className="text-xs ">2 days ago</span>
                                </div>
                            </div>
                            <div className="flex ml-16 rating rating-sm">
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" defaultChecked />
                            </div>
                        </div>
                        <div className="p-3 space-y-2 text-sm ">
                            <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae.</p>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                    <a href="#slide2" className="btn btn-circle btn-outline">❮</a>
                    <a href="#slide2" className="btn btn-circle btn-outline">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1  gap-5'>
                    <div className="container flex flex-col w-full max-w-lg p-2 mx-auto divide-y rounded-md divide-gray-700 border-2 ">
                        <div className="p-3">
                            <div className="flex space-x-4">
                                <div>
                                    <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                                </div>
                                <div className='text-left'>
                                    <h4 className="font-bold">Leroy Jenkins</h4>
                                    <span className="text-xs ">2 days ago</span>
                                </div>
                            </div>
                            <div className="flex ml-16 rating rating-sm">
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                        <div className="p-3 space-y-2 text-sm ">
                            <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae.</p>
                        </div>
                    </div>
                    <div className="container flex flex-col w-full max-w-lg p-2 mx-auto divide-y rounded-md divide-gray-700 border-2 ">
                        <div className=" p-3">
                            <div className="flex space-x-4">
                                <div>
                                    <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                                </div>
                                <div className='text-left'>
                                    <h4 className="font-bold">Leroy Jenkins</h4>
                                    <span className="text-xs ">2 days ago</span>
                                </div>
                            </div>
                            <div className="flex ml-16 rating rating-sm">
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" defaultChecked />
                            </div>
                        </div>
                        <div className="p-3 space-y-2 text-sm ">
                            <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae.</p>
                        </div>
                    </div>
                    <div className="container flex flex-col w-full max-w-lg p-2 mx-auto divide-y rounded-md divide-gray-700 border-2 ">
                        <div className=" p-3">
                            <div className="flex space-x-4">
                                <div>
                                    <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                                </div>
                                <div className='text-left'>
                                    <h4 className="font-bold">Leroy Jenkins</h4>
                                    <span className="text-xs ">2 days ago</span>
                                </div>
                            </div>
                            <div className="flex ml-16 rating rating-sm">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                        <div className="p-3 space-y-2 text-sm ">
                            <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae.</p>
                        </div>
                    </div>
                    <div className="container flex flex-col w-full max-w-lg p-2 mx-auto divide-y rounded-md divide-gray-700 border-2 ">
                        <div className=" p-3">
                            <div className="flex space-x-4">
                                <div>
                                    <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                                </div>
                                <div className='text-left'>
                                    <h4 className="font-bold">Leroy Jenkins</h4>
                                    <span className="text-xs ">2 days ago</span>
                                </div>
                            </div>
                            <div className="flex ml-16 rating rating-sm">
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" defaultChecked />
                            </div>
                        </div>
                        <div className="p-3 space-y-2 text-sm ">
                            <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae.</p>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                    <a href="#slide1" className="btn btn-circle btn-outline">❮</a>
                    <a href="#slide1" className="btn btn-circle btn-outline">❯</a>
                </div>
            </div>
        </div>


    );
};

export default Review;
