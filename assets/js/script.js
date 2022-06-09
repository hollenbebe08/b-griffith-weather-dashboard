//variables
var searchButton = document.querySelector("#search-button");
var inputValue = document.querySelector(".form-control");

//variables for the display-weather div
var cityName = document.querySelector(".name-of-city");
var todaysDate = moment().format("MM/DD/YY"); 
var temp = document.querySelector(".temp");
var wind= document.querySelector(".wind");
var humidity= document.querySelector(".humidity");
var uV= document.querySelector(".uv-index");

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
          var uVValue= data['']
          
          cityName.innerHTML= nameValue;
          temp.innerHTML= tempValue;
          wind.innerHTML= windValue;
          humidity.innerHTML= humidityValue;
        })
      });
});
      


//my key for the API: a0e1548f4b7fe9bc85174edebf7cf635


//fetch openWeather API
// var getCityWeatherData = function() {
//     var currentWeatherData = "https://api.openweathermap.org/data/2.5/weather?q=" + inputValue.value + "&appid=a0e1548f4b7fe9bc85174edebf7cf635";
//     var forecast =

//     fetch(currentWeatherData).then(function(response) {
//         //if response is OK, then...
//         //add city to the start api to pull the weather data for that city
//         if(response.ok){
//             response.json().then(function(data) { 
//                 //the container header should have the city name, today's date, and the icon for the weather
//                 //the container div should have the temp, wind, humidity, and UV index displayed in a list
                
//             });
//             //append the container to the DOM by having a callback in the formSubmitHandler.
//         };
//     })
// };


//create another fetch and fetch the api for the five day forecast

//the header on the card should be each date for the next five days
//then there should be a weather icon
//each card content should include the temp, wind, and humidity as a list
//append each card to the parent container's DOM element (should happen with the getCityWeatherData callback in the form handler since this will all be one function)


//type a city into the search form
// var formSubmitHandler = function(event){
//     event.preventDefault();

//     var cityName = citySearchInputEl.value.trim();

//     if(cityName){
//         //when search is clicked call the openWeather API function to display the entered city's info to the DOM
//         citySearchInputEl.value = "";
//         getCityWeatherData();
//     } else{
//         alert("Please enter a city name.")
//     }
//     console.log(event);
//     console.log(cityName);
// }


// //event listener for the search form submit button
// citySearchFormEl.addEventListener("submit", formSubmitHandler);


// var displayCityWeatherData = function(weatherData){
//         console.log(weatherData);
//         var cityName = 
//         //create a container for each piece of data


//         //append data to container

//         //append container to the dom
//         weatherContainerEl.appendChild(cityNameEl)
//       };
    
