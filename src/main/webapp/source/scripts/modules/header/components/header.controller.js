(function (angular){
    'use strict';

    angular
        .module('mllApp.header')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['loginLink', 'logoutLink', 'authenticationService'];

    function HeaderController(loginLink, logoutLink, authenticationService) {
        this.authService = authenticationService;

        this.loginLink = loginLink;
        this.logoutLink = logoutLink;
    }
})(window.angular);
