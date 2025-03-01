import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageTitle from '@/components/ui/PageTitle';
import Container from '@/components/ui/Container';
import RootLayout from '@/components/layout/RootLayout';

export const metadata: Metadata = {
  title: 'Business Articles | Eleazer Quayson Blog',
  description: 'Explore articles about Business, Analytics, and Innovation.',
};

// Filter posts for Business category
const posts = [
  {
    id: 2,
    title: 'The Future of Business Analytics',
    excerpt: 'Explore the emerging trends in business analytics and how data-driven decision making is shaping the future of commerce.',
    slug: 'future-of-business-analytics',
    coverImage: '/api/placeholder?width=800&height=500&text=Business+Analytics',
    category: 'Business',
    date: 'Jan 28, 2023',
    readTime: '7 min read',
  },
  {
    id: 7,
    title: 'Digital Transformation in Traditional Industries',
    excerpt: 'How traditional industries are embracing digital transformation to stay competitive in the modern marketplace.',
    slug: 'digital-transformation-traditional-industries',
    coverImage: '/api/placeholder?width=800&height=500&text=Digital+Transform',
    category: 'Business',
    date: 'Oct 18, 2022',
    readTime: '8 min read',
  },
  {
    id: 9,
    title: 'Sustainable Business Practices in the Digital Age',
    excerpt: 'Exploring how businesses can implement sustainable practices while leveraging digital technologies.',
    slug: 'sustainable-business-practices',
    coverImage: '/api/placeholder?width=800&height=500&text=Sustainable+Business',
    category: 'Business',
    date: 'Sep 22, 2022',
    readTime: '6 min read',
  },
];

export default function BusinessCategoryPage() {
  return (
    <RootLayout>
      <Container className="py-12">
        <PageTitle 
          title="Business & Analytics" 
          subtitle="Articles about business strategy, analytics, and innovation" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {posts.map((post) => (
            <article key={post.id} className="bg-white dark:bg-dark-700 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48 w-full">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{post.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="inline-block bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs font-medium px-2.5 py-0.5 rounded">
                    {post.category}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </RootLayout>
  );
} 