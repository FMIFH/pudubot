<template>
  <img alt="Vue logo" src="./assets/logo2.png">
  <HomePage msg="Welcome to Microsegur Pudubot App"/>
  <div class="sidenav">
    <a href="#">Register Robot</a>
    <a href="#">Register Client</a>
    <a href="#">Dashboards</a>
  </div>
</template>

<script>
import HomePage from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
body {    
    margin: 0 !important;
    padding: 0 !important;
}

#app {
  
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background: lightgray;
  height: 100vh;
}
/* The sidebar menu */
.sidenav {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 160px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: gray;
  overflow-x: hidden;
  padding-top: 20px;
  border-radius: 0px 6px 0px 6px;
}

/* The navigation menu links */
.sidenav a {
  padding: 12px 16px 12px 16px;
  text-decoration: none;
  font-size: 20px;
  color: white;
  display: block;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Style page content */
.main {
  margin-left: 160px; /* Same as the width of the sidebar */
  padding: 0px 10px;
}
</style>
