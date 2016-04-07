
(function (angular) {
    'use strict';

    angular
        .module('mllApp.registration')
        .controller('UserRegistrationFormController', UserRegistrationFormController);



    function UserRegistrationFormController() {

        this.genres = ['Alternative', 'Blues', 'Children\'s Music', 'Christian & Gospel', 'Comedy', 'Classical',
            'Country', 'Dance', 'Electronic', 'Hip - Hop / Rap', 'Pop', 'Jazz', 'Latino', 'R & B / Soul', 'Reggae',
            'Metal', 'Rock', 'Singer / Songwriter', 'Folk / Americana', 'Funk' ];



        this.selectGenre = (genre) => { if(!genre) this.data.twoGenre = null; };

        this.genders = [{label:'MALE',id:'1'},{label:'FEMALE',id:'2'}];

        this.selectGender = {label:'MALE',id:'1'}; //default

        this.submit = () => {
            if (this.registerForm.$invalid) this.registerForm.$submitted = true;
            else {
                alert("form successful");
                this.onNext();
            }
        };


    }
})(window.angular);