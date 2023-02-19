import React from 'react'
import {
    CloudUploadIcon,
    CurrencyRupeeIcon,
    DatabaseIcon,
    GlobeAltIcon,
    GlobeIcon,
    LightBulbIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'

import bgImg from '../assets/Hero_Parking2.jpg'

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-gray-100 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>Changing the unchanged</p>

                <h1 className='py-3 text-5xl md:text-7xl font-bold'>PARKSHARE</h1>

                <h1 className='py-3 text-5xl md:text-7xl font-bold'>ParkShare</h1>

                <p className='text-2xl'>Your Parking Spot, their Solution</p>
                <a href="https://parkshare11.onrender.com/home">
                    <button className='py-3 px-6 sm:w-[100%] my-4'>Explore</button>
                </a>
            </div>
            <div>
                <img className='w-full' src={bgImg} alt="/" />
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
                <p>Service Benefits</p>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-500'><CurrencyRupeeIcon className='h-6 text-indigo-600' /> Economical</p>
                    <p className='flex px-4 py-2 text-slate-500'><GlobeIcon className='h-6 text-indigo-600' /> Eco Friendly</p>
                    <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='h-6 text-indigo-600' /> More Parking Space </p>
                    <p className='flex px-4 py-2 text-slate-500'><LightBulbIcon className='h-6 text-indigo-600' /> less Traffic</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
