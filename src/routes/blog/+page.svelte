<script>
  export let data;
  const {posts} = data
  // for (const post of posts) {
  //   const {description, title, date, publishedBy} = post
  //   console.log(description);
  //   console.log(title);
  //   console.log(date);
  //   console.log(publishedBy);
  // }

</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<section class="section">
  <h1>Blog</h1>

  <article class="blogs">
    <h2>Recent posts</h2>

    {#each posts as post}
      {post.title} <br>
      {post.description} <br>
      
      {post.date} <br>
      {post.publishedBy} <br>
      
    {/each}

  </article>

</section>