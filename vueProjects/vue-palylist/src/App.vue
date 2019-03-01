<template>
  <div id="app">
    <h1>{{title}}</h1>
    <users/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Users from "./components/Users";

export default {
  name: 'App',
  data(){
    return{
      title:"这是我的第一个VUE脚手架项目"
    }
  },
  components: {
    Users
    // HelloWorld
  }
}
</script>

<style scoped>
h1{
  color: red;
}
</style>
