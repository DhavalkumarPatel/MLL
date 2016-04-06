(function(angular) {
    'use strict';

    angular
        .module('mllApp.login')
        .factory('loginService', loginService);

    loginService.$inject = ['$http', 'authenticationService', 'loginUrl'];

    function loginService($http, authenticationService, loginUrl) {
        return {
            login: login
        };

        function login(data) {
            return $http({
                method: 'POST',
                url: loginUrl,
                data: data
            }).then((response) => {
                if (response.data.isValidUser) {
                    authenticationService.login(response.data);
                }

                return response.data;
            }).catch((rejection) => {
                return rejection;
            });

        }
    }
})(window.angular);