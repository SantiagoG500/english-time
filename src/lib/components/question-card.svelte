<script>
  import { currentCategorires } from "$lib/stores.js";
  export let category

  const addCurrentCategories = (e) => {
    const target = e.target
    const value = target.value
    $currentCategorires  = value
  }

</script>


<section class="question-card">
  <h2>{category}</h2>
  <a href="course/start?category={category}" on:click={addCurrentCategories}>Iniciar</a>
  <!-- <button on:click={addCurrentCategories} value={category}>Iniciar</button> -->
</section>

<style>
  .question-card {
    position: relative;

    gap: 1em;
    padding: 1em;
    border: 2px solid var(--dark-bg);
    border-radius: .5rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

    transition: all 450ms ease-out 0s;
    /* max-height: 10rem; */
    /* max-width: min-content; */
  
    overflow: hidden;
  }
  .question-card:hover {
    transform: translateY(-10px);
    box-shadow: 10px 10px 2px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
  .question-card:hover::after {
    position: absolute;

    right: -4rem;
    bottom: -2rem;
    transform: skewX(-20deg);
    
    content: " ";
    width: 40px;
    height: 200px;


    background-color: var(--first-color);
  }
  .question-card:hover::before {
    position: absolute;
    right: -4rem;
    bottom: -4rem;
    transform: skewX(-20deg);

    
    content: " ";
    width: 40px;
    height: 200px;
    background-color: var(--second-color);
  }
</style>