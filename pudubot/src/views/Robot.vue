<template>
    <Sidebar></Sidebar>
    <div class="container">
    <h1> {{robotid}} </h1>
    
    <div class="row mt-5" v-if="robotDistanceArray.length > 0">
        <div class="col">
          <h2 class="text-center">Distance</h2>
          <line-chart
            :chartData="robotDistanceArray"
            :options="chartOptions"
            :chartColors="distanceChartColors"
            label="Distance"
          ></line-chart>
        </div>
    </div>

    </div>
</template>

<script>
import {useRoute} from 'vue-router';
import {computed} from 'vue';
import Sidebar from '../components/sidebar.vue'
import LineChart from '../components/LineChart.vue'

export default {
    components: {
        Sidebar,
        LineChart
    },
    data(){
        return{
            api : 'http://microsegur.ddns.net:3006',
            robotid : computed(() => this.route().params.robotid),
            robot : {},
            robotDistanceArray : [],
            distanceChartColors: {
                borderColor: "#077187",
                pointBorderColor: "#0E1428",
                pointBackgroundColor: "#AFD6AC",
                backgroundColor: "#74A57F"
            },
            robotPositionsArray : [],
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false
            }

        }
    },
    
    methods: {
        getRobots : async function(){
            const response = await fetch(this.api +`/robot?robotid=eq.${this.robotid}`);
            if(response.ok){
                const responseJson = await response.json();
                this.robot = responseJson;          
            }
        },

        getDistance : async function(){
            const response = await fetch(this.api +`/robotposition?robotid=eq.${this.robotid}`);
            if(response.ok){
                const responseJson = await response.json();
                responseJson.forEach(d => {
                    const{
                        distance,
                        ts,
                        x,
                        y
                    } = d;

                    this.robotDistanceArray.push({date: ts, total: distance});
                    this.robotPositionsArray.push({date: x, total: y});
                });
            }
        },

        route : () => {return useRoute()}
        
    },

    mounted() {
        this.getRobots(),
        this.getDistance()
    }    
}
</script>

<style>

</style>