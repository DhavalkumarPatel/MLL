(function(angular) {
    'use strict';

    angular
        .module('mllApp.shared')
        .factory('AuthDetails', AuthDetails);

    function AuthDetails() {
        class AuthenticationDetails {
            constructor() {
                this.isAuth = false;
                this.details = {};
            }

            clear() {
                this.isAuth = false;

                this.details = {};
            }

            change(id, type, permissions) {
                this.isAuth = true;

                this.details.id = id;
                this.details.type = type;
                this.details.permissions = permissions;
            }
        }

        return AuthenticationDetails;
    }
})(window.angular);