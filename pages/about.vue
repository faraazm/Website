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
              Hi! I'm
              <span class="has-text-weight-bold">Faraaz</span> 👨‍🎨
            </h1>
            <h2
              class="subtitle mb-3 is-size-6-mobile has-text-weight-light"
            >I'm a Full Stack Developer and Designer</h2>
            <p
              class="is-size-6-mobile has-text-weight-light"
            >I have a burning passion for combining art and technology. I am in love with UI/UX design and want to create work that is efficient and captivating! You might think I have a severe case of OCD but it's simply my passion for making sure everything is pixel perfect. My hobbies include programming, art, and design!</p>
          </div>
        </section>
        <section class="section pb-0">
          <h1 class="is-size-3 is-size-5-mobile mb-1 has-text-weight-light">
            How it
            <span class="has-text-weight-bold">all began</span> 🏁
          </h1>
          <p
            class="is-size-6-mobile has-text-weight-light"
          >Java was the first programming language I ever coded in which was around my senior year of high school around 2014. When I saw “Hello World” print out in the console for the very first time, I knew Computer Science was the career choice for me. In college, I spent countless days completing courses on Udemy to learn about Full Stack Development. Eventually, I was able to land a few clients and created websites for commission. I graduated from CUNY Queens College with a Bachelor of Arts Degree in Computer Science in December 2019.</p>
        </section>
        <section class="section">
          <h1 class="is-size-3 is-size-5-mobile mb-1 has-text-weight-light">
            What I’m up to
            <span class="has-text-weight-bold">now</span> 🧗‍♂️
          </h1>
          <p
            class="is-size-6-mobile has-text-weight-light"
          >I developed a habit where I’m either creating, updating, or learning something new every single day. I’m constantly working on a new project, improving something I have worked on in the past, or learning something new. You can see what I’m up to on my Instagram where I post frequently about the projects I am working on.</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {};
  },
  head() {
    return {
      title: "About Faraaz",
      meta: [
        {
          hid: "about",
          name: "about",
          content:
            "Faraaz Motiwala is a Full Stack Developer and Designer based in New York. Learn more about how he was first exposed to programming and what he's upto now!"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>