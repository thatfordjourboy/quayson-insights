import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import RootLayout from '@/components/layout/RootLayout';

export const metadata: Metadata = {
  title: 'Blog | Eleazer Quayson',
  description: 'Explore articles on AI, Law, Business, and Marketing',
};

// Mock data for blog posts
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
    id: 4,
    title: 'Ethical Considerations in AI Development',
    excerpt: 'An in-depth look at the ethical challenges and considerations when developing artificial intelligence systems.',
    slug: 'ethical-considerations-in-ai',
    coverImage: '/api/placeholder?width=800&height=500&text=AI+Ethics',
    category: 'AI & Ethics',
    date: 'Dec 5, 2022',
    readTime: '8 min read',
  },
  {
    id: 5,
    title: 'The Intersection of AI and Law',
    excerpt: 'Exploring how artificial intelligence is changing legal practice and what it means for the future of law.',
    slug: 'intersection-of-ai-and-law',
    coverImage: '/api/placeholder?width=800&height=500&text=AI+and+Law',
    category: 'AI & Law',
    date: 'Nov 20, 2022',
    readTime: '6 min read',
  },
  {
    id: 6,
    title: 'Data-Driven Marketing Strategies',
    excerpt: 'How to leverage data analytics to create more effective marketing campaigns and drive customer engagement.',
    slug: 'data-driven-marketing-strategies',
    coverImage: '/api/placeholder?width=800&height=500&text=Data+Marketing',
    category: 'Marketing',
    date: 'Nov 5, 2022',
    readTime: '5 min read',
  },
];

export default function BlogPage() {
  return (
    <RootLayout>
      <div className="bg-gray-50 dark:bg-dark-900 py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Blog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore my latest insights on AI, law, business, and marketing
            </p>
          </div>

          {/* Filter/Search section would go here */}
          
          {/* Blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article 
                key={post.id}
                className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <Link href={`/blog/${post.slug}`} className="block relative h-48 sm:h-64">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-primary-600 dark:text-primary-400 font-medium hover:underline inline-flex items-center"
                  >
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          {/* Pagination would go here */}
        </div>
      </div>
    </RootLayout>
  );
} 