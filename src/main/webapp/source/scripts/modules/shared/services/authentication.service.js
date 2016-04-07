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
            clean: clean,
            set: set,
            check: check
        };

        function check() {
            let authDetails = $cookies.getObject(cookiesKey);

            if (authDetails) details = authDetails;
        }

        function clean() {
            $cookies.remove(cookiesKey);

            details = {};
        }

        function createDetails(serverDetails) {
            let details = {
                isAuthenticated: true,
                userId: serverDetails.userId,
                userType: serverDetails.type,
                permissions: {
                    browse: serverDetails.browse,
                    upload: serverDetails.upload
                }
            };

            return details;
        }

        function set(serverDetails) {
            clean();

            details = createDetails(serverDetails);

            $cookies.putObject(cookiesKey, details);
        }
    }
})(window.angular);