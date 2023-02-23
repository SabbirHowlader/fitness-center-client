import React from 'react';
import card1 from '../../../image/card/card-01.jpg';
import card2 from '../../../image/card/card-02.jpg'
import card3 from '../../../image/card/card-03.jpg'
import card4 from '../../../image/card/card-04.jpg'
import card5 from '../../../image/card/card-05.jpg'
import card6 from '../../../image/card/card-06.jpg'

const Card = () => {
    return (
        <div className='m-10'>
            <h1 className='text-4xl text-center font-bold text-red-600 mb-10 font-serif leading-10'>Build your <br /><span className='text-black text-6xl'> Best body</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:p-10'>

                {/* card--1 */}
                <div className=" card card-compact bg-base-100 shadow-xl bg-blend-multiply  hover:animate-pulse">
                    <figure><img src={card1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className='text-2xl font-bold'>Make you body and smile every moment.</h2>
                    </div>
                </div>

                {/* card--2 */}
                <div className="card card-compact bg-base-100 shadow-xl bg-blend-multiply hover:animate-bounce">
                    <figure><img src={card2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className='text-2xl font-bold'>Start every morning with build your self.</h2>
                    </div>
                </div>

                {/* card--3 */}
                <div className="card card-compact bg-base-100 shadow-xl bg-blend-multiply transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                    <figure><img src={card3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className='text-2xl font-bold'>Practice more different type.</h2>
                    </div>
                </div>

                {/* card--4 */}
                <div className="card card-compact  bg-base-100 shadow-xl bg-blend-multiply hover:animate-pulse">
                    <figure><img src={card4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className='text-2xl font-bold'>Focus on your mind and make body.</h2>
                    </div>
                </div>

                {/* card--5 */}
                <div className="card card-compact bg-base-100 shadow-xl bg-blend-multiply transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                    <figure><img src={card5} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className='text-2xl font-bold'>Ring gim help us to make good chest</h2>
                    </div>
                </div>

                {/* card--6 */}
                <div className="card card-compact bg-base-100 shadow-xl bg-blend-overlay hover:animate-bounce">
                    <figure><img src={card6} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className='text-2xl font-bold'>Its make to strong your lage and fit your self</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;