angular.module('app')
    .directive('weatherCard', function ($mdDialog) {
        return {
            scope: {
                weather: '=',
                deleteWeather: '&'
            },
            restrict: 'E',
            templateUrl: 'directives/templates/weather-card.html',
            link: function ($scope, element, attrs) {
                $scope.delete = function (weather) {
                    var confirm = $mdDialog.confirm()
                        .title('Would you like to delete ' + weather.City + ' weather information ?')
                        .ok('Yes')
                        .cancel('No');

                    $mdDialog.show(confirm).then(function () {
                        $scope.deleteWeather(weather);
                    }, function () {
                        $mdDialog.hide();
                    });
                }
            }
        }
    });