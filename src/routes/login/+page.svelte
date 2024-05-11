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
  <section class="section">

    <section class="profile-container">
      <header>
        <h1 class="title">{$user.displayName}</h1>
        <p class="text">{$user.email}</p>
      </header>
      <img src={$user.photoURL} alt="Profile pic">
      <button class="button" on:click={logOut}>Log Out</button>
    </section>


  </section>
  {:else}
  <section class="section">
    <form on:submit|preventDefault>
      <h1>Login</h1>
      <button on:click={login}>Login with Google</button>
    </form>
  </section>
{/if}
    