<template>
  <div class="container">
    <div class="columns">
      <div class="column is-8">
        <section class="hero">
          <div class="hero-body pb-0">
            <nuxt-link to="/" class="mb-3 is-size-4 is-size-5-mobile go-back">
              <font-awesome-icon class="icon-item" :icon="['fas', 'angle-left']" /> Back to Home
            </nuxt-link>
            <h1 class="is-size-1 is-size-3-mobile has-text-weight-light">
              Favorite
              <span class="has-text-weight-bold">Courses</span> 🧗‍♂️
            </h1>
            <h2 class="subtitle mb-3 has-text-weight-light">You got to check them out!</h2>
            <p
              class="is-size-6-mobile has-text-weight-light"
            >I have taken many courses from Udemy. These courses are priceless and taught me so much. These courses helped me build a solid foundation for my Full Stack Development and design skills. I highly recommend the following courses if you are interested or would like to enhance your development skills.</p>
            <div :key="course.id" v-for="course in courses">
              <course-widget :course="course.data" />
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import CourseWidget from "~/components/CourseWidget.vue";

export default {
  name: "Courses",
  components: { CourseWidget },
  async asyncData({ $prismic, error }) {
    try {
      const { results } = await $prismic.api.query(
        $prismic.predicates.at("document.type", "course"),
        { orderings: "[my.course.date desc]" }
      );

      return {
        courses: results
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
  head() {
    return {
      title: "Favorite Courses",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "courses",
          name: "courses",
          content:
            "Courses that I have taken so far to get to where I am. I am truly grateful to all of these instructors for they have provided me with priceless knowledge."
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>