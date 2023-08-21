import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full my-20'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>About Us</h2>
                <p className='text-3xl py-6 text-gray-600'>Welcome to our platform, where we believe in solving one of the most pressing issues that people face every day </p>
                <p className='text-3xl py-2 text-black-900'>– finding a suitable parking spot for their vehicles</p>
                {/* <p className='text-3xl py-6 text-gray-600'>ParkShare is a unique solution to the parking problem that provides a platform for connecting parking space owners with those in need of parking.
 </p> */}
            </div>

            {/* <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>100%</p>
                    <p className='text-gray-400 mt-2'>Completion</p>
                </div>
                <div  className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                    <p className='text-gray-400 mt-2'>Delivery</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>100K</p>
                    <p className='text-gray-400 mt-2'>Transactions</p>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default About