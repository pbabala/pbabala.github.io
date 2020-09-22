<template>
  <section class="flex flex-col md:px-5 h-full">
    <header class="flex-initial font-mono">
      <p
        class="text-center lg:text-left"
        :class=" small ? 'text-2xl md:text-4xl' : 'text-4xl lg:text-6xl'"
      >{{ title }}</p>
      <div class="h-2 lg:w-48 my-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded"></div>
    </header>
    <main class="flex-initial">
      <slot />
    </main>
    <g-link
      :to="next.linkTo"
      class="text-center xl:text-xl tracking-wider lg:w-48 h-6 xl:h-8 my-6 md:my-12 rounded-full text-white bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 md:bg-orange-500 lg:hover:bg-orange-400 hover:shadow-lg"
    >{{ next.label }}</g-link>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    next: {
      type: Object,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
</style>
