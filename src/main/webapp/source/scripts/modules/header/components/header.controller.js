(function (angular){
    'use strict';

    angular
        .module('mllApp.header')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$state', 'loginLink', 'logoutLink', 'authenticationService'];

    function HeaderController($state, loginLink, logoutLink, authenticationService) {
        this.authService = authenticationService;

        this.loginLink = loginLink;
        this.logoutLink = logoutLink;

        this.logout = () => {
            this.authService.clean();

            $state.go('login');
        }
    }
})(window.angular);
