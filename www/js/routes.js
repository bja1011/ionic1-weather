angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.weather', {
    url: '/weather',
    views: {
      'side-menu21': {
        templateUrl: 'templates/weather.html',
        controller: 'weatherCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.photos', {
    url: '/photos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/photos.html',
        controller: 'photosCtrl'
      }
    }
  })

  .state('menu.settings', {
    url: '/settings',
    views: {
      'side-menu21': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('addLocation', {
    url: '/add-location',
    templateUrl: 'templates/addLocation.html',
    controller: 'addLocationCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/weather')

  

});