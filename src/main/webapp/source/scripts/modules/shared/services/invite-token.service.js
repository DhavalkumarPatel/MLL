(function(angular) {
    'use strict';

    angular
        .module('mllApp.shared')
        .factory('inviteTokenService', inviteTokenService);

    inviteTokenService.$inject = ['$http', '$q', '$timeout'];

    function inviteTokenService($http, $q, $timeout) {
        return {
            validateToken: validateToken,
            generateToken: generateToken
        };

<<<<<<< HEAD
=======
        function validateToken(type, token) {
            let data = { actionType: 'validate', inviteType: type, token: token };
            return $http({
                method: 'POST',
                url: '/MLL/InviteServlet',
                data: data
            });
        }

>>>>>>> origin/master
        function generateToken(id, type, email) {
            let data = { userId: id, inviteType: type, actionType: 'generate', email: email };

            return $http({
                method: 'POST',
                url: '/MLL/InviteServlet',
                data: data
            });
        }
    }
})(window.angular);