import { Metadata } from 'next';
import PageTitle from '@/components/ui/PageTitle';
import Container from '@/components/ui/Container';
import RootLayout from '@/components/layout/RootLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy | Eleazer Quayson Blog',
  description: 'Privacy policy for Eleazer Quayson\'s blog on AI, Law, and Business.',
};

export default function PrivacyPage() {
  return (
    <RootLayout>
      <Container className="py-12">
        <PageTitle title="Privacy Policy" subtitle="Last updated: March 2024" />
        
        <div className="prose dark:prose-invert max-w-none mt-8">
          <h2>Introduction</h2>
          <p>
            At Eleazer Quayson Blog, we respect your privacy and are committed to protecting your personal data.
            This privacy policy will inform you about how we look after your personal data when you visit our website
            and tell you about your privacy rights and how the law protects you.
          </p>
          
          <h2>The Data We Collect</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul>
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
            <li><strong>Usage Data</strong> includes information about how you use our website and services.</li>
          </ul>
          
          <h2>How We Use Your Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul>
            <li>To provide you with the information, products and services that you request from us.</li>
            <li>To improve our website and services.</li>
            <li>To administer and protect our business and this website.</li>
          </ul>
          
          <h2>Cookies</h2>
          <p>
            Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at:
          </p>
          <p>
            Email: contact@eleazerquayson.com
          </p>
        </div>
      </Container>
    </RootLayout>
  );
} 