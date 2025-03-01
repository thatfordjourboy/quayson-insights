import './globals.css';
import { Inter, Montserrat } from 'next/font/google';
import { Providers } from './providers';
import { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: {
    default: 'Eleazer Quayson | AI, Law & Business',
    template: '%s | Eleazer Quayson',
  },
  description: 'Exploring AI, Law & Business with a Data-Driven Mindset',
  keywords: ['AI', 'Machine Learning', 'Law', 'Business Analysis', 'Marketing', 'Technology'],
  authors: [{ name: 'Eleazer Quayson' }],
  creator: 'Eleazer Quayson',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://eleazerquayson.com',
    title: 'Eleazer Quayson | AI, Law & Business',
    description: 'Exploring AI, Law & Business with a Data-Driven Mindset',
    siteName: 'Eleazer Quayson Blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eleazer Quayson | AI, Law & Business',
    description: 'Exploring AI, Law & Business with a Data-Driven Mindset',
    creator: '@eleazerquayson',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
} 