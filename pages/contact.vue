<template>
  <div class="container">
    <div class="columns">
      <div class="column is-8">
        <section class="hero">
          <div class="hero-body pb-0">
            <div class="container">
              <nuxt-link to="/" class="mb-3 is-size-4 is-size-5-mobile go-back">
                <font-awesome-icon class="icon-item" :icon="['fas', 'angle-left']" /> Back to Home
              </nuxt-link>
              <h1 class="is-size-1 is-size-3-mobile has-text-weight-light">
                Contact
                <span class="has-text-weight-bold">Me</span> ✉️
              </h1>
              <h2
                class="subtitle mb-3 is-size-5-mobile has-text-weight-light"
              ><span class="has-text-weight-semibold">faraazmotiwala3@gmail.com</span></h2>
              <p
                class="is-size-6-mobile has-text-weight-light"
              >Whether it's a new or existing project you need help with, I am here to help! Or if you would like to have a virtual coffee chat, I'm all in!</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  head() {
    return {
      title: "Contact Me",
      meta: [
        {
          hid: "contact",
          name: "contact",
          content:
            "Let's chat! You can Contact Me at faraazmotiwala3@gmail.com!"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>