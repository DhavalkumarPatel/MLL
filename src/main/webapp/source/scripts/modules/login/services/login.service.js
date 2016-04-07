(function(angular) {
    'use strict';

    angular
        .module('mllApp.login')
        .factory('loginService', loginService);

    loginService.$inject = ['$http', 'authenticationService', 'loginUrl'];

    function loginService($http, authenticationService, loginUrl) {
        return {
            login: login
        };

        function login(data) {
            return $http({
                method: 'POST',
                url: loginUrl,
                data: data
            }).then((response) => {
                if (response.data.isValidUser) {
                    let id = response.data.userId;
                    let type =response.data.type;
                    let permissions = { browse: response.data.browse, upload: response.data.upload };

                    authenticationService.change(id, type, permissions);
                }

                return response.data;
            }).catch((rejection) => {
                return rejection;
            });

        }
    }
})(window.angular);