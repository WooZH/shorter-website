import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "home" */ '../pages/home.vue'),
    },
    {
        path: '/video',
        component: () => import(/* webpackChunkName: "video" */ '../pages/video/index.vue'),
    },
    {
        path: '/ecosystem',
        component: () => import(/* webpackChunkName: "ecosystem" */ '../pages/ecosystem/index.vue'),
    },
    {
        path: '/discord',
        beforeEnter(to, from, next) {
            window.location.href = 'https://discord.com/invite/eRb7wX8Xfj'
        },
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/',
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
