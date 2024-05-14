<script>
  export let exams
  let index = 0
  let currentExam = exams[index]

  let category = currentExam.category
  let processedData = currentExam.processedData
  let stadistics = {}

  const next = () => {
    index += 1
    currentExam = exams[index]
    
    category = currentExam.category
    processedData = currentExam.processedData
  }
  const prev = () => {
    index -= 1
    currentExam = exams[index]
    
    category = currentExam.category
    processedData = currentExam.processedData
  }

  const getStadistics = () => {
    
  }
  
  getStadistics()

</script>


<h1>{category}</h1>


{#each processedData as data}

  <p>{data.question}</p>
  {#each data.categories as category}
    <a href="/blog?category={category}">{category}</a>
  {/each}

  <ul>
    {#each data.answers as ans}
      <li>{ans}</li>
    {/each}
  </ul>

  {#if data.correctAnswer === data.userAns}
    <p class="correct">{data.userAns}</p>
    {:else}
    <p class="incorrect">{data.userAns}</p>
    <p class="correct">{data.correctAnswer}</p>
  {/if}
{/each}

<button on:click={prev}>
  prev 
</button>
<button on:click={next}>
  next
</button>

<style>
  .correct {
    border: 1px solid green;
  }
  .incorrect {
    border: 1px solid red;
  }
</style>

<!-- <script>
  export let exams
  let currentIndex = 0
  $: currentResult = exams[currentIndex]

  $: CATEGORY = currentResult.category
  $: DATA = currentResult.processedData // objeto {}

  const prev = () => {
    currentIndex -= 1
    currentResult = exams[currentIndex]

    CATEGORY = currentResult.category
    DATA = [... currentResult.processedData]
  
    // console.log(Array.isArray(DATA));
    // console.log(DATA);

  }
  const next = () => {
    currentIndex += 1
    currentResult = exams[currentIndex]

    CATEGORY = currentResult.category
    DATA = [...currentResult.processedData]
   
    // console.log(Array.isArray(DATA));
    // console.log(DATA);

  }


</script>
<section>
  <h1>Cuestionario de  {CATEGORY} </h1>

  {JSON.stringify(DATA)}  

  {#each DATA as q}
    {JSON.stringify(q)}
  {/each}
</section>


<button on:click={prev}>prev</button>
<button on:click={next}>next</button> -->