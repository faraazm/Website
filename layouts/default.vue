<template>
  <div>
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue'
import VueTypedJs from 'vue-typed-js'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

Vue.use(VueTypedJs);

export default {
  components: { Navbar, Footer }
};
</script>

<style>
.footer {
  background-color: #FFF;
  padding: 25px 0px 25px 0px;
}
.go-back {
  color: #b9b9b9;
  font-weight: 300 !important;
  display: block;
}
.mb-0 {
  margin-bottom: 0px;
}
.mb-1 {
  margin-bottom: 10px;
}
.mb-2 {
  margin-bottom: 20px;
}
.mb-3 {
  margin-bottom: 30px;
}
.pb-0 {
  padding-bottom: 0px;
}
.pl-0 {
  padding-left: 0px;
}
.info {
  width: 100%;
  font-weight: 300;
  font-size: 1.15rem;
  line-height: 1.35;
}
@media screen and (min-width: 750px) {
  .info {
    width: 66%;
  }
}
.detail-card {
  border-radius: 10px;
  /* box-shadow: 0px 10px 35px rgba(0, 0, 0, 0.08); */
  padding: 10px;
  height: auto;
}
.detail-card .card-content .content h1 {
  color: #181818;
}
</style>