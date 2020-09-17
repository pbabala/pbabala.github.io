<template>
  <div class="flex flex-col md:px-5 h-full">
    <!-- text -->

    <div class="flex-initial font-mono">
      <!-- title -->
      <p class="text-left text-3xl" :class="small ? 'lg:text-4xl' : ' lg:text-6xl'">{{ title }}</p>
      <!-- bar -->
      <div
        class="h-2 md:w-48 my-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded"
        :class="small ? 'md:my-6' : 'md:my-8'"
      ></div>
    </div>
    <div class="flex-initial overflow-auto">
      <slot />
    </div>
    <!-- <div class="border-2 justify-self-center"> -->
    <div
      class="flex text-center tracking-wider md:w-48 h-8 mt-6 md:mt-12 pt-1 rounded-full text-white md:bg-orange-500 lg:hover:bg-orange-400 bg-red-500 hover:shadow-lg"
    >
      <g-link to="/" class="flex-auto">{{ next.label }}</g-link>
    </div>
    <!-- </div> -->
  </div>
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

<style></style>
