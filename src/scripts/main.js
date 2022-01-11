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

  document.querySelector('.city').innerText = `${name}`
  document.querySelector('.temp').innerText = `${temp} °C`
  document.querySelector('.desc').innerText = description
  document.querySelector('.icon').src =
    'https://openweathermap.org/img/wn/' + icon + '.png'
  document.querySelector('.humidity').innerText = `Humadity  ${humidity}%`
}

function search() {
  getWeather(document.querySelector('.search-bar').value)
}

document.querySelector('.search button').addEventListener('click', function () {
  search()
})

document
  .querySelector('.search-bar')
  .addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      search()
    }
  })

getWeather('Sukabumi')
