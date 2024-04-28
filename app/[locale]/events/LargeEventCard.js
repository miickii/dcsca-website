import React from "react";
import urlFor from '@/app/utils/image-url';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import Link from 'next/link';


export default function LargeEventCard({ selected, setSelected }) {
    if (!selected) {
        return <></>
    }

    const formatDate = (dateString) => format(new Date(dateString), 'PPpp');

    return (
        <div
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/50 z-40 cursor-pointer"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-[700px] mx-auto my-8 cursor-default"
            >
                <motion.div layoutId={`card-${selected._id}`} className="relative bg-white shadow-lg rounded-lg overflow-hidden z-50">
                    {/* Event Images Carousel (Placeholder) */}
                    <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                        {selected.images && selected.images.length > 0 ? (
                            <Image 
                                src={urlFor(selected.images[0]).url()} 
                                alt="Event" 
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"  // Responsive sizing
                                className="object-cover"
                            />
                        ) : (
                            <span>No image available</span>
                        )}
                    </div>
                    <div className="p-4">
                        <h1 className="text-3xl font-bold mb-2">{selected.title}</h1>
                        <div className="mb-4 text-sm">
                            <strong>Organized by:</strong> {selected.organizer.name} | <strong>Contact:</strong> {selected.organizer.contactInfo}
                        </div>
                        <div className="mb-4">
                            <span className="bg-indigo-200 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">
                            {selected.eventType}
                            </span>
                            {selected.tags.map((tag, index) => (
                            <span key={index} className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{tag}</span>
                            ))}
                        </div>
                        <p className="mb-4 text-gray-600">{selected.description}</p>
                        <p className="mb-1"><strong>Date:</strong> {formatDate(selected.date)}</p>
                        <p className="mb-1"><strong>Location:</strong> {selected.location}</p>
                        <p className="mb-1"><strong>Capacity:</strong> {selected.capacity} attendees</p>
                        <p className="mb-1"><strong>Registration Deadline:</strong> {formatDate(selected.registrationDeadline)}</p>
                        <p><strong>Price:</strong> {selected.price === 0 ? 'Free' : `${selected.price} DKK`}</p>
                        <div className="mt-4 flex justify-center">
                            <Link href={`/events/${selected._id}`} className='border-2 font-bold border-crimson-red text-black py-2 px-4 rounded hover:bg-[#E75C68] transition duration-300'>
                                More info and registration
                            </Link>
                        </div>
                    </div>
                    
                </motion.div>
            </div>
        </div>
    )
}