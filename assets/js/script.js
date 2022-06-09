//variables
var searchButton = document.querySelector("#search-button");
var inputValue = document.querySelector(".form-control");

//variables for the display-weather div
var cityName = document.querySelector(".name-of-city");
var todaysDate = moment().format("MM/DD/YY"); 
var temp = document.querySelector(".temp");
var wind= document.querySelector(".wind");
var humidity= document.querySelector(".humidity");
var uv= document.querySelector(".uv-index");

//variables for the five day forecast
var cardBodyOne = document.querySelector(".five-day-card-one");
var cardBodyTwo = document.querySelector(".five-day-card-two");
var cardBodyThree = document.querySelector(".five-day-card-three");
var cardBodyFour = document.querySelector(".five-day-card-four");
var cardBodyFive = document.querySelector(".five-day-card-five");



$("#currentDay").append(todaysDate);

searchButton.addEventListener("click", function() {
    event.preventDefault();
    var currentWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + inputValue.value + "&appid=a0e1548f4b7fe9bc85174edebf7cf635&units=imperial"
    fetch(currentWeather)
    .then(function(response) {
        response.json().then(function(data) {
          var nameValue= data['name'] + [todaysDate];
          var tempValue= data['main']['temp'];
          var windValue= data['wind']['speed'];
          var humidityValue= data['main']['humidity'];
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
    // var fiveDayForecast = "https://api.openweathermap.org/data/2.5/forecast?  "&appid=a0e1548f4b7fe9bc85174edebf7cf635&units=imperial""
    // //then put the variable into fetch
    // fetch()
    //     .then(function(response) {
    //         response.json().then(function(data) {
    //         //add the responses for the cards
    //     })
    // });
});

//save to local storage