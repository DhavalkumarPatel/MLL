(function (angular) {
    'use strict';

    angular
        .module('mllApp.upload')
        .directive('mllMusicSoundInformationForm', mllMusicSoundInformationForm);

    function mllMusicSoundInformationForm() {
        return {
            restrict: 'AE',
            replace: true,
            scope: {},
            controller: 'MusicSoundInformationFormController',
            controllerAs: 'ctrl',
            bindToController: {
                data: '=',
                ownersFn: '&',
                onNext: '&',
                onPrevious: '&'
            },
            templateUrl: 'music-sound-information-form.template.html'
        };
    }
})(window.angular);