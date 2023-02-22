<template>
    <div class="weather-details" :class="{ 'd-none' : weatherStore.code === '404', 'fadeIn' : weatherStore.code === 200}" >
        <div class="humidity">
            <i class="fa-solid fa-water"></i>
            <div class="text">
                <span>{{ weatherStore.humidity }}</span>
                <p>Humidity</p>
            </div>
        </div>
        <div class="wind">
            <i class="fa-solid fa-wind"></i>
            <div class="text">
                <span>{{ weatherStore.wind }}</span>
                <p>Wind Speed</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useWeatherStore } from '../stores/WeatherStore'

const weatherStore = useWeatherStore()
</script>

<style scoped>
.weather-details{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
}

.weather-details .humidity, .weather-details .wind{
    display: flex;
    align-items: center;
    width: 50%;
    height: 100px;
}

.weather-details .humidity{
    padding-left: 20px;
    justify-content: flex-start;
}

.weather-details .wind{
    padding-right: 20px;
    justify-content: flex-end;
}

.weather-details i{
    color: #06283D;
    font-size: 26px;
    margin-right: 10px;
    margin-top: 6px;
}

.weather-details span{
    color: #06283D;
    font-size: 22px;
    font-weight: 500;
}

.weather-details p{
    color: #06283D;
    font-size: 14px;
    font-weight: 500;
}

.weather-details {
    scale: 0;
    opacity: 0;
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