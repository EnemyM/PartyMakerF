'use strict';

angular.module('myApp.welcome', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/welcome', {
            templateUrl: 'view/welcome/welcome.html',
            controller: 'WelcomeController'
        });
    }])
    .controller('WelcomeController', ['', function () {

    }]);
