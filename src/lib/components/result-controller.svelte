<script>
	import { onMount } from 'svelte';
	import BarChart from './bar-chart.svelte';

  export let exams
  let index = 0
  let currentExam = exams[index]

  let category = currentExam.category
  let processedData = currentExam.processedData

  const next = () => {
    if (exams.length === 1) return
    
    index = index === exams.length -1
     ? index = exams.length -1
     : index += 1
    currentExam = exams[index]
    
    category = currentExam.category
    processedData = currentExam.processedData

    createDataChart()
  }
  const prev = () => {
    if (exams.length === 1) return
    
    index  = index <= 0
    ? index = 0
      : index -=1
      
    currentExam = exams[index]
    
    category = currentExam.category
    processedData = currentExam.processedData
    createDataChart()
  }

  let datasetCorrects = {label: 'correctas', data: [], borderWidth:1}
  let datasetInorrects = {label: 'incorrectas', data: [], borderWidth:1} 
  $: labels = ['Correctas vs Incorrectas']
  $: datasets = [datasetCorrects, datasetInorrects]
  

  const createDataChart = () => {
    const correctQs = processedData.filter(q => q.correctAnswer === q.userAns)
    const incorrectQs = processedData.filter(q => q.correctAnswer !== q.userAns)

    datasetCorrects.data = [correctQs.length]
    datasetInorrects.data = [incorrectQs.length]
    
    datasetCorrects = {...datasetCorrects}
    datasetInorrects = {...datasetInorrects}

    datasets = [...datasets]
  }

  onMount( ()=> createDataChart())

</script>

<section class="section">
  <BarChart datasets={datasets} labels={labels}/>
  
  <h1>{category}</h1>
  
  {#if exams.length > 1}
     <button on:click={prev}>
       prev 
     </button>
     <button on:click={next}>
       next
     </button>
  {/if}
  
  
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
  
    <div class="answer-container">
      {#if data.correctAnswer === data.userAns}
        <p class="correct">{data.userAns}</p>
        {:else}
        <p class="incorrect">{data.userAns}</p>
        <p class="correct">{data.correctAnswer}</p>
      {/if}
    </div>
  
  {/each}
</section>

<style>

  .answer-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .correct, .incorrect {
    border-radius: .5em;
    padding-top: .5em;
    padding-bottom: .5em;

    padding-left: .5em;
    padding-right: .5em;
  }
  .correct {
    border: 3px solid hsl(114, 80%, 65%);
  }
  .incorrect {
    border: 3px solid hsl(0, 80%, 65%);
  }
</style>
