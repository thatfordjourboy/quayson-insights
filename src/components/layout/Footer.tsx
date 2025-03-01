'use client';

import Link from 'next/link';
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Blog', href: '/blog' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Categories',
    links: [
      { label: 'AI & ML', href: '/blog/category/ai-ml' },
      { label: 'Law', href: '/blog/category/law' },
      { label: 'Business', href: '/blog/category/business' },
      { label: 'Marketing', href: '/blog/category/marketing' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  },
];

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/eleazerquayson', label: 'GitHub' },
  { icon: FiTwitter, href: 'https://twitter.com/eleazerquayson', label: 'Twitter' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/eleazerquayson', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:contact@eleazerquayson.com', label: 'Email' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-dark-800 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-600 dark:text-primary-400 font-heading">Quayson</span>
              <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-gray-100">Insights</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Exploring AI, Law & Business with a Data-Driven Mindset
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} Eleazer Quayson. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-4 sm:mt-0">
            Built with Next.js, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
} 