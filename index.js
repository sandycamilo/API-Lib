// ------------------------------------------------------
// Developer Code

// Get Element refererences
const tempEl = document.getElementById('temp')
const descEl = document.getElementById('desc')
const formEl = document.getElementById('form')
const zipInput = document.getElementById('zip')

// Define event listeners
formEl.addEventListener('submit', (e) => {
  e.preventDefault()
  const zip = zipInput.value
  getWeather(zip)
})

// Functions 
function getWeather(apikey, zip) {
  const apiKey = apiKey
  const units = 'imperial'
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
  fetch(path)
    .then(res => res.json())
    .then(json => {
      tempEl.innerHTML = json.main.temp
      descEl.innerHTML = json.weather[0].description
    })
    .catch(err => console.log(err.message))
}



module.exports = getWeather
      
