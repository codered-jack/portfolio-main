import React from 'react';
import { items } from '../data/data';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

function Card({ id, title, description, theme }) {
  return (
    <li className={`card ${theme}`}>
      <Link
        href={{
          pathname: '/',
          query: { id },
        }}
        scroll={false}
        className={`card-open-link`}
      >
        <div className='card-content-container'>
          <div
            className='absolute top-0 left-0 h-40 w-full rounded-3xl z-10'
            style={{
              background: `linear-gradient(180deg, ${theme} 0%, rgba(0,0,0,0) 100%)`,
            }}
          />
          <div
            className='absolute bottom-0 left-0 h-20 w-full rounded-3xl z-10'
            style={{
              background: `linear-gradient(0deg, ${theme} 10%, rgba(0,0,0,0) 100%)`,
            }}
          />
          <motion.div
            className='card-content'
            layoutId={`card-container-${id}`}
            style={{ background: theme }}
          >
            <motion.div
              className='card-image-container'
              layoutId={`card-image-container-${id}`}
            >
              <Image
                className='card-image'
                layout='fill'
                objectFit='contain'
                src={`/images/${id}.webp`}
                alt=''
              />
            </motion.div>
            <motion.div
              className='title-container'
              layoutId={`title-container-${id}`}
            >
              <span className='category'>{title}</span>
              <h2 className='text-lg'>{description}</h2>
            </motion.div>
          </motion.div>
        </div>
      </Link>
    </li>
  );
}

export function List({ selectedId }) {
  return (
    <ul className='card-list'>
      {items.map((card) => (
        <Card key={card.id} {...card} isSelected={card.id === selectedId} />
      ))}
    </ul>
  );
}
