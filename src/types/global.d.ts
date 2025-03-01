// Global type declarations for the project

// React JSX types
import React from 'react';
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

// Component Props types
export interface RootLayoutProps {
  children: React.ReactNode;
}

// Declare modules for which TypeScript can't find type declarations
declare module 'react-icons/fi' {
  import { IconType } from 'react-icons';
  export const FiArrowRight: IconType;
  export const FiAward: IconType;
  export const FiBookOpen: IconType;
  export const FiCode: IconType;
  export const FiGithub: IconType;
  export const FiLinkedin: IconType;
  export const FiTwitter: IconType;
  export const FiSend: IconType;
  export const FiCheck: IconType;
  export const FiAlertCircle: IconType;
  export const FiMail: IconType;
  export const FiMapPin: IconType;
  export const FiPhone: IconType;
  // Add other icons as needed
} 