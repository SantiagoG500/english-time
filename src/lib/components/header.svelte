<script>
  // export let logged
  import { isLoggedIn } from "$lib/stores.js";
</script>
<!-- about, curso, blog, login? -->
<header class="main-header">
  <section class="main-header__section"><h2>English Time</h2></section>
  <section class="main-header__section"><h2>section</h2></section>
  <nav class="nav">
    <ul class="ul"> 
      <li class="li">
        <a href="/blog" class="link">Blog</a>
      </li>
      <li class="li">
        <a href="/about" class="link">Acerca de</a>
      </li>
      
      {#if $isLoggedIn}
      <li class="li">
        <a href="/course" class="link">Curso</a>
      </li>
      <li class="li">
        <a href="/login/" class="link">Account</a>
      </li>
      {:else}
      <li class="li">
        <a href="/login/" class="link">Login</a>
      </li> 
      {/if}
      <!-- <li class="li">About</li>
      <li class="li">no sé</li>
      <li class="li">Qué</li>
      <li class="li">Poner</li> -->
    </ul>
  </nav>
</header>