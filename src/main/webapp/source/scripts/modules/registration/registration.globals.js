(function(angular){
    'use strict';

    let registrationUrl = '/MLL/RegistrationServlet';

    angular
        .module('mllApp.registration')
        .constant('registrationUrl', registrationUrl);
})(window.angular);