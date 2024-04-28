import {getTranslations} from 'next-intl/server';
import Image from "next/image";
import client from "../utils/sanityClient";
import Aos from '../aos';


export default async function Home() {
  const query = `
    *[_type == "event" && date > now()] | order(date asc)[0...3] {
        _id,
        title,
        shortDescription,
        date,
        location,
        images,
    }
  `;

  const upcomingEvents = await client.fetch(query);
  const t = await getTranslations('IndexPage')
  const testimonials = [
    { name: 'Emma Lin', testimonial: 'Joining the association has been a transformative experience for me. I have learned so much about Danish and Chinese cultures.' },
    { name: 'Lars Andersen', testimonial: 'The community is welcoming and engaging. I have made so many new friends and connections.' },
    { name: 'Chen Wei', testimonial: 'The cultural events and language exchange programs have greatly enriched my life abroad.' },
    // Add more testimonials
  ];

  return (
    <div className='w-full overflow-x-hidden'>
        <div className="bg-white">
            {/* Top Banner */}
            <div className="relative w-full h-64 sm:h-72 md:h-96 lg:h-128 overflow-hidden">
                <Image 
                    src="/taichi.jpg"
                    alt={t('CulturalBanner')}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    priority
                />
            </div>

            {/* Second section */}
            <div className="flex flex-col md:flex-row md:items-center justify-center py-10 md:py-20 bg-neutral-200">
                {/* Image container */}
                <div className="flex items-center justify-center px-10 lg:px-20  w-full md:w-1/2 md:border-b-0 md:border-r md:border-gray-300">
                    <img src="bordtennis.jpg" alt={t('CulturalBanner')} className="w-full h-auto" />
                </div>
        
                {/* Text content container */}
                <div className="w-2/3 md:w-1/2 pt-5 px-10">
                    <h2 className="text-lg md:text-xl font-bold text-gray-800" data-aos="fade-right">{t('FosteringFriendship')}</h2>
                    <p className="text-sm md:text-base text-gray-600 mt-2 mb-4" data-aos="fade-left">{t('ActivitiesDescription')}</p>
                    {/* <LearnMore /> */}
                </div>
            </div>

            {/* Upcoming Events */}
            <div className="py-16 px-8 w-full" data-aos="zoom-in" data-aos-duration="1000">
                <h3 className="text-4xl w-full pb-3 mb-3 border-b border-gray-300 font-semibold">{t('UpcomingEvents')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {upcomingEvents.map((event, index) => {
                        return (
                            <div key={index}>
                                some event
                                {/* <EventCard event={event} /> */}
                            </div>
                    )})}
                </div>
            </div>

            <div className="py-16 px-6 bg-gradient-to-r from-green-100 to-blue-50 w-full">
                <h3 className='text-3xl pb-10 font-semibold'>{t('BecomeMember')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="rounded-lg shadow-md p-6" data-aos="fade-left">
                            <blockquote className="italic">"{testimonial.testimonial}"</blockquote>
                            <p className="text-right mt-4">- {testimonial.name}</p>
                        </div>
                    ))}
                </div>
                <div className='flex items-center justify-center w-full mt-10'>
                    <button className="bg-blue-500 text-2xl text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">{t('JoinUs')}</button>
                </div>
            </div>
        </div>
    </div>
  );
}