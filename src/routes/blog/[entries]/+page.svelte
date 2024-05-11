<script>
  export let data
  const {meta, content} = data
  const {title, description, date, categories, publishedBy} = meta
</script>

<section class="section">
  <header>
    <div>
      <h1 class="title">{title}</h1>
      <p class="text">{description}</p>
      <p class="text">{date}</p>
      <p class="text">{publishedBy}</p>
    </div>
    <div>
      {#each categories as category}
        <span class="text text--light">{category}</span>
      {/each}
    </div>

  </header>

  <svelte:component this={content} />

</section>