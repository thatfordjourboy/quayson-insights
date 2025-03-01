'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCpu, FiBookOpen, FiBriefcase, FiTrendingUp } from 'react-icons/fi';

const categories = [
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    description: 'Exploring artificial intelligence, machine learning algorithms, and their real-world applications.',
    icon: FiCpu,
    color: 'bg-blue-500',
    count: 12,
  },
  {
    id: 'law',
    name: 'Law & Regulations',
    description: 'Analysis of legal frameworks, regulations, and their impact on technology and business.',
    icon: FiBookOpen,
    color: 'bg-purple-500',
    count: 8,
  },
  {
    id: 'business',
    name: 'Business Analysis',
    description: 'Insights on business strategies, market analysis, and organizational development.',
    icon: FiBriefcase,
    color: 'bg-green-500',
    count: 10,
  },
  {
    id: 'marketing',
    name: 'Marketing Strategies',
    description: 'Modern marketing approaches, digital strategies, and consumer behavior analysis.',
    icon: FiTrendingUp,
    color: 'bg-orange-500',
    count: 7,
  },
];

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

export default function Categories() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          >
            Explore by Category
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Dive into my content organized by subject matter
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {categories.map((category) => (
            <motion.div 
              key={category.id}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-dark-700 rounded-xl shadow-md hover:shadow-xl transition-shadow p-6"
            >
              <div className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4`}>
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {category.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {category.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {category.count} articles
                </span>
                <Link 
                  href={`/blog/category/${category.id}`}
                  className="text-primary-600 dark:text-primary-400 font-medium hover:underline inline-flex items-center"
                >
                  View all
                  <FiArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 