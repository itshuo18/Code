import Vue from 'vue'
import App from './App.vue'

import plugins from './plugins'

Vue.config.productionTip = false

Vue.use(plugins, 1, 2, 3)

new Vue({
  render: h => h(App),
  beforeCreate () {
    Vue.prototype.$bus = this   //  安装全局通信组件
  }
}).$mount('#app')
