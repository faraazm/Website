<template>
  <a :href="project.data.link.url" target="_blank">
    <div class="card detail-card mb-1">
      <div class="card-content">
        <div class="content">
          <h1
            class="is-size-4-mobile is-size-5-tablet is-size-3-desktop"
          >{{ $prismic.asText(project.data.title) }}</h1>
          <p class="subtitle is-6">{{ $prismic.asText(project.data.caption) }}</p>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: ["project"],
  name: "project-widget",
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
  }
};
</script>

<style scoped>
@media screen and (min-width: 750px) {
  .detail-card {
    min-height: auto;
  }
}
</style>