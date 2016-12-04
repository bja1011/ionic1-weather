angular.module('app.controllers', [])

  .controller('weatherCtrl', ['$scope', '$stateParams', 'weatherService', 'miscService',


    function ($scope, $stateParams, weatherService, miscService) {

      var t = $scope;
      t.weatherData = {};

      t.getWeather = function () {
        miscService.getLocation()
          .then(function (location) {
            miscService.getPictures(location.coords.latitude, location.coords.longitude)
              .then(function (resp) {
                t.pictures = resp.data;
                t.mainImage = miscService.flickrItemImage(t.pictures.photos.photo[0]);
              })
            weatherService.get(location)
              .then(function (resp) {
                t.weatherData = resp.data;
              })

          })
      }

      t.getWeather();


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
