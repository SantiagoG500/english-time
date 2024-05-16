<script>
  import { Auth, User, Database } from "$lib/firebase.js";
  import { isLoggedIn, user } from '$lib/stores.js';
	import { onMount } from 'svelte';

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

  onMount(async () => {
    const uid = $user.uid
    const userRequest = await Database.getDocument('users', uid)

  })

</script>

<svelte:head>
  {#if $isLoggedIn}
    <title>Account</title>
    {:else}
      <title>Login</title>
  {/if}
</svelte:head>

{#if $isLoggedIn}
  <section class="section">

    <section class="profile-container">
      <header class="profile-container__header">
        <h1 class="title">{$user.displayName}</h1>
        <p class="text text--color-1 text--bold">{$user.email}</p>
      </header>

      <section class="profile-container__content">
        <img class="profile-pic" src={$user.photoURL} alt="Profile pic">
        <button class="btn" on:click={logOut}>Log Out</button>
      </section>
    </section>


  </section>
  {:else}
  <section class="login-container">
    <form on:submit|preventDefault class="login-form">
      <h1 class="title">Login</h1>
      <h2 class="title--h2 title--centered">Parece ser que no has iniciado sesión</h2>
      <p class="text text--centered">Por el momento contamos con login usando Google, inicia sesión usando tu cuenta</p>
      <button on:click={login} class="btn">Login with Google</button>
    </form>
  </section>
{/if}
    