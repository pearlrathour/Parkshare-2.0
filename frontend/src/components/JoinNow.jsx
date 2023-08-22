import React from 'react';

import { CheckIcon } from '@heroicons/react/solid';

const Joinnow = () => {
  return (
    <div name='Joinnow' className='w-full text-white'>
      <div className='w-full h-[60%] bg-black absolute mix-blend-overlay'></div>

      <div className='h-[1px] w-full bg-sky-300'>

        </div>

      <div className='max-w-[1240px] mx-auto py-12'>

        <div className='text-center py-8 px-20 text-gray-300'>
          {/* <h2 className='text-3xl uppercase'>Join Now</h2> */}
          <h3 className='text-5xl font-bold text-white py-2'>Join Now</h3>
          <p className='text-2xl text-center mt-10'>
          Join our platform today and become part of a community that promotes efficient, affordable, and eco-friendly parking solutions. By sharing your unused parking space, you can earn extra income while also contributing to a more sustainable future. Start listing your parking space now and let's solve the parking problem together.
          </p>
        </div>

        {/* <div className='grid md:grid-cols-2'>

          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>$49<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <div className='text-2xl'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <button className='w-full py-4 my-4'>Get Started</button>
            </div>
          </div>
          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Premium</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>$99<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <div className='text-2xl'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <button className='w-full py-4 my-4'>Get Started</button>
            </div>
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default Joinnow;
