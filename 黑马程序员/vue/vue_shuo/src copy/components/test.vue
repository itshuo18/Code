<template>
  <div id="root">
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition appear>
      <h1 v-show="isShow">你好啊</h1>
    </transition>
    <h1>当前求和为：{{ this.$store.state.sum }}</h1>
    <h3>当前求和为：{{ bigSum }}</h3>
    <h3>我在{{school}}学习{{subject}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="JIA(n)">+</button>
    <button @click="JIAN(n)">-</button>
    <button @click="jiaOdd(n)">当前求和为奇数再加</button>
    <button @click="jiaWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  name: 'MyTest',
  components: {},
  data() {
    return {
      n: 1,
      isShow: true
    }
  },
  computed:{
    ...mapState(['sum','school', 'subject']),
    ...mapGetters(['bigSum'])
  },
  watch: {},
  methods: {
      ...mapMutations(['JIA','JIAN']),
			...mapActions(['jiaOdd','jiaWait'])
  },
  mounted() {
    console.log('Count', this)
  },
  beforeDestroy() {}
}
</script>

<style scoped>
  /*base*/
  h1 {
    background-color: orange;
  }
  .v-enter-active {
    animation: show 1s linear;
  }
  .v-leave-active {
    animation: show 1s linear reverse;
  }
  @keyframes show {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0px);
    }
  }
  button {
    margin-left: 5px;
  }
</style>