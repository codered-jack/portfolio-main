import React from 'react';

function SectionTitle({ children }) {
  return (
    <h1
      id={children}
      className='section-heading font-lora text-4xl font-medium text-white md:tracking-[1rem] relative mb-10 py-10 flex justify-center align-center uppercase leading-[54px]'
    >
      <span className='link-underline'>{children}</span>
    </h1>
  );
}

export default SectionTitle;
