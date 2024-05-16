<script>
  import { User } from "$lib/firebase.js";
  import { isLoggedIn, user } from '$lib/stores.js';
	import { onMount } from 'svelte';
	import ResultController from '../../lib/components/result-controller.svelte';
</script>
  
<section class="section">
  {#await User.getUser($user.uid)}
    <p>espera ...</p>
  {:then {exams}}
    <ResultController exams={exams}/>
  {/await}
</section>
