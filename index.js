class OpenWeather {
  constructor(apikey, units='imperial') {
    this.apikey = apikey
    this.units = units
  }

  async getWeather(zip) {
    const { apikey, units } = this
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=${units}`
  
    // fetch data 
    const response = await fetch(path)
    // when that resolves we call reponse.json to stream json data
    const json = await response.json() 
    // return the data
    return json
  }

  async getWeatherByCity(city) {
    const { apikey, units } = this
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=${units}`
  
    // fetch data 
    const response = await fetch(path)
    // when that resolves we call reponse.json to stream json data
    const json = await response.json() 
    // return the data
    return json
  }

  async getWeatherByCord(lat, lon) {
    const { apikey, units } = this
    const path = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=${units}`
  
    // fetch data 
    const response = await fetch(path)
    // when that resolves we call reponse.json to stream json data
    const json = await response.json() 
    // return the data
    return json
  }

  async getWeatherById(id) {
    const { apikey, units } = this
    const path = `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apikey}&units=${units}`
  
    // fetch data 
    const response = await fetch(path)
    // when that resolves we call reponse.json to stream json data
    const json = await response.json() 
    // return the data
    return json
  }
}