<template>
  <b-navbar class="container">
    <template slot="brand">
      <b-navbar-item tag="nuxt-link" to="/">
          <h1 class="is-size-3 has-text-weight-bold has-text-primary">< FRZ /></h1>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="nuxt-link" to="/">Home</b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/about">About</b-navbar-item>
      <b-navbar-dropdown label="My Favorites">
        <b-navbar-item tag="nuxt-link" to="/techstack">Tech Stack</b-navbar-item>
        <b-navbar-item tag="nuxt-link" to="/courses">Courses</b-navbar-item>
        <b-navbar-item tag="nuxt-link" to="/podcasts">Podcasts</b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-item tag="nuxt-link" to="/projects">Projects</b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/blog">Blog</b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/contact">Contact</b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
</style>