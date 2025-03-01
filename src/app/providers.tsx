'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AnimatePresence mode="wait" initial={false}>
        {children}
      </AnimatePresence>
    </ThemeProvider>
  );
} 