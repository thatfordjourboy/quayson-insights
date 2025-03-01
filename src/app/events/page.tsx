import { Metadata } from 'next';
import { FiCalendar, FiMapPin, FiClock } from 'react-icons/fi';
import RootLayout from '@/components/layout/RootLayout';

export const metadata: Metadata = {
  title: 'Events | Eleazer Quayson\'s Blog',
  description: 'Upcoming tech events, webinars, and conferences.',
};

export default function EventsPage() {
  // Mock events data
  const events = [
    {
      id: 1,
      title: 'Next.js Conference 2023',
      date: 'October 25, 2023',
      time: '9:00 AM - 5:00 PM',
      location: 'San Francisco, CA',
      description: 'Join us for the annual Next.js conference featuring the latest updates, best practices, and networking opportunities.',
      featured: true,
    },
    {
      id: 2,
      title: 'AI in Healthcare Webinar',
      date: 'November 10, 2023',
      time: '1:00 PM - 2:30 PM',
      location: 'Online',
      description: 'Explore how artificial intelligence is transforming healthcare with industry experts and researchers.',
      featured: false,
    },
    {
      id: 3,
      title: 'Web Development Workshop',
      date: 'December 5, 2023',
      time: '10:00 AM - 4:00 PM',
      location: 'New York, NY',
      description: 'A hands-on workshop covering modern web development techniques, tools, and frameworks.',
      featured: false,
    },
  ];

  return (
    <RootLayout>
      <main className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Events
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Stay updated with upcoming tech events, webinars, and conferences
            </p>
          </div>
          
          {/* Featured Event */}
          {events.filter(event => event.featured).map(event => (
            <div key={event.id} className="mb-16 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
              <div className="p-8 md:p-10">
                <div className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium mb-6">
                  Featured Event
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  {event.title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  {event.description}
                </p>
                
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-8">
                  <div className="flex items-center">
                    <FiCalendar className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <FiClock className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <FiMapPin className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">{event.location}</span>
                  </div>
                </div>
                
                <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          ))}
          
          {/* Upcoming Events */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Upcoming Events
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              {events.filter(event => !event.featured).map(event => (
                <div key={event.id} className="bg-white dark:bg-dark-900 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-800 transition-all hover:shadow-lg">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {event.description}
                    </p>
                    
                    <div className="flex flex-col gap-2 mb-6">
                      <div className="flex items-center">
                        <FiCalendar className="w-4 h-4 text-primary-600 dark:text-primary-400 mr-2" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <FiClock className="w-4 h-4 text-primary-600 dark:text-primary-400 mr-2" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <FiMapPin className="w-4 h-4 text-primary-600 dark:text-primary-400 mr-2" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{event.location}</span>
                      </div>
                    </div>
                    
                    <button className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 font-medium rounded-lg transition-colors text-center">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Want to host an event?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              If you're interested in hosting a tech event or webinar, get in touch with us to discuss collaboration opportunities.
            </p>
            <button className="px-6 py-3 bg-secondary-600 hover:bg-secondary-700 text-white font-medium rounded-lg transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </main>
    </RootLayout>
  );
} 