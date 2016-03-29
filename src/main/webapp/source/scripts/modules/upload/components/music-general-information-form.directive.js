(function (angular) {
    'use strict';

    angular
        .module('mllApp.upload')
        .directive('mllMusicGeneralInformationForm', mllMusicGeneralInformationForm);

    function mllMusicGeneralInformationForm() {
        return {
            restrict: 'AE',
            replace: true,
            scope: {},
            controller: 'MusicGeneralInformationFormController',
            controllerAs: 'ctrl',
            bindToController: {
                data: '=',
                onNext: '&',
                onPrevious:'&'
            },
            templateUrl: 'source/scripts/modules/upload/components/music-general-information-form.template.html'
        };
    }
})(window.angular);