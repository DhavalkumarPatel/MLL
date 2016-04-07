(function(angular) {
    'use strict';

    angular
        .module('mllApp.shared')
        .factory('authenticationService', authenticationService);

    authenticationService.$inject = ['$cookies', 'AuthDetails'];

    function authenticationService($cookies, AuthDetails) {
        let cookiesKey = 'mllApp.authDetails';

        return {
            details: new AuthDetails(),
            clear: clear,
            change: change,
            check: check
        };

        function check() {
            let authDetails = $cookies.getObject(cookiesKey);

            if (authDetails) {
                let data = authDetails.data;
                this.details.change(data.id, data.type, data.permissions);
            }
        }

        function clear() {
            $cookies.remove(cookiesKey);

            this.details.clear();
        }

        function change(id, type, permissions) {
            this.details.change(id, type, permissions);

            $cookies.putObject(cookiesKey, this.details);
        }
    }
})(window.angular);