import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import RootLayout from '@/components/layout/RootLayout';
import { FiArrowRight, FiAward, FiBookOpen, FiCode, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'About | Eleazer Quayson',
  description: 'Learn more about Eleazer Quayson, an AI, Law & Business enthusiast',
};

export default function AboutPage() {
  return (
    <RootLayout>
      {/* Hero Section */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image */}
            <div className="flex-1">
              <div className="relative w-full max-w-md mx-auto lg:max-w-none aspect-square">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rotate-3"></div>
                <div className="absolute inset-0 rounded-2xl overflow-hidden bg-white dark:bg-dark-800 shadow-xl">
                  <Image
                    src="/api/placeholder?width=600&height=600&text=About+Page+Profile"
                    alt="Eleazer Quayson"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                About Me
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                I am Eleazer Quayson, a passionate professional at the intersection of AI, Law, and Business Analysis. With a background in both technology and legal frameworks, I bring a unique perspective to the rapidly evolving digital landscape.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                My work focuses on exploring how artificial intelligence is transforming industries, the legal implications of emerging technologies, and how businesses can leverage data-driven insights for strategic advantage.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4 mb-8">
                <a 
                  href="https://github.com/eleazerquayson" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub className="w-5 h-5" />
                </a>
                <a 
                  href="https://twitter.com/eleazerquayson" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors"
                  aria-label="Twitter"
                >
                  <FiTwitter className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/eleazerquayson" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
              </div>
              
              <Link 
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors"
              >
                Get in Touch
                <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Background Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              My Background
            </h2>
            
            <div className="space-y-12">
              <div className="bg-white dark:bg-dark-700 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Education
                </h3>
                <ul className="space-y-4">
                  <li className="border-l-2 border-primary-500 pl-4 py-1">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Master of Laws in Technology Law
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Harvard Law School, 2018-2019
                    </p>
                  </li>
                  <li className="border-l-2 border-primary-500 pl-4 py-1">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Bachelor of Science in Computer Science
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Massachusetts Institute of Technology, 2014-2018
                    </p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-dark-700 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Professional Experience
                </h3>
                <ul className="space-y-4">
                  <li className="border-l-2 border-primary-500 pl-4 py-1">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Legal Technology Consultant
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Global Law Firm, 2020-Present
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Advising on AI implementation in legal practice, developing legal tech solutions, and conducting research on emerging technologies.
                    </p>
                  </li>
                  <li className="border-l-2 border-primary-500 pl-4 py-1">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      AI Research Associate
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Tech Research Institute, 2019-2020
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Conducted research on the intersection of AI and law, focusing on ethical implications and regulatory frameworks.
                    </p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-dark-700 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Skills & Expertise
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Technical Skills
                    </h4>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                      <li>• Machine Learning & AI</li>
                      <li>• Data Analysis</li>
                      <li>• Python & R Programming</li>
                      <li>• Web Development</li>
                      <li>• Legal Tech Platforms</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Legal & Business Skills
                    </h4>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                      <li>• Technology Law</li>
                      <li>• Intellectual Property</li>
                      <li>• Business Strategy</li>
                      <li>• Market Analysis</li>
                      <li>• Regulatory Compliance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Achievements Section */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Achievements & Publications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-dark-800 p-6 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                <FiAward className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Awards & Recognition
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Legal Tech Innovator Award, 2022</li>
                <li>• Top 30 Under 30 in Law & Technology, 2021</li>
                <li>• Research Excellence Award, Harvard Law School, 2019</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-dark-800 p-6 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                <FiBookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Publications
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• "AI in Legal Practice: Opportunities and Challenges", Harvard Law Review, 2022</li>
                <li>• "The Future of Regulatory Frameworks for AI", Tech Policy Journal, 2021</li>
                <li>• "Data-Driven Business Strategies", Business Analytics Quarterly, 2020</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-dark-800 p-6 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                <FiCode className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Projects
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• LegalAI Assistant - An AI tool for legal research</li>
                <li>• Market Analysis Dashboard - Data visualization for business insights</li>
                <li>• Regulatory Compliance Tracker - Automated compliance monitoring system</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-secondary-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or partnerships.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-white text-primary-900 font-medium hover:bg-primary-50 transition-colors"
          >
            Get in Touch
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </RootLayout>
  );
} 