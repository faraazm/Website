<template>
  <div class="container">
    <div class="columns">
      <div class="column is-8">
        <section class="hero">
          <div class="hero-body pb-0">
            <nuxt-link to="/" class="mb-3 is-size-4 is-size-5-mobile go-back">
              <font-awesome-icon class="icon-item" :icon="['fas', 'angle-left']" /> Back to Home
            </nuxt-link>
            <h1 class="is-size-1 is-size-4-mobile has-text-weight-light">
              My Favorite
              <span class="has-text-weight-bold">Podcasts</span> 🎙️
            </h1>
            <h2 class="subtitle mb-3 has-text-weight-light">You got to check them out!</h2>
            <p
              class="is-size-6-mobile has-text-weight-light"
            >Podcasts are packed with so much priceless information. You get to hear about so many real life stories and learn from others.</p>

            <div :key="podcast.id" v-for="podcast in podcasts">
              <podcast-widget :podcast="podcast.data" />
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
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
      title: "Favorite Podcasts",
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