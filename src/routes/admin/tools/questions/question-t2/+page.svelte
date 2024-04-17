<script>
  import { QuestionT2 } from "$lib/logic/question_t2.js";
  let text = ''
  let textHtml = ''
  let correctText = ''
  
  let lastText = ''
  let currentText = ''

  let timer
  let question = {}
  const questions = []

  const debounce = () => {
    clearTimeout(timer)

    timer = setTimeout(() => {
      clearTimeout(timer)
      question = QuestionT2()
      question.setRawText(text)

      if (question.getTextWithHTML()) textHtml = question.getTextWithHTML()
      if (question.getOptions()) {
        const options = question.getOptions()
        for (const optionKey in options) {
          const optionArr = options[optionKey].split(',')

          question.setCorrectText(optionKey, optionArr[0])
          

          if (!lastText) lastText = optionArr[0]
          else lastText = optionArr[0]

        }

        correctText = question.getCorrectText()
      }


    }, 1000)
  }
  const addQuestion = () => {
    questions.push(question)
    question = []

  }
  const addCorrectAnswwer = (e) => {
    // const target = e.target
    // const value = target.value
    // currentText = value

    
    // question.setCorrectText(lastText, currentText)

    // correctText = question.getCorrectText()

    // const target = e.target
    // const value = target.value
    // question.setCorrectText(lastText, currentText)

    // const optionCode = target.name|
    // if (lastText) currentText = value
    // currentText = value|
    // console.log(question.getCorrectText());    

  }
</script>

<section class="section">

  {#if textHtml}
    <p on:change={addCorrectAnswwer}>
      {@html textHtml}
    </p>
    <div>
      <p>Respuesta Correcta: {correctText}</p>
    </div>
    {:else}
    <p>{text}</p>
  {/if}

  <input type="text" bind:value={text} on:keydown={debounce}>
  <button on:click={addQuestion}>Añadir</button>
</section>