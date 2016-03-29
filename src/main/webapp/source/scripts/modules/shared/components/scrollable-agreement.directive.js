(function (angular) {
    'use strict';

    angular
        .module('mllApp.shared')
        .directive('mllScrollableAgreement', mllScrollableAgreement);

    function mllScrollableAgreement() {
        return {
            restrict: 'AE',
            transclude: true,
            scope: {},
            controller: 'ScrollableAgreementController',
            controllerAs: 'ctrl',
            bindToController: {
                onAgree: '&'
            },
            templateUrl: 'source/scripts/modules/shared/components/scrollable-agreement.template.html',
            link: link
        };

        function link(scope, elem, attrs, ctrl) {
            let doc = elem[0].querySelector('.agreement__document');

            doc.addEventListener('scroll', onScroll);

            function onScroll(event) {
                let ratio = (this.scrollTop + this.offsetHeight) / this.scrollHeight;

                if (ratio == 1) {
                    scope.$apply(() => { ctrl.isScrolled = true; });
                    this.removeEventListener('scroll', onScroll);
                }
            }
        }
    }
})(window.angular);