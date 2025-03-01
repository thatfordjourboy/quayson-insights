# Eleazer Quayson's Blog

An ultra-modern, high-performance personal blog built with Next.js, featuring cutting-edge animations, seamless transitions, and a sleek, visually stunning UI.

## Features

- **Modern UI/UX**: Beautiful design with dark/light mode toggle
- **Animations**: Smooth page transitions using Framer Motion
- **Dynamic Content**: Featured posts slider with cool hover effects
- **Custom Layouts**: Grid/masonry blog post layouts with image previews
- **Interactive**: Comment system with live updates
- **Search**: Instant search functionality
- **Filtering**: Tag and category filtering
- **Performance**: Lazy loading and image optimization
- **Authentication**: NextAuth.js with Google, GitHub, and Email login
- **CMS**: Admin dashboard for content management
- **Database**: MySQL with Prisma ORM
- **Deployment**: Optimized for Vercel with CI/CD

## Tech Stack

- **Frontend**: Next.js (App Router), React, Tailwind CSS, Framer Motion
- **Backend**: Next.js API routes, Prisma ORM
- **Database**: MySQL
- **Authentication**: NextAuth.js
- **Storage**: Cloudinary for images
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- MySQL database

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/eleazer-quayson-blog.git
cd eleazer-quayson-blog
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```
Then edit `.env.local` with your database and authentication credentials.

4. Set up the database
```bash
npx prisma migrate dev
```

5. Run the development server
```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Database Schema

- **Users**: id, name, email, avatar, role
- **Posts**: id, title, slug, content, author_id, published_at
- **Comments**: id, post_id, user_id, comment, created_at
- **Categories**: id, name
- **Tags**: id, name
- **Post_Tags**: post_id, tag_id (Many-to-Many)
- **Likes**: user_id, post_id

## Deployment

The application is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Configure environment variables in Vercel
4. Deploy

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Eleazer Quayson - AI, Machine Learning, Marketing, Law, and Business Analysis enthusiast. 