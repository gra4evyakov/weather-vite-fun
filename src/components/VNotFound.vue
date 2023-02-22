<template>
    <div class="not-found" :class="{ 'd-block fadeIn' : weatherStore.code === '404'}"> 
        <img src="../assets/images/404.png">
        <p>Oops! Invalid location :/</p>
    </div>
</template>

<script setup>
import { useWeatherStore } from '../stores/WeatherStore'

const weatherStore = useWeatherStore()
</script>

<style scoped>
.not-found{
    width: 100%;
    text-align: center;
    margin-top: 50px;
    scale: 0;
    opacity: 0;
    display: none;
}

.not-found img{
    width: 70%;
}

.not-found p{
    color: #06283D;
    font-size: 22px;
    font-weight: 500;
    margin-top: 12px;
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
.d-block {
    display: block;
}
</style>