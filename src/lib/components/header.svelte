<script>
  import { isLoggedIn } from "$lib/stores.js";
</script>
<header class="main-header">
  <section class="main-header__section">
    <h2 class="title title--h2 title--light-color">English Time</h2>
  </section>
   <nav class="main-header__nav">
    <ul class="main-header__ul"> 
      <li class="main-header__li">
        <a href="/" class="a a--main-header">Home</a>
      </li>
      <li class="main-header__li">
        <a href="/blog" class="a a--main-header">Blog</a>
      </li>
      <li class="main-header__li">
        <a href="/about" class="a a--main-header">Acerca de</a>
      </li>
      
      {#if $isLoggedIn}
      <li class="main-header__li">
        <a href="/course" class="a a--main-header">Curso</a>
      </li>
      <li class="main-header__li">
        <a href="/login/" class="a a--main-header">Account</a>
      </li>
      <li class="main-header__li">
        <a href="/results/" class="a a--main-header">Resultados</a>
      </li> 
      {:else}
      <li class="main-header__li">
        <a href="/login/" class="a a--main-header">Login</a>
      </li> 
      {/if}
    </ul>
  </nav>
</header>

<style>
  .main-header {
    display: flex;
    flex-direction: column;
    box-shadow: var(--box-shadow);

    height: min-content;

  }
  .main-header__nav, .main-header__section, .main-header__ul {
    display: flex;
    justify-content: space-evenly;
    gap: 1em;

  }
  .a--main-header {
    display: flex;
    text-align: center;
    align-items: center;
    height: 100%;
  }

  .main-header__nav {
    height: 3rem;
  }
  .main-header__ul {
    height: 100%;
    
    list-style: none;
    margin: 0;
  }
  .a--main-header {
    text-align: center;
  }

  .a--main-header:hover {
    border-bottom: 4px solid var(--first-color);
  }
  .main-header__nav .main-header__li:nth-child(odd) .a--main-header:hover {
    color: var(--second-color);
    border-bottom: 4px solid var(--second-color);
  }
  
</style>