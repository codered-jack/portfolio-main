import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const data = [
  { icon: 'twitter', link: 'https://twitter.com/imcoderedjack' },
  {
    icon: 'youtube',
    link: 'https://www.youtube.com/channel/UCAkUrWR_cSkV7S6RIUXJiGw',
  },
  { icon: 'instagram', link: 'https://www.instagram.com/codered_jack' },
  { icon: 'facebook', link: 'https://www.facebook.com/sumitnbq' },
  {
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/sumit-kumar-1856a8148/',
  },
];

function Footer() {
  const [socialIcons, setSocialIcons] = useState(data);

  useEffect(() => {}, []);

  return (
    <div className='slideshow animate-bounce mt-40 mb-5 flex w-[80vw] md:w-[800px] mx-auto justify-center items-center space-x-5'>
      {socialIcons?.length > 0 &&
        socialIcons?.map(({ icon, link }) => (
          <div
            id={icon}
            className='animate-pulse w-10 h-10 md:w-20 md:h-20 hover:scale-120 relative'
          >
            <Link href={link} passHref>
              <a target='_blank' noreferrer noopener>
                <Image src={`/images/social-icons/${icon}.png`} layout='fill' />
              </a>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default Footer;
