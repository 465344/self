<template>
  <div class="users">
    <h1>jflsj</h1>
    <ul>
      <li v-for="user in users">
        {{user}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'users',
    data () {
      return {
        users:["Henry","Bucky","Emily"]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    color: green;
  }
</style>
