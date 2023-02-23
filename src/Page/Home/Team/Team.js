import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import team1 from '../../../image/team/team_04.jpg'
import team2 from '../../../image/team/team_05.jpg'
import team3 from '../../../image/team/team_06.jpg'
import bg from '../../../image/background_03_04.jpg'

const Team = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})` }} className='p-10'>
            <h1 className='text-5xl font-serif text-white mb-10 mt-10 '>Devoted <br /> FITNESS COACHES</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10' >
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={team1} alt="team" /></figure>
                    <div className="card-body">
                        <h1 className='text-2xl font-bold'>NICOLAS TOMSON</h1>
                        <h6 className='font-bold'>Nutrition expert</h6>
                        <div className='divider before:bg-primary after:bg-secondary'></div>
                        <div className='flex gap-4 text-red-600 text-2xl'>
                            <FaFacebook></FaFacebook>
                            <FaYoutube></FaYoutube>
                            <FaInstagram></FaInstagram>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={team2} alt="team" /></figure>
                    <div className="card-body">
                        <h1 className='text-2xl font-bold'>NICOLAS TOMSON</h1>
                        <h6 className='font-bold'>Nutrition expert</h6>
                        <div className='divider before:bg-primary after:bg-secondary'></div>
                        <div className='flex gap-4 text-red-600 text-2xl'>
                            <FaFacebook></FaFacebook>
                            <FaYoutube></FaYoutube>
                            <FaInstagram></FaInstagram>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={team3} alt="team" /></figure>
                    <div className="card-body">
                        <h1 className='text-2xl font-bold'>NICOLAS TOMSON</h1>
                        <h6 className='font-bold'>Nutrition expert</h6>
                        <div className='divider before:bg-primary after:bg-secondary'></div>
                        <div className='flex gap-4 text-red-600 text-2xl'>
                            <FaFacebook></FaFacebook>
                            <FaYoutube></FaYoutube>
                            <FaInstagram></FaInstagram>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;