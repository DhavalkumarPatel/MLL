(function (angular) {
    'use strict';

    angular
        .module('mllApp.upload')
        .controller('MusicFileFormController', MusicFileFormController);

    function MusicFileFormController() {
        this.form = { invalid: true, submitted: false, errors: { size: false, format: false, required: true } };

        this.size = 10 * 1024 * 1024;
        this.formats = ['.mp3', '.pdf'];

        this.validateFormat = (fileName) => {
            return this.formats.includes(fileName.slice(fileName.lastIndexOf('.')));
        }

        this.validateSize = (size) => size <= this.size;

        this.selectHDD = (file) => {
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