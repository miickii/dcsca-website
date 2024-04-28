import React from 'react';
import client from '@/app/utils/sanityClient';
import EventList from './EventList';

export default async function EventsPage() {
    const currentDateTime = new Date().toISOString();
    
    // Fetch upcoming events
    const upcomingQuery = `*[_type == "event" && date >= $currentDateTime] | order(date asc)`;
    const upcomingEvents = await client.fetch(upcomingQuery, { currentDateTime });
  
    // Fetch past events
    const pastQuery = `*[_type == "event" && date < $currentDateTime] | order(date desc)`;
    const pastEvents = await client.fetch(pastQuery, { currentDateTime });

  return (
    <div className='relative w-full h-full'>
        <div className="p-4">
            <h3 className="text-center font-bold text-4xl mb-8">Upcoming Events</h3>
            <EventList events={upcomingEvents}/>
        </div>
    </div>
  );
};
