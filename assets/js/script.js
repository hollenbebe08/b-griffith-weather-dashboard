//variables
var searchButton = document.querySelector("#search-button");
var inputValue = document.querySelector(".form-control");

//variables for the display-weather div
var cityName = document.querySelector(".name-of-city");
var todaysDate = moment().format("MM/DD/YY"); 
var temp = document.querySelector(".temp");
var wind= document.querySelector(".wind");
var humidity= document.querySelector(".humidity");
var icon = document.querySelector(".weatherIcon");
// var uv= document.querySelector(".uv-index");

//variables for the five day forecast
var cardBodyForecast = document.getElementsByClassName("five-day-card")[0];
var forecastDate = document.querySelector(".forecastDate");
var forecastTemp = document.querySelector(".forecastTemp");

//searchButton event listener and the functions for the weather display & five day forecast
searchButton.addEventListener("click", function() {
    event.preventDefault();
    var currentWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + inputValue.value + "&appid=a0e1548f4b7fe9bc85174edebf7cf635&units=imperial"
    fetch(currentWeather)
    .then(function(response) {
        response.json().then(function(data) {
          var nameValue= data['name'] + " " + "(" + [todaysDate] + ")";
          var tempValue= ": " + data['main']['temp'] + " ℉";
          var windValue= ": " + data['wind']['speed'] + " MPH";
          var humidityValue= ": " + data['main']['humidity'] + "%";
          var iconCode =  data.weather[0].icon;
          var weatherSymbol = document.createElement("img")
          var weatherIcon= "http://openweathermap.org/img/w/" + iconCode + ".png";
          weatherSymbol.setAttribute("src", weatherIcon)
          icon.append(weatherSymbol);
        //   latLon= [data.coord.lat, data.coord.lon];
        //   var uvValue= "https://api.openweathermap.org/data/2.5/onecall?lat=" + latLon[0] + "&lon=" + latLon[1] + "&appid=a0e1548f4b7fe9bc85174edebf7cf635&units=imperial";
          
          cityName.innerHTML= nameValue;
          temp.innerHTML= tempValue;
          wind.innerHTML= windValue;
          humidity.innerHTML= humidityValue;
        //   uv.innerHTML= uvValue;
        })
    });
    // //get api for 5 day forecast
    var fiveDayForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputValue.value +  "&appid=a0e1548f4b7fe9bc85174edebf7cf635&units=imperial"
    // then put the variable into fetch
    fetch(fiveDayForecast)
    // console.log(fiveDayForecast);
    .then(function(response) {
        response.json().then(function(data) {
            var forecastDateValue = data.list[0].dt_txt;
            var forecastTempValue = data.list[0].main.temp;
            var fiveDayForecastDate = new Date(forecastDateValue).toLocaleDateString();

            forecastDate.innerHTML = fiveDayForecastDate;
            forecastTemp.innerHTML = forecastTempValue;
        //loop through the data and add to the appropriate five day forecast card
    // //         cardBodyForecast.forEach()
        })
    });
});

//save to local storage