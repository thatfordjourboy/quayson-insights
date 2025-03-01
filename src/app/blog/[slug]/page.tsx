import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import RootLayout from '@/components/layout/RootLayout';

// Mock data for blog posts
const posts = [
  {
    id: 1,
    title: 'How AI is Transforming Legal Research',
    excerpt: 'Discover how artificial intelligence is revolutionizing the way legal professionals conduct research and analysis.',
    content: `
      <p>Artificial intelligence is revolutionizing the legal industry, particularly in the realm of legal research. Traditional legal research methods often involve hours of manual searching through case law, statutes, and legal commentaries. However, AI-powered tools are now capable of performing these tasks in a fraction of the time.</p>
      
      <h2>The Evolution of Legal Research</h2>
      <p>Legal research has evolved significantly over the decades. From physical law libraries to digital databases, and now to AI-powered platforms, the journey has been transformative. AI algorithms can now analyze vast amounts of legal data, identify relevant precedents, and even predict case outcomes with remarkable accuracy.</p>
      
      <h2>Key Benefits of AI in Legal Research</h2>
      <ul>
        <li><strong>Efficiency:</strong> AI can process thousands of documents in minutes, significantly reducing research time.</li>
        <li><strong>Accuracy:</strong> Advanced algorithms can identify relevant cases and statutes that might be missed in manual searches.</li>
        <li><strong>Cost-effectiveness:</strong> Reduced research time translates to lower costs for clients.</li>
        <li><strong>Comprehensive Analysis:</strong> AI tools can analyze case law across multiple jurisdictions simultaneously.</li>
      </ul>
      
      <h2>Popular AI Legal Research Tools</h2>
      <p>Several AI-powered platforms have emerged in recent years, each offering unique features and capabilities. These include ROSS Intelligence, Casetext's CARA, and LexisNexis' Lexis Answers. These tools leverage natural language processing and machine learning to understand legal queries and provide relevant results.</p>
      
      <h2>The Future of AI in Legal Research</h2>
      <p>As AI technology continues to advance, we can expect even more sophisticated legal research tools. Future developments may include predictive analytics for case outcomes, automated brief writing, and real-time legal advice generation. However, it's important to note that AI is not replacing lawyers but rather augmenting their capabilities.</p>
      
      <h2>Ethical Considerations</h2>
      <p>While AI offers numerous benefits, it also raises ethical questions. Issues such as algorithmic bias, data privacy, and the potential for over-reliance on technology must be addressed. Legal professionals must maintain a critical perspective when using AI tools and understand their limitations.</p>
      
      <h2>Conclusion</h2>
      <p>AI is transforming legal research in profound ways, making it faster, more accurate, and more comprehensive. As these technologies continue to evolve, they will likely become an indispensable part of legal practice. However, the human element—critical thinking, ethical judgment, and creative problem-solving—will remain essential to the practice of law.</p>
    `,
    slug: 'how-ai-is-transforming-legal-research',
    coverImage: '/api/placeholder?width=1200&height=600&text=AI+Legal+Research',
    category: 'AI & Law',
    date: 'Feb 15, 2023',
    readTime: '5 min read',
    author: {
      name: 'Eleazer Quayson',
      image: '/api/placeholder?width=100&height=100&text=EQ',
      bio: 'AI, Law & Business enthusiast',
    },
    tags: ['AI', 'Legal Tech', 'Research', 'Law'],
  },
  // Add more posts as needed
];

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts.find((post) => post.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }
  
  return {
    title: `${post.title} | Eleazer Quayson Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = posts.find((post) => post.slug === params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <RootLayout>
      <article className="bg-white dark:bg-dark-900">
        {/* Hero section */}
        <div className="relative h-[50vh] min-h-[400px] w-full">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-8 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <div className="mb-4 flex items-center">
                  <span className="bg-primary-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="mx-2 text-white/80">•</span>
                  <span className="text-white/80">{post.date}</span>
                  <span className="mx-2 text-white/80">•</span>
                  <span className="text-white/80">{post.readTime}</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                    <Image
                      src={post.author.image}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-white">{post.author.name}</p>
                    <p className="text-sm text-white/80">{post.author.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="prose dark:prose-invert lg:prose-lg mx-auto" dangerouslySetInnerHTML={{ __html: post.content }} />
            
            {/* Tags */}
            <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link 
                    key={tag}
                    href={`/blog/tag/${tag.toLowerCase()}`}
                    className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Author bio */}
            <div className="mt-12 p-6 bg-gray-50 dark:bg-dark-800 rounded-xl">
              <div className="flex items-center">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {post.author.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {post.author.bio}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="mt-12 flex justify-between">
              <Link 
                href="/blog"
                className="px-4 py-2 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
              >
                ← Back to Blog
              </Link>
              {/* Next/Previous post links would go here */}
            </div>
          </div>
        </div>
      </article>
    </RootLayout>
  );
} 