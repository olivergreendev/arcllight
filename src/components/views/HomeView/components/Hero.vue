<template>
    <div class="hero">
        <div class="hero-main">
            <transition name="fade-slide-up-slow" appear>
                <div class="hero-text">
                    Turn your ideas into reality.
                </div>
            </transition>
            <transition name="fade-slide-up-slow" appear>
                <div class="learn-more flex justify-center align-center" style="transition-delay: 0.2s">
                    <router-link :to="{ name: 'about' }" class="learn-more-link">
                        Learn More
                    </router-link>
                    <i class="bi bi-chevron-right"></i>
                </div>
            </transition>
        </div>
        <div class="hero-bg">
            <img src="/images/hero-bg.png" alt="hero background">
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.hero {
    height: calc(100vh - 100px);
    position: relative;
}
.hero .hero-bg {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
}
.hero .hero-bg img {
    max-width: 1400px;
}
.hero .hero-main {
    position: relative;
    max-width: 550px;
    margin: 0 auto;
    padding-top: 300px;
    z-index: 1;
}
.hero .hero-main .hero-text {
    font-size: 70px;
    font-weight: 600;
    color: white;
    margin-bottom: 35px;
}
.hero .hero-main .learn-more {
    color: var(--accent-01);
}
.hero .hero-main .learn-more i {
    margin-left: 10px;
    font-size: 13px;
    transition: transform 0.2s ease;
}
.hero .hero-main .learn-more .learn-more-link:hover ~ i {
    transform: translateX(5px);
}
</style>