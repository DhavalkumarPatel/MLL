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
                    left: { template: 'Home Left Column' },
                    center: { template: 'Home Center Column' },
                    right: { template: 'Home Center Column' }
                }
            })
            .state('userRegistration', {
                url: '/user/registration/token/:token',
                views: {
                    left: { template: '' },
                    center: {
                        controller: 'UserRegistrationController as ctrl',
                        templateProvider: function($templateCache) {
                            return $templateCache.get('user-registration.view.html');
                        }
                    },
                    right: { template: '' }
                },
                resolve: {
                    token: function($state, $stateParams, $q, inviteTokenService) {
                        let deferred = $q.defer();

                        inviteTokenService.validateToken('user', $stateParams.token)
                            .then((response) => {
                                if (response.isValid) deferred.resolve($stateParams.token);

                                else {
                                    $state.go('home');
                                    deferred.reject();
                                }
                            });

                        return deferred.promise;
                    }
                }
            })
            .state('user', {
                url: '/user/profile/id/:id',
                views: {
                    left: { template: 'Look, I am a left user column!' },
                    center: { template: 'Look, I am a center user column!' },
                    right: { template: 'Look, I am a right user column!' }
                }
            })
            .state('musicianRegistration', {
                url: '/musician-registration/token/:token',
                views: {
                    left: { template: '' },
                    center: { template: 'Look, I am a center user registration column!' },
                    right: { template: '' }
                }
            })
            .state('musician', {
                url: '/musician/id/:id',
                views: {
                    left: { template: 'Look, I am a left user registration column!' },
                    center: { template: 'Look, I am a center user registration column!' },
                    right: { template: 'Look, I am a right user registration column!' }
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
                    left: { template: 'Music Left Column' },
                    center: { template: 'Music Center Column' },
                    right: { template: 'Music Right Column' }
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