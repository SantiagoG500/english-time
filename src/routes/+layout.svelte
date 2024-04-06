<script>
  import '../styles.css'
  import Header from "$lib/components/header.svelte";
  import Footer  from "$lib/components/footer.svelte";

  import { isLoggedIn, user } from '$lib/stores';
  import { Auth, User } from '$lib/firebase';
  import { onAuthStateChanged } from 'firebase/auth';

  onAuthStateChanged(Auth.authInfo, (authUser) => {
    $user = authUser;
    $isLoggedIn = !!authUser;
    if (!!authUser) User.addUser(authUser)
  });

</script>


<section class="main-container">
  <Header></Header>
  <main class="main-content">
    <slot></slot>
  </main>
  <Footer></Footer>
</section>