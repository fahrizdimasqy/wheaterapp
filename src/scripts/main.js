const apiKey = 'da044481063d4e9fb148e502e0c4688a'
function getWeather(city) {
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
      city +
      '&units=metric&appid=' +
      apiKey,
  )
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      displayWeather(data)
    })
    .catch((error) => {
      console.log(error)
    })
}

function displayWeather(data) {
  // destructuring object
  const { name } = data
  const { icon, description } = data.weather[0]
  const { temp, humidity } = data.main
  const { speed } = data.wind
  console.log(name, icon, description, temp, humidity, speed)
  document.querySelector('.city').innerText = name
  document.querySelector('.temp').innerText = temp + '°C'
  document.querySelector('.desc').innerText = description
  document.querySelector('.icon').src =
    'https://openweathermap.org/img/wn/' + icon + '.png'
}

getWeather('Sukabumi')
