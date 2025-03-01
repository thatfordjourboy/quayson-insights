import { NextRequest, NextResponse } from 'next/server';

// Mock data for demonstration purposes
// In a real application, this would come from your database via Prisma
const posts = [
  {
    id: 1,
    title: 'The Future of AI in Legal Research',
    slug: 'ai-legal-research',
    excerpt: 'How artificial intelligence is transforming the way legal professionals conduct research and analysis.',
    category: 'AI & Law',
    publishedAt: '2023-11-15T08:00:00Z',
    readTime: '8 min read',
    featured: true
  },
  {
    id: 2,
    title: 'Data-Driven Business Strategies',
    slug: 'business-analytics',
    excerpt: 'Leveraging data analytics to make informed business decisions and gain competitive advantage.',
    category: 'Business',
    publishedAt: '2023-10-28T10:30:00Z',
    readTime: '6 min read',
    featured: true
  },
  {
    id: 3,
    title: 'Machine Learning in Modern Marketing',
    slug: 'ml-marketing',
    excerpt: 'How machine learning algorithms are revolutionizing marketing strategies and customer targeting.',
    category: 'Marketing',
    publishedAt: '2023-10-12T09:15:00Z',
    readTime: '7 min read',
    featured: true
  },
  {
    id: 4,
    title: 'Ethical Considerations in AI Development',
    slug: 'ai-ethics',
    excerpt: 'Exploring the ethical challenges and responsibilities in artificial intelligence development.',
    category: 'AI & Ethics',
    publishedAt: '2023-09-25T11:45:00Z',
    readTime: '10 min read',
    featured: false
  },
  {
    id: 5,
    title: 'The Intersection of AI and Law',
    slug: 'ai-and-law',
    excerpt: 'Understanding how AI technologies are impacting legal frameworks and regulations.',
    category: 'AI & Law',
    publishedAt: '2023-09-10T14:20:00Z',
    readTime: '9 min read',
    featured: false
  }
];

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const featured = searchParams.get('featured');
  const category = searchParams.get('category');
  const limit = parseInt(searchParams.get('limit') || '10', 10);
  
  let filteredPosts = [...posts];
  
  // Filter by featured status if specified
  if (featured === 'true') {
    filteredPosts = filteredPosts.filter(post => post.featured);
  } else if (featured === 'false') {
    filteredPosts = filteredPosts.filter(post => !post.featured);
  }
  
  // Filter by category if specified
  if (category) {
    filteredPosts = filteredPosts.filter(post => 
      post.category.toLowerCase() === category.toLowerCase()
    );
  }
  
  // Apply limit
  filteredPosts = filteredPosts.slice(0, limit);
  
  return NextResponse.json({
    posts: filteredPosts,
    total: filteredPosts.length,
    params: {
      featured: featured || 'all',
      category: category || 'all',
      limit
    }
  });
}

// Example usage:
// GET /api/posts - Returns all posts (up to limit)
// GET /api/posts?featured=true - Returns only featured posts
// GET /api/posts?category=AI%20%26%20Law - Returns posts in the "AI & Law" category
// GET /api/posts?limit=3 - Returns the first 3 posts 