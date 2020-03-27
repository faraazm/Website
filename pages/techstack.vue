<template>
  <div>
    <section class="hero">
      <div class="hero-body pb-0">
        <div class="container">
          <nuxt-link to="/" class="mb-3 is-size-4 go-back">
            <font-awesome-icon class="icon-item" :icon="['fas', 'angle-left']" /> Back to Home
          </nuxt-link>
          <h1 class="is-size-1 is-size-3-mobile">
            My
            <span class="has-text-weight-bold">Skills</span> 🧰
          </h1>
          <h2 class="subtitle">Full Stack Developer and Designer</h2>
          <p
            class="info subtitle is-size-6-mobile"
          >I am well-versed with Full Stack Development and graphic design. I have a passion for combining art and technology!</p>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="skills mb-3" :key="skill.title" v-for="skill in skills">
          <h3 class="is-size-4 mb-1">
            <span class="has-text-weight-semibold">{{ skill.title }}</span>
            {{ skill.type }}
          </h3>
          <b-tag class="skill-tag" rounded :key="tech" v-for="tech in skill.technologies">{{ tech }}</b-tag>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Techstack",
  data() {
    return {
      skills: [
        {
          title: "Front End",
          type: "Technologies",
          technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap",
            "Flexbox",
            "SASS",
            "jQuery",
            "Vue",
            "React",
            "Angular",
            "Ionic"
          ]
        },
        {
          title: "Back End",
          type: "Technologies",
          technologies: [
            "NodeJS",
            "Express",
            "Mongoose",
            "Java",
            "Spring",
            "Struts",
            "SQL",
            "MongoDB",
            "MySQL",
            "Firebase"
          ]
        },
        {
          title: "Design",
          type: "Tools",
          technologies: ["Photoshop", "AdobeXD"]
        },
        {
          title: "CMS",
          type: "Platforms",
          technologies: ["WordPress", "WebFlow", "Shopify"]
        }
      ]
    };
  },
  head() {
    return {
      title: 'Tech Stack',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "techstack",
          name: "techstack",
          content: "My Technology Stack mainly revolves around JavaScript technologies and design programs."
        }
      ]
    };
  }
};
</script>

<style scoped>
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
.info {
  width: 100%;
}
.skills {
  width: 100%;
}
.skill-tag {
  background: #fff;
  color: #181818;
  border: 1px solid #ccc;
  margin-right: 5px;
  margin-bottom: 5px;
  padding: 10px;
  font-size: 1em;
  cursor: pointer;
}
@media screen and (min-width: 750px) {
  .info {
    width: 66%;
  }
  .skills {
    width: 45%;
  }
}
</style>