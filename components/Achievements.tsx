import React from 'react';
import SectionTitle from './SectionTitle';

const data = [
  { number: 80, text: 'Github Projects' },
  { number: 2250, text: 'Linkedin Connections' },
  { number: 500, text: 'Leetcode Problems Solved' },
  { number: 5, text: 'Honours and Awards' },
];

function Achievements() {
  return (
    <div className='mx-[15vw] my-20 relative'>
      <SectionTitle>achievements</SectionTitle>
      <div className='w-full grid md:grid-cols-4 gap-3 md:gap-6 mx-0 mt-6 mb-6 md:mb-10'>
        {data.map((card, index) => (
        <div className='relative group mt-10 inline-flex'>
          <div className='absolute -inset-0.5 blur opacity-75 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt'></div>
          <button className='relative px-7 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg leading-none flex items-center divide-x divide-gray-600'>
            <div className='bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-xl h-36 p-6 lg:h-52' key={index}>
              <div className='font-lora font-bold text-2xl leading-10 text-white mb-2 tracking-wider'>
                {card.number}
              </div>
              <div className='font-poppins font-medium text-lg leading-5 text-slate-300 tracking-normal'>
                {card.text}
              </div>
            </div>
          </button>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
