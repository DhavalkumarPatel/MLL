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

        function register(data, type) {
            return $http(createConfig(data, type)).then((response) => {
                if (response.data.isRegistered) {
                    let id = response.data.userId;
                    let type =response.data.type;
                    let permissions = { browse: response.data.browse, upload: response.data.upload };

                    authenticationService.change(id, type, permissions);
                }

                return response.data;
            }).catch((rejection) => {
                return rejection;
            });
        }
    }
})(window.angular);