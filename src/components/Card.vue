<template>
  <div
    class="text-left max-w-screen-sm px-4 py-2 m-1 cursor-pointer hover:bg-white hover:bg-opacity-25 rounded"
    @click="collapsed = !collapsed"
  >
    <div class="flex justify-between items-center">
      <span class="text-xl md:text-2xl lg:text-3xl">{{ data.company }}</span>
      <span class="text-xs md:text-xl text-right">{{ data.startDate }} — {{ data.endDate }}</span>
    </div>
    <div class="text-sm md:text-xl lg:text-2xl font-light">
      <p class="text-left">{{ data.title }}</p>
    </div>
    <ul class="text-left text-xs md:text-base lg:text-xl block" :class="{'hidden' : collapsed} ">
      <li v-for="item in data.details" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      collapsed: true,
    };
  },
};
</script>

<style>
</style>