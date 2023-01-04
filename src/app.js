var app = angular.module('app', ['ngRoute', 'ngMaterial']);

app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');

        $routeProvider
            .when('/', {
                templateUrl: 'main/main.html',
                controller: 'MainController'
            })
            .when('/weather', {
                templateUrl: 'weather/weather.html',
                controller: 'WeatherController'
            })
            .when('/info', {
                templateUrl: 'info/info.html',
                controller: 'InfoController'
            })
            .otherwise({ redirectTo: '/' });
    }]);