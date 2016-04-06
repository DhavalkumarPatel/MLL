
(function (angular) {
    'use strict';

    angular
        .module('mllApp.registration')
        .controller('UserRegistrationFormController', UserRegistrationFormController);



    function UserRegistrationFormController() {

        this.submit = () => {
            if (this.generalForm.$invalid) this.generalForm.$submitted = true;
            else this.onNext();
        };


    }
})(window.angular);