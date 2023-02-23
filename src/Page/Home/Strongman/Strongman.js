import React from 'react';
import { FaClock } from 'react-icons/fa';
import img from '../../../image/hero_image_07.png'

const Strongman = () => {
    return (
        <div className="hero mb-10">
            <div className="hero-content flex-col lg:flex-row gap-5">
                <div>
                    <h1 className="text-5xl font-bold">#2 STRONGMAN</h1>
                    <p className="py-6">Gymnastic rings are one of the best training tools for developing a strong and muscular upper body. One look at the upper-body development of male gymnasts shows just how effective bodyweight training with rings can be.</p>

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
                <img src={img} className="p-10" alt='' />
            </div>
        </div>
    );
};

export default Strongman;