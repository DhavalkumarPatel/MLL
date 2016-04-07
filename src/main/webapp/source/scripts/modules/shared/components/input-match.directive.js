(function (angular) {
    'use strict';

    angular
        .module('mllApp.shared')
        .directive('mllInputMatch', mllInputMatch);

    function mllInputMatch() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: link
        };

        function link(scope, elem, attrs, ngModel) {
            scope.$watch(attrs.ngModel + attrs.mllInputMatch, () => {
                console.log(`"${attrs.ngModel}" against "attrs.mllInputMatch"`);

                let match = attrs.ngModel === attrs.mllInputMatch;

                ngModel.$setValidity('inputmatch', match);
            });
        }
    }
})(window.angular);