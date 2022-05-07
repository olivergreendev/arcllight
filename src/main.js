import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
// Components
import HomeView from './components/views/HomeView/HomeView.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
    { name: "home", path: "/", component: HomeView }
]

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehaviour() {
        return { x: 0, y: 1 };
    },
});

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app')
