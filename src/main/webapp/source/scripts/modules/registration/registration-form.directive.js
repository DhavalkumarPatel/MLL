
(function (angular) {
    'use strict';

    angular
        .module('mllApp.')
        .directive('mllRegisterForm', mllRegisterForm);

    function mllMusicGeneralInformationForm() {
        return {
            restrict: 'AE',
            replace: true,
            scope: {},
            controller: 'RegisterFormController',
            controllerAs: 'ctrl',
            bindToController: {
                data: '=',
                onNext: '&',

            },
            templateUrl: 'register-form.template.html'
        };
    }
})(window.angular);