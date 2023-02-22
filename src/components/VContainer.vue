<template>
    <div class="container" :class="{'h-400' : weatherStore.code === '404', 'h-590' : weatherStore.code === 200}">
        <slot />
    </div>
</template>

<script setup>
import { useWeatherStore } from '../stores/WeatherStore'

const weatherStore = useWeatherStore()
</script>

<style scoped>
.container{
    position: relative;
    width: 400px;
    height: 105px;
    background: #fff;
    padding: 28px 32px;
    overflow: hidden;
    border-radius: 18px;
    font-family: 'Roboto', sans-serif;
    transition: 0.6s ease-out;
}
.h-400 {
    height: 400px;
}
.h-590 {
    height: 590px;
}
</style>