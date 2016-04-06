(function (angular) {
    'use strict';

    angular
        .module('mllApp')
        .controller('ApplicationController', ApplicationController);

    function ApplicationController() {
        this.homeLink = { text: 'Home', href: '/profile' };

        this.navigationLinks = [
            { text: 'People', href: 'people' },
            { text: 'Music', href: 'music' }
        ];
    }

})(window.angular);
