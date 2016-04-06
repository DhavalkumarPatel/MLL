(function(angular) {
    'use strict';

    angular
        .module('mllApp.registration')
        .factory('registrationService', registrationService);

    registrationService.$inject = ['$http', 'authenticationService', 'registrationUrl'];

    function registrationService($http, authenticationService, registrationUrl) {
        return {
            register: register
        };

        function createConfig(data, type) {
            data.type = type;

            let httpConfig = {
                method: 'POST',
                url: registrationUrl,
                data: data
            };

            return httpConfig;
        }

        function register(data) {
            return $http(createConfig(data, type)).then((response) => {
                if (response.data.isRegistered) {
                    authenticationService.register(response.data);
                }

                return response.data;
            }).catch((rejection) => {
                return rejection;
            });
        }
    }
})(window.angular);