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
</style>
