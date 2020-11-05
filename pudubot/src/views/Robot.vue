<template> 
    <div id="displayRobots">

    </div>
    <div id ="registrRobot">
        <form action=""></form>
    </div>
    <div class="sidenav"><Sidebar></Sidebar></div>
</template>

<script>
import Sidebar from '../components/sidebar.vue'

export default {
    name: 'Robot',
    
    components: {
        Sidebar
    },
    
    data(){
        return{
            robot: {}
        }
    },

    mounted() {
        this.robot = () => {

        };
    } 
}
</script>

<style>

body {    
    margin: 0 !important;
    padding: 0 !important;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: black;
    height: 100vh;
    background-image: url("../assets/background.png");
}
</style>