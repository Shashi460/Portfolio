import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

export const Lines = () => {
  return (
    <>
      {/* Blur Line */}
      <motion.div style={{ position: 'absolute', right: '50%', bottom: '50%', background: 'linear-gradient(to bottom, transparent, #00bcd4)', transform: 'translateY(14px)', width: '1px', height: '40px', filter: 'blur(2px)' }} />
      {/* Glow Line */}
      <motion.div style={{ position: 'absolute', right: '50%', bottom: '50%', background: 'linear-gradient(to bottom, transparent, #00bcd4)', transform: 'translateY(14px)', width: '1px', height: '40px', filter: 'blur(2px)' }} />
      {/* Blur Circle */}
      <motion.div style={{ position: 'absolute', right: '50%', bottom: '50%', backgroundColor: '#00bcd4', transform: 'translate(1.5px, 14px)', width: '4px', height: '4px', borderRadius: '50%', zIndex: 40, filter: 'blur(3px)' }} />
      {/* Glow Circle */}
      <motion.div style={{ position: 'absolute', right: '50%', bottom: '50%', backgroundColor: '#00bcd4', transform: 'translate(0.5px, 14px)', width: '2px', height: '2px', borderRadius: '50%', zIndex: 40 }} />
    </>
  );
};
