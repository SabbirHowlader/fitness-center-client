import React from 'react';
import { FaClock } from 'react-icons/fa';
import img from '../../../image/hero_image_06.png'

const Hitpart = () => {
    return (
        <div className="hero mt-10">
            <div className="hero-content flex-col lg:flex-row gap-5">
                <img src={img} className="p-10" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">#1 HIT / HIT</h1>
                    <p className="py-6">HIIT workouts shift your body from periods of aerobic activity to periods of the best training tools for developing a strong anaerobic activity. When your body is in and “aerobic mode,” your body is using oxygen. When your body is in “anaerobic mode,” your body is using its stored energy instead of oxygen.</p>

                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10'>
                        <div className='flex items-center gap-4'>
                            <span className='text-2xl text-red-500'><FaClock></FaClock></span>
                            <h2 className='text-2xl font-bold'>MONDAY</h2>
                        </div>
                        <div className='flex items-center gap-4'>
                            <span className='text-2xl text-red-500'><FaClock></FaClock></span>
                            <h2 className='text-2xl font-bold'>WEDNESDAY</h2>
                        </div>
                        <div className='flex items-center gap-4'>
                            <span className='text-2xl text-red-500'><FaClock></FaClock></span>
                            <h2 className='text-2xl font-bold'>FRIDAY</h2>
                        </div>
                    </div>

                    <button className="btn btn-active hover:bg-blue-600">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default Hitpart;