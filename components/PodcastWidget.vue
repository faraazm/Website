<template>
    <div class="podcast">
        <h1 class="is-size-4 is-size-5-mobile">{{ $prismic.asText(podcast.genre) }}</h1>
        <ul>
            <li class="is-size-6 is-size-7-mobile has-text-weight-light" :key="$prismic.asText(podcast.title)" v-for="podcast in podcast.podcast">
                <a :href="podcast.link.url" target="_blank">{{ $prismic.asText(podcast.title) }} by {{ $prismic.asText(podcast.author) }} <font-awesome-icon class="is-size-6" :icon="['fas', 'external-link-alt']"/></a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'podcast-widget',
    props: ['podcast']
}
</script>

<style scoped>
.podcast {
    margin-top: 20px;
}
</style>