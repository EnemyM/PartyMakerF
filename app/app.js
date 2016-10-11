'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.welcome',
    'myApp.sig',
    'myApp.sip',
    'myApp.sug',
    'myApp.sup'

]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

    $routeProvider.otherwise({redirectTo: '/welcome'});
}]);
