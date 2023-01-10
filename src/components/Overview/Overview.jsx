import React from 'react'
import { Typewriter } from "react-simple-typewriter";
import { motion } from 'framer-motion';
import { useState } from 'react'

const Overview = () => {

    const [hovered, isHovered] = useState(false);

    const containerStyles = {
        backgroundColor: hovered ? 'rgba(0, 200, 255, 1)' : 'rgba(0, 200, 255, 0.19)',
        color: hovered ? 'black' : 'white',
    };

    const containerVariants = {
        start: { y: 0 },
        end: { y: 0},
        middle: {y: 0},
    };

    const containerTransition = {
    duration: 0.5,
    ease: "easeInOut",
    repeat: Infinity,
    };
  return (
    <motion.div className='flex flex-col justify-center items-center p-9 border border-white w-[80%] h-[80%] rounded-2xl' style={containerStyles}

    
    >
    <motion.div className='w-[200px] h-[40px] bg-red-200 rounded-3xl hover:w-[400px] transition duration-300' onMouseEnter={() => isHovered(true)} onMouseLeave={() => isHovered(false)}>
    
    </motion.div>
        <div className='p-4'>
            <h1 className='text-3xl'>
                Hello I'm Rupin <Typewriter words={[""]} cursor={true}/>
            </h1>
        </div>
        <div className='p-4 w-2/3'>
            <p>
                passionate computer scientist with entrepreneurial spirit. Dedicated to shape the digital transformation by solving hard problems in the fields of machine learning, applied mathematics, computer graphics and algorithms.
            </p>
        </div>
    </motion.div>
  )
}

export default Overview