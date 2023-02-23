import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Page/Shared/Footer/Footer';
import Navbar from '../../Page/Shared/Navbar/Navbar';
import NavMenu from '../../Page/Shared/NavMenu/NavMenu';

const Main = () => {
    return (
        <div>
            <NavMenu></NavMenu>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;