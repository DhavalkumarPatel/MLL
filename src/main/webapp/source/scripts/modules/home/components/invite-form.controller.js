(function (angular) {
    'use strict';

    angular
        .module('mllApp.home')
        .controller('InviteFormController', InviteFormController);

    InviteFormController.$inject = ['$timeout', 'inviteTokenService'];

    function InviteFormController($timeout, inviteTokenService) {
        this.inviteService = inviteTokenService;

        this.data = {};

        this.types = [
            { label: 'General User', value: 'user' },
            { label: 'Musician', value: 'musician' }
        ];

        this.invite = () => {
            if (this.form.$invalid) this.form.$submitted = true;

            else {
                this.inviteService.generateToken(+this.userId, this.data.type, this.data.email)
                    .then((response) => {
                        this.message = response.data.isGenerated
                            ? 'Invite is succesfully sent!' : response.data.errorMessage;
                        this.isOpen = true;
                        $timeout(() => this.isOpen = false, 1000);
                    })
                    .catch((rejection) => {

                    });
            }
        };
    }
})(window.angular);

