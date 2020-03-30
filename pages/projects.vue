<template>
  <div>
    <section class="hero">
      <div class="hero-body pb-0">
        <div class="container">
          <nuxt-link to="/" class="mb-3 is-size-4 is-size-5-mobile go-back">
            <font-awesome-icon class="icon-item" :icon="['fas', 'angle-left']" /> Back to Home
          </nuxt-link>
          <h1 class="is-size-1 is-size-3-mobile has-text-weight-light">
            My
            <span class="has-text-weight-bold">Projects</span> 🚧
          </h1>
          <h2
            class="subtitle mb-3 is-size-6-mobile has-text-weight-light"
          >Some projects I have worked on. You can find them all on my GitHub!</h2>
        </div>
      </div>
    </section>
    <section class="section pt-0" v-if="projects.length !== 0">
      <div class="container">
        <div class="columns is-multiline is-vcentered">
          <div class="column is-6 pl-0">
            <project-widget v-for="project in projects" :key="project.uid" :project="project"></project-widget>
          </div>
        </div>
      </div>
    </section>
    <section v-else>
      <h1 class="is-size-1 is-size-3-mobile">No uploads yet! Stay tuned.</h1>
    </section>
  </div>
</template>

<script>
import ProjectWidget from "~/components/ProjectWidget.vue";

export default {
  name: "Projects",
  components: { ProjectWidget },
  async asyncData({ $prismic, error }) {
    try {
      const { results } = await $prismic.api.query(
        $prismic.predicates.at("document.type", "project"),
        { orderings: "[my.project.date desc]", pageSize: 5 }
      );
      console.log(results);
      return {
        projects: results
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
  head() {
    return {
      title: 'Projects',
      meta: [
        {
          hid: "projects",
          name: "projects",
          content: "My latest projects that I built for fun or from tutorials! You can find all of these on my GitHub."
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>