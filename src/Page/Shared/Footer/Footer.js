import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../image/logo/logo_footer_03.png'

const Footer = () => {
    return (
        <footer className="footer grid grid-cols-2 lg:grid-cols-4 gap-20 p-10 bg-black text-white ">
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <span className="footer-title">PROGRAMS</span>
                <Link className="link link-hover">About</Link>
                <Link className="link link-hover">Tours</Link>
                <Link className="link link-hover">Membership</Link>
                <Link className="link link-hover">Schedules</Link>
                <Link className="link link-hover">Gallery</Link>
            </div>
            <div>
                <span className="footer-title">LOCATION & HOURS</span>
                <p className="link link-hover">Mon - Sat: 6:00 - 12:00</p>
                <p className="link link-hover">Sunday - Closed</p>
                <p className="link link-hover">234-244 Stockwell Rd</p>
                <p className="link link-hover">Brixton, SW9 9SP</p>
            </div>
            <div>
                <span className="footer-title">NEWSLETTER</span>
                <Link className="link link-hover">Terms of use</Link>
                <Link className="link link-hover">Privacy policy</Link>
                <Link className="link link-hover">Cookie policy</Link>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-5 text-2xl'>
                    <span className='hover:text-red-600'><FaFacebook></FaFacebook></span>
                    <span className='hover:text-red-600'><FaLinkedin></FaLinkedin></span>
                    <span className='hover:text-red-600'><FaTwitter></FaTwitter></span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;