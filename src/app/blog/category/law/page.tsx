import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageTitle from '@/components/ui/PageTitle';
import Container from '@/components/ui/Container';
import RootLayout from '@/components/layout/RootLayout';

export const metadata: Metadata = {
  title: 'Law Articles | Eleazer Quayson Blog',
  description: 'Explore articles about Law, Legal Tech, and Legal Innovation.',
};

// Filter posts for Law category
const posts = [
  {
    id: 1,
    title: 'How AI is Transforming Legal Research',
    excerpt: 'Discover how artificial intelligence is revolutionizing the way legal professionals conduct research and analysis.',
    slug: 'how-ai-is-transforming-legal-research',
    coverImage: '/api/placeholder?width=800&height=500&text=AI+Legal+Research',
    category: 'AI & Law',
    date: 'Feb 15, 2023',
    readTime: '5 min read',
  },
  {
    id: 5,
    title: 'The Impact of AI on Legal Practice',
    excerpt: 'An examination of how artificial intelligence is changing the landscape of legal practice and what it means for attorneys.',
    slug: 'impact-of-ai-on-legal-practice',
    coverImage: '/api/placeholder?width=800&height=500&text=AI+and+Law',
    category: 'Law',
    date: 'Nov 20, 2022',
    readTime: '9 min read',
  },
  {
    id: 8,
    title: 'Legal Frameworks for Data Privacy',
    excerpt: 'A comprehensive overview of current and emerging legal frameworks governing data privacy around the world.',
    slug: 'legal-frameworks-data-privacy',
    coverImage: '/api/placeholder?width=800&height=500&text=Legal+Privacy',
    category: 'Law',
    date: 'Oct 5, 2022',
    readTime: '7 min read',
  },
];

export default function LawCategoryPage() {
  return (
    <RootLayout>
      <Container className="py-12">
        <PageTitle 
          title="Law & Legal Innovation" 
          subtitle="Articles about legal technology, innovation, and the future of law" 
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