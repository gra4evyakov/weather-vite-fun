<template>
    <div class="weather-box" :class="{'d-none' : weatherStore.code === '404', 'fadeIn' : weatherStore.code === 200}">
        <img v-if="weatherStore.image" :src="weatherStore.image">
        <p class="temperature"> {{ weatherStore.temperature }}<span>°C</span></p>
        <p class="description"> {{ weatherStore.description }}</p>
    </div>
</template>

<script setup>
import { useWeatherStore } from '../stores/WeatherStore'

const weatherStore = useWeatherStore()
</script>

<style scoped>
.weather-box{
    text-align: center;
}

.weather-box img{
    width: 60%;
    margin-top: 30px;
}

.weather-box {
    scale: 0;
    opacity: 0;
}

.weather-box .temperature{
    position: relative;
    color: #06283D;
    font-size: 4rem;
    font-weight: 800;
    margin-top: 30px;
    margin-left: -16px;
}

.weather-box .temperature span{
    position: absolute;
    margin-left: 4px;
    font-size: 1.5rem;
}

.weather-box .description{
    color: #06283D;
    font-size: 22px;
    font-weight: 500;
    text-transform: capitalize;
}

.fadeIn{
    animation: 0.5s fadeIn forwards;
    animation-delay: 0.5s;
}

@keyframes fadeIn{
    to {
        scale: 1;
        opacity: 1;
    }
}

.d-none {
    display: none;
}
</style>