<script>
  export let data;
  const {posts, filtered} = data
  import BlogCard from '../../lib/components/blog-card.svelte';
  import { isLoggedIn } from '$lib/stores.js'
  import { Database } from '$lib/firebase.js'
  const categorySet = new Set()
  
  for (const post of posts) {
    const {categories} = post
    for (const category of categories) 
      categorySet.add(category)
  }    

  // if ($isLoggedIn) {
  //   for (const category of categorySet) {
  //     Database.addData('categories', category, {category})
  //   }
  // }  
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<section class="section">
  <h2 class="title">Post recientes</h2>

  <article class="post-container">

    {#each posts as post}
      <BlogCard 
        title={post.title}
        description={post.description}
        date={post.date}
        publishedBy={post.publishedBy}
        route={`/blog/${post.slug}`}
        categories={post.categories}
      />

    {/each}

  </article>

</section>