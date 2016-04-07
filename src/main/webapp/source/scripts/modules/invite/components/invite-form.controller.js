
(function (angular) {
    'use strict';

    angular
        .module('mllApp.registration')
        .controller('InviteFormController', InviteFormController);



    function InviteFormController() {


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

