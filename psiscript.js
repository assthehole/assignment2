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

  var settings = {
    "url": "http://dataservice.accuweather.com/locations/v1/regions?apikey=j2wS7aZGGnGCOwAhgOLrQQ3eQUz0I8BA&language=en-us",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
