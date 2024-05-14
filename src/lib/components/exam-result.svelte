<script>
  export let category
  export let data

  const currentIndex = 0
  const currentQ =  data[currentIndex]


  $: QUESTION = currentQ.question
  $: ANSWERS = currentQ.answers
  $: CORRECT_ANS = currentQ.correctAnswer
  $: USER_ANS = currentQ.userAns
  $: CATEGORIES = currentQ.categories

  console.log({data, category});
  // const {question, asnwers, correctAnswer} = data
</script>
<h1>Examen de {category}</h1>

<p>{QUESTION}</p>
<p>categorias</p> 
{#each CATEGORIES as cat}
  <span> {cat} </span> 
{/each}
<ul>
  {#each ANSWERS as ans}
     <li>{ans}</li>
  {/each}

  {#if CORRECT_ANS === USER_ANS}
     <p class="correct">{USER_ANS}</p>
     {:else}
     <!-- else content here -->
     <p class="incorrect">{USER_ANS}</p>
     <p class="correct">{CORRECT_ANS}</p>
  {/if}
</ul>

<style>
  .correct {
    border: 1px solid green;
  }
  .incorrect {
    border: 1px solid red;
  }
</style>

