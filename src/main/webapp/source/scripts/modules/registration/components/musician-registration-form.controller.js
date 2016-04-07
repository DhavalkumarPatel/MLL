
(function (angular) {
    'use strict';

    angular
        .module('mllApp.registration')
        .controller('MusicianRegistrationFormController', MusicianRegistrationFormController);



    function MusicianRegistrationFormController() {


        this.submit = () => {
            if (this.registerForm.$invalid) this.registerForm.$submitted = true;
            else {
                alert("form successful");
                this.onNext();
            }
        };


    }
})(window.angular);
