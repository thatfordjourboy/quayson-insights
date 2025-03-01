import { NextRequest, NextResponse } from 'next/server';

// Mock data for demonstration purposes
// In a real application, this would come from your database via Prisma
const posts = [
  {
    id: 1,
    title: 'The Future of AI in Legal Research',
    slug: 'ai-legal-research',
    excerpt: 'How artificial intelligence is transforming the way legal professionals conduct research and analysis.',
    content: `
      # The Future of AI in Legal Research

      Artificial intelligence is revolutionizing the legal industry, particularly in the realm of legal research. Traditional legal research methods often involve hours of manual searching through case law, statutes, and legal commentaries. AI-powered tools are changing this landscape dramatically.

      ## How AI is Transforming Legal Research

      ### 1. Natural Language Processing
      Modern AI systems can understand and process natural language queries, allowing legal professionals to search for relevant cases and statutes using plain English rather than complex Boolean searches.

      ### 2. Predictive Analytics
      AI can analyze patterns in judicial decisions to predict how judges might rule on similar cases, giving attorneys valuable insights for developing their legal strategies.

      ### 3. Document Analysis
      AI tools can review thousands of documents in a fraction of the time it would take a human, identifying relevant information and patterns that might otherwise be missed.

      ## Benefits for Legal Professionals

      - **Time Efficiency**: Tasks that once took days can now be completed in hours or even minutes.
      - **Cost Reduction**: Clients benefit from reduced billable hours for research tasks.
      - **Improved Accuracy**: AI systems can identify relevant cases that might be overlooked in manual searches.
      - **Access to Justice**: Smaller firms can compete with larger ones by leveraging AI tools.

      ## Challenges and Ethical Considerations

      Despite its benefits, the integration of AI in legal research raises important questions:

      - How do we ensure the accuracy and reliability of AI-generated research?
      - What happens to the role of junior associates traditionally tasked with research?
      - How do we address potential biases in AI algorithms?
      - What are the ethical implications of relying on AI for legal decision-making?

      ## The Future Landscape

      As AI technology continues to evolve, we can expect even more sophisticated tools that not only find relevant legal information but also help analyze and apply it to specific legal problems. The most successful legal professionals will be those who learn to effectively collaborate with AI, using it to enhance rather than replace their legal expertise.

      The future of legal research is not about choosing between human intelligence and artificial intelligence—it's about finding the optimal combination of both.
    `,
    category: 'AI & Law',
    publishedAt: '2023-11-15T08:00:00Z',
    readTime: '8 min read',
    author: {
      name: 'Eleazer Quayson',
      role: 'Legal Technology Consultant',
      avatar: '/api/placeholder?width=100&height=100&text=EQ'
    },
    featured: true,
    tags: ['AI', 'Legal Tech', 'Research', 'Law']
  },
  {
    id: 2,
    title: 'Data-Driven Business Strategies',
    slug: 'business-analytics',
    excerpt: 'Leveraging data analytics to make informed business decisions and gain competitive advantage.',
    content: `
      # Data-Driven Business Strategies

      In today's competitive business landscape, companies that leverage data effectively gain a significant advantage over their competitors. Data-driven decision making has moved from being a competitive advantage to a necessity for survival.

      ## The Power of Business Analytics

      ### 1. Customer Insights
      Data analytics allows businesses to understand customer behavior, preferences, and needs at a granular level, enabling personalized marketing and product development.

      ### 2. Operational Efficiency
      By analyzing operational data, companies can identify bottlenecks, optimize processes, and reduce costs while maintaining or improving quality.

      ### 3. Risk Management
      Predictive analytics helps businesses identify potential risks before they materialize, allowing for proactive mitigation strategies.

      ## Implementing Data-Driven Strategies

      - **Data Collection**: Establish systems to collect relevant data from multiple touchpoints.
      - **Data Integration**: Combine data from various sources for a comprehensive view.
      - **Analysis Tools**: Invest in appropriate analytics tools and talent.
      - **Decision Framework**: Create a framework for translating insights into actions.
      - **Measurement**: Continuously measure the impact of data-driven decisions.

      ## Challenges in Data-Driven Decision Making

      - **Data Quality**: Ensuring data is accurate, complete, and relevant.
      - **Privacy Concerns**: Navigating increasingly complex privacy regulations.
      - **Talent Gap**: Finding skilled professionals who can interpret data effectively.
      - **Organizational Resistance**: Overcoming resistance to change from traditional decision-makers.

      ## The Future of Business Analytics

      As technologies like AI and machine learning continue to evolve, businesses will have access to even more powerful analytical capabilities. The most successful organizations will be those that can not only analyze past data but also use it to predict future trends and automate decision-making processes.

      The journey to becoming a truly data-driven organization is ongoing, but the rewards—increased efficiency, better customer experiences, and improved profitability—make it well worth the effort.
    `,
    category: 'Business',
    publishedAt: '2023-10-28T10:30:00Z',
    readTime: '6 min read',
    author: {
      name: 'Eleazer Quayson',
      role: 'Business Analyst',
      avatar: '/api/placeholder?width=100&height=100&text=EQ'
    },
    featured: true,
    tags: ['Business Analytics', 'Data Science', 'Decision Making', 'Strategy']
  }
  // Additional posts would be defined here
];

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  
  // Find the post with the matching slug
  const post = posts.find(p => p.slug === slug);
  
  if (!post) {
    return NextResponse.json(
      { error: 'Post not found' },
      { status: 404 }
    );
  }
  
  return NextResponse.json({ post });
}

// Example usage:
// GET /api/posts/ai-legal-research - Returns the post with slug "ai-legal-research"
// GET /api/posts/business-analytics - Returns the post with slug "business-analytics" 