//Constants and variables
const API_KEY = '0e34bacd905969f92de230160d85e572';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const $weatherFor = $('#name');
const $temperature = $('#temp');
const $feelsLike = $('#feelslike');
const $weather = $('#description');
const $input = $('input[type="text"]');

// console.log($weatherFor)
// console.log($weather)
// console.log($temperature)
// console.log($feelsLike)

// cached Element references
let weatherData, userInput;

//Event listeners
$("form").on("submit", handleGetData);

// Functions


function handleGetData(event) { 
    event.preventDefault();
    userInput = $input.val();
    
    $.ajax({
        url: BASE_URL + `q=${userInput}&units=imperial&appid=` + API_KEY})
    .then(function(data) {
        weatherData = data;
        render()
    }, function(error) {
        console.log('bad request', error);
    })
}

function render() {
    // console.log(weatherData.name);
    $weatherFor.text(weatherData.name);
    $temperature.text(weatherData.main.temp + "°F");
    $feelsLike.text(weatherData.main.feels_like + "°F");
    $weather.text(weatherData.weather[0].description);
}

