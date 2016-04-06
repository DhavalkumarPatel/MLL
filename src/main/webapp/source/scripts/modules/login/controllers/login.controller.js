(function(angular){
    'use strict';

    angular
        .module('mllApp.login')
        .controller('LoginController', LoginController);

    function LoginController() {
        this.dummyData = 'ПРИВЕТ, СУЧКИ!';
    }
})(window.angular);