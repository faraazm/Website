<template>
  <nuxt-link class="column is-12" :to="`/blog/${post.uid}`">
    <div class="card detail-card">
      <div class="card-content">
        <p class="title is-4">{{ $prismic.asText(post.data.title) }}</p>
        <p class="subtitle is-6">{{getFirstParagraph(post)}}</p>
        <div class="content">
          <p>{{formattedDate}}</p>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import LinkResolver from "~/plugins/link-resolver.js";

export default {
  props: ["post"],
  data() {
    return {
      link: "",
      formattedDate: ""
    };
  },
  name: "blog-widget",
  methods: {
    // Function to get the first paragraph of text in a blog post and limit the displayed text at 50 characters
    getFirstParagraph(post) {
      const textLimit = 100;
      const slices = post.data.blog_content;
      let firstParagraph = "";
      let haveFirstParagraph = false;

      slices.map(function(slice) {
        if (slice.type == "paragraph" && !haveFirstParagraph) {
          firstParagraph += slice.text;
          haveFirstParagraph = true;
        }
      });

      const limitedText = firstParagraph.substr(0, textLimit);
      if (firstParagraph.length > textLimit) {
        return limitedText.substr(0, limitedText.lastIndexOf(" ")) + "...";
      } else {
        return firstParagraph;
      }
    }
  },
  created() {
    this.link = LinkResolver(this.post);
    this.formattedDate = Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit"
    }).format(new Date(this.post.data.date));
  }
};
</script>

<style scoped>
</style>