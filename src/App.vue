<template>
  <Layout>
    <!-- <transition name="fade" appear> -->
    <router-view />
    <!-- </transition> -->
  </Layout>
</template>

<script>
export default {
  components: {},
};
//
</script>
<style>
.background-vertical {
  @apply bg-gradient-to-b from-pink-100 via-pink-500 to-orange-500;
}

.background-horizontal {
  @apply bg-gradient-to-r from-pink-100 via-pink-500 to-orange-500;
}

@media (max-width: 767px) {
  body {
    @apply background-vertical;
  }
}
@media (min-width: 768px) {
  body {
    @apply background-horizontal;
  }
}
.fade-enter-active {
  transition: opacity 0.2s;
}

.fade-enter {
  opacity: 0;
}
</style>

