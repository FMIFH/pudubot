<template> 
    
    <div><Sidebar></Sidebar></div>
</template>

<script>
import Sidebar from '../components/sidebar.vue'

export default {
  name: 'Robot',
  components: {
    Sidebar
  }
}
</script>

<style>

#robot{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  height: 100vh;
  background-image: url("../assets/background.png");
}
</style>