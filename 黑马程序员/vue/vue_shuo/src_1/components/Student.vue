<template>
  <div class="demo">
    <h2 @click="showName">学生姓名：{{ myName }}</h2>
    <h2 class="qwe">学生性别：{{ mySex }}</h2>
    <button @click="sendStudentName">把学生名给sch</button>
  </div>
</template>

<script>
// import pubsub from 'pubsub.js'

export default {
  name: 'MyStudent',
  data() {
    return {
      myName: '张三',
      mySex: '男'
    }
  },
  methods:{
    sendStudentName(){
      this.$bus.$emit('hello',this.myName)
      // pubsub.publish('hello',this.myName)
    }
  }
}
</script>

<style lang="less" scoped>
  .demo {
    background-color: skyblue;
    .qwe {
      font-size: 20px;
      color: red;
    }
  }
  .student{
    background-color: pink;
    padding: 5px;
    margin-top: 30px;
  }
</style>