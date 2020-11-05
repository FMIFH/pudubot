<template>
    <div class="RobotInfo">
        <strong>Robots</strong>
        <div class="displayRobots" v-for="r in robot" :key="r.robotid" >
            <div class="static" v-bind:class="{available: checkAvaialbility(r), inUse: !checkAvaialbility(r)}">
                {{r.robotid}}
            </div>
        </div>
    </div>
    <div id ="registerRobot">
        <form class="registerRobot_newRegist" @submit.prevent="registerRobot">
            <label for="newRobot"><strong>Register New Robot</strong></label>
            <textarea id="newRobot" cols="20" rows="1" v-model="newRobotId"></textarea>
            <button>Submit</button>
        </form>
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
            newRobotId: '',
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
        },

        registerRobot : async function() {
            if(this.newRobotId){
                const data = {
                    robotid: this.newRobotId
                };

                console.log(data);
                await fetch(this.api+'/robot',
                {
                    headers: {
                        "content-type":"application/json"
                    },
                    body: data,
                    method: "POST"
                }).then(data => {return data.json})
                .then(res => {console.log(res)})
                .catch(error => console.log(error));
            }
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
    height: 60vh;
    padding: 10px;
}
.displayRobots {
    padding: 10px;
    align-content: center;
}

.registerRobot_newRegist{
    width: 50%;
    text-align: center;
}
form{
    display: flex;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    flex-direction: column;
}

.available {
    color: green;
}

.inUse {
    color: red;
}


</style>