angular.module('app')
    .service('WeatherService', function ($http) {
        this.getWeather = function () {
            return $http.get("http://localhost:3000/Weather");
        }

        this.addWeather = function (weatherInfo) {
            return $http.post("http://localhost:3000/Weather", weatherInfo);
        }

        this.deleteWeather = function (id) {
            return $http.delete("http://localhost:3000/Weather/" + id);
        }
    });