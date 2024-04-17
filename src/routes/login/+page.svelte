<script>
  import { Auth, User, Database } from "$lib/firebase.js";
  import { isLoggedIn, user } from '$lib/stores.js';

  const login = async () => {
    const userInfo = await Auth.loginWithPopUp()

    $user = userInfo.user
    $isLoggedIn = true
    
    const users = await Database.getDocuments('users')
    const foundUser = users.find(user => user.uid === userInfo.user.uid)

    if (!foundUser) User.addUser(userInfo.user)   
    else console.log(`Usuario ${userInfo.user.displayName} ya está en la base de datos`);
  }
  const logOut = () => Auth.logOut()

</script>

{#if $isLoggedIn}
  <section class="section section--acount">
    <header class="section--account__header">
      <h1 class="h">{$user.displayName}</h1>
      <p class="h">{$user.email}</p>
    </header>
    <img src={$user.photoURL} alt="Profile pic">
    <button class="btn" on:click={logOut}>Log Out</button>
  </section>
  {:else}
  <section>
    <form class="login-form" on:submit|preventDefault>
      <h1>Login</h1>
      <button on:click={login}>Login with Google</button>
    </form>
  </section>
{/if}
    