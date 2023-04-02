<template>
  <div id="root">
    <test></test>
    <button @click="getStu">获取信息</button>
  </div>
</template>

<script>
import Test from './components/test.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: { Test },
  data() {
    return {}
  },
  watch: {},
  methods: {
    getStu() {
      axios.get('http://localhost:8080/atguigu/students').then(
        res => {
          console.log(res.data)
        },
        err => {
          console.log('失败', err.message)
        }
      )
    }
  },
  mounted() {
    console.log('App', this)
  },
  beforeDestroy() {}
}
</script>

<style>
  /*base*/
</style>