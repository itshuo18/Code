//  首页、搜索、登录、注册
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

const router = new VueRouter({
  // mode: 'history',
  routes:[
    {
      path:'/home',
      component: Home,
      meta:{show:true}
    },
    {
      path: '/search',
      component: Search,
      meta: { show: true }
    },
    {
      path: '/login',
      component: Login,
      meta: { show: false }
    },
    {
      path: '/register',
      component: Register,
      meta: { show: false }
    }
  ]
})

export default router
