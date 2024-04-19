<script>
  export let title = '...'
  export let description = '...'
  export let date = '...'
  export let publishedBy = '...'
  export let route = ''
  export let categories = []
  // let randColor = ''

  const randomColor = () => {
    const hue = Math.round(Math.random() * 360)
    const saturation = 50
    const lightness = 70
    const hsl = `hsl(${hue}, ${saturation}%, ${lightness}%)`

    return hsl
  }
</script>

<section class="blog-card">
  <header class="blog-card__header">
    <h2 class="subtitle">{title}</h2>
  </header>
  
  <section class="blog-card__section">
    <!-- <span> {title} </span> -->
    <span class="txt"> {description} </span>
    <span class="txt"> {date} </span>
    <span class="txt"> {publishedBy}</span>
  </section>
  <section class="blog-card__categories">
    {#each categories as category}
       <!-- <span class="blog-card__category" style={`border-color: ${randomColor()}; background-color: ${randomColor()};`}>{category}</span> -->
       <span class="blog-card__category txt" style={`border-color: ${randomColor()};`}>{category}</span>
    {/each}
  </section>

  <footer class="blog-card__footer">
    <a href={route} class="link">Leer</a>
  </footer>
</section>

<style>
  .blog-card, .blog-card__categories, .blog-card__section {
    display: flex;
    flex-direction: column;
  }
  .blog-card__categories, .blog-card__section, .blog-card__footer{
    padding: 1em;
  }
  .blog-card{
    gap: 1em;
    padding: 1em;
    border: 1px solid black;
  }

  .blog-card__categories {
    display: flex;
    flex-direction: row;
    gap: .5rem;
  }
  
  .blog-card__category {
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;

    border-width: 3px;
    border-style: solid;
    border-radius: .5em;
    /* color: white; */
    /* border: 3px solid red; */
    /* border-color: hsl(85, 50%, 70%); */
    /* border-color: hsl(360, 50%, 70%); */
;
  }
  
</style>