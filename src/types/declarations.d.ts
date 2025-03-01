// This file contains type declarations for modules that don't have their own type definitions

declare module 'next-themes' {
  import { ReactNode } from 'react';
  
  export interface ThemeProviderProps {
    attribute?: string;
    defaultTheme?: string;
    enableSystem?: boolean;
    storageKey?: string;
    forcedTheme?: string;
    disableTransitionOnChange?: boolean;
    themes?: string[];
    children: ReactNode;
  }
  
  export function ThemeProvider(props: ThemeProviderProps): JSX.Element;
  
  export function useTheme(): {
    theme: string | undefined;
    setTheme: (theme: string) => void;
    resolvedTheme: string | undefined;
    themes: string[];
    systemTheme: string | undefined;
  };
}

// Add React namespace to fix React.ReactNode errors
declare namespace React {
  interface ReactNode {
    // Empty interface to extend the React namespace
  }
}

// Declare modules for any other missing type definitions
declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

// Add any other module declarations as needed 