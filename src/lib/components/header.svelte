<script>
  import { isLoggedIn } from "$lib/stores.js";
</script>
<header class="main-header">
  <section class="main-header__section">
    <h2 class="poppins-bold">English Time</h2>
  </section>
  <!-- <section class="main-header__section">
    <h2 class="poppins-bold">section</h2>
  </section> -->
  <nav class="main-header__nav">
    <ul class="ul main-header__ul"> 
      <li class="li main-header__li">
        <a href="/blog" class="poppins-regular link main-header__a">Blog</a>
      </li>
      <li class="li main-header__li">
        <a href="/about" class="poppins-regular link main-header__a">Acerca de</a>
      </li>
      
      {#if $isLoggedIn}
      <li class="li main-header__li">
        <a href="/course" class="poppins-regular link main-header__a">Curso</a>
      </li>
      <li class="li main-header__li">
        <a href="/login/" class="poppins-regular link main-header__a">Account</a>
      </li>
      {:else}
      <li class="li main-header__li">
        <a href="/login/" class="poppins-regular link main-header__a">Login</a>
      </li> 
      {/if}
    </ul>
  </nav>
</header>