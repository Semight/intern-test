import React from 'react';
import home from "../images/fluent_home-16-regular.png"
import msg from "../images/eva_message-square-outline.png"
import create from "../images/newpost.png"
import profile from "../images/ph_user.png"

const Footer = () => {
  return (
    <footer>
      <hr className='bg-[#E5E5E5] h-[2px]'/>

      <div className="bg-[#FBFBFB] py-4">
        <div className="flex items-center flex-row justify-between">
          <div className="flex flex-col items-center px-4">
            <img src={home} alt='' className='h-6 w-6' />
            <h2 className='text-[#505050] '>Home</h2>
          </div>
        

          <div className="flex flex-col items-center px-4">
            <img src={msg} alt='' className='h-6 w-6' />
            <h2 className='text-[#717171] '>Messages</h2>
          </div>

          <div className="flex flex-col items-center px-4">
            <img src={create} alt='' className='h-6 w-6' />
            <h2 className='text-[#717171] '>Create</h2>
        </div>

          <div className="flex flex-col items-center px-4">
            <img src={profile} alt='' className='h-6 w-6' />
            <h2 className='text-[#717171] '>Profile</h2>
          </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;