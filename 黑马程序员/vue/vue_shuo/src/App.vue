<template>
  <div id="root">
    <div class="row">
      <Banner></Banner>
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link replace class="list-group-item"  active-class="active" to="/about">About</router-link>
          <router-link replace class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// import axios from 'axios'
import Banner from './components/Banner'
export default {
  name: 'App',
  components: {Banner},
  data() {
    return {}
  },
  watch: {},
  methods: {},
  mounted() {}
}
</script>

<style>
  /*base*/
</style>