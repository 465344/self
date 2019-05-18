<template>
  <div id="header">
     <h1>我的第一个vue项目</h1>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #header{
    text-align: center;
    background: green;
  }
</style>
