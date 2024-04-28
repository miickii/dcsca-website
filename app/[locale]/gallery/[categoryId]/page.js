import client from '@/app/utils/sanityClient';
import ImageGrid from '../ImageGrid';


export default async function CategoryPage({ params }) {
    const category = await client.fetch('*[_type == "galleryCategory" && _id == $id][0]', { id: params.categoryId });
    return (
        <div>
            {category && <ImageGrid images={category.images} />}
        </div>
    );
}