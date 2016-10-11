'use strict';

angular.module('myApp.sig', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/signInG', {
            templateUrl: 'view/sign/in/goer/signInGoer.html',
            controller: 'SignInController'
        });
    }])

    .controller('SignInController', ['LoginTokenService', '$scope', '$locationProvider', function (LoginTokenService, $scope) {
       /* var global = this;

        var authenticate = function (credentials, callback) {
            var headers = credentials ? {
                authorization: "Basic "
                + btoa(credentials.username + ":" + credentials.password)
            } : {};

            LoginTokenService.getUser(headers)
                .then(function (response) {
                    $scope.authenticate = !!response.data.email;
                    callback && callback();
                }, function () {
                    $scope.authenticated = false;
                    callback && callback();
                });
        };
        authenticate();
        global.credentials = {};

        global.signIn = function () {
            authenticate(self.credentials, function () {
                if ($rootScope.authenticated) {
                    $location.path("/greeting");
                    self.error = false;
                } else {
                    $location.path("/signIn");
                    self.error = true;
                }
            });
        };*/
    }]);