<template>
  <div>
    <img alt="MCS logo" src="../assets/logo2.png">
    <HomePage msg="Welcome To Microsegur Pudubot Aplication"/>
  </div>
  <div class="sidenav">
    <Sidebar></Sidebar>
  </div>
</template>

<script>
import HomePage from '../components/HelloWorld.vue'
import Sidebar from '../components/sidebar.vue'

export default {
  name: 'Home',
  components: {
    HomePage,
    Sidebar
  }
}
</script>

<style>
body {    
    margin: 0 !important;
    padding: 0 !important;
}



#home{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  height: 100vh;
  background-image: url("../assets/background.png");
}
</style>  
