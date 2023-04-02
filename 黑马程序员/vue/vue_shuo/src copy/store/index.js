//   创建 Vuex中的store
import Vue from 'vue'
//  引入 Vuex
import Vuex from 'vuex'

Vue.use(Vuex)
//  准备 actions——用于响应组件中的动作
const actions = {
  jiaOdd (context, value) {
    console.log('actions中的jiaOdd被调用了')
    if (context.state.sum % 2) {
      context.commit('JIA', value)
    }
  },
  jiaWait (context, value) {
    console.log('actions中的jiaWait被调用了')
    setTimeout(() => {
      context.commit('JIA', value)
    }, 500)
  }
}
//  准备 mutations——用于操作数据（state）
const mutations = {
  JIA (state, value) {
    console.log('mutations中的JIA被调用了')
    state.sum += value
  },
  JIAN (state, value) {
    console.log('mutations中的JIAN被调用了')
    state.sum -= value
  }
}

//  准备 state——用于存储数据
const state = {
  sum: 0,
  school:'尚硅谷',
  subject:'前端'
}

//  用于加工 state里的数据
const getters = {
  bigSum (state) {
    return state.sum * 10
  }
}

//  创建 store并暴露
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})