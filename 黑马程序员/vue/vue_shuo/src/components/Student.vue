<template>
  <div>
    <h2 @click="showName">学生姓名：{{ myName }}</h2>
    <h2>学生性别：{{ mySex }}</h2>
    <h2>学生年龄：{{ myAge + 1 }}</h2>
    <input type="text" v-fbind:value="name">
    <button @click="updateAge">修改年龄</button>
  </div>
</template>

<script>

export default {
  name: 'MyStudent',
  data () {
    return {
      myName: this.name,
      myAge: this.age,
      mySex: this.sex
    }
  },
  methods: {
    updateAge () {
      console.log('修改年龄+1')
      this.myAge++
    }   
  },
  props: ['name', 'sex', 'age'],
}
</script>
