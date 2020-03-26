<template>
  <div>
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
</style>