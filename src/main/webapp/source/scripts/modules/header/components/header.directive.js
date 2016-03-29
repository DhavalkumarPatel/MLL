(function (angular){
    'use strict';

    angular
        .module('mllApp.header')
        .directive('mllHeader', mllHeader);

    function mllHeader() {
        return {
            restrict: "AE",
            scope: {},
            controller: "HeaderController",
            controllerAs: "ctrl",
            templateUrl: "source/scripts/modules/header/components/header.template.html",
            bindToController: {
                navLinks: '=',
                homeLink: '='
            }
        };
    }

})(window.angular);