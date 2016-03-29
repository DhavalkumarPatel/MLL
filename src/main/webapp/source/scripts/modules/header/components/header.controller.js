(function (angular){
    'use strict';

    angular
        .module('mllApp.header')
        .controller('HeaderController', HeaderController);

    function HeaderController() {
        this.authLinks = [
            { text: 'Log In', href: '/login' },
            { text: 'Log Out', href: '/logout' }
        ];
    }

})(window.angular);
