'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function CursorEffect() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const { theme } = useTheme();
  
  // Mouse position with spring physics
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Add spring physics
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };
    
    const handleMouseEnter = () => {
      setIsVisible(true);
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    
    // Track hover state on interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive: boolean = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') !== null || 
        target.closest('button') !== null ||
        target.getAttribute('role') === 'button' ||
        Boolean(target.classList?.contains('interactive'));
      
      setIsHovering(isInteractive);
    };
    
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);
  
  // Hide default cursor
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.classList.add('custom-cursor');
      
      return () => {
        document.body.classList.remove('custom-cursor');
      };
    }
  }, []);
  
  // Add custom cursor styles to global CSS
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const style = document.createElement('style');
      style.innerHTML = `
        .custom-cursor {
          cursor: none !important;
        }
        
        .custom-cursor * {
          cursor: none !important;
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        document.head.removeChild(style);
      };
    }
  }, []);
  
  const isDark = theme === 'dark';
  
  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          className="relative flex items-center justify-center"
          animate={{
            width: isHovering ? 60 : 20,
            height: isHovering ? 60 : 20,
            x: isHovering ? -30 : -10,
            y: isHovering ? -30 : -10,
          }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute rounded-full bg-white"
            animate={{
              width: isHovering ? '100%' : '100%',
              height: isHovering ? '100%' : '100%',
              opacity: isHovering ? 1 : 0.8,
            }}
            transition={{ duration: 0.2 }}
          />
          
          {isHovering && (
            <motion.div
              className="absolute text-black text-xs font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              View
            </motion.div>
          )}
        </motion.div>
      </motion.div>
      
      {/* Trailing cursor effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40"
        style={{
          x: cursorX,
          y: cursorY,
          opacity: isVisible ? 0.3 : 0,
        }}
      >
        <motion.div
          className={`w-4 h-4 rounded-full ${isDark ? 'bg-primary-400' : 'bg-primary-600'}`}
          style={{
            x: -8,
            y: -8,
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </motion.div>
    </>
  );
} 