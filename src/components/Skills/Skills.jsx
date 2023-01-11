import { motion } from 'framer-motion'
import React from 'react'
import CardList from './CardList'

const Skills = ({cards}) => {
  return (
    <motion.div
    initial={{
        opacity: 0,
    }}
    whileInView={{
        opacity: 1,
        x: -120,
    }}
    >   
        
        <CardList cards={cards} />
    </motion.div>
  )
}

export default Skills