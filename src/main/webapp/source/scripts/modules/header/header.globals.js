(function(angular){
    'use strict';

    let loginLink = { text: 'Log In', href: 'login' };

    let logoutLink = { text: 'Log Out' };

    angular
        .module('mllApp.header')
        .constant('loginLink', loginLink)
        .constant('logoutLink', logoutLink);
})(window.angular);