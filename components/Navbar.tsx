import React, { useState } from 'react';

function Navbar() {
  const [navigate, setNavigate] = useState(false);

  const toggleNavigation = () => {
    setNavigate((navigate) => !navigate);
  };

  function handleNavigation(e, navigateTo) {
    e.preventDefault();
    const scroll = document.getElementById(navigateTo);
    scroll?.scrollIntoView({ behavior: 'smooth' });
    setNavigate((navigate) => !navigate);
  }

  return (
    <aside className='h-screen bg-cover fixed z-30 top-0'>
      <nav
        className={`navigation ${
          navigate ? 'navigation-open' : ''
        } w-[100px] h-full block pr-[40px] absolute top-0 left-0 bg-transparent md:bg-background-pattern rounded-tl-[0%] rounded-tr-[50%] rounded-br-[350%] rounded-bl-[0%] transition transition-all duration-700 ease-nav-transition z-20`}
        style={{ perspective: 800 }}
        onMouseLeave={() => setNavigate(false)}
      >
        <section
          className={`${
            navigate ? 'navigation_icon cursor-none' : ''
          } w-[55px] h-[44px] block relative top-[22%] left-[35%] transition transition-all duration-700 ease-nav-transition`}
          onMouseEnter={toggleNavigation}
        >
          <span className='topbar w-[55px] h-[3px] block bg-teal-300 absolute top-[10px] transform rotate-0 transition transition-all duration-700 ease-nav-transition'></span>
          <span className='middlebar w-[45px] h-[3px] block bg-teal-300 absolute top-[20px] transform rotate-0 transition transition-all duration-700 ease-nav-transition'></span>
          <span className='bottombar w-[35px] h-[3px] block bg-teal-300 absolute top-[30px] transform rotate-0 transition transition-all duration-700 ease-nav-transition'></span>
        </section>

        <ul className='navigation_ul mt-[220px] opacity-0 font-lora invisible transform -rotate-90 -translate-x-[30px] transition transition-all duration-700 ease-nav-transition'>
          <li>
            <a
              href=''
              className='text-cyan-300 hover:text-white transition transition-color duration-200 ease-nav-transition'
              onClick={(e) => handleNavigation(e, 'about-me')}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href=''
              className='text-cyan-300 hover:text-white transition transition-color duration-200 ease-nav-transition'
              onClick={(e) => handleNavigation(e, 'projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href=''
              className='text-cyan-300 hover:text-white transition transition-color duration-200 ease-nav-transition'
              onClick={(e) => handleNavigation(e, 'technology')}
            >
              Technology
            </a>
          </li>
          <li>
            <a
              href=''
              className='text-cyan-300 hover:text-white transition transition-color duration-200 ease-nav-transition'
              onClick={(e) => handleNavigation(e, 'achievements')}
            >
              Achievements
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Navbar;
