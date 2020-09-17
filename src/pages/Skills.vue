<template>
  <Content title="Qualifications" small :next="next">
    <ul class="list-disc ml-8 text-lg">
      <li v-for="skill in skills" :key="skill">{{ skill }}</li>
    </ul>
  </Content>
</template>

<script>
import Content from "../components/Content";
export default {
  components: {
    Content,
  },
  metaInfo: {
    title: "Skills",
  },
  data() {
    return {
      skills: [
        "JavaScript (ES6+)",
        "Vue.js, Vuex",
        "Gridsome, Vuetify, Tailwindcss",
        "AngularJS, Angular",
        "npm, Webpack, Grunt",
        "Git",
        "Familiarity with Docker, Jenkins, Maven",
        "Atlassian tools (Jira, Confluence, Bitbucket)",
        "Basic design skills (Photoshop, Gravit Design)",
      ],
      next: { label: "Next" },
    };
  },
};
</script>

<style></style>
