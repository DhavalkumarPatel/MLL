(function (angular) {
    'use strict';

    angular
        .module('mllApp')
        .directive('mllApplication', mllApplication);

    function mllApplication() {
        return {
            restrict: "AE",
            scope: {},
            controller: "ApplicationController",
            controllerAs: "ctrl",
            templateUrl: "source/scripts/components/app.template.html"
        };
    }

})(window.angular);