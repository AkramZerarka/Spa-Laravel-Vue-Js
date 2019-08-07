// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '../js/views/App.vue'
import router from './router'
import vueScrollto from 'vue-scrollto'
Vue.use(vueScrollto)
require('bootstrap')
Vue.config.productionTip = false
/* eslint-disable no-new */
const app = new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})
