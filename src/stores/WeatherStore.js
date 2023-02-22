import { defineStore } from 'pinia'

const APIkey = 'f82423dfa995fa4fb5d707125199d9e4';

export const useWeatherStore = defineStore('weatherStore', {
	state: () => ({
		code: null,
		temperature: null,
		image: null,
		description: null,
		humidity: null,
		wind: null,
	}),
	actions: {
		async getWeather(payload) {
			await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${payload}&units=metric&appid=${APIkey}`)
				.then(response => response.json())
				.then(json => {
					this.code = json.cod
					this.temperature = `${parseInt(json.main.temp)}`
					this.description = `${json.weather[0].description}`
					this.humidity = `${json.main.humidity}%`
					this.wind = `${parseInt(json.wind.speed)}Km/h`

					switch (json.weather[0].main) {
						case 'Clear':
							this.image = 'src/assets/images/clear.png';
							break;

						case 'Rain':
							this.image = 'src/assets/images/rain.png';
							break;

						case 'Snow':
							this.image = 'src/assets/images/snow.png';
							break;

						case 'Clouds':
							this.image = 'src/assets/images/cloud.png';
							break;

						case 'Haze':
							this.image = 'src/assets/images/mist.png';
							break;

						default:
							this.image = '';
					}
				}).catch(e => console.log(e))
		}
	}

})