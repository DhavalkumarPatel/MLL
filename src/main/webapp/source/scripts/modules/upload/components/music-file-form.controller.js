(function (angular) {
    'use strict';

    angular
        .module('mllApp.upload')
        .controller('MusicFileFormController', MusicFileFormController);

    MusicFileFormController.$inject = ['musicFormats', 'musicSize'];

    function MusicFileFormController(musicFormats, musicSize) {
        this.size = musicSize;
        this.formats = musicFormats;

        // Replication of Angular Form Behaviour
        this.form = {
            invalid: true,
            submitted: false,
            errors: {
                size: false,
                format: false,
                required: true
            }
        };

        this.validateFormat = (fileName) =>
            this.formats.includes(fileName.slice(fileName.lastIndexOf('.')));

        this.validateSize = (size) => size <= this.size;

        this.selectHdd = (file) => {
            this.form.errors.size = !this.validateSize(file.size);
            this.form.errors.format = !this.validateFormat(file.name);
            this.form.errors.required = false;

            this.form.invalid = this.form.errors.size || this.form.errors.format;

            if (!this.form.invalid) this.data = file;

        };

        this.selectDropbox = (file) => {
            this.form.invalid = false;

            this.data = file;
        };

        this.submit = () => {
            if (this.form.invalid) this.form.submitted = true;
            else this.onNext();
        };

        this.reset = () => this.onPrevious();
    }
})(window.angular);