angular.module('app')
    .controller('AddWeatherController', function ($mdDialog) {
        var vm = this;

        vm.cancel = function () {
            $mdDialog.hide();
        }

        vm.save = function (weatherInfo) {
            $mdDialog.hide(weatherInfo);
        }
    });