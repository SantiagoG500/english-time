<script>
  import { User } from "$lib/firebase.js";
  import { isLoggedIn, user } from '$lib/stores.js';
	import { onMount } from 'svelte';
	import ResultController from '../../lib/components/result-controller.svelte';

  let promise = User.getUser($user.uid)
  // let currentIndex = 0

</script>
  
<section class="sections">
  {#await promise }
    <p>espera ...</p>
  {:then {exams}}
    <ResultController exams={exams}/>
  {/await}
</section>
