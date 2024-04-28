'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import urlFor from '@/app/utils/image-url';
import { motion, AnimatePresence } from 'framer-motion';

const ImageGrid = ({ images }) => {
    const [loadedImages, setLoadedImages] = useState(new Array(images.length).fill(false));
    
    const handleLoad = (index) => {
        setLoadedImages(prev => {
            const newLoaded = [...prev];
            newLoaded[index] = true;
            return newLoaded;
        });
    };

    return (
        <div className='w-full h-full'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -200, y: 200 }}
                        animate={loadedImages[index] ? { opacity: 1, x: 0, y: 0 } : {}}
                        transition={{
                            opacity: { delay: index * 0.1, duration: 0.5 },
                            x: { delay: index * 0.1, duration: 0.7, type: 'spring', bounce: 0.1 },
                            y: { delay: index * 0.1, duration: 0.5, type: 'spring', bounce: 0.1 }
                        }}
                        // transition={{ duration: 0.3 }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.99 }}
                        //onClick={() => handleImageSelect(index)}
                        className="cursor-pointer relative"
                    >
                        <div className="relative aspect-[3/2]">
                            <Image
                                src={urlFor(img).url()}
                                alt={img.alt ? img.alt : "image"}
                                fill // Use fill instead of defining static width and height
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Define responsive sizes
                                className="object-cover" // Apply object-fit cover through CSS
                                onLoad={() => handleLoad(index)}
                                priority={index < 6} // Preload first 6 images
                            />
                        </div>
                        {!loadedImages[index] && (
                            <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ImageGrid;