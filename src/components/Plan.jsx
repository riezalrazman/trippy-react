import React from 'react'

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
      {/* left side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img className='row-span-3 object-cover w-full h-full p-2' src="https://static01.nyt.com/images/2022/12/29/multimedia/23whitelotus-hotel-1-8dd3/23whitelotus-hotel-1-8dd3-jumbo.jpg?quality=75&auto=webp" alt="" />
        <img className='row-span-2 object-cover w-full h-full p-2' src="https://assets.vogue.com/photos/63a34e702a9e601f64a0d2ee/master/w_1600,c_limit/SDH_286.jpg" alt="" />
        <img className='row-span-2 object-cover w-full h-full p-2' src="https://s.yimg.com/ny/api/res/1.2/EyRIbNV0cILCku0.7jMoyA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en/business_insider_articles_888/60160b83ce8a8a9f29aeed54f9e12d22" alt="" />
        <img className='row-span-3 object-cover w-full h-full p-2' src="https://assets.vogue.com/photos/63a34e7672fc0d5741d3ab08/master/w_1600,c_limit/SDH_167.jpg" alt="" />
        <img className='row-span-2 object-cover w-full h-full p-2' src="https://www.checkoutsam.com/wp-content/uploads/2018/01/scala-dei-turchi-best-beaches-sicily.jpg" alt="" />
      </div>
      {/* right side */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
        <p className='text-2xl py-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          nam?
        </p>
        <p className='pb-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          voluptates nostrum dolorum reprehenderit error! Doloribus est illo
          eius saepe? Molestias sapiente perspiciatis doloribus consectetur
          nihil facilis aliquid eaque vel quisquam.
        </p>
        <div>
          <button className='border-black mr-4 hover:shadow-xl'>
            Learn More
          </button>
          <button className='bg-black text-white border-black hover:shadow-xl'>Book Your Trip</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;