<script>
  import '$lib/styles/blog.css'
  export let data
  const {meta, content} = data
  const {title, description, date, categories, publishedBy} = meta
</script>

<section class="section section--blog">
  <header class="blog-header">
    <div>
      <h1 class="title">{title}</h1>
      <p class="text text--bold">{description}</p>
      <p class="text">Fecha de Publicado: <strong>{date}</strong></p>
      <p class="text">Publicado por: <strong>{publishedBy}</strong></p>
    </div>
    <div class="categories">
      {#each categories as category}
        <span class="text text--bold categories__category">{category}</span>
      {/each}
    </div>

  </header>

  <svelte:component this={content} />
  
</section>

