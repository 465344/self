<template>
  <div id="--*-">
   <Header></Header>
    <Content></Content>
  </div>
</template>

<script>
import Header from "./components/Header";
import Content from './components/Content'

export default {
  name: 'App',
  data(){
    return{
      title:"这是我的第一个VUE脚手架项目"
    }
  },
  components: {
    Header
  }
}
</script>

<style scoped>
h1{
  color: red;
}
</style>
