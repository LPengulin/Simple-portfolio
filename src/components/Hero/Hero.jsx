import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from 'framer-motion'

const Hero = () => {
  const containerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "80vh",
    
  };

  const textStyles = {
 
    color: "white",
    backgroundColor: "black",
    
    textAlign: "center",

  };

  const imgStyles = {
  
    objectFit: "cover",
  };

  const words = ["AI is not about replacing humans", "but about augmenting our abilities."
  ]
  return (
    <div style={containerStyles} className='p-9'>
      <motion.div style={textStyles} className=''
      initial={{
        x: -50,
      }}
      whileInView={{
        x: 40,
      }}
      >
        <Typewriter words={words} loop={false} cursor={true} />
      </motion.div>
      <motion.img
        style={imgStyles}
        src="https://images.pexels.com/photos/2103864/pexels-photo-2103864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="hero" className="h-full"
      
        initial={{
            x: 50,
        }}

        whileInView={{
            x: -40,
        }}

       

        whileHover={{
            x: -180,
            rotate: -8,
        }}
      />
    </div>
  );
};

export default Hero;