<script>
  export let data;
  const {posts} = data
  import BlogCard from '../../lib/components/blog-card.svelte';
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<section class="section">
  <h2 class="title">Post recientes</h2>

  <article class="posts-cont">

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