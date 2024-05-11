<script>
  import { user } from "$lib/stores.js";
  import { Database } from "$lib/firebase.js";
	import { onMount } from 'svelte';
  export let data;

  const {category} = data

  let questions = []
  let currentQ = {}
  let userAnswers = []
  let userAnswer = undefined

  $: question = ''
  $: answers = []

  let questionIndex = 0
  let selected = false
  let everyQuestionAnswered = false;
  

  onMount(async() => {
    const res = await Database.getDocuments('questions')
    const filteredQuestions = res.filter(q => q.categories.includes(category))
    questions = [... filteredQuestions]
    userAnswers = [... filteredQuestions]
    const firstQ = filteredQuestions.shift()

    currentQ = firstQ
    question = firstQ.question
    answers = firstQ.answers
  })
  
  const goNextQ = () => {
    if (questionIndex === questions.length - 1) return
    questionIndex++;

    currentQ = questions[questionIndex]
    
    question = currentQ.question
    answers = currentQ.answers
    userAnswer = currentQ.userAns
  }
  const goPrevQ = () => {
    if (questionIndex <= 0) return
    questionIndex--;

    currentQ = questions[questionIndex]
    
    question = currentQ.question
    answers = currentQ.answers
    userAnswer = currentQ.userAns
  }
  const goToQuestion = (e) =>{
    const target = e.target
    const index = Number(target.value)  
    
    questionIndex = index;
    currentQ = questions[index]

    question = currentQ.question
    answers = currentQ.answers
    userAnswer = currentQ.userAns
  }
  
  const addAns = (e) => {
    const target = e.target
    const value = target.value
    currentQ.userAns = value
    userAnswer = currentQ.userAns
 
    everyQuestionAnswered = questions.every(q => q.userAns)
  }
    
  const finishAll = async () =>{;
    const uid = $user.uid
    
    const processedData = questions.map(q => {
      const {question, correctAnswer, categories, answers, userAns} = q
      return{question, correctAnswer, categories, answers, userAns}
    } )
    const questionary = {category: category, processedData}
    

    const userRequest = await Database.getDocument('users', uid)
    const {exams} = userRequest
    
    const foundedExam = exams.find(exam => exam.category === category)
    // console.log(foundedExam.processedData.forEach(e => console.log(e.userAns)));

    if (!foundedExam) {
      exams.push(questionary)
      Database.updateData('users', uid, exams, 'exams')
    } else {
      exams.splice(exams.indexOf(foundedExam), 1, questionary)
      Database.updateData('users', uid, exams, 'exams')
    }
    
  }
</script>

<section>
  <h2>{question}</h2>
   <ul>
    {#each answers as answer}
      <li>

        <input type="radio" 
          on:click={addAns}
          name={question}
          id={answer}
          value={answer}
          bind:group={selected}
          checked={userAnswer === answer}
        > 

        <label for={answer}>{answer}</label>
      </li>
    {/each}
  </ul>

  {#if userAnswer}
     <p>Tu Respuesta: {userAnswer}</p>
  {/if}


</section>
  <div class="controler">
    <button on:click={goPrevQ}>prev</button>
    <button on:click={goNextQ}>next</button>

    {#each questions as _, index}
       <button
        value={index}
        on:click={goToQuestion}
        class:selected={index === questionIndex}
        >
        {index + 1}
      </button>
    {/each}

    {#if everyQuestionAnswered}
      <button on:click={finishAll}>Finalizar Prueba</button>
    {/if}
  </div>



<style>
  .selected {
    background-color: rebeccapurple;
  }
</style>