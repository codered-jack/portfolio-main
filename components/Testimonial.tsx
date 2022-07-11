import Typewriter from '../lib/Typewritter';
import { useEffect, useRef } from 'react';
export default function Testimonial() {
  let typewriter;
  const firstRun = useRef(null);

  useEffect(() => {
    if (firstRun.current) return;
    firstRun.current = true;
    typewriter = new Typewriter(
      document.querySelector('.Typewriter__wrapper'),
      {
        loop: true,
        typingSpeed: 80,
        deletingSpeed: 80,
      }
    );

    typewriter
      ?.typeString('Hi! I am Sumit Kumar')
      .pauseFor(2000)
      .typeString('\nWeb Developer')
      .pauseFor(2000)
      .deleteChars(13)
      .typeString('App Developer')
      .pauseFor(2000)
      .deleteChars(13)
      .typeString('Coder and Blogger')
      .pauseFor(2000)
      .deleteChars(17)
      .typeString('And a Pro Gamer')
      .deleteAll()
      .start();

    return () => {};
  }, []);

  return (
    <div className='flex flex-col pl-2 pr-3 h-10 text-2xl md:text-4xl text-gray-100 whitespace-pre-wrap'>
      <div className='Typewriter' data-testid='typewriter-wrapper'>
        <span className='Typewriter__wrapper'></span>
        <span className='Typewriter__cursor'>|</span>
      </div>
    </div>
  );
}
