(function (angular) {
    'use strict';

    angular
        .module('mllApp.home')
        .controller('InviteFormController', InviteFormController);

    InviteFormController.$inject = ['inviteTokenService'];

    function InviteFormController(inviteTokenService) {
        this.inviteService = inviteTokenService;

        this.data = {};

        this.type = [
            { label: 'General User', value: 'user' },
            { label: 'Musician', value: 'musician' }
        ];

        this.invite = () => {
            if (this.form.$invalid) this.form.$submitted = true;

            else {
                this.inviteService.generateToken(+this.userId, this.data.type, this.data.email)
                    .then((response) => {
                        console.dir(response);
                    })
                    .catch((rejection) => {

                    });
            }
        };
    }
})(window.angular);

