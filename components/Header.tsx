import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <div className='fixed h-[12vh] w-full bg-transparent z-30 py-6 flex justify-end'>
      <Link href='https://www.linkedin.com/in/sumit-kumar-1856a8148/' passHref>
        <a
          className='border rounded-md border-white px-8 py-2 mx-16 text-white text-xl font-bold font-lora tracking-widest hover:bg-white hover:text-black'
          target='_blank'
          noreferrer
          noopener
        >
          Let's Connect
        </a>
      </Link>
    </div>
  );
}

export default Header;
