import React from 'react';
import banar from '../../assets/bg_1.png';

const Hero = () => {
    return (
        <div className='absolute'>
            <div className=''>
            <img className='h-[100vh] z-10 w-[100vw] ' src={banar} alt="" />
        </div>

        <div className='flex justify-center items-center absolute top-[10vh] left-0 h-[90vh] w-full z-20'>
            <input className='p-2 w-[60%] md:w-[30%]  md:p-3 md:pl-5 rounded-l-full' type="text" placeholder='Search your Destination' />
            <button className='bg-orange-600 text-white md:font-bold px-6 md:px-10 rounded-r-full md:py-3 py-2'>
                <span className=' md:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
                </span>
                <span className='hidden md:block'>Search</span>
                </button>

        </div>
        </div>
    );
};

export default Hero;