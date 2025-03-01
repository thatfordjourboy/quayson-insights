import { Metadata } from 'next';
import PageTitle from '@/components/ui/PageTitle';
import Container from '@/components/ui/Container';
import RootLayout from '@/components/layout/RootLayout';

export const metadata: Metadata = {
  title: 'Terms of Service | Eleazer Quayson Blog',
  description: 'Terms of service for Eleazer Quayson\'s blog on AI, Law, and Business.',
};

export default function TermsPage() {
  return (
    <RootLayout>
      <Container className="py-12">
        <PageTitle title="Terms of Service" subtitle="Last updated: March 2024" />
        
        <div className="prose dark:prose-invert max-w-none mt-8">
          <h2>Introduction</h2>
          <p>
            These terms and conditions outline the rules and regulations for the use of Eleazer Quayson Blog's website.
            By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use
            Eleazer Quayson Blog if you do not accept all of the terms and conditions stated on this page.
          </p>
          
          <h2>Intellectual Property Rights</h2>
          <p>
            Unless otherwise stated, Eleazer Quayson Blog and/or its licensors own the intellectual property rights for
            all material on this website. All intellectual property rights are reserved. You may view and/or print
            pages from the website for your own personal use subject to restrictions set in these terms and conditions.
          </p>
          <p>You must not:</p>
          <ul>
            <li>Republish material from this website</li>
            <li>Sell, rent or sub-license material from this website</li>
            <li>Reproduce, duplicate or copy material from this website</li>
            <li>Redistribute content from Eleazer Quayson Blog (unless content is specifically made for redistribution)</li>
          </ul>
          
          <h2>User Comments</h2>
          <p>
            Certain parts of this website offer the opportunity for users to post and exchange opinions, information,
            material and data. Eleazer Quayson Blog does not screen, edit, publish or review Comments prior to their presence
            on the website. Comments do not reflect the views or opinions of Eleazer Quayson Blog, its agents or affiliates.
            Comments reflect the view and opinion of the person who posts such view or opinion.
          </p>
          
          <h2>Hyperlinking to our Content</h2>
          <p>
            The following organizations may link to our website without prior written approval:
          </p>
          <ul>
            <li>Government agencies;</li>
            <li>Search engines;</li>
            <li>News organizations;</li>
            <li>Online directory distributors when they list us in the directory may link to our website in the same manner as they hyperlink to the websites of other listed businesses;</li>
          </ul>
          
          <h2>Disclaimer</h2>
          <p>
            To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill).
          </p>
          
          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p>
            Email: contact@eleazerquayson.com
          </p>
        </div>
      </Container>
    </RootLayout>
  );
} 