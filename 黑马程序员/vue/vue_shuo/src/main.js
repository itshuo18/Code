import Vue from 'vue'
import App from './App.vue'


// import store from './store/index.js'
// import plugins from './plugins'
// Vue.use(plugins)

import VueRouter from 'vue-router'
import router from './router/index.js'
Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  // store,
  router: router,
  beforeCreate () {
    Vue.prototype.$bus = this   // 安装事件总线
  }
}).$mount('#app')
