(function(angular) {
    'use strict';

    angular
        .module('mllApp.shared')
        .factory('authenticationService', authenticationService);

    authenticationService.$inject = ['$cookies'];

    function authenticationService($cookies) {
        let cookiesKey = 'mllApp.authDetails';
        let details = {};

        return {
            details: details,
            logout: logout,
            login: login,
            register: register,
            check: check
        };

        function check() {
            let authDetails = $cookies.getObject(cookiesKey);

            if (authDetails) details = authDetails;
        }

        function logout() {
            $cookies.remove(cookiesKey);

            details = {};
        }

        function register(newDetails) {
            $cookies.putObject(cookiesKey, newDetails);

            details = newDetails;
        }

        function login(newDetails) {
            $cookies.putObject(cookiesKey, newDetails);

            details = newDetails;
        }
    }
})(window.angular);