import { createRouter, createWebHistory } from 'vue-router'

const routerHistory = createWebHistory()
import list from '../components/list.vue'
import css from '../components/css.vue'

const routes = [
    {
        path: '/',
        redirect: 'list'
    },
    {
        path: '/list',
        name: 'list',
        component: list
    },
    {
        path: '/css',
        name: 'css',
        component: css
    }
]

const router = createRouter({
    history: routerHistory,
    routes
})

router.beforeEach((to, from, next) => {
    next();
});

export default router