import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

// antd
import Antd from "ant-design-vue"
import "ant-design-vue/dist/antd.less"
Vue.use(Antd)

// animate
import animate from "animate.css"
Vue.use(animate)

// close vue wran log
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app")
