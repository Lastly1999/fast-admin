import Vue from "vue"
import VueRouter from "vue-router"

import store from "@/store"

// loading progress
import nprogress from "nprogress"
import "nprogress/nprogress.css"

// routes config
import { routes } from "@/config/routes.config.js"

Vue.use(VueRouter)

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
