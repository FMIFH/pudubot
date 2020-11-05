<template>
    <div class="RobotInfo">
        <h1>Robots</h1>
        <div class="displayRobots" v-for="r in robot" :key="r.robotid" >
            <div class="static" v-bind:class="{available: checkAvaialbility(r), inUse: !checkAvaialbility(r)}">
               <strong> {{r.robotid}} </strong>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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
h1{
    color: navy;
}

.RobotInfo{
    height: 60vh;
    padding: 10px;
}
.displayRobots {
    padding: 10px;
    align-content: center;
}
.available {
    color: green;
}

.inUse {
    color: red;
}

</style>