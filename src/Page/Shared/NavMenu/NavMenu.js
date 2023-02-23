import React from 'react';
import logo from '../../../image/fitness-logo.jpg'

const NavMenu = () => {
    return (
        <div className=' bg-black text-white px-5 shadow md:flex md:items-center md:justify-between'>
            <div className='flex justify-between items-center'>
                <span className='text-3xl cursor-pointer'>
                    <img className='h-20 p-2 ml-2 inline rounded-lg' src={logo} alt="" />
                </span>
                <span className='text-3xl cursor-pointer md:hidden block text-red-500'>
                    <button data-collapse-toggle="navbar-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-menu" aria-expanded="false">
                        <span class="sr-only"></span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                </span>
            </div>
            <div id='navbar-menu'>
                <ul className='md:flex md:items-center md:static w-full md:w-auto md:py-0 pb-4 top-[-400px] transition-all ease-in duration-500'>
                    <li className='mx-4 my-6 md:my-0' >
                        <a className='text-xl hover:text-red-600 duration-500' href="/">HOME</a>
                    </li>
                    <li className='mx-4 my-6 md:y-0'>
                        <a className='text-xl hover:text-red-600 duration-500' href="/blog">BLOG</a>
                    </li>
                    <li className='mx-4 my-6 md:y-0'>
                        <a className='text-xl hover:text-red-600 duration-500' href="/aboutus">ABOUT US</a>
                    </li>
                    <li className='mx-4 my-6 md:y-0'>
                        <a className='text-xl hover:text-red-600 duration-500' href="/contactus">CONTACT US</a>
                    </li>
                    <li className='mx-4 my-6 md:y-0'>
                        <a className='text-xl hover:text-red-600 duration-500' href="/login">LOGIN</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
{/* <script>
    function Menu (e){
        let list = document.querySelector('ul');

    e.name === "menu" ? (e.name = "close",list.classList.add('top-[80px]'),list.classList.add('opacity-100')):( e.name = "menu",list.classList.remove("top-[80px]"), list.classList.remove('opacity-100'))
    }
</script> */}

export default NavMenu;