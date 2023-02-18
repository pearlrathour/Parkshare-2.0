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
              <p className='py-4 text-3xl text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae veritatis ratione error tenetur, voluptates architecto possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo et cum vel?</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-8'>How to list parking space ?</h3>
                      <p className='text-gray-600 text-xl'>List your available parking space and let others park their vehicles on it.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600'>Register <ArrowSmRightIcon className='w-5 ml-2' /></p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <SupportIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>How to find a parking spot?</h3>
                      <p className='text-gray-600 text-xl'>If you're looking for parking, browse through the available parking spots in the area and book one that suits your needs.
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
                      <p className='text-gray-600 text-xl'>Information on how payments and transactions are handled, including the fees charged by ParkShare for facilitating the exchange and how the platform handles security and ensures a positive experience for both parking space owners and renters.
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
