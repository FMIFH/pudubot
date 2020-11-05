<template>
    <div class="RobotInfo">
        <strong>Robots</strong>
        <div class="displayRobots" v-for="r in robot" :key="r.robotid" >
            <div class="static" v-bind:class="{available: checkAvaialbility(r), inUse: !checkAvaialbility(r)}">
                {{r.robotid}}
            </div>
        </div>
    </div>
    <div id ="registrRobot">
        <form action=""></form>
    </div>
    <div class = "sidenav">
        <Sidebar></Sidebar>
    </div>
    
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
            robot: {},
            api : 'http://microsegur.ddns.net:3006'
        }
    },

    methods: {
        getRobots : async function() {
            const response = await fetch(this.api+'/robot');
            if(response.ok){
                const responseJson = await response.json();
                this.robot = responseJson;
            }
        },

        checkAvaialbility: (robot) => {
            return robot.available;
        }
    },

    mounted() {
        this.getRobots();
    } 
}
</script>

<style>

body {    
    margin: 0;
    padding: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: black;
    height: 100vh;
    background-image: url("../assets/background.png");
}

.RobotInfo{
    margin: 10px;
}
.displayRobots {
    margin: 10px;
    align-content: center;

}

.available {
    color: green;
}

.inUse {
    color: red;
}


</style>