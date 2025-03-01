import { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import FeaturedPosts from '@/components/home/FeaturedPosts';
import Categories from '@/components/home/Categories';
import Newsletter from '@/components/shared/Newsletter';
import AboutSection from '@/components/home/AboutSection';
import RootLayout from '@/components/layout/RootLayout';

export const metadata: Metadata = {
  title: 'Eleazer Quayson | AI, Law & Business—Decoded',
  description: 'Exploring AI, Law & Business with a Data-Driven Mindset',
};

export default function Home() {
  return (
    <RootLayout>
      <Hero />
      <FeaturedPosts />
      <Categories />
      <AboutSection />
      <Newsletter />
    </RootLayout>
  );
} 