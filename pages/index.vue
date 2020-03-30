<template>
  <div>
    <section class="hero is-bold pb-0">
      <div class="hero-body">
        <div class="container">
          <h1 class="is-size-1 is-size-3-mobile has-text-weight-light">
            Hello! 👋 I'm
            <span class="has-text-weight-bold">Faraaz</span>
          </h1>
          <vue-typed-js class="mb-3" :strings="typedStrings" loop :typeSpeed="30" :backSpeed="30" :backDelay="1000">
            <h2 class="is-size-4 is-size-5-mobile has-text-weight-light">I am <span class="typing"></span></h2>
          </vue-typed-js>
          <nuxt-link to="/about">
            <b-button class="mb-2" type="button">About Me</b-button>
          </nuxt-link>
          <div class="social-icons">
            <a href="https://www.instagram.com/faraaz.io/" target="_blank">
              <font-awesome-icon class="is-size-1 icon-item" :icon="['fab', 'instagram']" />
            </a>
            <a href="https://github.com/faraazm" target="_blank">
              <font-awesome-icon class="is-size-1 icon-item" :icon="['fab', 'github']" />
            </a>
            <a href="https://codepen.io/faraazm" target="_blank">
              <font-awesome-icon class="is-size-1 icon-item" :icon="['fab', 'codepen']" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="section pt-0">
      <div class="container">
        <div class="columns is-multiline is-vcentered">
          <div :key="item.title" class="column is-4" v-for="item in items">
            <nuxt-link :to="item.link">
              <div class="card detail-card">
                <div class="card-content">
                  <div class="content">
                    <h1 class="is-size-4-mobile is-size-5-tablet is-size-3-desktop">{{ item.title }}</h1>
                    {{ item.caption }}
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="section">
      <div class="container">
        <h1 class="title is-size-3 has-text-weight-light">Latest Blogs</h1>
        <div class="columns">
          <div class="column is-4">
            <div class="card blog-card">
              <div class="card-content">
                <div class="content">
                  <h1
                    class="is-size-4-mobile is-size-5-tablet is-size-4-desktop"
                  >Cool JavaScript Concepts you should know about</h1>Here are some JavaScript concepts I picked up the other day. They are so cool you can't miss these!
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">View</a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>-->
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      items: [
        {
          title: "About me 🔎",
          caption: "Learn more about me, my passions, my goals and ambitions",
          link: "/about"
        },
        {
          title: "Blogs 📰",
          caption:
            "Quick tips, tutorials, or some general computer science topics",
          link: "/blog"
        },
        {
          title: "Projects 🚧",
          caption:
            "Some side projects I have worked on, you can find these on my GitHub as well",
          link: "/projects"
        },
        {
          title: "Tech Stack 📚",
          caption:
            "My technology stack that I use at work or personal projects",
          link: "/techstack"
        },
        {
          title: "Courses 📖",
          caption: "Some courses I have taken on Udemy or other sites",
          link: "/courses"
        },
        {
          title: "Podcasts 🎙️",
          caption: "Some podcasts that I enjoy listening to",
          link: "/podcasts"
        }
      ],
      typedStrings: [
        'a <span class="has-text-weight-semibold">JavaScript Rockstar 🤘</span>',
        'a <span class="has-text-weight-semibold">Dream Alchemist 🧪</span>',
        'a <span class="has-text-weight-semibold">Software Ninjaneer 👨‍🎤</span>',
        'a <span class="has-text-weight-semibold">Full Stack Magician 🧝🏻</span>',
        'a <span class="has-text-weight-semibold">Creative Innovator 👨‍🎨</span>'
      ]
    };
  },
  head() {
    return {
      title: "Faraaz Motiwala",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "index",
          name: "faraaz",
          content:
            "Welcome to my website! Here, you can learn more about my passion, hobbies and interests or keep up with my blog for quick tips and tutorials!"
        }
      ]
    };
  }
};
</script>

<style>
.pb-0 {
  padding-bottom: 0px;
}
.pt-0 {
  padding-top: 0px;
}
.social-icons {
  margin: 20px 0px;
}
.social-icons .icon-item {
  margin-right: 20px;
}
@media screen and (min-width: 750px) {
  .detail-card {
    min-height: 175px;
  }
}
</style>
