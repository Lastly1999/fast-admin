import Vue from "vue"
import VueRouter from "vue-router"

// loading progress
import nprogress from "nprogress"
import "nprogress/nprogress.css"

// routes config
import { routes } from "@/config/routes.config.js"

Vue.use(VueRouter)

/**
 * 注册children路由主函数
 * @param {路由栈} routes 
 * @lastly 
 */
const initRouteChildrenProps = (routes) => {
    const syncRouter = routes.map(item => {
        return {
            path: item.path,
            component: () => import(`@/views/Manage/Children${item.file}`),
            meta: {
                title: item.title
            }
        }
    })
    return syncRouter
}

/**
 * 路由的主要渲染栈 所有路由都在这里集中注册
 * @date 2021年7月29日17:22:52
 * @author lastly
 */
const systemRoutes = [
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
        meta: {
            title: "首页",
        },
        children: [
            ...initRouteChildrenProps(routes)
        ]
    }
]


const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: systemRoutes
})

// nprogress config start
router.beforeEach((to, form, next) => {
    // loading start
    nprogress.start()
    next()
})

// nprogress config end
router.afterEach(() => {
    // loading end
    nprogress.done()
})

export default router
