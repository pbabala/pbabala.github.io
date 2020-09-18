<template>
  <div class="flex flex-col justify-between">
    <g-image
      class="block lg:hidden h-32 w-32 md:h-64 md:w-64 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"
      src="~/assets/profile-circle.png"
    ></g-image>
    <Content title="Piotr Bąbała" :next="next">
      <p
        class="w-auto lg:w-3/4 text-center md:text-left md:text-xl lg:text-3xl font-light text-justify mx-2 lg:mx-0 lg:mr-0 my-1 md:my-4 lg:my-8"
      >
        Front-end developer with experience in
        <strong>AngularJS</strong> and good knowledge of
        <strong>Angular</strong>.
        <br />Passionate about
        <strong>JavaScript</strong> and its ecosystem. Most recently
        fascinated by
        <strong>Vue.js</strong> and very eager to explore it
        deeply, but
        <strong>open to other frameworks and tools</strong>.
        <br />Looking for new challenges that will help me to grow.
      </p>
    </Content>
  </div>
</template>

<script>
import Content from "~/components/Content";

export default {
  components: {
    Content,
  },
  metaInfo: {
    title: "Piotr Babala",
  },
  data() {
    return {
      next: { label: "More", linkTo: "/experience" },
    };
  },
};
</script>

<style></style>
