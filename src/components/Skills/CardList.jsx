import React from 'react';
import Swiper from 'react-id-swiper';
import { motion } from 'framer-motion'

const Card = ({ title, description, icon: Icon, progress }) => (
  <div className='flex justify-between p-4 m-4 w-full'>
    <div className="
    "><Icon className='mr-12'/></div>
    <h1 className='mr-4'>{title}</h1>
    <p>{description}</p>
    <motion.div className='bar h-[10px] bg-sky-700'
    initial={{
        x: 20,
        y: 18,
       

    }}
    style={{
        width: progress + 'px',
    }}
    ></motion.div>
  </div>
);


const CardList = ({ cards }) => (
  <Swiper>
    {cards.map((card, index) => (
      <Card key={index} {...card}  />
    ))}
  </Swiper>
);

export default CardList;