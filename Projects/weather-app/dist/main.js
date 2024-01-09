
class WeatherController {

    constructor() {
        this.weatherManager = new WeatherManager()
        this.renderer = new WeatherRenderer()
    }

    async getWeather() {
        const cityName = SEARCHED_CITY.val()

        try {
            const weatherData = await this.weatherManager.getWeatherByCity(cityName)
            this.renderer.renderWeatherData(weatherData)
            SEARCHED_CITY.val('')
        } catch (error) {
            console.error(error)
            this.renderer.renderError()
        }
    }

    async refreshWeatherData(weatherCard, cityName) {
        try {
            const updatedWeatherData = await this.weatherManager.getWeatherByCity(cityName);
            this.renderer.renderUpdatedWeatherData(weatherCard, updatedWeatherData);
        } catch (error) {
            console.error(error);
            this.renderer.renderError();
        }
    }
}

