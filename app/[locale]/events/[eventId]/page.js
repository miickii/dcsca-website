import { format } from 'date-fns';
import client from '@/app/utils/sanityClient';
import urlFor from '@/app/utils/image-url';
import Link from 'next/link';

export default async function SingleEventPage({ params }) {
  const query = `*[_type == "event" && _id == $eventId][0]`;
  const event = await client.fetch(query, { eventId: params.eventId });

  const formatDate = (dateString) => format(new Date(dateString), 'PPpp');


  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Event Images Carousel (Placeholder) */}
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
            {event.images && event.images.length > 0 ? (
                <img 
                src={urlFor(event.images[0]).url()} 
                alt="Event" 
                className="w-full h-full object-cover"
                />
            ) : (
                <span>No image available</span>
            )}
        </div>

        <div className="p-4">
          <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
          <div className="mb-4 text-sm">
            <strong>Organized by:</strong> {event.organizer.name} | <strong>Contact:</strong> {event.organizer.contactInfo}
          </div>
          <div className="mb-4">
            <span className="bg-indigo-200 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">
              {event.eventType}
            </span>
            {event.tags.map((tag, index) => (
              <span key={index} className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{tag}</span>
            ))}
          </div>
          <p className="mb-4 text-gray-600">{event.description}</p>
          <p className="mb-1"><strong>Date:</strong> {formatDate(event.date)}</p>
          <p className="mb-1"><strong>Location:</strong> {event.location}</p>
          <p className="mb-1"><strong>Capacity:</strong> {event.capacity} attendees</p>
          <p className="mb-1"><strong>Registration Deadline:</strong> {formatDate(event.registrationDeadline)}</p>
          <p><strong>Price:</strong> {event.price === 0 ? 'Free' : `${event.price} DKK`}</p>
          <div className="mt-4 flex justify-center">
              <Link href={`/`} className='border-2 font-bold border-crimson-red text-3xl text-black py-2 px-4 rounded hover:bg-[#E75C68] transition duration-300'>
                  REGISTER
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}