(function(angular){
    'use strict';

    angular
        .module('mllApp.upload')
        .factory('musicUploadService', musicUploadService);

    musicUploadService.$inject = ['$http', 'musicUrl'];

    function musicUploadService($http, musicUrl) {
        let service = {
            submitDirect: (data) =>
                 $http({
                    url: musicUrl.direct,
                    method: 'POST',
                    data:  data,
                    contentType: 'application/json'
                 }),

            submitCloud: (data) => {
                let fd = new FormData();

                Object.keys(data).forEach( (key) => fd.append(key, data[key]));

                return $http.post(musicUrl.cloud, fd, {
                    transformRequest: angular.identity,
                    headers: {
                        'Content-Type': undefined
                    }
                });
            }
        };

        return service;
    }

})(window.angular);