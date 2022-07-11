import Image from 'next/image';
import React from 'react';
import SectionTitle from './SectionTitle';
import { InView } from 'react-intersection-observer';

function Technology() {
  return (
    <div className='my-20'>
      <SectionTitle>technology</SectionTitle>
      <InView
        as='div'
        rootMargin='-50% 10% -50%'
        onChange={(inView, entry) =>
          inView
            ? entry.target.classList.remove('opacity-40')
            : entry.target.classList.add('opacity-40')
        }
        className='transition transition-opacity duration-300 ease-out mix-blend-color-dodge'
      >
        <p className='w-[80vw] md:w-[80%] m-auto font-lora font-bold text-3xl md:text-4xl leading-[40px] lg:leading-[60px] tracking-[2px] md:tracking-[4px] text-slate-200 shadow-sky-600 relative'>
          Over the last few years I had many opportunity to work in a vast
          spectrum of web technologies which let me gather a significant amount
          of various experience. Working for different teams around the region I
          met and learnt from amazing and awesome people.
        </p>
      </InView>

      <section className='mx-[15vw]'>
        <section className='mt-20 leading-tight text-2xl font-bold font-poppins tracking-widest text-slate-200 mix-blend-color-dodge'>
          FRONTEND
        </section>
        <div className='tech-container mt-5 flex flex-wrap space-x-5 space-y-5 md:space-y-0'>
          {[
            'javascript',
            'css',
            'next',
            'tailwind',
            'redux',
            'framer',
            'typescript',
            'graphql',
          ].map((item) => (
            <div className='flex space-x-5'>
              <Image
                src={`/images/tech-icons/${item}.svg`}
                width={40}
                height={40}
                className={`${
                  item === 'tailwind' ? 'bg-black' : 'bg-white'
                } rounded-md`}
                alt={item}
              />
            </div>
          ))}
        </div>

        <section className='mt-20 leading-tight text-2xl font-bold font-poppins tracking-widest text-slate-200 mix-blend-color-dodge'>
          BACKEND & DATABASE
        </section>
        <div className='tech-container mt-5 flex space-x-5'>
          {['node', 'mongodb', 'graphql'].map((item) => (
            <div className='flex space-x-5'>
              <Image
                src={`/images/tech-icons/${item}.svg`}
                width={40}
                height={40}
                className={`${
                  item === 'tailwind' ? 'bg-black' : 'bg-white'
                } rounded-md`}
                alt={item}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Technology;
