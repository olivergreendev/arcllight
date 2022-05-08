<template>
    <div id="app">
        <Navbar></Navbar>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue';

export default {
    name: 'App',
    components: {
        Navbar
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

:root {
    /* Colours */
    --bg-color: #0A071B;
    --accent-01: #0092FF;
    --accent-02: #786FD1;
    --grey-primary: #A4A0B8;
}
*,
::before,
::after {
    box-sizing: border-box;
}
html {
    scroll-behavior: smooth;
}
body {
    margin: 0;
    padding: 0;
    height: 100%;
}
a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
}
#app {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--grey-primary);
    background: var(--bg-color);
    height: 100%;
}
.flex {
    display: flex;
}
.align-center {
    align-items: center;
}
.justify-center {
    justify-content: center;
}
.ml-auto {
    margin-left: auto;
}
.mr-auto {
    margin-right: auto;
}
.relative {
    position: relative;
}
.container {
    max-width: 1080px;
    margin: 0 auto;
    padding: 30px 40px;
}
/* Transitions */
/* Fade Slide Up */
.fade-slide-up-enter-active, .fade-slide-up-leave.active {
    transition: opacity .3s ease,
                transform .3s ease;
}
.fade-slide-up-enter, .fade-slide-up-leave-to {
    opacity: 0;
    transform: translateY(20px);
}
/* Fade Slide Up Slow */
.fade-slide-up-slow-enter-active, .fade-slide-up-slow-leave.active {
    transition: opacity .6s ease,
                transform .6s ease;
}
.fade-slide-up-slow-enter, .fade-slide-up-slow-leave-to {
    opacity: 0;
    transform: translateY(40px);
}
/* Fade Slide Down */
.fade-slide-down-enter-active, .fade-slide-down-leave.active {
    transition: opacity .3s ease,
                transform .3s ease;
}
.fade-slide-down-enter, .fade-slide-down-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}
</style>
