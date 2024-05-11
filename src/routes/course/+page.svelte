<script>
  import { isLoggedIn } from "$lib/stores.js";
  import { Database } from "$lib/firebase.js";
  import QuestionCard from '../../lib/components/question-card.svelte';

  let categories = []
  // put this in a OnMount
  if ($isLoggedIn) {
    
    Database.getDocuments('categories').then(res =>{
      for (const categoryInfo of res) {
        categories = [...categories, categoryInfo]
      }
    })
  }
</script>

<section class="section">
  <h1 class="title">Course</h1>
  <section class="question-container">
    {#each categories as categoryInfo}
      <div class="div">
        <QuestionCard category={categoryInfo.category}/>
      </div>
    {/each}
  </section>
</section>
