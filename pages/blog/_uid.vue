<template>
  <div>
    <section class="hero pt-2">
      <div class="hero-body pb-0">
        <div class="container">
          <nuxt-link to="/blog" class="mb-3 is-size-4 is-size-5-mobile go-back">
            <font-awesome-icon class="icon-item" :icon="['fas', 'angle-left']" /> Back to Blogs
          </nuxt-link>
          <h1 class="is-size-1 is-size-3-mobile">{{ $prismic.asText(post.data.title) }}</h1>
          <p class="is-size-5 has-text-grey has-text-weight-light">Posted on {{formattedDate}}</p>
          <div class="content">
            <prismic-rich-text :field="post.data.blog_content"/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, error, route }) {
    try {
      const { results } = await $prismic.api.query(
        $prismic.predicates.at("my.blog-post.uid", route.params.uid)
      );

      console.log(results[0]);

      return {
        post: results[0],
        formattedDate: Intl.DateTimeFormat('en-US').format(new Date(results[0].data.date))
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>

<style scoped>
.content {
  margin-top: 30px;
}
</style>