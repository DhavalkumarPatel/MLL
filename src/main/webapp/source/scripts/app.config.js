(function(angular) {
    'use strict';

    angular
        .module('mllApp')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    left: {
                        template: 'Look, I am a left column!'
                    },
                    center: {
                        template: 'Look, I am a center column!'
                    },
                    right: {
                        template: 'Look, I am a right column!'
                    }
                }
            })
            .state('userRegistration', {
                url: '/user-registration/token/:token',
                views: {
                    left: {
                        template: 'Look, I am a left user registration column!'
                    },
                    center: {
                        template: 'Look, I am a center user registration column!'
                    },
                    right: {
                        template: 'Look, I am a right user registration column!'
                    }
                }
            })
            .state('musicianRegistration', {
                url: '/user-registration/token/:token',
                views: {
                    left: {
                        template: 'Look, I am a left user registration column!'
                    },
                    center: {
                        template: 'Look, I am a center user registration column!'
                    },
                    right: {
                        template: 'Look, I am a right user registration column!'
                    }
                }
            })
            .state('login', {
                url: '/login',
                views: {
                    left: { template: '' },
                    center: {
                        controller: 'LoginController as ctrl',
                        templateProvider: function($templateCache) {
                            return $templateCache.get('login-central.view.html');
                        }
                    },
                    right: { template: '' }
                }
            })
            .state('music', {
                url: '/music',
                views: {
                    left: {
                        template: 'Look, I am a left login column!'
                    },
                    center: {
                        template: 'Look, I am a center login column!'
                    },
                    right: {
                        template: 'Look, I am a right login column!'
                    }
                },
                resolve: {
                    data: function($state, $q, $timeout, authenticationService) {
                        let deferred = $q.defer();

                        $timeout(() => {
                            if (!authenticationService.details.isAuthenticated) {
                                $state.go('login');
                                deferred.reject();
                            }

                            else {
                                deferred.resolve([]);
                            }
                        }, 0);

                        return deferred.promise;
                    }
                }
            });
    }

})(window.angular);