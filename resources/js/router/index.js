import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/public/home.vue'
import Hello from '../components/public/hello.vue'
import notfound from '../components/public/NotFound.vue'

Vue.use(Router)

export default new Router({
    mode: 'history', //removes # (hashtag) from url
    base: '/',
    fallback: true,
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/hello',
            name: 'Hello',
            component: Hello
        },
        {
            path: '*',
            component: notfound
        },
        //... + all your other paths here
    ]
})
