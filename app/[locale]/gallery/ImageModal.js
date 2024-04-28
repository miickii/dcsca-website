import React, { useEffect } from "react";
import urlFor from '@/app/image-url';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';


const ImageModal = ({ image, closeImage }) => {
    return (
        <div
            onClick={closeImage}
            className="fixed inset-0 flex items-center justify-center cursor-pointer"
        >
            <motion.div
                key={image.asset._ref}
                layoutId={`${image.asset._ref}`}
                animate={{ zIndex: 50 }}
                onClick={(e) => e.stopPropagation()}
                className="cursor-default relative shadow-lg rounded-lg"
            >
                <Image
                    src={urlFor(image).url()}
                    alt={image.alt || "image"}
                    sizes="(max-width: 900px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                    width={500}
                    height={300}
                />
            </motion.div>
        </div>
    )
}

export default ImageModal;