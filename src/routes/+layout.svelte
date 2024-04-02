<script>
  import '../styles.css'
  import Header from "$lib/components/header.svelte";
  import Footer  from "$lib/components/footer.svelte";

  import { onAuthStateChanged } from 'firebase/auth';
  import { isLoggedIn, user } from '$lib/stores';
  import { Auth } from '$lib/firebase';
  // import { onMount } from 'svelte';
  onAuthStateChanged(Auth.authInfo, (authUser) => {
    $user = authUser;
    $isLoggedIn = !!authUser;
  });

</script>


<section class="main-container">
  <Header></Header>
  <main class="main-content">
    <slot></slot>
  </main>
  <Footer></Footer>
</section>