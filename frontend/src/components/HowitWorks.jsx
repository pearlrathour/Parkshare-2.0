import React from 'react';

import { PhoneIcon, ArrowSmRightIcon, MapIcon, ShieldCheckIcon, ClipboardCopyIcon, SearchIcon } from '@heroicons/react/outline';
import { ChipIcon, ClipboardCheckIcon, SupportIcon } from '@heroicons/react/solid'

import supportImg from '../assets/Parking.jpg'

const HowitWorks = () => {
  return (
    <div name='howitworks' className='w-full'>
      <div className='h-[1px] w-full bg-sky-500'>

</div>
      <div className='w-full h-[700px] bg-black absolute'>
        {/* <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" /> */}
      </div>

      <div className='max-w-[1240px] mx-auto text-white relative'>

        <div className='px-4 py-6'>
          {/* <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>How it Works ? </h2> */}
          <h3 className='text-5xl font-bold py-4 text-center text-gray-200'>How it Works ?</h3>
          <p className='pt-4 text-3xl text-center text-gray-300'>ParkShare is a unique solution to the parking problem that provides a platform for connecting parking space owners with those in need of parking.</p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 pb-8 sm:pt-16 text-gray-200'>

          <div className='bg-gray-700/50 border-2 border-gray-500 text-gray-400 rounded-xl'>
            <div className='p-8'>
              <ClipboardCopyIcon className='w-16 p-4 bg-gradient-to-r from-blue-600 to-sky-400 text-white rounded-lg mt-[-4rem]' />
              <h3 className='font-bold text-2xl text-gray-200 my-6'>How to list parking space ?</h3>
              <p className='text-xl'>List your unused parking space on ParkShare platform, providing information on its location, availability, and pricing and let others park their vehicles on it.</p>
            </div>
            <div className='bg-gray-600/70 pl-8 py-4'>
              <a href="https://parkshare-backend.onrender.com/register">
                <p className='flex items-center text-sky-600 font-semibold'>Register <ArrowSmRightIcon className='w-5 ml-2' /></p>
              </a>
            </div> 
          </div>

          <div className='bg-gray-700/50 border-2 border-gray-500  text-gray-400 rounded-xl'>
            <div className='p-8'>
              <SearchIcon className='w-16 p-4 bg-gradient-to-r from-blue-600 to-sky-400 text-white rounded-lg mt-[-4rem]' />
              <h3 className='font-bold text-2xl text-gray-200 my-6'>How to find a parking spot?</h3>
              <p className='text-xl'>Explore parking spots in the desired location, view pricing and availability and book the one that meets your needs online through the ParkShare platform.
              </p>
            </div>
            <div className='bg-gray-600/70 pl-8 py-4'>
              <a href="https://parkshare-backend.onrender.com/parkshare">
                <p className='flex items-center text-sky-600 font-semibold'>Search <ArrowSmRightIcon className='w-5 ml-2' /></p>
              </a>
            </div>
          </div>

          <div className='bg-gray-700/50 border-2 border-gray-500  text-gray-400 rounded-xl'>
            <div className='p-8'>
              <ShieldCheckIcon className='w-16 p-4 bg-gradient-to-r from-blue-600 to-sky-400 text-white rounded-lg mt-[-4rem]' />
              <h3 className='font-bold text-2xl text-gray-200 my-6'>Security Handling</h3>
              <p className='text-xl'>User-friendly and secure platform with a rating system for reliable parking experiences.
              </p>
            </div>
            <div className='bg-gray-600/70 pl-8 py-4 my-12'>
              <a href="https://parkshare-backend.onrender.com/parkshare">
                <p className='flex items-center text-sky-600 font-semibold'>Rating <ArrowSmRightIcon className='w-5 ml-2' /></p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowitWorks;
