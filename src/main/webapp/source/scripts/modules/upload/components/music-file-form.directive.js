(function (angular) {
    'use strict';

    angular
        .module('mllApp.upload')
        .directive('mllFileForm', mllFileForm);

    function mllFileForm() {
        return {
            restrict: 'AE',
            replace: true,
            scope: {},
            controller: 'MusicFileFormController',
            controllerAs: 'ctrl',
            bindToController: {
                data: '=',
                onNext: '&',
                onPrevious: '&'
            },
            templateUrl: 'source/scripts/modules/upload/components/music-file-form.template.html'
        };
    }
})(window.angular);