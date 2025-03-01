'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

// Mock data for featured posts
const featuredPosts = [
  {
    id: 1,
    title: 'How AI is Transforming Legal Research',
    excerpt: 'Discover how artificial intelligence is revolutionizing the way legal professionals conduct research and analysis.',
    slug: 'how-ai-is-transforming-legal-research',
    coverImage: '/images/blog/ai-legal-research.svg',
    category: 'AI & Law',
    date: 'Feb 15, 2023',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'The Future of Business Analytics',
    excerpt: 'Explore the emerging trends in business analytics and how data-driven decision making is shaping the future of commerce.',
    slug: 'future-of-business-analytics',
    coverImage: '/images/blog/business-analytics.svg',
    category: 'Business',
    date: 'Jan 28, 2023',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Machine Learning in Marketing: A Practical Guide',
    excerpt: 'Learn how machine learning algorithms can enhance your marketing strategies and improve customer engagement.',
    slug: 'machine-learning-in-marketing',
    coverImage: '/images/blog/ml-marketing.svg',
    category: 'Marketing',
    date: 'Jan 10, 2023',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Ethical Considerations in AI Development',
    excerpt: 'An in-depth look at the ethical challenges and considerations when developing artificial intelligence systems.',
    slug: 'ethical-considerations-in-ai',
    coverImage: '/images/blog/ai-ethics.svg',
    category: 'AI & Ethics',
    date: 'Dec 5, 2022',
    readTime: '8 min read',
  },
];

export default function FeaturedPosts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = featuredPosts.length - 1;
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="py-20 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          >
            Featured Articles
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Explore my latest insights on AI, law, business, and marketing
          </motion.p>
        </div>

        <div className="relative">
          {/* Slider controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10 md:-left-5">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full bg-white dark:bg-dark-700 shadow-lg text-gray-800 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
              aria-label="Previous slide"
            >
              <FiArrowLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10 md:-right-5">
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full bg-white dark:bg-dark-700 shadow-lg text-gray-800 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
              aria-label="Next slide"
            >
              <FiArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Slider */}
          <div 
            ref={sliderRef}
            className="overflow-hidden"
          >
            <motion.div 
              className="flex"
              animate={{ x: `calc(-${currentIndex * 100}%)` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {featuredPosts.map((post) => (
                <div key={post.id} className="w-full flex-shrink-0 px-4">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="relative h-64 sm:h-72">
                      <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-primary-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {post.excerpt}
                      </p>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-primary-600 dark:text-primary-400 font-medium hover:underline inline-flex items-center"
                      >
                        Read more
                        <FiArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {featuredPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-primary-600 dark:bg-primary-400'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
          >
            View All Articles
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
} 