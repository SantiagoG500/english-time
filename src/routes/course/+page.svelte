<script>
  import { isLoggedIn } from "$lib/stores.js";
  import { Database } from "$lib/firebase.js";
  import QuestionCard from '../../lib/components/question-card.svelte';
	import { onMount } from 'svelte';

  // let categories = []
  
  // onMount( () => {
    
  //   if ($isLoggedIn) {
      
  //     Database.getDocuments('categories').then(res =>{
  //       for (const categoryInfo of res) {
  //         categories = [...categories, categoryInfo]
  //       }
  //     })
  //   }

  // } )
</script>

<section class="section">
  {#if $isLoggedIn}

  <h1 class="title">Course</h1>
  <section class="question-container">
    {#await Database.getDocuments('categories')}
      <p class="text">Espera...</p>
    {:then categories}
      
      {#each categories as categoryInfo}
        <div class="div">
          <QuestionCard category={categoryInfo.category}/>
        </div>
      {/each}
    {/await}

  </section>
  {/if}
</section>
