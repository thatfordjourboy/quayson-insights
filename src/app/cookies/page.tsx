import { Metadata } from 'next';
import PageTitle from '@/components/ui/PageTitle';
import Container from '@/components/ui/Container';
import RootLayout from '@/components/layout/RootLayout';

export const metadata: Metadata = {
  title: 'Cookie Policy | Eleazer Quayson Blog',
  description: 'Cookie policy for Eleazer Quayson\'s blog on AI, Law, and Business.',
};

export default function CookiePolicyPage() {
  return (
    <RootLayout>
      <Container className="py-12">
        <PageTitle title="Cookie Policy" subtitle="Last updated: March 2024" />
        
        <div className="prose dark:prose-invert max-w-none mt-8">
          <h2>What Are Cookies</h2>
          <p>
            As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored, however, this may downgrade or 'break' certain elements of the site's functionality.
          </p>
          
          <h2>How We Use Cookies</h2>
          <p>
            We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
          </p>
          
          <h2>The Cookies We Set</h2>
          <ul>
            <li>
              <strong>Site preferences cookies</strong>
              <p>
                In order to provide you with a great experience on this site, we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences, we need to set cookies so that this information can be called whenever you interact with a page that is affected by your preferences.
              </p>
            </li>
            <li>
              <strong>Third-party cookies</strong>
              <p>
                In some special cases, we also use cookies provided by trusted third parties. The following section details which third-party cookies you might encounter through this site.
              </p>
              <p>
                This site uses Google Analytics, which is one of the most widespread and trusted analytics solutions on the web, to help us understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.
              </p>
            </li>
          </ul>
          
          <h2>Disabling Cookies</h2>
          <p>
            You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore it is recommended that you do not disable cookies.
          </p>
          
          <h2>More Information</h2>
          <p>
            Hopefully, that has clarified things for you. As was previously mentioned, if there is something that you aren't sure whether you need or not, it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.
          </p>
          <p>
            If you are still looking for more information, you can contact us at:
          </p>
          <p>
            Email: contact@eleazerquayson.com
          </p>
        </div>
      </Container>
    </RootLayout>
  );
} 