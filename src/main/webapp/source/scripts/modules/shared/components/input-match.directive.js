(function (angular) {
    'use strict';

    angular
        .module('mllApp.shared')
        .directive('mllInputMatch', mllInputMatch);

    mllInputMatch.$inject = ['$parse'];

    function mllInputMatch($parse) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: link
        };

        function link(scope, elem, attrs, ngModel) {
            scope.$watch($parse(attrs.ngModel) + $parse(attrs.mllInputMatch), (oldVal, newVal) => {
                console.log(newVal + ' - ' + oldVal);

                let match = attrs.ngModel === attrs.mllInputMatch;

                ngModel.$setValidity('inputmatch', match);
            });
        }
    }
})(window.angular);