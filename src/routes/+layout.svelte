<script>
  import '../styles.css'
  import Header from "$lib/components/header.svelte";
  import Footer  from "$lib/components/footer.svelte";
  import { Database }  from "$lib/firebase.js";

  import { questionsT1} from '$lib/data.js';
  import { isLoggedIn, user } from '$lib/stores';
  import { Auth, User } from '$lib/firebase';
  import { onAuthStateChanged } from 'firebase/auth';

  onAuthStateChanged(Auth.authInfo, (authUser) => {
    $user = authUser;
    $isLoggedIn = !!authUser;
    if (!!authUser) User.addUser(authUser)

    if ($isLoggedIn) {
      // for (const question of questionsT1) {
      //   const q = question.getQuestion()
      //   const a = question.getAnswers()
      //   const correctA = question.getCorrectAns()
      //   const categories = question.getCategories()
      //   const questionT = 'T1'

      //   const docData = {question: q, answers: a, correctAnswer: correctA, questionType: questionT, categories}
      //   Database.addData('questions', q, docData)
      // }
    }
  });

</script>

<Header></Header>
<main class="main-content">
  <slot></slot>
</main>
<Footer></Footer>

<style>
  
</style>