const apiKey = 'da044481063d4e9fb148e502e0c4688a'
// fungsi untuk get data weather
function getWeather(city) {
  fetch(
    //   url
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
// menampilkan data cuaca
function displayWeather(data) {
  // destructuring object
  const { name } = data
  const { icon, description } = data.weather[0]
  const { temp, humidity } = data.main
  const { speed } = data.wind
  let today = new Date()

  document.querySelector('.city').innerText = `${name}`
  document.querySelector('.temp').innerText = `${temp} °C`
  document.querySelector('.desc').innerText = description
  document.querySelector('.icon').src =
    'https://openweathermap.org/img/wn/' + icon + '.png'
  document.querySelector('.humidity').innerText = `Humadity  ${humidity}%`
  document.querySelector('.speed').innerText = `${speed} km/h`
  document.querySelector('.currentDate').innerText = today.toDateString()
  document.querySelector('.loading').classList.remove('loading')
}

// fungsi mencari kota
function search() {
  getWeather(document.querySelector('.search-bar').value)
}

// ketika button terdeteksi click maka akan memanggil fungsi search
document.querySelector('.search button').addEventListener('click', function () {
  search()
})

// ketika textfield terdeteksi enter maka akan memanggil fungsi search
document
  .querySelector('.search-bar')
  .addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      search()
    }
  })

// menampilkan cuaca di kota sukabumi secara default
getWeather('Sukabumi')
