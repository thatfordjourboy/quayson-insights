'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name');
      return false;
    }
    
    if (!formData.email.trim()) {
      setErrorMessage('Please enter your email');
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    
    if (!formData.message.trim()) {
      setErrorMessage('Please enter your message');
      return false;
    }
    
    return true;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatus('error');
      return;
    }
    
    setStatus('loading');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setStatus('success');
      
      // Reset after 3 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-700 text-gray-900 dark:text-gray-100"
          disabled={status === 'loading' || status === 'success'}
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-700 text-gray-900 dark:text-gray-100"
          disabled={status === 'loading' || status === 'success'}
          required
        />
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-700 text-gray-900 dark:text-gray-100"
          disabled={status === 'loading' || status === 'success'}
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-700 text-gray-900 dark:text-gray-100"
          disabled={status === 'loading' || status === 'success'}
          required
        ></textarea>
      </div>
      
      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg flex items-center"
        >
          <FiAlertCircle className="w-5 h-5 mr-2" />
          <span>{errorMessage}</span>
        </motion.div>
      )}
      
      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg flex items-center"
        >
          <FiCheck className="w-5 h-5 mr-2" />
          <span>Your message has been sent successfully! I'll get back to you soon.</span>
        </motion.div>
      )}
      
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className={`w-full px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-colors ${
          status === 'loading'
            ? 'bg-primary-500 text-white cursor-wait'
            : status === 'success'
            ? 'bg-green-600 text-white'
            : 'bg-primary-600 hover:bg-primary-700 text-white'
        }`}
      >
        {status === 'loading' ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : status === 'success' ? (
          <>
            <FiCheck className="mr-2" />
            Sent!
          </>
        ) : (
          <>
            <FiSend className="mr-2" />
            Send Message
          </>
        )}
      </motion.button>
    </form>
  );
} 