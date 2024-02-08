import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '../components/Dashboard.vue';
import Overview from '../components/Overview.vue';

const routes = [
    {
        path: '/',
        redirect: '/dashboard',
    },
    {
        path: '/dashboard',
        component: Dashboard,
    },
    {
        path: '/overview',
        component: Overview,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;