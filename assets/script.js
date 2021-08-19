var apiKey = "3aa0ff2a0445bcc95a15a2d56796b739"
var searchBtn = document.querySelector("#searchBtn");
var cityInput = document.querySelector("#cityInput");

function searchWeather(){
    var urlCurrent =`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=imperial`
    fetch(urlCurrent)
        .then(response => response.json())
        .then(weatherData => {
            console.log(weatherData)
            document.querySelector("#cityName").textContent = weatherData.name
            document.querySelector("#temperature").textContent = weatherData.main.temp + " F"
            document.querySelector("#humidity").textContent = weatherData.main.humidity
            document.querySelector("#windSpeed").textContent = weatherData.wind.speed + " mph"
        
            var oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&appid=${apiKey}&units=imperial`
            fetch(oneCallUrl)
                .then(response => response.json())
                .then(oneCallData => {
                    console.log(oneCallData)
                    document.querySelector("#uvi").textContent = `UVI: ${oneCallData.current.uvi}`
                    for(i=1; i<=5; i++){
                        var date = new Date(oneCallData.daily[i].dt * 1000)
                        var stringDate = date.toString().split(" 2021")[0]
                        console.log(date, stringDate)
                        document.querySelector(`#cardTitle-${i}`).textContent = stringDate
                        document.querySelector(`#cardText-${i}`).textContent = oneCallData.daily[i].temp.day + " F"
                    }
                })
        })
}

searchBtn.addEventListener("click", searchWeather)