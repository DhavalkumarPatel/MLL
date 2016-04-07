
(function (angular) {
    'use strict';

    angular
        .module('mllApp.registration')
        .controller('MusicianRegistrationFormController', MusicianRegistrationFormController);

    MusicianRegistrationFormController.$inject = ['inviteToken', 'registrationService'];

    function MusicianRegistrationFormController(inviteToken, registrationService) {
        this.data = {};

        this.token = inviteToken;
        this.service = registrationService;

        this.register = () => {
            if (this.registrationForm.$invalid) this.registrationForm.$submitted = true;
            else {
                let data = this.data;
                data.token = this.token;

                this.service.register(data, 'musician')
                    .then((response) => {
                        this.processResponse(data);
                    })
                    .catch((rejection) => {

                    });
            }
        };

        this.processResponse = (data) => {
            if (data.isRegistered) this.redirect(data.userId);

            else this.displayError(data.errorMessage);
        };

        this.redirect = (id) => {
            $state.go('musician', { id: id });
        };

        this.displayError = (errorMessage) => {
            this.loginForm.$serverError = true;
            this.errorMessage = errorMessage;
        };

    }
})(window.angular);
