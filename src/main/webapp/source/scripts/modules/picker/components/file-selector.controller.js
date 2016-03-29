(function (angular) {
    'use strict';

    angular
        .module('mllApp.picker')
        .controller('FileSelectorController', FileSelectorController);

    function FileSelectorController() {
        this.selectHDD = (file) => this.onSelectHdd({ file: file });

        this.selectDropbox = (file) => this.onSelectDropbox({ file: file });
    }
})(window.angular);