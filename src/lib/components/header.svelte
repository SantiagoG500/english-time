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
        <a href="/" class="a a--main-header text">Home</a>
      </li>
      <li class="main-header__li">
        <a href="/blog" class="a a--main-header text">Blog</a>
      </li>
      <li class="main-header__li">
        <a href="/about" class="a a--main-header text">Acerca de</a>
      </li>
      
      {#if $isLoggedIn}
      <li class="main-header__li">
        <a href="/course" class="a a--main-header text">Curso</a>
      </li>
      <li class="main-header__li">
        <a href="/login/" class="a a--main-header text">Account</a>
      </li>
      <li class="main-header__li">
        <a href="/results/" class="a a--main-header text">Resultados</a>
      </li> 
      {:else}
      <li class="main-header__li">
        <a href="/login/" class="a a--main-header text">Login</a>
      </li> 
      {/if}
    </ul>
  </nav>
</header>

<style>

  .main-header {
    /* display: flex;
    flex-direction: column; */

    padding-top: 1em;
    padding-bottom: 1em;
    
    height: min-content;
    
    box-shadow: var(--box-shadow);
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

  /* .main-header__nav {
    background-color: purple;
  } */
  .main-header__ul {
    flex-wrap: wrap;
    height: 100%;
    
    list-style: none;
    margin: 0;
    padding-top: 1em;
    padding-bottom: 1em;

    padding-left: 1.5rem;
    padding-right: 1.5rem;
    

  }
  .a--main-header {
    position: relative;
    text-align: center;
  }
  
  .a--main-header:hover::after {
    position: absolute;
    content: " ";
    height: 3px;

    width: 100%;
    top: 120%;

    background-color: var(--first-color);
  }
  .main-header__li:nth-child(odd) .a--main-header:hover { 
    color: var(--second-color);
  }
  .main-header__li:nth-child(odd) .a--main-header:hover::after {
    position: absolute;
    content: " ";
    height: 3px;

    width: 100%;
    top: 120%;

    background-color: var(--second-color);
  }
  
</style>