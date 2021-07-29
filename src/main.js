// vue
import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import Router from "vue-router"

// font-awesome 自定义组件
import "font-awesome/css/font-awesome.min.css"
import FastIcon from "@/components/FastIcon/FastIcon.vue"
Vue.component("FastIcon", FastIcon)

// kFormDesign表单设计器
import KFormDesign from "k-form-design"
import "k-form-design/lib/k-form-design.css"
Vue.use(KFormDesign)

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
