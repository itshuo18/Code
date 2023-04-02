import Vue from 'vue'
import App from './App.vue'


import store from './store/index.js'
// import plugins from './plugins'
// Vue.use(plugins)
Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  store,
  beforeCreate () {
    Vue.prototype.$bus = this   // 安装事件总线
  }
}).$mount('#app')
