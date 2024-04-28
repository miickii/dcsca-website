import imageUrlBuilder from '@sanity/image-url';
import client from './sanityClient';

// Setup the builder
const builder = imageUrlBuilder(client);

// Function to get a URL for a given source
function urlFor(source) {
    return builder.image(source);
}

export default urlFor;
