import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';

const benefits = () => {
  return (
    <div name='benefits' className='w-full bg-black'>
      <div className='max-w-[1240px] mx-auto px-12 py-28'>
        <h2 className='text-5xl text-gray-200 font-bold text-center'>All-In-One Platform</h2>
        <p className='text-2xl text-gray-400 py-8 text-center'>
        Renting out your unused driveway or parking space is a win-win situation. You get to earn extra income, while someone in need of parking gets a spot. Our platform is designed to be user-friendly and safe, with secure payments and a rating system to build trust between renters and renters.

        </p>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-14'>

          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-sky-500' />
            </div>
            <div>
              <h3 className='font-bold text-lg text-sky-500'>Business Aspect</h3>
              <p className='text-lg text-gray-400 pt-2 pb-4'>
              Growing populations and insufficient parking spots are driving up parking demand in many cities. ParkShare may tap into this booming industry and expand to other cities.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-sky-500' />
            </div>
            <div>
              <h3 className='font-bold text-lg text-sky-500'>Environmental Aspect</h3>
              <p className='text-lg  text-gray-400 pt-2 pb-4'>
              ParkShare can reduce carbon emissions, promote the sharing economy, and promote sustainable transportation.

              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-sky-500' />
            </div>
            <div>
              <h3 className='font-bold text-lg text-sky-500'>Social Aspect</h3>
              <p className='text-lg text-gray-400 pt-2 pb-4'>
              ParkShare makes parking affordable, sustainable, and accessible, connecting people and communities around a shared resource.
              </p>
            </div>
          </div>
          {/* <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>__ Aspect</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div> */}
          {/* <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Notifications</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Notifications</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Notifications</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Notifications</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default benefits;
