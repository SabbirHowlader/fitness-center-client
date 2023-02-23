import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from '../../../Context/AuthProvider/AuthProvider'

import './style.css';

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(() =>{})
        .catch(error => console.log(error))
    }

    

    const menuIteam =
        <React.Fragment>
            <li><Link>HOME</Link></li>
            <li>
                <Link>ABOUT US</Link>
                <ul className="p-2">
                    <li><Link>ABOUT US</Link></li>
                    <li><Link>OUR TEAM</Link></li>
                    <li><Link>CONTRACT</Link></li>
                </ul>
            </li>
            <li>
                <Link>PROGRAMS</Link>
                <ul className="p-2">
                    <li><Link>ALL PROGRAM</Link></li>
                    <li><Link>SINGLE PROGRAM</Link></li>
                </ul>
            </li>
            <li><Link>BLOG</Link></li>
            <li>
                <Link>SHOP</Link>
                <ul className="p-2">
                    <li><Link>PRODUCTS</Link></li>
                    <li><Link>CART</Link></li>
                    <li><Link>CHECK OUT</Link></li>
                    <li><Link>MY ACCOUNT</Link></li>
                </ul>
            </li>
            {user?.uid ?
                <li><button onClick={handleLogOut}>LOG OUT</button></li>
                : <li><Link to="/login">LOGIN</Link></li>
            }
        </React.Fragment>
    return (
        <div className="navbar bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-light lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact text-white dropdown-content mt-3 p-2 w-32">
                        {menuIteam}
                    </ul>
                </div>
                <Link className="btn btn-primary text-white normal-case text-xl">FITNESS CENTER</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal text-white mt-3 px-3 ">
                    {menuIteam}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;