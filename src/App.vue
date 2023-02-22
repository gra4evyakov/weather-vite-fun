<template>
  <VContainer>
    <VSearchBox />
    <VNotFound />
    <VWeatherBox />
    <VWeatherDetails />
  </VContainer>
</template>

<script>
import VContainer from './components/VContainer.vue';
import VNotFound from './components/VNotFound.vue';
import VSearchBox from './components/VSearchBox.vue';
import VWeatherBox from './components/VWeatherBox.vue';
import VWeatherDetails from './components/VWeatherDetails.vue';


export default {
  name: 'App',
  components: {
    VContainer,
    VSearchBox,
    VNotFound,
    VWeatherBox,
    VWeatherDetails
}
}
</script>

<style></style>
