import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const key = "user"
const store = new Vuex.Store({
    state() {
        return {
            user: null,
            LocationCity:null,
            sumphone:null,
        }
    },
    getters: {
        getStorage: function (state) {
            // if (!state) {
            //     state.user = JSON.parse(localStorage.getItem(key))
            //     // state.LocationCity=JSON.parse(localStorage.getItem(key))
            // } 
            return state
        }
    },
    mutations: {
        $_setUserItem(state, value) {
            state.user = value
            // console.log(state. user)
            localStorage.setItem(state, JSON.stringify(value))
        },
        $_setweather(state, value) {
            state.weather = value
            // console.log(state. user)
            localStorage.setItem(state, JSON.stringify(value))
        },
        $_setLocationCity(state, value) {
            state.LocationCity = value
            // console.log(state. user)
            localStorage.setItem(state, JSON.stringify(value))
        },
        $_removeStorage(state) {
            state.user = null
            localStorage.removeItem(key)
        },
        $_setsumphone(state,value) {
            state.sumphone = value
            localStorage.setItem(state, JSON.stringify(value))
        },
    }
})

export default store