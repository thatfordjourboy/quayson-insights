import { Metadata } from 'next';
import PageTitle from '@/components/ui/PageTitle';
import Container from '@/components/ui/Container';
import RootLayout from '@/components/layout/RootLayout';

export const metadata: Metadata = {
  title: 'Resources | Eleazer Quayson\'s Blog',
  description: 'Helpful resources, tools, and guides for developers and tech enthusiasts.',
};

export default function ResourcesPage() {
  return (
    <RootLayout>
      <main className="py-12">
        <Container>
          <PageTitle
            title="Resources"
            subtitle="Helpful tools, guides, and resources for developers and tech enthusiasts"
          />
          
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Resource cards will go here */}
            <div className="bg-white dark:bg-dark-900 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-800 transition-all hover:shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  Developer Tools
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A collection of essential tools and utilities for modern web development.
                </p>
                <a 
                  href="#" 
                  className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
                >
                  Explore →
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-dark-900 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-800 transition-all hover:shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  Learning Guides
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Comprehensive guides and tutorials to help you master new technologies.
                </p>
                <a 
                  href="#" 
                  className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
                >
                  Learn More →
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-dark-900 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-800 transition-all hover:shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  Free eBooks
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Download free eBooks on programming, AI, and technology trends.
                </p>
                <a 
                  href="#" 
                  className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
                >
                  Download →
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Featured Resources
            </h2>
            
            <div className="bg-white dark:bg-dark-900 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-800 p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Getting Started with Next.js
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A comprehensive guide to building modern web applications with Next.js, React, and TypeScript.
                Learn how to create fast, SEO-friendly websites with the latest web technologies.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Last updated: June 2023
                </span>
                <a 
                  href="#" 
                  className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
                >
                  Read Guide →
                </a>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </RootLayout>
  );
} 