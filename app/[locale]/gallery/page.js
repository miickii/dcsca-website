import Image from 'next/image';
import client from '@/app/utils/sanityClient';
import urlFor from '@/app/utils/image-url';
import Link from 'next/link';

const galleryVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0 } // Make sure this slides under the navbar
};

export default async function GalleryPage() {
    const query = '*[_type == "galleryCategory"]';
    const categories = await client.fetch(query);

    return (
        <div>
            <div className="bg-gray-800 text-white p-6 text-center text-3xl font-bold">
                Image Gallery
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-12">
                {categories.map(category => (
                    <Link key={category._id} href={`/gallery/${category._id}`} className='cursor-pointer'>
                        <div key={category._id} className="block border rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="relative" style={{ paddingBottom: "66.66%" }}> {/* 3:2 Aspect Ratio */}
                                {category.images.length > 0 && (
                                     <Image
                                         src={urlFor(category.images[0]).url()} 
                                         alt={category.images[0].alt || 'Gallery Image'}
                                         fill
                                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                     />
                                 )}
                             </div>
                             <h2 className="text-xl text-center p-2">{category.title}</h2>
                         </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
