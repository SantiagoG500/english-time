<script>
  import { goto } from "$app/navigation";
  import { user } from "$lib/stores.js";
  import { Database } from "$lib/firebase.js";
	import { onMount } from 'svelte';
  export let data;

  const {category} = data

  let questions = []
  let currentQ = {}
  let userAnswers = []
  let userAnswer = undefined

 let filteredQuestions = []

  $: question = ''
  $: answers = []

  let questionIndex = 0
  let selected = false
  let everyQuestionAnswered = false;
  

  onMount(async() => {
    const res = await Database.getDocuments('questions')
    filteredQuestions = res.filter(q => {
      return  q.categories.includes(category)
    })

    questions = [... filteredQuestions]
    userAnswers = [... filteredQuestions]
    const firstQ = filteredQuestions.shift()

    currentQ = firstQ
    question = firstQ.question
    answers = firstQ.answers
  })
  
  const goNextQ = () => {
    if (questionIndex === filteredQuestions.length) return
    questionIndex++;
    
    currentQ = questions[questionIndex]
    
    question = currentQ.question
    answers = currentQ.answers
    userAnswer = currentQ.userAns

    // console.log(questionIndex);
  }
  const goPrevQ = () => {
    if (questionIndex <= 0) return
    questionIndex--;
    
    currentQ = filteredQuestions[questionIndex]
    
    question = currentQ.question
    answers = currentQ.answers
    userAnswer = currentQ.userAns

    // console.log(questionIndex);
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
    goto('/results')
  }
</script>
<section class="section">
  <h1 class="title">Cuestionario de: {category}</h1>
  <h2 class="title">{question}</h2>
  <div class="controller">
  
    <div class="controller__go-to">
      {#each questions as _, index}
         <button
          class="btn"
          value={index}
          on:click={goToQuestion}
          class:selected={index === questionIndex}
          >
          {index + 1}
        </button>
      {/each}
    </div>
    <div class="controller__go-step">
      <button class="btn" on:click={goPrevQ}>prev</button>
      <button class="btn" on:click={goNextQ}>next</button>
      {#if everyQuestionAnswered}
        <button class="btn" on:click={finishAll}>Finalizar Prueba</button>
      {/if}
    </div>

  </div>

   <ul class="questions">
    {#each answers as answer}
      <li class="questions__question">

        <input class="questions__input text text--medium"
          type="radio" 
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
     <p class="text text--medium">Tu Respuesta: <strong>{userAnswer}</strong></p>
  {/if}
</section>



<style>
  .selected{
    font-size: 1rem;
    font-family: var(--font-family);
    font-weight: 500;

    border: 2px solid var(--dark-bg);
    border-radius: .5em;
    padding: .5em;

    color: var(--light-bg);
    border: 1px solid var(--light-bg);
    background-color: var(--first-color);
  }
  .controller {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    
    padding-top: 1em;
    padding-bottom: 1em;

    border-top: 3px solid var(--dark-bg);
    border-bottom: 3px solid var(--dark-bg);
    /* background-color: rebeccapurple; */
  }
  .controller__go-step, .controller__go-to {
    display: flex;
    /* justify-content: center; */
    gap: .4em;

    width: 100%;
  }

  .questions {
    list-style: none;
    padding-left: 0;
  }
  .questions__question {
    display: flex;
    align-items: center;
    gap: 1em;
  }
  .questions__input {
    margin: 0;
  }
</style>