angular.module('app.controllers', [])

.controller('weatherCtrl', ['$scope', '$stateParams','weatherService','miscService',


function ($scope, $stateParams,weatherService,miscService) {

  var t = $scope;
  t.weatherData = {};

  miscService.getLocation()
    .then(function (location) {
      console.log(location)
      console.log(location.coords.latitude,location.coords.longitude);

      weatherService.get(location)
        .then(function (resp) {
          t.weatherData = resp.data;
        })

    })


}])

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller


function ($scope, $stateParams) {


}])

.controller('photosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller


function ($scope, $stateParams) {


}])

.controller('settingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller


function ($scope, $stateParams) {


}])

.controller('addLocationCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller


function ($scope, $stateParams) {


}])
