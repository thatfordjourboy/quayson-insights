'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Animated text options
const animatedTextOptions = [
  'AI & Machine Learning',
  'Law & Regulations',
  'Business Analysis',
  'Marketing Strategies',
];

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);

  // Cycle through text options
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % animatedTextOptions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-dark-800 dark:to-dark-900">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary-100 dark:bg-primary-900/20 blur-3xl opacity-70"></div>
        <div className="absolute top-60 -left-20 w-60 h-60 rounded-full bg-secondary-100 dark:bg-secondary-900/20 blur-3xl opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          {/* Text content */}
          <motion.div variants={item} className="flex-1 text-center lg:text-left">
            <motion.h1 
              variants={item}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              Insights on{' '}
              <span className="relative inline-block">
                <span className="text-primary-600 dark:text-primary-400">
                  {animatedTextOptions[textIndex]}
                </span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-1 bg-primary-500 dark:bg-primary-400"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse' }}
                ></motion.span>
              </span>
            </motion.h1>
            
            <motion.p 
              variants={item}
              className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0"
            >
              Exploring the intersection of technology, law, and business with a data-driven mindset. Join me on this journey of discovery and innovation.
            </motion.p>
            
            <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/blog"
                className="px-8 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors flex items-center justify-center gap-2 group"
              >
                Read Articles
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/about"
                className="px-8 py-3 rounded-lg bg-white dark:bg-dark-700 border border-gray-300 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-500 text-gray-800 dark:text-gray-200 font-medium transition-colors"
              >
                About Me
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Image/Illustration */}
          <motion.div 
            variants={item}
            className="flex-1 relative"
          >
            <div className="relative w-full max-w-md mx-auto lg:max-w-none aspect-square">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 animate-float"></div>
              <div className="absolute inset-4 rounded-full overflow-hidden bg-white dark:bg-dark-800 shadow-xl">
                <Image
                  src="/images/logo.webp"
                  alt="Eleazer Quayson"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 