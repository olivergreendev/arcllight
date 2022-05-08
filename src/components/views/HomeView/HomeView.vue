<template>
    <div>
        <Hero></Hero>
        <KeyFeatures></KeyFeatures>
    </div>
</template>

<script>
import Hero from './components/Hero.vue';
import KeyFeatures from './components/KeyFeatures.vue';

export default {
    components: {
        Hero, KeyFeatures
    },
    mounted () {
        window.scrollTo(0, 0);
    }
}
</script>

<style scoped>

</style>