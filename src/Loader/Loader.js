import React from 'react';
import Loading from '../Pages/Shared/Loading/Loading';
import './Loader.css';
const Loader = () => {
    return (
        <div className='handle-preloader'>
        <div className='animation-preloader'>
            <div className='spinner'></div>
            <div className='text-loading'>
                <span data-text-preloader="Tech" className='letters-loading'>Tech</span>
                <span data-text-preloader="quest" className='letters-loading'>quest</span>
                <span data-text-preloader="Techquest" className='letters-loading'>Techquest</span>
            </div>
            <Loading></Loading>
        </div>
    </div>
    );
};

export default Loader;