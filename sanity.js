import createClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'jdu3pyv9',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2022-01-12',
})

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// https://deliverooclonecourse.sanity.studio/desk/restaurant