'use strict';

angular.module('myApp.sug', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/signUpG', {
            templateUrl: 'view/sign/up/goer/signUpGoer.html',
            controller: 'SignUpGoerController'
        });
    }])

    .controller('SignUpGoerController', ['UserService', '$http', '$scope', function (UserService, $http, $scope) {

        var global = this;
        var userRole = {id: '1', role: 'ROLE_GOER'};
        global.user = {idUser: null, email: '', phone: '', nickName: '', password: '', userRole: userRole};

        global.userSignUp = function (user) {
            /*UserService.signUp(user).then(function (data) {
             alert(data);
             });*/
            $http.post('http://localhost:8080/user/signup', user).then(function (data) {
                alert(data)
            })
        };


        global.signUp = function () {
            userSignUp(global.user);
            reset();
        };

        global.reset = function () {
            global.user = {idUser: null, email: '', phone: '', nickName: '', password: '', userRole: userRole};
            $scope.signUpForm.$setPristine();
        }
    }]);