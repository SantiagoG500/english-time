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
      <h2 class="title title--blog-header">{title}</h2>
    </header>
    
    <section class="blog-card__section">
      <span class="text text--bold"> {description} </span>
      <span class="text text--semi-bold"> {date} </span>
      <span class="text text--semi-bold"> {publishedBy}</span>
    </section>
    <section class="blog-card__categories">
      {#each categories as category}
         <span class="text text--bold blog-card__category text text--light" style={`background-color: ${randomColor()};`}>{category}</span>
      {/each}
    </section>
  
    <footer class="blog-card__footer">
      <a href={route} class="a">Leer</a>
    </footer>
  </section>

<style>
  .title--blog-header {
    margin: 0;
  }

  .blog-card, .blog-card__section {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-wrap: wrap;
  }
  .blog-card {
    position: relative;

    gap: 1em;
    padding: 1em;
    border: 2px solid var(--dark-bg);
    border-radius: .5rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    
    transition: all 450ms ease-out 0s;
    min-height: 2rem;
    flex: 1 1 300px;

    overflow: hidden;
  }

  .blog-card:hover::after {
    position: absolute;

    right: -4rem;
    bottom: -2rem;
    transform: skewX(-20deg);
    
    content: " ";
    width: 40px;
    height: 200px;


    background-color: var(--first-color);
  }
  .blog-card:hover::before {
    position: absolute;
    right: -4rem;
    bottom: -4rem;
    transform: skewX(-20deg);

    
    content: " ";
    width: 40px;
    height: 200px;
    background-color: var(--second-color);
  }

  @keyframes moveFirstElement {
    0% {right: -3.5rem;}
    25% {right: -3rem;}
    50% {right: -2rem;}
    75% {right: -1rem;}
    100% {right: -0.2rem;}
  }
  @keyframes moveSecondElement {
    0% {right: -3rem;}
    25% {right: -2.5rem;}
    50% {right: -2.3rem;}
    75% {right: -2.1rem;}
    100% {right: -1rem;}
  }

 .blog-card:hover {
    transform: translateY(-10px);
    box-shadow: 10px 10px 2px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
  .blog-card:hover::before{
    animation: moveSecondElement .05s ease-in-out forwards;
  }
  .blog-card:hover::after{
    animation: moveFirstElement .05s ease-in-out forwards;
  }

  /* 
    after: 
      right: -0.2rem;
      bottom: -2rem;
      transform: skewX(-20deg);
    
    before
      right: -1rem;
      bottom: -4rem;
      transform: skewX(-20deg);
  
  */
  
  .blog-card__categories {
    display: flex;
    flex-wrap: wrap;
    gap: .5em;

    /* flex-direction: row; */
    /* flex-wrap: wrap; */
    /* gap: .5em; */
    /* background-color: aqua; */

    /* background-color: aquamarine; */
  }
  
  .blog-card__category {
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    
    border-radius: .5em;

    font-size: .8rem;
  }

</style>