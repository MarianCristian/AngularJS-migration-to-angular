angular.module('app')
    .service('InfoService', function ($http) {
        this.getCities = function () {
            return $http.get("http://localhost:3000/Cities")
        }
        this.getCityInfo = function (city) {
            return $http.get("http://localhost:3000/CityInfo?Name=" + city)
        }
    });