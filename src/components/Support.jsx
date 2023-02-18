import React from 'react';

import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import {ChipIcon, SupportIcon} from '@heroicons/react/solid'

import supportImg from '../assets/Parking.jpg'

const Support = () => {
  return (
  <div name='support' className='w-full mt-24'>
      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
      </div>
      
      <div className='max-w-[1240px] mx-auto text-white relative'>
          <div className='px-4 py-12'>
              {/* <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>How it Works ? </h2> */}
              <h3 className='text-5xl font-bold py-6 text-center'>How it Works ?</h3>
              <p className='py-4 text-3xl text-slate-300'>ParkShare is a unique solution to the parking problem that provides a platform for connecting parking space owners with those in need of parking.</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-8'>How to list parking space ?</h3>
                      <p className='text-gray-600 text-xl'>List your unused parking space on ParShare platform, providing information on its location, availability, and pricing and let others park their vehicles on it.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600'>Register <ArrowSmRightIcon className='w-5 ml-2' /></p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <SupportIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>How to find a parking spot?</h3>
                      <p className='text-gray-600 text-xl'>Browse through the available parking spots in the desired location, view pricing and availability and book the one that meets your needs online through the ParkShare platform.
</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600'>Search <ArrowSmRightIcon className='w-5 ml-2' /></p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <ChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Security Handling</h3>
                      <p className='text-gray-600 text-xl'>User-friendly and secure platform with a rating system for reliable parking experiences.
</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p>
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
};

export default Support;
