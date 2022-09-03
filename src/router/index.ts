import { createRouter, createWebHistory } from 'vue-router'

const routerHistory = createWebHistory()
import list from '../components/list.vue'
import css from '../components/css.vue'
import applink from '../components/applink.vue'
import performance from '../components/performance.vue'
import nativeCacheH5 from '../components/nativeCacheH5.vue'
import http302 from '../components/302.vue'
import http405 from '../components/405.vue'
import chromeDevice from '../components/chromeDevices.vue'

const routes = [
    { path: '/', redirect: 'list' },
    { path: '/list', name: 'list', component: list },
    { path: '/css', name: 'css', component: css },
    { path: '/applink', name: 'applink', component: applink },
    { path: '/performance', name: 'performance', component: performance },
    { path: '/nativeCacheH5', name: 'nativeCacheH5', component: nativeCacheH5 },
    { path: '/http302', name: 'http302', component: http302},
    { path: '/http405', name: 'http405', component: http405 },
    { path: '/chromeDevice', name: 'chromeDevice', component: chromeDevice }
]

const router = createRouter({
    history: routerHistory,
    routes
})

router.beforeEach((to, from, next) => {
    next();
});

export default router