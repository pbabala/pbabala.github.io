<template>
  <div class="h-screen">
    <div class="flex flex-col h-full">
      <div class="flex-initial">
        <Header />
      </div>
      <div class="flex-auto mx-2 md:ml-16">
        <div class="flex justify-between h-full">
          <div class="flex-auto w-2/3 h-full">
            <slot />
          </div>
          <div class="flex-initial hidden lg:block self-end w-1/3">
            <g-image src="~/assets/profile.png" alt="face"></g-image>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  components: { Header },
};
</script>

