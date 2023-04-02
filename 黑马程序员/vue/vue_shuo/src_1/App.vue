<template>
  <div class="demo">
    <img src="./assets/logo.png" alt="logo" />
    <School ></School>
    <hr />
    <Student></Student>
  </div>
</template>

<script>
//引入组件
import School from './components/School.vue'
import Student from './components/Student.vue'

export default {
  name: 'App',
  components: {
    School,
    Student
  },
}
</script>

<style lang="less">
  .demo {
    background-color: gray;
    margin: 0 auto;
    padding: 5px;
  }
</style>