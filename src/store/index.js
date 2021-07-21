import Vue from "vue"
import Vuex from "vuex"

// methods
import { state } from "./methods/state"
import { mutations } from "./methods/mutations"
import { actions } from "./methods/actions"
import { getters } from "./methods/getters"

Vue.use(Vuex)

export default new Vuex.Store({
    state: { ...state },
    mutations: { ...mutations },
    actions: { ...actions },
    getters: { ...getters },
    modules: {
        // this modules es6 ... save modules
    },
})
