import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { TiSocialPinterest } from 'react-icons/ti';

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2'>
      <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4'>
        <div>
          <h6 className='font-bold pt-2 pb-3 uppercase'>Solutions</h6>
          <ul>
            <li className='py-1 hover:text-[#FFFDD0] cursor-pointer'>Travel</li>
            <li className='py-1 hover:text-[#FFFDD0] cursor-pointer'>Booking</li>
            <li className='py-1 hover:text-[#FFFDD0] cursor-pointer'>Flights</li>
            <li className='py-1 hover:text-[#FFFDD0] cursor-pointer'>Cruises</li>
            <li className='py-1 hover:text-[#FFFDD0] cursor-pointer'>Ground</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercase pt-2 pb-3'>Support</h6>
          <ul>
            <li className='py-1 hover:text-[#FFFDD0] cursor-pointer'>Pricing</li>
            <li className='py-1 hover:text-[#FFFDD0] cursor-pointer'>Documentation</li>
            <li className='py-1 hover:text-[#FFFDD0] cursor-pointer'>Tours</li>
            <li className='py-1 hover:text-[#FFFDD0] cursor-pointer'>Refunds</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercase pt-2 pb-3'>Company</h6>
          <ul>
            <li className='py-1 hover:text-[#FFFDD0] cursor-pointer'>About</li>
            <li className='py-1 hover:text-[#FFFDD0] cursor-pointer'>Blog</li>
            <li className='py-1 hover:text-[#FFFDD0] cursor-pointer'>Jobs</li>
            <li className='py-1 hover:text-[#FFFDD0] cursor-pointer'>Press</li>
            <li className='py-1 hover:text-[#FFFDD0] cursor-pointer'>Partners</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercase pt-2 pb-3 '>Legal</h6>
          <ul>
            <li className='py-1 hover:text-[#FFFDD0] cursor-pointer'>Claims</li>
            <li className='py-1 hover:text-[#FFFDD0] cursor-pointer'>Privacy</li>
            <li className='py-1 hover:text-[#FFFDD0] cursor-pointer'>Terms</li>
            <li className='py-1 hover:text-[#FFFDD0] cursor-pointer'>Policies</li>
            <li className='py-1 hover:text-[#FFFDD0] cursor-pointer'>Conditions</li>
          </ul>
        </div>
        <div className='col-span-2 py-8 md:pt-2'>
          <p className='font-bold uppercase'>Subscribe to our newsletters</p>
          <p className='py-4'>
            The Latest deals, articles and resources sent to your inbox weekly.
          </p>
          <form className='flex flex-col sm:flex-row'>
            <input className='w-full p-2 mr-4 rounded-md mb-4' type='email' placeholder='Enter email..' />
            <button className='p-2 mb-4 rounded-md'>Subscribe</button>
          </form>
        </div>
      </div>

      <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>Copyright 2022 © Trippy, LLC. All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
          <FaFacebook className='hover:text-[#FFFDD0] cursor-pointer' />
          <FaInstagram className='hover:text-[#FFFDD0] cursor-pointer' />
          <FaTwitter className='hover:text-[#FFFDD0] cursor-pointer' />
          <TiSocialPinterest className='hover:text-[#FFFDD0] cursor-pointer' size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;