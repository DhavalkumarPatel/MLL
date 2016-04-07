(function(angular){
    'use strict';

    angular
        .module('mllApp.registration')
        .controller('UserRegistrationController', UserRegistrationController);

    UserRegistrationController.$iject = ['token'];

    function UserRegistrationController(token) {
        this.data = { inviteToken: token };
    }
})(window.angular);