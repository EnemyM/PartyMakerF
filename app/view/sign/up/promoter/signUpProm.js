'use strict';

angular.module('myApp.sup', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/signUpP', {
            templateUrl: 'view/sign/up/promoter/signUpProm.html',
            controller: 'SignUpController'
        });
    }])

    .controller('SignUpController',[function () {
        
    }]);