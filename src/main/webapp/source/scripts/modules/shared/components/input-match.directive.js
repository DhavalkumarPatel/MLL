(function (angular) {
    'use strict';

    angular
        .module('mllApp.shared')
        .directive('mllInputMatch', mllInputMatch);

    function mllInputMatch() {
        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {
              firstValue: '=mllInputMatch'
            },
            link: link
        };

        function link(scope, elem, attrs, ctrl) {

            ctrl.$parsers.unshift((secondValue) => {
                ctrl.$setValidity('inputmatch', secondValue === scope.firstValue);
            });

            scope.$watch('firstValue', (fValue) => {
                ctrl.$setValidity('inputmatch', fValue === ctrl.$viewValue);
            });
        }
    }
})(window.angular);