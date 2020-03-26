<template>
  <div>
    <section class="hero">
      <div class="hero-body pb-0">
        <div class="container">
          <nuxt-link to="/" class="mb-3 is-size-4 go-back">
            <font-awesome-icon class="icon-item" :icon="['fas', 'angle-left']" />Back to Home
          </nuxt-link>
          <h1 class="is-size-1 is-size-3-mobile">
            Welcome to my
            <span class="has-text-weight-bold">Blog</span> 📰
          </h1>
          <h2 class="subtitle mb-3">Quick tips, tutorials, and general topics</h2>
        </div>
      </div>
    </section>
    <section class="section pt-0" v-if="posts.length !== 0">
      <div class="container">
        <div class="columns is-multiline is-vcentered">
          <div class="column is-6 pl-0">
            <blog-widget v-for="post in posts" :key="post.id" :post="post"></blog-widget>
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
import BlogWidget from "~/components/BlogWidget.vue";

export default {
  name: "Blog",
  components: { BlogWidget },
  async asyncData({ $prismic, error }) {
    try {
      const { results } = await $prismic.api.query(
        $prismic.predicates.at("document.type", "blog-post"),
        { orderings: "[my.blog-post.date desc]", pageSize: 5 }
      );
      return {
        posts: results
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
  head() {
    return {
      title: 'Blog',
      meta: [
        {
          hid: "Blog",
          name: "Blog",
          content: "Welcome to my blog! Here, you will find quick tips, tutorials, and general topics about Computer Science! I will be documenting whatever I am learning or maybe talk about something interesting I found."
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>