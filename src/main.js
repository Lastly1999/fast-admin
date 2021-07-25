// vue
import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import Router from "vue-router"

// antd
import Antd from "ant-design-vue"
import "ant-design-vue/dist/antd.less"
Vue.use(Antd)

// animate
import animate from "animate.css"
Vue.use(animate)

//路由导航冗余报错（路由重复）
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err)
}

// close vue wran log
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app")
