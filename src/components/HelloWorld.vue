<template>
  <div class="hello">
    <h1 @click="$router.push('/firstPage')">Left</h1>
    <h1 @click="$router.push('/secondPage')">right</h1>


  </div>
</template>

<script>
export default {

  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color:red
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
