// Page transition component
import React from 'react'

import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

  
  const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.5,
  };
  
const PageTransition = ({ direction,  children }) => {
  const location = useLocation();
  
const pageVariants = direction === 'right' ? {
  initial: { x: 200, opacity: 0 },
  animate: { x: 0, opacity: 1 },

}: {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};


  return (
    <AnimatePresence 
    style={{ overflow: "hidden" }}
    
    mode='wait'>
    <motion.div
      key={location.pathname}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
    
  </AnimatePresence>
  );
}

export default PageTransition;
