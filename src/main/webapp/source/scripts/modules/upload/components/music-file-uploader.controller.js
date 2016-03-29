(function (angular) {
    'use strict';

    angular
        .module('mllApp.upload')
        .controller('MusicFileUploaderController', MusicFileUploaderController);

    function MusicFileUploaderController() {
        this.forms = {
            current: 0,
            data: [
                { title: 'License Agreement', isActive: true, isDisabled: false },
                { title: 'Song Selection', isActive: false, isDisabled: true },
                { title: 'General Information', isActive: false, isDisabled: true },
                { title: 'Ownership Information', isActive: false, isDisabled: true },
                { title: 'Sound Ownership Information', isActive: false, isDisabled: true }
        ]};

        this.data = {
            fileInformation: { name: '', file: null },
            generalInformation: { title: '', artists: [{ name: '' }], beatRate: 0, genres: [] },
            ownershipInformation: {
                songwriters: [ { name: '', primaryEmail: '', primaryPhone: '', secondaryPhone: '' }],
                copyright: '',
                pubCompany: '',
                pbo: ''
            },
            soundInformation: {
                soundOwners: [ { name: '', primaryEmail: '', primaryPhone: '', secondaryPhone: '' }]
            }
        };

        this.next = () => {
            if (this.forms.current < this.forms.data.length - 1) {
                this.forms.data[this.forms.current].isActive = false;

                this.forms.current++;

                this.forms.data[this.forms.current].isActive = true;
                this.forms.data[this.forms.current].isDisabled = false;
            }

            else this.submit();
        };

        this.previous = () => {
            this.forms.data[this.forms.current].isActive = false;

            this.forms.current--;

            this.forms.data[this.forms.current].isActive = true;
        };

        this.submit = () => {};
    }
})(window.angular);