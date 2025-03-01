import React from 'react';

interface PageTitleProps {
  title: string;
  subtitle?: string;
}

export default function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
} 