import React from 'react';
import { FaCookie, FaIdBadge, FaOdnoklassniki, FaRegHeart, FaRegSun, FaWalking } from "react-icons/fa";

const Start = () => {
    return (
        <div className='mt-20 mb-20'>
            <h1 className='text-4xl text-center font-bold text-red-600 font-serif leading-10'>How you can <br /><span className='text-black text-6xl'>Become stronger</span></h1>
            <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 p-5 lg:p-10'>

                {/* card--1 */}
                <div className='flex justify-between gap-4'>
                    <span className='text-red-600 text-7xl '><FaIdBadge></FaIdBadge></span>
                    <div>
                        <h2 className='text-3xl font-bold'>DISCOVER THE POWER</h2>
                        <p className='font-semibold'>Will create a plan that’s tailored to your situation with this combat and create your everyday nutrition strategies.</p>
                    </div>
                </div>

                {/* card--2 */}
                <div className='flex justify-between gap-4'>
                    <span className='text-red-600 text-7xl '><FaCookie></FaCookie></span>
                    <div>
                        <h2 className='text-3xl font-bold'>DIET IS EVERYTHING</h2>
                        <p className='font-semibold'>We are here to help you with nutritional perfection. Perfect body is achieved with healthy diet and regular exercise.</p>
                    </div>
                </div>

                {/* card--3 */}
                <div className='flex justify-between gap-4'>
                    <span className='text-red-600 text-7xl '><FaOdnoklassniki></FaOdnoklassniki></span>
                    <div>
                        <h2 className='text-3xl font-bold'>ENDURANCE MATTERS</h2>
                        <p className='font-semibold'>Take your endurance and Cardio Vascular abilities beyond the best with a Functional training protocol</p>
                    </div>
                </div>

                {/* card--4 */}
                <div className='flex justify-between gap-4'>
                    <span className='text-red-600 text-7xl '><FaRegHeart></FaRegHeart></span>
                    <div>
                        <h2 className='text-3xl font-bold'>YOUR HEALTH – YOUR WAY</h2>
                        <p className='font-semibold'>Our customised personal training protocol guarantees you that well define physique sport like for sure.</p>
                    </div>
                </div>

                {/* card--5 */}
                <div className='flex justify-between gap-4'>
                    <span className='text-red-600 text-7xl '><FaWalking></FaWalking></span>
                    <div>
                        <h2 className='text-3xl font-bold'>MASTER THE UPPER CUT</h2>
                        <p className='font-semibold'>If Boxing is your passion then experience this combat sport like never before. Unveil a new angle of fitness.</p>
                    </div>
                </div>

                {/* card--6 */}
                <div className='flex justify-between gap-4'>
                    <span className='text-red-600 text-7xl '><FaRegSun></FaRegSun></span>
                    <div>
                        <h2 className='text-3xl font-bold'>FIRST CLASS MACHINES</h2>
                        <p className='font-semibold'>Accentuating every set to help you, rep and movement our machines will redefine the way you train.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Start;