(function (angular) {
    'use strict';

    angular
        .module('mllApp.picker')
        .controller('FileSelectorController', FileSelectorController);

    function FileSelectorController() {
        this.selectHdd = (file) => {
            this.selectedFile = file.name;
            this.onSelectHdd({ file: file });
        };

        this.selectDropbox = (file) => {
            this.selectedFile = file.name;
            this.onSelectDropbox({ file: file });
        };
    }
})(window.angular);