//variables
var cityFormSearchEl = document.querySelector("#city-form");
var searchButton = document.querySelector("#search-button");
var inputValue = document.querySelector(".form-control");
var historyCard = document.querySelector(".history-card");
var searchHistoryEl = document.querySelector("#search-history");
var searchHistory = [];
uvBadgeEl = document.querySelector(".badge");

//variables for the display-weather div
var cityName = document.querySelector(".name-of-city");
var todaysDate = moment().format("MM/DD/YY"); 
var temp = document.querySelector(".temp");
var wind= document.querySelector(".wind");
var humidity= document.querySelector(".humidity");
var icon = document.querySelector(".weatherIcon");

//variables for five day forecast - Day One
var forecastDate = document.querySelector(".forecastDateOne");
var forecastTemp = document.querySelector(".forecastTempOne");
var forecastWind = document.querySelector(".forecastWindOne");
var forecastHumidity = document.querySelector(".forecastHumidityOne");

//variables for five day forecast - Day Two
forecastDateTwo = document.querySelector(".forecastDateTwo");
forecastTempTwo = document.querySelector(".forecastTempTwo");
forecastWindTwo = document.querySelector(".forecastWindTwo");
forecastHumidityTwo = document.querySelector(".forecastHumidityTwo");

//variables for five day forecast - Day Three
forecastDateThree = document.querySelector(".forecastDateThree");
forecastTempThree = document.querySelector(".forecastTempThree");
forecastWindThree = document.querySelector(".forecastWindThree");
forecastHumidityThree = document.querySelector(".forecastHumidityThree");

//variables for five day forecast - Day Four
forecastDateFour = document.querySelector(".forecastDateFour");
forecastTempFour = document.querySelector(".forecastTempFour");
forecastWindFour = document.querySelector(".forecastWindFour");
forecastHumidityFour = document.querySelector(".forecastHumidityFour");

//variables for five day forecast - Day Five
forecastDateFive = document.querySelector(".forecastDateFive");
forecastTempFive = document.querySelector(".forecastTempFive");
forecastWindFive = document.querySelector(".forecastWindFive");
forecastHumidityFive = document.querySelector(".forecastHumidityFive");

function pageLoad(){
    //on page load we want to display the most recent search history
    if(localStorage.getItem("searchHistory")){
        updateHistory();
    }
}

//add search term to to history array and local storage
function addTerm(citySearch){
    //if there is something in local storage
    if(localStorage.getItem("searchHistory")){
        searchHistory = JSON.parse(localStorage.getItem("searchHistory"));
    }
    searchHistory.push(citySearch);
    if(searchHistory.length > 5){
        searchHistory.shift();
    }
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));

    //call the function to update the history
    updateHistory();
}

//update history from local storage
function updateHistory() {
    //clear searchHistory div
    searchHistoryEl.textcontent = "";
    searchHistory = JSON.parse(localStorage.getItem("searchHistory"));
    for(var i = searchHistory.length -1; i >= 0; i --){
        var pastSearch = document.createElement("li");
        pastSearch.innerHTML = searchHistory[i];
        pastSearch.setAttribute("data-value", searchHistory[i]);

        searchHistoryEl.appendChild(pastSearch);
    }
}

//save to local storage
function saveSearch(){
var citySearch = inputValue.value.trim();
    if(!citySearch){
        return false;
    }
    addTerm(citySearch)
};

