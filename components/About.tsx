import React from 'react';
import { InView } from 'react-intersection-observer';

function About() {
  const aboutMeTextContent =
    'My primary area of interest is frontend development and I love to make products come to life . My role is to ensure that end users gets the best user experience.';
  const aboutMeTextContentExtended =
    'Currently I am working on an E-commerce PWA that reaches to its millions of users, with cutting edge technologies like Next JS, Jotai and Chakra UI.';

  return (
    <section
      id='about-me'
      className='relative pt-4 md:pt-30 pb-4 md:pb-30 pl-20'
    >
      <h1 className='section-heading font-lora text-xl md:text-3xl font-medium text-white uppercase absolute top-1/2 left-10 md:left-36 transform -translate-x-1/2 -translate-y-1/2 w-0 break-all leading-10 md:leading-[54px]'>
        About Me
      </h1>

      {[aboutMeTextContent, aboutMeTextContentExtended].map((text) => (
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
          <p className='about-me-text w-full md:w-[80%] m-auto font-lora font-bold text-3xl md:text-4xl leading-[40px] lg:leading-[60px] tracking-[2px] md:tracking-[4px] text-slate-200 shadow-sky-600 relative'>
            {text}
          </p>
          <br />
        </InView>
      ))}
    </section>
  );
}

export default About;
