<template>
  <header class="flex items-center h-auto lg:h-24 xl:h-32 lg:px-8">
    <nav class="flex-auto flex flex-col lg:flex-row justify-between items-center">
      <div class="flex justify-between items-center w-full md:mx-8">
        <g-link
          to="/"
          class="py-2 px-8 md:px-5 md:mx-5 bg-opacity-0 hover:bg-opacity-25 md:hover:shadow-md font-medium text-center text-orange-600 md:text-red-500 md:border-2 md:border-red-400 md:rounded-full cursor-pointer"
        >Home</g-link>

        <div class="w-8 h-8 m-5 block lg:hidden cursor-pointer" @click="toggleMenu()">
          <span
            class="burger-bar bg-pink-500 transition transition-transform duration-75 ease-in"
            :class="{' transform rotate-45 translate-y-2' : isMenuOpened}"
          ></span>
          <span
            class="burger-bar bg-pink-500 transition transition-transform duration-75 ease-in"
            :class="{' opacity-0' : isMenuOpened}"
          ></span>
          <span
            class="burger-bar bg-pink-500 transition transition-transform duration-75 ease-in"
            :class="{' transform -rotate-45 -translate-y-2' : isMenuOpened}"
          ></span>
        </div>
      </div>

      <div
        class="flex flex-col lg:flex lg:flex-row py-5 mb-2 justify-between items-center w-full lg:w-auto shadow-md lg:shadow-none"
        :class="{ 'hidden' : !isMenuOpened}"
      >
        <g-link to="/experience" class="nav-button" active-class="is-active">Experience</g-link>
        <g-link to="/skills" class="nav-button" active-class="is-active">Skills</g-link>
        <g-link to="/contact" class="nav-button" active-class="is-active">Contact</g-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpened: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpened = !this.isMenuOpened;
    },
  },
  watch: {
    $route(to, from) {
      this.isMenuOpened = false;
    },
  },
};
</script>

<style>
.burger-bar {
  @apply w-full h-1 block my-1 rounded-sm;
}
.nav-button {
  @apply py-2 px-5 mx-5 bg-white bg-opacity-0 text-center text-white tracking-wider border-2 rounded-full  cursor-pointer;
}

.nav-button:hover {
  @apply shadow-md;
}

.is-active {
  @apply bg-opacity-25;
}

@media (max-width: 1023px) {
  .nav-button {
    @apply py-2 px-5 w-full bg-white bg-opacity-0 text-center text-red-500 tracking-wider border-none rounded-none cursor-pointer;
  }
  .nav-button:hover {
    @apply shadow-none font-semibold;
  }
  .is-active {
    @apply font-semibold;
  }
}
</style>