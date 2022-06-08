// var cltWeatherContainerEl = document.querySelector("#clt-weather-container");
var citySearchFormEl = document.querySelector("#city-form");
var citySearchInputEl = document.querySelector("#city-name");

var getCharlotteWeatherData = function(city) {
    var apiUrl= "https://api.openweathermap.org/data/2.5/weather?q=charlotte&appid=a0e1548f4b7fe9bc85174edebf7cf635";
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
          console.log(data);
        });
    });
};

var formSubmitHandler = function(event){
    event.preventDefault();
    console.log(event);
}

citySearchFormEl.addEventListener("submit", formSubmitHandler);

// var displayCltWeatherData = function(){

// }