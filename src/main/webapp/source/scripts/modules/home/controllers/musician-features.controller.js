(function (angular) {
    'use strict';

    angular
        .module('mllApp.home')
        .controller('MusicianFeaturesController', MusicianFeaturesController);

    MusicianFeaturesController.$inject = ['userId', '$state'];

    function MusicianFeaturesController(userId, $state) {
        this.userId = userId;

        this.upload = () => {
            $state.go('musicianUpload', {}, { reload: true });
        };
    }
})(window.angular);