
(function (angular) {
    'use strict';

    angular
        .module('mllApp.')
        .controller('RegisterFormController', RegisterFormController);



    function MusicGeneralInformationFormController() {

        this.submit = () => {
            if (this.generalForm.$invalid) this.generalForm.$submitted = true;
            else this.onNext();
        };


    }
})(window.angular);