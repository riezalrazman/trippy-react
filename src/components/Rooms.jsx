import React from 'react';

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-[#FFFDD0] mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold'>Fine Interior Rooms</h3>
        <p className='pt-4'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ipsam
          rerum iusto excepturi similique minus?
        </p>
      </div>

      <div className='grid grid-cols-2 col-span-2 gap-2'>
        <img
        className='object-cover w-full h-full'
          src='https://media.istockphoto.com/id/1334117337/photo/digital-graphical-rendering-of-a-luxury-hotel-suite.jpg?b=1&s=170667a&w=0&k=20&c=tNSP-_XvuURC-UqRZ3Tc7t4s9y3cj0oQbnn08qcUGiA='
          alt='/'
        />
        <img
        className='row-span-2 object-cover w-full h-full'
          src='https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
          alt='/'
        />
        <img
        className='object-cover w-full h-full'
          src='https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGludGVyaW9yJTIwcmVzb3J0JTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
          alt='/'
        />
      </div>
    </div>
  );
};

export default Rooms;