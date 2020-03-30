<template>
    <div class="topic">
        <h1 class="is-size-3 is-size-5-mobile">{{ $prismic.asText(course.topic) }}</h1>
        <ul>
            <li class="is-size-6-mobile has-text-weight-light" :key="$prismic.asText(course.course_name)" v-for="course in course.course">
                <a :href="course.link.url" target="_blank">{{ $prismic.asText(course.course_name) }} <font-awesome-icon class="is-size-6" :icon="['fas', 'external-link-alt']"/></a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'course-widget',
    props: ['course'],
    created(){
        console.log(this.course);
    }
}
</script>

<style scoped>
.topic {
    margin-top: 20px;
}
</style>