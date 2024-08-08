import React from 'react';
import logo from '../images/logo.png'
import image1 from "../images/image1.png"

const Header = () => {
  return (
    <header>
        <nav className='bg-white flex justify-between items-center h-32 w-full px-6'>
          <div className="flex gap-2 items-center">
            <img src={logo} alt='' className='' />
            <h2 className='text-lg text-[#4F4F4F] font-medium'>Home</h2>
          </div>
          <div>
          <img src={image1} alt='' className='' />
          </div>
        </nav>
        <hr  className='bg-[#FCDD00] h-[2px]'/>
    </header>
  );
};

export default Header;