import Image from 'next/image';
import { motion } from 'framer-motion';
import { BiRightArrowCircle } from 'react-icons/bi';
import Testimonial from './Testimonial';
import Link from 'next/link';
export default function Banner() {
  return (
    <div className='relative pt-[20vh] pb-0 md:py-[15vh] mx-[15vw] grid grid-cols-4 gap-x-2 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-4 max-w-7xl lg: mb-24 h-auto lg:min-h-[30rem] lg:pb-12 lg:mb-4'>
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className='overlapGrid animate-bounce col-span-full mb-12 lg:mb-0 flex items-center justify-center lg:col-span-7 lg:col-start-8 lg:-mr-5vw lg:px-0'
      >
        <Image
          src='/images/planet.svg'
          width={400}
          height={400}
          className='drop-shadow-xl'
          priority
        />
        <Image
          src='/images/astronaut.webp'
          width={400}
          height={400}
          className='drop-shadow-xl'
          priority
        />
      </motion.div>
      <div className='col-span-full pt-6 lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col lg:col-span-7'>
        <div className='flex flex-auto flex-col space-y-24'>
          <section className='w-64 text-white font-lora font-bold text-xl px-4 py-2 rounded-md bg-gradient-to-r from-cyan-700 to-sky-600'>
            Welcome to my Portfolio
          </section>
          <section>
            <Testimonial />
          </section>
          <h2 className='leading-tight text-3xl font-medium font-poppins tracking-widest text-slate-200 mix-blend-color-dodge'>
            I have a bachelor's degree in technology and have been working in
            the software industry for Three years.
            <br />
            Over the past few years I have developed several web and mobile
            applications using frontend and backend technology.
          </h2>
          <div className='mt-8 flex flex-col lg:flex-row'>
            <div className='mr-auto space-x-4 space-y-4'>
              <Link
                href='https://www.linkedin.com/in/sumit-kumar-1856a8148/'
                passHref
              >
                <a
                  className='flex justify-between items-center group text-2xl tracking-wider w-48 py-8 px-[2px] text-white font-lora font-medium hover:animate-rubber'
                  target='_blank'
                >
                  Let’s Connect{' '}
                  <BiRightArrowCircle className='text-white font-lighter w-8 h-8 transform group-hover:translate-x-2 group-hover:scale-125 transition transition-transform duration-150 ease-out' />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
