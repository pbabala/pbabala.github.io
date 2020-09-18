<template>
  <Layout>
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </Layout>
</template>

<script>
export default {
  components: {},
};
//
</script>
<style>
.background-horizontal {
  @apply bg-gradient-to-r from-pink-100 via-pink-500 to-orange-500;
}

@media (min-width: 1024px) {
  body {
    @apply background-horizontal;
  }
}

.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(15px);
  opacity: 0;
}
</style>

