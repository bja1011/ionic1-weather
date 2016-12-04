angular.module('app.services', [])

  .service('weatherService', function ($http) {
    var service = {};

    service.get = function (location) {
      if (typeof location == 'string') {
        return $http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + location + '&appid=1929fffb238baf259922bfbb99ae5a73&units=metric');
      } else return $http.get('http://api.openweathermap.org/data/2.5/forecast?lat=' + location.coords.latitude + '&lon=' + location.coords.longitude + '&appid=1929fffb238baf259922bfbb99ae5a73&units=metric');
    };

    return service;
  })

  .service('miscService', function ($q,$http) {
    var service = {};

    service.getLocation = function () {

      return $q(function (resolve, reject) {

        function onError(error) {
          reject(error);
        }

        function onSuccess(position) {
          resolve(position);
        }

        var options = {enableHighAccuracy: true};

        navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

      });

    };

    service.getPictures = function(latitude, longitude) {

      var queryString =
        "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1543c174a55e5b9b83d44ce2945005a5&lat="
        + latitude + "&lon=" + longitude + "&format=json&nojsoncallback=1";

      return $http.get(queryString);

    };

    service.flickrItemImage = function (item) {
      return "http://farm" + item.farm + ".static.flickr.com/" + item.server + "/" + item.id + "_" + item.secret + ".jpg";
    }

    return service;
  });

