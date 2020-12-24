var settings = {
    "url": "api.openweathermap.org/data/2.5/weather?q=Singapore&appid={API key}",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });