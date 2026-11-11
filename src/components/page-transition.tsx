'use client';
import { motion, useReducedMotion } from 'motion/react';
/** Template remounts on route changes; server-rendered children stay server-owned. */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={false}
      animate={
        reduce ? { y: 0, opacity: 1 } : { y: [12, 0], opacity: [0.85, 1] }
      }
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
