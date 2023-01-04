angular.module('app')
    .controller('InfoController', function (InfoService) {
        var vm = this;

        InfoService.getCities().then(function (response) {
            vm.Cities = response.data;
        })

        vm.selectedCityChanged = function () {
            InfoService.getCityInfo(vm.City).then(function (response) {
                vm.CityInfo = response.data[0];
            })
        }
    });