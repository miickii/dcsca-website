import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { format } from 'date-fns';
import { motion, useAnimation } from 'framer-motion';
import urlFor from '@/app/utils/image-url';

const EventCard = ({ event, isSelected, setSelected, isPast = false }) => {
    const controls = useAnimation();
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        if (isSelected) {
            console.log("Expanded");
            controls.start({
                filter: "blur(2px)",
                scale: 1.05,
                zIndex: 30  // Elevate the z-index during expansion
            });
        } else if (expanded) {
            console.log("Deselected");
            controls.start({
                filter: "blur(0px)",
                scale: 1,
                zIndex: 30  // Maintain elevated z-index during contraction
            }).then(() => {
                // Reset the z-index after the animation is complete
                controls.set({ zIndex: 0 });
                setExpanded(false);
            });
        }
    }, [isSelected, controls, expanded]);

    const handleOnClick = () => {
        setSelected(event);
        setExpanded(true);
    };

    return (
        <motion.div
            initial={{ filter: "blur(0px)", scale: 1, zIndex: 0 }}
            animate={controls}
            layout
            layoutId={`card-${event._id}`}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleOnClick}
        >
            <div className={`flex flex-col rounded-lg shadow hover:shadow-lg border-2 border-transparent hover:border-black transition duration-300 overflow-hidden w-full bg-white cursor-pointer ${isPast ? 'bg-gray-200' : 'bg-white'}`}>
                <div className="relative w-full h-40 overflow-hidden">
                    {event.images ? (
                        <Image 
                            src={urlFor(event.images[0]).url()} 
                            alt={event.title} 
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"  // Responsive sizing
                            className="object-cover"
                        />
                    ) : (
                        <Image 
                            src={"/event_default.webp"} 
                            alt={event.title} 
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"  // Responsive sizing
                            className="object-cover"
                        />
                    )}

                </div>
                <div className="flex flex-col justify-between p-5 h-48 w-full">
                    <div className="flex-grow">
                        <h4 className="font-bold">{event.title}</h4>
                        <p className="text-sm">{format(new Date(event.date), 'PP')}</p>
                        <div className='text-sm text-gray-600 overflow-hidden mt-2'>
                            {event.shortDescription}
                        </div>
                    </div>
                    <div>
                        <p><strong>Price:</strong> {event.price === 0 ? 'Free' : `${event.price} DKK`}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default EventCard;