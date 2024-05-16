<script>
  export let question;
  export let answers;
  let selected = false
</script>

<h2>
  {question}
</h2>
<ul>
  {#each answers as answer}
     <li>
      <!-- <input type="radio" on:click={addAns} name={question} id={answer} value={answer} >  -->
      <input type="radio" name={question} id={answer} value={answer} bind:group={selected}> 
      <label for={answer}>{answer}</label>
    </li>
  {/each}
</ul>
<!-- <script>
  export let question;
  export let answers;
</script>


<section class="question-container">
  <h3>{question}</h3>
  <ul>
    {#each answers as answer}
      <li>
        <input type="radio" name={question} id={answer} value={answer}> <label for={answer}>{answer}</label>
      </li>
    {/each}
  </ul>
</section>

<style>
  .question-container{
    display: flex;
    flex-direction: column;
  }
</style> -->