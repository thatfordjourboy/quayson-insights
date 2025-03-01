'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiAward, FiBookOpen, FiCode } from 'react-icons/fi';

const achievements = [
  {
    icon: FiAward,
    title: 'Experience',
    description: 'Over 10 years of experience in AI, law, and business analysis.',
  },
  {
    icon: FiBookOpen,
    title: 'Publications',
    description: 'Author of numerous articles and research papers on technology and law.',
  },
  {
    icon: FiCode,
    title: 'Projects',
    description: 'Led multiple successful projects at the intersection of AI and business.',
  },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="relative w-full max-w-md mx-auto lg:max-w-none aspect-square">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rotate-3"></div>
              <div className="absolute inset-0 rounded-2xl overflow-hidden bg-white dark:bg-dark-800 shadow-xl">
                <Image
                  src="/api/placeholder?width=600&height=600&text=Home+About+Section"
                  alt="Eleazer Quayson"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I am Eleazer Quayson, a passionate professional at the intersection of AI, Law, and Business Analysis. With a background in both technology and legal frameworks, I bring a unique perspective to the rapidly evolving digital landscape.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              My work focuses on exploring how artificial intelligence is transforming industries, the legal implications of emerging technologies, and how businesses can leverage data-driven insights for strategic advantage.
            </p>
            
            {/* Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center p-4"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-3">
                    <achievement.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
            
            <Link 
              href="/about"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors"
            >
              Learn More About Me
              <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 