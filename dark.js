
    var request = require('request');
    request('https://api.darksky.net/forecast/e7ea57ca52da5ae872c7c0c343f312be/', function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
   
  
    darksky(function() {
        var latitude;
        var longitude;

      latitude = location.coords.latitude;
      longitude = location.coords.longitude;
      console.log(latitude + " " + longitude);

      var geolocation = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + '%2C' + longitude + '&language=en';
      var url = "https://api.darksky.net/forecast/e7ea57ca52da5ae872c7c0c343f312be/" + latitude + "," + longitude + "?callback=?&units=si";

      $.getJSON(url, function(data) {
        console.log(data);

        var temp = data.currently.temperature;
      });

      });
    });