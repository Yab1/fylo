<script>
  import logo from "$lib/assets/logo.svg";
  import illustration_intro from "$lib/assets/illustration-intro.png";
  import illustration_stay_productive from "$lib/assets/illustration-stay-productive.png";
  import curvy_desktop from "$lib/assets/bg-curvy-desktop.svg";
  import curvy_mobile from "$lib/assets/bg-curvy-mobile.svg";
</script>

<header
  class="flex items-center justify-between pb-0 p-14 bg-dark-blue-intro font-raleway"
>
  <a href="#hero" class="cursor-pointer">
    <img src={logo} alt="logo" class="w-36" />
  </a>

  <nav>
    <ul class="flex gap-10">
      <li class="header-links">Features</li>
      <li class="header-links">Team</li>
      <li class="header-links">Sign In</li>
    </ul>
  </nav>
</header>

<section
  class="relative flex flex-col items-center border border-white bg-dark-blue-intro pt-14"
>
  <img
    src={illustration_intro}
    alt="Business professionals organizing documents into a folder"
    class=""
  />

  <p class="z-10 flex flex-col my-10 text-4xl font-bold place-items-center">
    All your files in one secure location, <span>accessible anywhere.</span>
  </p>

  <p
    class="z-10 flex flex-col mb-10 text-1xl font-open-sans place-items-center"
  >
    Fylo stores all your most important files in one secure location.
    <span>Access them wherever you need, share and collaborate with</span>
    friends family, and co-workers.
  </p>

  <button
    class="z-10 px-20 py-3 font-bold text-white rounded-full bg-accent-cyan"
    >Get Started</button
  >

  <img src={curvy_desktop} alt="wave curvy" class="absolute bottom-0" />
</section>

<section class="h-full border-white bg-dark-blue-main">
  <!-- <picture class="border border-white">
    <source media="(min-width:1440px)" srcset={curvy_mobile} />
    <source media="(min-width:375px)" srcset={curvy_desktop} />
    <img src={curvy_desktop} alt="wave curvy" width="100" />
  </picture> -->

  <!-- <div class="h-full bg-dark-blue-main"></div> -->
</section>

<!-- <footer class="h-full bg-dark-blue-footer"></footer> -->
