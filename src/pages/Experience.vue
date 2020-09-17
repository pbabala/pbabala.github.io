<template>
  <Content title="Experience" small :next="next">
    <div class="flex flex-col">
      <Card v-for="(item, index) in items" :key="index" :data="item" />
    </div>
  </Content>
</template>

<script>
import Content from "../components/Content";
import Card from "../components/Card";
export default {
  components: {
    Content,
    Card,
  },
  metaInfo: {
    title: "Experience",
  },
  data() {
    return {
      next: { label: "Next", linkTo: "/skills" },
      items: [
        {
          company: "Finastra Global Limited",
          startDate: "Sep 2018",
          endDate: "Mar 2019",
          title: "Software Engineer",
          details: ["Front-end developer (AngularJS, Angular)", "Scrum master"],
        },
        {
          company: "Finastra Global Limited",
          startDate: "Oct 2015",
          endDate: "Sep 2018",
          title: "Associate Software Engineer",
          details: ["Front-end developer (AngularJS)", "Java developer"],
        },
        {
          company: "Misys Global Limited",
          startDate: "Feb 2015",
          endDate: "Oct 2015",
          title: "Intern developer",
          details: ["Java develper (Java, Swing)"],
        },
      ],
    };
  },
};
</script>

<style></style>
