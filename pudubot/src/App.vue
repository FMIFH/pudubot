<template>
  <img alt="Vue logo" src="./assets/logo2.png">
  <HelloWorld msg="Welcome to Microsegur Pudubot App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
body {    
    margin: 0 !important;
    padding: 0 !important;
}
#app {
  margin: 0;
  padding: 0;
  font-family: Georgia, 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background: lightgray;
  height: 100vh;
}
</style>
