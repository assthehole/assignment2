var settings = {
    "url": "api.openweathermap.org/data/2.5/weather?q=Singapore&appid={API key}",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

  var settings = {
    "url": "http://dataservice.accuweather.com/locations/v1/regions?apikey=j2wS7aZGGnGCOwAhgOLrQQ3eQUz0I8BA&language=en-us",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });