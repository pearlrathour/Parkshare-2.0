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

import bgImg from '../assets/parking12.gif'

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-black flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8 '>
                {/* <p className='text-2xl text-gray-100'>Changing the unchanged</p> */}

                
                <h1 className='py-3 text-5xl md:text-7xl font-bold from-blue-600 via-sky-400 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent'>ParkShare</h1>

                <p className='text-2xl text-gray-200 mt-4 mb-2'>Your Parking Spot, their Solution</p>
                <a href="https://parkshare-backend.onrender.com/home">
                    <button className='py-3 px-6 sm:w-[100%] my-4s hover:from-blue-600 hover:to-sky-400 hover:bg-gradient-to-r'>Explore</button>
                </a>
            </div>
            <div className='w-full'>
                <img className='w-screen' src={bgImg} alt="/" />
            </div>
            
            <div className='absolute flex flex-col py-6 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-gray-800
            border border-gray-700 rounded-xl text-center text-gray-200 shadow-xl'>
                <p>Service Benefits</p>
                <div className='flex justify-between flex-wrap mx-5 text-gray-500'>
                    <p className='flex px-4 py-2'><CurrencyRupeeIcon className='h-6 text-sky-500' /> Economical</p>
                    <p className='flex px-4 py-2'><GlobeIcon className='h-6 text-sky-500' /> Eco Friendly</p>
                    <p className='flex px-4 py-2'><PaperAirplaneIcon className='h-6 text-sky-500' /> More Parking Space </p>
                    <p className='flex px-4 py-2'><LightBulbIcon className='h-6 text-sky-500' /> less Traffic</p>
                </div>
            </div>
        </div>
        {/* <div className='w-full h-[1px] bg-teal-500'>

        </div> */}
    </div>
  )
}

export default Hero
