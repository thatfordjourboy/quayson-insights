'use client';

import { ReactNode, useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

// Safely load animation components with proper error handling and fallbacks
const ParticleBackground = dynamic(
  () => import('@/components/effects/ParticleBackground')
    .then(mod => ({ default: mod.default }))
    .catch(err => {
      console.warn('Failed to load ParticleBackground component:', err);
      return { default: () => null };
    }),
  { 
    ssr: false, 
    loading: () => null,
  }
);

const CursorEffect = dynamic(
  () => import('@/components/effects/CursorEffect')
    .then(mod => ({ default: mod.default }))
    .catch(err => {
      console.warn('Failed to load CursorEffect component:', err);
      return { default: () => null };
    }),
  { 
    ssr: false, 
    loading: () => null,
  }
);

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [mounted, setMounted] = useState(false);
  const [effectsLoaded, setEffectsLoaded] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  
  // Handle mounting and client-side rendering
  useEffect(() => {
    setMounted(true);
    
    // Ensure content is visible even if animations fail
    const contentTimer = setTimeout(() => {
      setContentVisible(true);
    }, 300);
    
    // Delay loading effects to ensure DOM is ready
    const effectsTimer = setTimeout(() => {
      try {
        setEffectsLoaded(true);
      } catch (error) {
        console.error('Error loading effects:', error);
      }
    }, 800);
    
    return () => {
      clearTimeout(effectsTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <>
      {/* Only load effects when component is mounted and effects are ready */}
      {mounted && effectsLoaded ? (
        <>
          <ParticleBackground />
          <CursorEffect />
        </>
      ) : null}
      
      <div className="relative z-10">
        <Header />
        
        {/* Main content with safe animations */}
        <div className={`transition-opacity duration-500 ${mounted ? (contentVisible ? 'opacity-100' : 'opacity-0') : 'opacity-0'}`}>
          <AnimatePresence mode="wait">
            <motion.main
              key="main-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden"
            >
              <div className="page-transition-wrapper">
                {children}
              </div>
              
              {/* Simplified decorative elements with safer animations */}
              {mounted ? (
                <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-0 overflow-hidden">
                  <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-primary-300/20 to-secondary-300/20 dark:from-primary-600/10 dark:to-secondary-600/10 blur-3xl animate-float"></div>
                  <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-secondary-300/20 to-primary-300/20 dark:from-secondary-600/10 dark:to-primary-600/10 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
                </div>
              ) : null}
            </motion.main>
          </AnimatePresence>
        </div>
        
        <Footer />
      </div>
    </>
  );
} 