var displayWeather = function() {
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
          //add to page
          cityName.innerHTML= nameValue;
          temp.innerHTML= tempValue;
          wind.innerHTML= windValue;
          humidity.innerHTML= humidityValue;
        })
    });
    //get api for 5 day forecast
    var fiveDayForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputValue.value +  "&appid=a0e1548f4b7fe9bc85174edebf7cf635&units=imperial"
    // then put the variable into fetch
    fetch(fiveDayForecast)
    .then(function(response) {
        response.json().then(function(data) {
            var forecastDateValue = data.list[0].dt_txt;
            var forecastTempValue = ": " + data.list[0].main.temp + " ℉";
            var fiveDayForecastDate = new Date(forecastDateValue).toLocaleDateString();
            var forecastWindValue = ": " + data.list[0].wind.speed + " MPH";
            var forecastHumidityValue = ": " + data.list[0].main.humidity + "%";

            forecastDate.innerHTML = fiveDayForecastDate;
            forecastTemp.innerHTML = forecastTempValue;
            forecastWind.innerHTML = forecastWindValue;
            forecastHumidity.innerHTML = forecastHumidityValue;
        })
    }) 
    fetch(fiveDayForecast)
    .then(function(response) {
        response.json().then(function(data) {
            var forecastDateValueTwo = data.list[8].dt_txt;
            var forecastTempValueTwo = ": " + data.list[8].main.temp + " ℉";
            var fiveDayForecastDateTwo = new Date(forecastDateValueTwo).toLocaleDateString();
            var forecastWindValueTwo = ": " + data.list[8].wind.speed + " MPH";
            var forecastHumidityValueTwo = ": " + data.list[8].main.humidity + "%";

            forecastDateTwo.innerHTML = fiveDayForecastDateTwo;
            forecastTempTwo.innerHTML = forecastTempValueTwo;
            forecastWindTwo.innerHTML = forecastWindValueTwo;
            forecastHumidityTwo.innerHTML = forecastHumidityValueTwo;
        })
    });
    fetch(fiveDayForecast)
    .then(function(response){
        response.json().then(function(data) {
            var forecastDateValueThree = data.list[15].dt_txt;
            var forecastTempValueThree = ": " + data.list[15].main.temp + " ℉";
            var fiveDayForecastDateThree = new Date(forecastDateValueThree).toLocaleDateString();
            var forecastWindValueThree = ": " + data.list[15].wind.speed + " MPH";
            var forecastHumidityValueThree = ": " + data.list[15].main.humidity + "%";

            forecastDateThree.innerHTML = fiveDayForecastDateThree;
            forecastTempThree.innerHTML = forecastTempValueThree;
            forecastWindThree.innerHTML = forecastWindValueThree;
            forecastHumidityThree.innerHTML = forecastHumidityValueThree;  
        })
    })
    fetch(fiveDayForecast)
    .then(function(response){
        response.json().then(function(data) {
            var forecastDateValueFour = data.list[23].dt_txt;
            var forecastTempValueFour = ": " + data.list[23].main.temp + " ℉";
            var fiveDayForecastDateFour = new Date(forecastDateValueFour).toLocaleDateString();
            var forecastWindValueFour = ": " + data.list[23].wind.speed + " MPH";
            var forecastHumidityValueFour = ": " + data.list[23].main.humidity + "%";

            forecastDateFour.innerHTML = fiveDayForecastDateFour;
            forecastTempFour.innerHTML = forecastTempValueFour;
            forecastWindFour.innerHTML = forecastWindValueFour;
            forecastHumidityFour.innerHTML = forecastHumidityValueFour;  
        })
    })
    fetch(fiveDayForecast)
    .then(function(response){
        response.json().then(function(data) {
            var forecastDateValueFive = data.list[31].dt_txt;
            var forecastTempValueFive = ": " + data.list[31].main.temp + " ℉";
            var fiveDayForecastDateFive = new Date(forecastDateValueFive).toLocaleDateString();
            var forecastWindValueFive = ": " + data.list[31].wind.speed + " MPH";
            var forecastHumidityValueFive = ": " + data.list[31].main.humidity + "%";

            forecastDateFive.innerHTML = fiveDayForecastDateFive;
            forecastTempFive.innerHTML = forecastTempValueFive;
            forecastWindFive.innerHTML = forecastWindValueFive;
            forecastHumidityFive.innerHTML = forecastHumidityValueFive;  
        })
    })
};

var displayUVIndex = function(){
    var currentWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + inputValue.value + "&appid=a0e1548f4b7fe9bc85174edebf7cf635&units=imperial"
    fetch(currentWeather)
    .then(function(response) {
        response.json().then(function(data) {
            var lat = data.coord.lat;
            var lon = data.coord.lon;
            var uvValue = "https://api.openweathermap.org/data/2.5/onecall?lat="+ lat + "&lon=" + lon + "&appid=a0e1548f4b7fe9bc85174edebf7cf635&units=imperial";
            fetch(uvValue)
            .then(function(response){
                response.json().then(function(data) {
                    // console.log(data);
                    var uvIndex = data.hourly[0].uvi;
                    console.log(uvIndex);
                        // if(uvIndex > 2 ){
                        //     uvBadgeEl.removeClass("badge");
                        // }
                        // // // else if (uvIndex > 2 && uvIndex < 6) {
                        // //     uvBadgeEl.addClass("yellow");
                        // // }
                        // // else {
                        // //     uvBadgeEl.addClass("red");
                        // // }
                })
            })
        })
    })
};

//form submit handler
var formSubmitHandler = function(event) {
    event.preventDefault();
    
    //get value from the form-control
    var cityName = inputValue.value

    if(cityName){
        displayWeather()
        saveSearch();
        displayUVIndex()
    }
};

//event listener to display weather on form submit
cityFormSearchEl.addEventListener("submit", formSubmitHandler);