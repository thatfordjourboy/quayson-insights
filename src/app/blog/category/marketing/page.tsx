import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageTitle from '@/components/ui/PageTitle';
import Container from '@/components/ui/Container';
import RootLayout from '@/components/layout/RootLayout';

export const metadata: Metadata = {
  title: 'Marketing Articles | Eleazer Quayson Blog',
  description: 'Explore articles about Digital Marketing, Data-Driven Marketing, and Marketing Innovation.',
};

// Filter posts for Marketing category
const posts = [
  {
    id: 3,
    title: 'Machine Learning in Marketing: A Practical Guide',
    excerpt: 'Learn how machine learning algorithms can enhance your marketing strategies and improve customer engagement.',
    slug: 'machine-learning-in-marketing',
    coverImage: '/api/placeholder?width=800&height=500&text=ML+Marketing',
    category: 'Marketing',
    date: 'Jan 10, 2023',
    readTime: '6 min read',
  },
  {
    id: 10,
    title: 'Data-Driven Marketing Strategies for 2023',
    excerpt: 'Discover the latest data-driven marketing strategies that are shaping the industry in 2023.',
    slug: 'data-driven-marketing-strategies',
    coverImage: '/api/placeholder?width=800&height=500&text=Data+Marketing',
    category: 'Marketing',
    date: 'Sep 5, 2022',
    readTime: '5 min read',
  },
  {
    id: 11,
    title: 'The Psychology of Digital Marketing',
    excerpt: 'Understanding consumer psychology and how it influences effective digital marketing campaigns.',
    slug: 'psychology-digital-marketing',
    coverImage: '/api/placeholder?width=800&height=500&text=Digital+Psychology',
    category: 'Marketing',
    date: 'Aug 15, 2022',
    readTime: '7 min read',
  },
];

export default function MarketingCategoryPage() {
  return (
    <RootLayout>
      <Container className="py-12">
        <PageTitle 
          title="Marketing & Digital Strategy" 
          subtitle="Articles about marketing innovation, digital strategy, and data-driven approaches" 
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