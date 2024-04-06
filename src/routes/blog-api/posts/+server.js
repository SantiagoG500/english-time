import { json } from '@sveltejs/kit';

const getPosts = async () => {
	let posts = [];
	const paths = import.meta.glob('/src/posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];

		const metadata = file.metadata;
		const slug = path.split('/').at(-1)?.replace('.md', '');
		const post = { ...metadata, slug };

		if (post.published) posts.push(post);
	}

	posts.sort((first, second) => {
		return new Date(second.date).getDate() - new Date(first.date).getDate();
	});

	return posts;
};

export const GET = async () => {
	const response = await getPosts();
	return json(response);
};
