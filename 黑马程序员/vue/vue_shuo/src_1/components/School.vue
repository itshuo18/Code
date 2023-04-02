<template>
  <div class="demo">
    <h2 @click="showName">学校名称：{{ name | mySlice }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
// import pubsub from 'pubsub.js'

export default {
  name: 'MySchool',
  data () {
    return {
      name: '尚硅谷aaaaaa',
      address: '北京昌平'
    }
  },
  methods:{
    // demo(msgName, data){
    //   console.log(data)
    // }
  },
  mounted(){
    this.$bus.$on('recieve',data=>{
      console.log(data)
    })
    // this.pubId=pubsub.subscribe('hello',this.demo)
  },
  beforeDestroy() {
    this.$bus.$off('recieve')
    // pubsub.unsubscribe(this.pubId)
  },
}
</script>

<style scoped>
.demo {
  background-color: orange;
}
</style>