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

// drop down menu button start
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// drop down menu button end

  // search button
  $('.search-btn').on('click', function(e){
    e.preventDefault();
    //do what ever u need. 
  }); 

