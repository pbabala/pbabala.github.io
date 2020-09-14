<template>
  <div class="flex h-full">
    <!-- text -->
    <div class="flex self-stretch flex-grow p-5 h-full">
      <div class="flex-col font-mono">
        <!-- title -->
        <p class="text-left text-3xl" :class="small ? 'lg:text-4xl' : ' lg:text-6xl'">{{ title }}</p>
        <!-- bar -->
        <div
          class="h-2 md:w-48 my-3 bg-gradient-to-r from-orange-500 to-pink-500"
          :class="small ? 'md:my-6' : 'md:my-8'"
        ></div>
        <slot />
        <div
          class="flex text-center tracking-wider w-48 h-8 mt-6 md:mt-12 pt-1 rounded-full text-white lg:bg-orange-500 lg:hover:bg-orange-400 bg-red-700 hover:shadow-lg"
        >
          <g-link to="/" class="flex-auto">{{ next.label }}</g-link>
        </div>
      </div>
    </div>
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
