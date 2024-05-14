export async function load({ fetch, url }) {
	const response = await fetch('../../blog-api/posts');
	const category = url.searchParams.get('category');
	let posts = await response.json();
	let filtered = false;

	if (category) {
		const filteredPosts = posts.filter((post) => post.categories.includes(category));
		posts = filteredPosts;
		filtered = true;
	}

	return { posts, filtered };
}
