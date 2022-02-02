import { createWebHistory, createRouter } from "vue-router";
import Home from '@/views/Home.vue';
import Apropos from '@/views/A-propos.vue';

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    { 
        path: "/a-propos",
        name: "A propos",
        component: Apropos,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;