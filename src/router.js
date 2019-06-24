import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Work from './views/Work.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/Work',
        name: 'Work',
        component: Work
    }
  ]
})
