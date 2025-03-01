'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiCheck, FiAlertCircle } from 'react-icons/fi';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }
    
    // Simulate API call
    setStatus('loading');
    
    try {
      // In a real app, this would be an API call to your newsletter service
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus('success');
      setMessage('Thank you for subscribing!');
      setEmail('');
      
      // Reset after 3 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 3000);
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 to-secondary-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <FiMail className="w-12 h-12 mx-auto mb-6 text-primary-300" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              Subscribe to my newsletter for the latest insights on AI, law, business, and marketing. No spam, just valuable content delivered to your inbox.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  disabled={status === 'loading' || status === 'success'}
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  status === 'loading'
                    ? 'bg-primary-700 cursor-wait'
                    : status === 'success'
                    ? 'bg-green-600'
                    : 'bg-white text-primary-900 hover:bg-primary-50'
                }`}
              >
                {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
              </motion.button>
            </form>
            
            {message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 text-sm flex items-center justify-center ${
                  status === 'error' ? 'text-red-300' : 'text-green-300'
                }`}
              >
                {status === 'error' ? (
                  <FiAlertCircle className="mr-2" />
                ) : (
                  <FiCheck className="mr-2" />
                )}
                {message}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 