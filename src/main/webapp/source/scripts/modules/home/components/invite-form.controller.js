(function (angular) {
    'use strict';

    angular
        .module('mllApp.home')
        .controller('InviteFormController', InviteFormController);

    InviteFormController.$inject = ['inviteTokenService'];

    function InviteFormController(inviteTokenService) {
        this.inviteService = inviteTokenService;

        this.users = [{label:'USER',id:'1'},{label:'MUSICIAN',id:'2'}];

        this.selectUser = {label:'USER',id:'1'}; //default

        this.submit = () => {
            if (this.registerForm.$invalid) this.registerForm.$submitted = true;
            else {
                alert("form successful");
                this.onNext();
            }
        };
    }
})(window.angular);

