<script>
  import { currentCategorires } from "$lib/stores.js";
  export let category

  const addCurrentCategories = (e) => {
    const target = e.target
    const value = target.value
    $currentCategorires  = value
  }

</script>


<section class="question-tag">
  <h2>{category}</h2>
  <a href="course/start?category={category}" on:click={addCurrentCategories}>Iniciar</a>
  <!-- <button on:click={addCurrentCategories} value={category}>Iniciar</button> -->
</section>

<style>
  .question-tag {
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
  .question-tag:hover {
    transform: translateY(-10px);
    box-shadow: 10px 10px 2px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
</style>