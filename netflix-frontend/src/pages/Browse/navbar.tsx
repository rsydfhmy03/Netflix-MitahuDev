import React from 'react';
import EachUtils from '../../utils/eachUtils';
import { LIST_NAVBAR } from '../../constants/listNavbar';

const Navbar = () => {
  return (
    <header className='container mx-auto'>
        <nav className='bg-transparent fixed text-white top-0 left-0 right-0 px-8 w-full z-10'>
            <div className="flex justify-between items-center">
                <div className='flex items-center gap-4'>
                    {/* Left */}
                    <img src="/netflix_logo_icon.png" alt="Logo" className='w-[180px] ml-10' />
                    <ul className='sm:flex  hidden items-center gap-4'>
                    <EachUtils  
                    of={LIST_NAVBAR} 
                    render={(item, index) => (
                        <li key={index}>
                            <a href={item.url}>{item.title}</a>
                        </li>
                     )}/>
                    </ul>
                </div>
                <div>
                    {/* Right */}
                </div>
            </div>
        </nav>
    </header>
  );
};

export default Navbar;