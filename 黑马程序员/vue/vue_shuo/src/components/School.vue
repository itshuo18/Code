<template>
  <div class="demo">
    <h2 @click="showName">学校名称：{{ name | mySlice }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>

export default {
  name: 'MySchool',
  data () {
    return {
      name: '尚硅谷aaaaaa',
      address: '北京昌平'
    }
  },
}
</script>

<style>
.demo {
  background-color: orange;
}
</style>