// if the weather is cloudy == remember to bring an umbrella in case!
// if the psi is high == remember to wear a mask!
// if the weather is rainy == remember to bring an umbrella or stay in and stay comfortable!
// if there is storm == stay safe outside with an umbrella or stay at home!
// if the weather is sunny == have fun outside! drop by the beach!
// if the weather is windy == don't wear a hat!

var settings = {
    "url": "https://api.data.gov.sg/v1/environment/psi",
    "method": "GET",
    "timeout": 0,
  };
  
$.ajax(settings).done(function (response) {
  console.log(response);
  
  var data = response.items[0];
  console.log(data);
    var x = data.readings.psi_twenty_four_hourly;
    $(".24national").append(x.national);
    $(".24south").append(x.south);
    $(".24north").append(x.north);
    $(".24east").append(x.east);
    $(".24central").append(x.central);
    $(".24west").append(x.west);
  
    var y = data.readings.pm25_sub_index;
    $(".3national").append(y.national);
    $(".3south").append(y.south);
    $(".3north").append(y.north);
    $(".3east").append(y.east);
    $(".3central").append(y.central);
    $(".3west").append(y.west);
  
});

  // var settings = {
  //   "url": "http://dataservice.accuweather.com/locations/v1/regions?apikey=j2wS7aZGGnGCOwAhgOLrQQ3eQUz0I8BA&language=en-us",
  //   "method": "GET",
  //   "timeout": 0,
  // };
  
  // $.ajax(settings).done(function (response) {
  //   console.log(response);
    
  // });

  // var settings = {
  //   "url": "api.openweathermap.org/data/2.5/weather?q=Singapore&appid={API key}",
  //   "method": "GET",
  //   "timeout": 0,
  // };
  
  // $.ajax(settings).done(function (response) {
  //   console.log(response);
  // });

  // var settings = {
  //   "url": "http://dataservice.accuweather.com/locations/v1/regions?apikey=j2wS7aZGGnGCOwAhgOLrQQ3eQUz0I8BA&language=en-us",
  //   "method": "GET",
  //   "timeout": 0,
  // };
  
  // $.ajax(settings).done(function (response) {
  //   console.log(response);
  // });


  // search button
  $('.search-btn').on('click', function(e){
    e.preventDefault();
    //do what ever u need. 
  }); 

  // weather page
  const api = {
    key: "e899d0e47f3550ba4367164f52c010eb",
    baseurl: "https://api.openweathermap.org/data/2.5/",

}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}

function getResults (query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
      return weather.json();
    }).then(displayResults);
}

function displayResults (weather) {
  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);

  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  let weather_el = document.querySelector('.current .weather');
  weather_el.innerText = weather.weather[0].main;

  let hilow = document.querySelector('.hi-low');
  hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}

function dateBuilder (d) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}