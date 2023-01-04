angular.module('app')
    .controller('WeatherController', function ($mdDialog, WeatherService) {
        var vm = this;

        WeatherService.getWeather().then(function (response) {
            vm.Weather = response.data
        });

        vm.deleteWeather = function (weather) {
            WeatherService.deleteWeather(weather.id).then(function () {
                var index = vm.Weather.indexOf(weather);
                vm.Weather.splice(index, 1);
            })
        }

        vm.addWeather = function (ev) {
            $mdDialog.show({
                templateUrl: 'weather/add-weather/add-weather.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
            }).then(
                function (weatherInfo) {
                    if (!weatherInfo)
                        return;

                    weatherInfo.Measurement = "°C";
                    weatherInfo.id = vm.Weather[vm.Weather.length - 1].id + 1;
                    console.log(weatherInfo)
                    WeatherService.addWeather(weatherInfo).then(function () {
                        vm.Weather.push(weatherInfo);
                    })
                });
        }
    });