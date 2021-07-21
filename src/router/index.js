import Vue from "vue"
import VueRouter from "vue-router"

import store from "@/store"

import nprogress from "nprogress"
import "nprogress/nprogress.css"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        redirect: "/login",
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/Login/Login.vue"),
    },
    {
        path: "/manage",
        name: "/manage",
        component: () => import("@/views/Manage/Manage.vue"),
    },
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
})

// nprogress config start
router.beforeEach((to, form, next) => {
    // loading start
    nprogress.start()
    store.state.loading = true
    next()
})

// nprogress config end
router.afterEach(() => {
    // loading end
    nprogress.done()
    store.state.loading = false
})

export default router
