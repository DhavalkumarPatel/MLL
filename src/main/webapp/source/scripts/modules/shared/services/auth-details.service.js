(function(angular) {
    'use strict';

    angular
        .module('mllApp.shared')
        .factory('AuthDetails', AuthDetails);

    function AuthDetails() {
        class AuthenticationDetails {
            constructor() {
                this.isAuth = false;
                this.data = {};
            }

            clear() {
                this.isAuth = false;

                this.data = {};
            }

            change(id, type, permissions) {
                this.isAuth = true;

                this.data.id = id;
                this.data.type = type;
                this.data.permissions = permissions;
            }
        }

        return AuthenticationDetails;
    }
})(window.angular);