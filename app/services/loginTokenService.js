'use strict';

angular.factory('UserService', ['$http', function ($http) {

    var url = 'http://localhost:8080';

    /* save token from server */
    var token;
    return {
        getUser: function (headers) {
            $http.get(url + '/signup', {headers: headers})
                .then(function (response) {
                    return response;
                });
        },
        signUpPOST: function (user) {
            $http.post(url + '/user/signup', user).then(function (data) {
                return data;
            });
        },
        signIn: function () {
            if (!token) {
                $http({
                    url: url + '/signin',
                    method: 'POST',
                    headers: {
                        'x-auth-token': token
                    }
                }).then(function (response) {
                    alert(response);
                    return response;
                }, function (error) {
                    alert(error);
                });
            } else {
                $http.get(url + '/token').success(function (data) {
                    token = data.token;
                })
            }
        },
        greeting: function () {
            $http.get(url + '/token').then(function (response) {
                $http({
                    url: url + '/greeting',
                    method: 'GET',
                    headers: {
                        'X-Auth-Token': response.data.token
                    }
                }).then(function (response) {
                    alert(response);
                    return response;
                });
            });
        }
    }
}]);
