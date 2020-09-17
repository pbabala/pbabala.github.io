<template>
  <Content title="Contact me" small :next="next">
    <p class="text-left max-w-screen-sm md:pr-8">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Pariatur dicta autem esse, officia consectetur facere,
      tempora animi tempore iusto vitae fugiat dolor quisquam harum.
      Debitis odio quae natus culpa dignissimos.
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
    title: "Contact",
  },
  data() {
    return {
      next: { label: "Home", linkTo: "/" },
    };
  },
};
</script>

<style></style>
