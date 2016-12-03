angular.module('app.services', [])

.service('weatherService', function($http){
  var service = {};

  service.get = function(location) {
    if(typeof location == 'string') {
      return $http.get('http://api.openweathermap.org/data/2.5/forecast?q='+location+'&appid=1929fffb238baf259922bfbb99ae5a73');
    } else return $http.get('http://api.openweathermap.org/data/2.5/forecast?lat='+location.coords.latitude+'&lon='+location.coords.longitude+'&appid=1929fffb238baf259922bfbb99ae5a73');
  };

  return service;
})

.service('miscService',function ($q) {
  var service = {};

  service.getLocation = function() {

    return $q(function(resolve, reject) {

      function onError(error) {
        reject(error);
      }
      var options = { enableHighAccuracy: true };
      navigator.geolocation.getCurrentPosition(function (position) {
        resolve(position);
      }, onError,options);

    });

  };

  return service;
});

