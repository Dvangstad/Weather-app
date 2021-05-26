let weather = {
    "apiKey": "09a1324c114a018c52a1f76bb8ab90e0",
    fetchWeather: function() {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=Denver&units=standard&appid=09a1324c114a018c52a1f76bb8ab90e0"
        ).then
    }
}