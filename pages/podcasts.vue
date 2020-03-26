<template>
  <section class="hero">
    <div class="hero-body pb-0">
      <div class="container">
        <nuxt-link to="/" class="mb-3 is-size-4 go-back">
          <font-awesome-icon class="icon-item" :icon="['fas', 'angle-left']" />Back to Home
        </nuxt-link>
        <h1 class="is-size-1 is-size-3-mobile">
          My Favorite
          <span class="has-text-weight-bold">Podcasts</span> 🎙️
        </h1>
        <h2 class="subtitle mb-3">You got to check them out!</h2>
        <p
          class="info subtitle is-size-6-mobile"
        >Podcasts are packed with so much priceless information. You get to hear about so many real life stories and learn from others.</p>
      </div>
      <div class="container">
        <div :key="podcast.id" v-for="podcast in podcasts">
          <podcast-widget :podcast="podcast.data" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PodcastWidget from "~/components/PodcastWidget.vue";

export default {
  name: "Podcasts",
  components: { PodcastWidget },
  async asyncData({ $prismic, error }) {
    try {
      const { results } = await $prismic.api.query(
        $prismic.predicates.at("document.type", "podcast"),
        { orderings: "[my.podcast.date desc]" }
      );

      return {
        podcasts: results
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
  head() {
    return {
      title: 'Favorite Podcasts',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "podcasts",
          name: "podcasts",
          content: "My all time favorite podcasts that I love listening to!"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>