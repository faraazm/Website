<template>

    <div class="card">
      <div class="card-content">
        <p class="title is-4">{{ $prismic.asText(project.data.title) }}</p>
        <p class="subtitle is-6">{{ $prismic.asText(project.data.caption) }}</p>
        <b-button tag="a"
                :href="project.data.link.url"
                target="_blank">
                View Project
            </b-button>
      </div>
    </div>

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
</style>