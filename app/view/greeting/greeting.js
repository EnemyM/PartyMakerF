'use strict';

angular.module('myApp.greeting', ['ngRoute'])
    .config('$routeProvider', function ($routeProvider) {
        $routeProvider.when('/greeting', {
            templateUrl: 'view/greeting/greeting.html',
            controller: 'GreetingController'
        })
    })
    .controller('GreetingController', ['LoginTokenService', '$scope', function (LoginTokenService, $scope) {
        var global = this;

        global.greeting();

        global.greeting = function () {
            LoginTokenService.greeting().then(function (response) {
                global.greeting = response.data;
            });
        }
    }]);