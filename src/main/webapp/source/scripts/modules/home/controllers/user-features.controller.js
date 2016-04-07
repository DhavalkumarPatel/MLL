(function (angular) {
    'use strict';

    angular
        .module('mllApp.home')
        .controller('UserFeaturesController', UserFeaturesController);

    function UserFeaturesController(inviteTokenService) {}
})(window.angular);

