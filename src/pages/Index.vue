<template>
  <Content title="Piotr Bąbała" :next="next">
    <p class="text-left max-w-screen-sm md:pr-8">
      Front-end developer with experience in
      <strong>AngularJS</strong> and basic knowledge of
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
</template>

<script>
import Content from "../components/Content";

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
