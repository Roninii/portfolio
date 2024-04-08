import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';

const collectionEntries = await getCollection('blog')

// Map the array of content collection entries to create an object.
// Converts [{ id: 'post.md', data: { title: 'Example', description: '' } }]
// to { 'post.md': { title: 'Example', description: '' } }
const pages = Object.fromEntries(collectionEntries.map(({ slug, data }) => [slug, data]));

export const { getStaticPaths, GET } = OGImageRoute({
	param: 'route', // name of dynamic route segment
  	pages: { 'example': { title: 'Example Page', description: 'Description on this page shown in smaller text' }, ...pages }, // collection to generate images for

	// Customize image
  getImageOptions: (path, page) => ({
    title: page.title,
    description: page.description,
		bgGradient: [[ 25, 23, 36 ]],
		font: {
			title: {
				color: [224, 222, 244]
			},
			description: {
				color: [144, 140, 170]
			}
		},
		border: {
			width: 8,
			color: [246, 193, 119]
		}
  }),
});
