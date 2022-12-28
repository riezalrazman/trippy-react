import React from 'react';

const Hero = () => {
  return (
    <div className='w-full h-screen'>
      <img
        className='top-0 left-0 w-full h-screen object-cover'
        src='https://s.yimg.com/ny/api/res/1.2/EaLIxahbhjLa8VQy21Lajw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en/business_insider_articles_888/842a9a0cc32a962f8f337154064ab85e'
        alt='/'
      />
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
     <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
      <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
        <p>All Inclusive</p>
        <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Beaches & Getaways</h1>
        <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ullam vel, debitis doloremque neque vero maxime minima nam enim ratione.</p>
        <button className='font-bold hover:bg-white hover:text-black text-white'>Discover Now</button>
      </div>
     </div>
    </div>
  );
};

export default Hero;