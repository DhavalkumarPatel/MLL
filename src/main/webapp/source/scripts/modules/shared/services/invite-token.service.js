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

        function validateToken(type, token) {
            //let d = $q.defer();
            //
            //$timeout(() => d.resolve({ isValid: true }), 100);
            //
            //return d.promise;

            let data = { actionType: 'validate', inviteType: type, token: token };
            return $http({
                method: 'POST',
                url: '/MLL/InviteServlet',
                data: data
            });
        }

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