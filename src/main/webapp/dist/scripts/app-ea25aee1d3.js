(function (angular) {
    'use strict';

    angular.module('mllApp',
        [
            'mllApp.shared', 'mllApp.header', 'mllApp.footer', 'mllApp.home', 'mllApp.login', 'mllApp.registration',
            'mllApp.upload', 'ui.router'
        ]);
})(window.angular);
(function(angular) {
    'use strict';

    angular
        .module('mllApp')
        .run(run);

    run.$inject = ['authenticationService'];

    function run(authenticationService) {
        authenticationService.check();
    }
})(window.angular);
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
                                if (response.data.isValid) deferred.resolve($stateParams.token);

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
                    left: { template: 'Profile Information... To Be Implemented...' },
                    center: { template: 'Community Wall... To Be Implemented...' },
                    right: {
                        controller: 'UserFeaturesController as ctrl',
                        templateProvider: function ($templateCache) {
                            return $templateCache.get('user-profile-right.view.html');
                        }
                    }
                },
                resolve: {
                    userId: function($state, $stateParams, $q, $timeout, authenticationService) {
                        let deferred = $q.defer();

                        $timeout(() => {
                            if (!authenticationService.details.isAuth) {
                                $state.go('login');
                                deferred.reject();
                            }

                            else deferred.resolve(+$stateParams.id);
                        }, 0);

                        return deferred.promise;
                    }
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
                            if (!authenticationService.details.isAuth) {
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

(function (angular) {
    'use strict';

    angular
        .module('mllApp')
        .directive('mllApplication', mllApplication);

    function mllApplication() {
        return {
            restrict: 'AE',
            scope: {},
            controller: 'ApplicationController',
            controllerAs: 'ctrl',
            templateUrl: 'app.template.html'
        };
    }

})(window.angular);
(function (angular) {
    'use strict';

    angular.module('mllApp.header', ['mllApp.shared', 'mllApp.templates']);
})(window.angular);
(function(angular){
    'use strict';

    let loginLink = { text: 'Log In', href: 'login' };

    let logoutLink = { text: 'Log Out' };

    angular
        .module('mllApp.header')
        .constant('loginLink', loginLink)
        .constant('logoutLink', logoutLink);
})(window.angular);
(function (angular){
    'use strict';

    angular
        .module('mllApp.header')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$state', 'loginLink', 'logoutLink', 'authenticationService'];

    function HeaderController($state, loginLink, logoutLink, authenticationService) {
        this.authService = authenticationService;

        this.loginLink = loginLink;
        this.logoutLink = logoutLink;

        this.logout = () => {
            this.authService.clear();

            $state.go('login');
        }
    }
})(window.angular);

(function (angular){
    'use strict';

    angular
        .module('mllApp.header')
        .directive('mllHeader', mllHeader);

    function mllHeader() {
        return {
            restrict: 'AE',
            scope: {},
            controller: 'HeaderController',
            controllerAs: 'ctrl',
            templateUrl: 'header.template.html',
            bindToController: {
                navLinks: '=',
                homeLink: '='
            }
        };
    }

})(window.angular);
(function (angular) {
    'use strict';

    angular.module('mllApp.footer', ['mllApp.templates']);

})(window.angular);
(function (angular) {
    'use strict';

    angular.module('mllApp.login', ['mllApp.shared', 'mllApp.templates']);
})(window.angular);
(function(angular){
    'use strict';

    let loginUrl = '/MLL/LoginServlet';

    angular
        .module('mllApp.login')
        .constant('loginUrl', loginUrl);
})(window.angular);
(function(angular){
    'use strict';

    angular
        .module('mllApp.login')
        .controller('LoginController', LoginController);

    function LoginController() { }
})(window.angular);
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
(function (angular) {
    'use strict';

    angular
        .module('mllApp.login')
        .controller('CommonLoginFormController', CommonLoginFormController);

    CommonLoginFormController.$inject = ['$state', 'loginService'];

    function CommonLoginFormController($state, loginService) {
        this.service = loginService;

        this.login = () => {
            if (this.loginForm.$invalid) this.loginForm.$submitted = true;

            else {
                this.service.login(this.data)
                    .then((data) => {
                        this.processResponse(data);
                    })
                    .catch(() => { });
            }
        };

        this.processResponse = (data) => {
            if (data.isValidUser) this.redirect(data.userId, data.type);

            else this.displayError(data.errorMessage);
        };

        this.redirect = (id, type) => {
            $state.go(type, { id: id });
        };

        this.displayError = (errorMessage) => {
            this.loginForm.$serverError = true;
            this.errorMessage = errorMessage;
        };
    }
})(window.angular);
(function (angular) {
    'use strict';

    angular
        .module('mllApp.login')
        .directive('mllCommonLoginForm', mllCommonLoginForm);

    function mllCommonLoginForm() {
        return {
            restrict: 'AE',
            replace: true,
            scope: {},
            controller: 'CommonLoginFormController',
            controllerAs: 'ctrl',
            templateUrl: 'common-login-form.template.html'
        };
    }
})(window.angular);
(function (angular) {
    'use strict';

    angular.module('mllApp.registration', ['mllApp.shared', 'mllApp.templates']);
})(window.angular);
(function(angular){
    'use strict';

    let registrationUrl = '/MLL/RegistrationServlet';

    angular
        .module('mllApp.registration')
        .constant('registrationUrl', registrationUrl);
})(window.angular);
(function(angular){
    'use strict';

    angular
        .module('mllApp.registration')
        .controller('UserRegistrationController', UserRegistrationController);

    UserRegistrationController.$inject = ['token'];

    function UserRegistrationController(token) {
        this.data = { inviteToken: token };
    }
})(window.angular);
(function(angular) {
    'use strict';

    angular
        .module('mllApp.registration')
        .factory('registrationService', registrationService);

    registrationService.$inject = ['$http', 'authenticationService', 'registrationUrl'];

    function registrationService($http, authenticationService, registrationUrl) {
        return {
            register: register
        };

        function createConfig(data, type) {
            data.type = type;

            let httpConfig = {
                method: 'POST',
                url: registrationUrl,
                data: data
            };

            return httpConfig;
        }

        function register(data) {
            return $http(createConfig(data, type)).then((response) => {
                if (response.data.isRegistered) {
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

(function (angular) {
    'use strict';

    angular
        .module('mllApp.registration')
        .controller('UserRegistrationFormController', UserRegistrationFormController);



    function UserRegistrationFormController() {

        this.genres = ['Alternative', 'Blues', 'Children\'s Music', 'Christian & Gospel', 'Comedy', 'Classical',
            'Country', 'Dance', 'Electronic', 'Hip - Hop / Rap', 'Pop', 'Jazz', 'Latino', 'R & B / Soul', 'Reggae',
            'Metal', 'Rock', 'Singer / Songwriter', 'Folk / Americana', 'Funk' ];



        this.selectGenre = (genre) => { if(!genre) this.data.twoGenre = null; };

        this.genders = [{label:'MALE',id:'1'},{label:'FEMALE',id:'2'}];

        this.selectGender = {label:'MALE',id:'1'}; //default

        this.submit = () => {
            if (this.registerForm.$invalid) this.registerForm.$submitted = true;
            else {
                alert("form successful");
                this.onNext();
            }
        };


    }
})(window.angular);

(function (angular) {
    'use strict';

    angular
        .module('mllApp.registration')
        .directive('mllUserRegistrationForm', mllUserRegistrationForm);

    function mllUserRegistrationForm() {
        return {
            restrict: 'AE',
            replace: true,
            scope: {},
            controller: 'UserRegistrationFormController',
            controllerAs: 'ctrl',
            templateUrl: 'user-registration-form.template.html'
        };
    }
})(window.angular);
(function(angular){
    'use strict';

    angular.module('mllApp.home', ['mllApp.shared', 'mllApp.templates', 'ui.bootstrap']);
})(window.angular);
(function (angular) {
    'use strict';

    angular
        .module('mllApp.home')
        .controller('UserFeaturesController', UserFeaturesController);

    UserFeaturesController.$inject = ['userId'];

    function UserFeaturesController(userId) {
        this.userId = userId;
    }
})(window.angular);


(function (angular) {
    'use strict';

    angular
        .module('mllApp.home')
        .controller('InviteFormController', InviteFormController);

    InviteFormController.$inject = ['$timeout', 'inviteTokenService'];

    function InviteFormController($timeout, inviteTokenService) {
        this.inviteService = inviteTokenService;

        this.data = {};

        this.types = [
            { label: 'General User', value: 'user' },
            { label: 'Musician', value: 'musician' }
        ];

        this.invite = () => {
            if (this.form.$invalid) this.form.$submitted = true;

            else {
                this.inviteService.generateToken(+this.userId, this.data.type, this.data.email)
                    .then((response) => {
                        this.message = response.data.message;
                        this.isGenerated = response.data.isGenerated;

                        this.isOpen = true;

                        this.data.type = '';
                        this.data.email = '';
                        this.form.$submitted = false;

                        $timeout(() => this.isOpen = false, 5000);
                    })
                    .catch((rejection) => {

                    });
            }
        };
    }
})(window.angular);


(function (angular) {
    'use strict';

    angular
        .module('mllApp.home')
        .directive('mllInviteForm', mllInviteForm);

    function mllInviteForm() {
        return {
            restrict: 'AE',
            replace: true,
            scope: {},
            controller: 'InviteFormController',
            controllerAs: 'ctrl',
            templateUrl: 'invite-form.template.html',
            bindToController: {
                userId: '@'
            }
        };
    }
})(window.angular);


(function (angular) {
    'use strict';

    angular.module('mllApp.picker', ['mllApp.templates']);

})(window.angular);
(function (angular) {
    'use strict';

    angular
        .module('mllApp.picker')
        .controller('HddFileReaderController', HddFileReaderController);

    function HddFileReaderController() {
        this.change = (e) => {
            let file = e.target.files[0];

            this.onSelect({ fileInformation: { isDirect: true, file: file } });
        };
    }
})(window.angular);

(function (angular) {
    'use strict';

    angular
        .module('mllApp.picker')
        .directive('mllHddFileReader', mllHddFileReader);

    function mllHddFileReader() {
        return {
            restrict: 'AE',
            replace: true,
            scope: {},
            controller: 'HddFileReaderController',
            controllerAs: 'ctrl',
            bindToController: {
                onSelect: '&'
            },
            templateUrl: 'hdd-file-reader.template.html',
            link: _link
        };

        function _link(scope, elem, attrs, ctrl) {
            let input = elem.find('input[type="file"]');

            input.on('change', (e) => {
                scope.$apply(() => ctrl.change(e));
            });
        }
    }
})(window.angular);
(function (angular) {
    'use strict';

    angular
        .module('mllApp.picker')
        .controller('DropboxFileReaderController', DropboxFileReaderController);

    function DropboxFileReaderController() {

    }
})(window.angular);
(function (angular) {
    'use strict';

    angular
        .module('mllApp.picker')
        .directive('mllDropboxFileReader', mllDropboxFileReader);

    function mllDropboxFileReader() {
        return {
            restrict: 'AE',
            replace: true,
            scope: {},
            controller: function() {},
            controllerAs: 'ctrl',
            bindToController: {
                formats: '=',
                onSelect: '&'
            },
            templateUrl: 'dropbox-file-reader.template.html',
            link: link
        };

        function link(scope, elem, attr, ctrl) {
            ctrl.select = () => {
                let options = {
                    success: (files) => {
                        scope.$apply(() =>
                            ctrl.onSelect({ fileInformation : { isDirect: false, file: files[0] } }));
                    },
                    linkType: 'direct',
                    multiselect: false,
                    extensions: ctrl.formats
                };

                Dropbox.choose(options);
            };
        }
    }
})(window.angular);
(function (angular) {
    'use strict';

    angular
        .module('mllApp.picker')
        .controller('FileSelectorController', FileSelectorController);

    function FileSelectorController() {
        this.selectHdd = (fileInformation) => {
            this.selectedFile = fileInformation.file.name;
            this.onSelectHdd({ fileInformation: fileInformation });
        };

        this.selectDropbox = (fileInformation) => {
            this.selectedFile = fileInformation.file.name;
            this.onSelectDropbox({ fileInformation: fileInformation });
        };
    }
})(window.angular);
(function (angular) {
    'use strict';

    angular
        .module('mllApp.picker')
        .directive('mllFileSelector', mllFileSelector);

    function mllFileSelector() {
        return {
            restrict: 'AE',
            replace: true,
            scope: {},
            controller: 'FileSelectorController',
            controllerAs: 'ctrl',
            bindToController: {
                formats: '=',
                onSelectHdd: '&',
                onSelectDropbox: '&'
            },
            templateUrl: 'file-selector.template.html'
        };
    }
})(window.angular);
(function (angular) {
    'use strict';

    angular.module('mllApp.upload', ['mllApp.picker', 'mllApp.templates', 'ui.bootstrap']);

})(window.angular);
(function(angular){
    'use strict';

    let musicFormats = ['.mp3', '.wav'];

    let musicGenres = ['Alternative', 'Blues', 'Children\'s Music', 'Christian & Gospel', 'Comedy', 'Classical',
        'Country', 'Dance', 'Electronic', 'Hip - Hop / Rap', 'Pop', 'Jazz', 'Latino', 'R & B / Soul', 'Reggae',
        'Metal', 'Rock', 'Singer / Songwriter', 'Folk / Americana', 'Funk' ];

    let musicForms = {
        current: 0,
        data: [
            { title: 'License Agreement', isActive: true, isDisabled: false },
            { title: 'Song Selection', isActive: false, isDisabled: true },
            { title: 'General Information', isActive: false, isDisabled: true },
            { title: 'Ownership Information', isActive: false, isDisabled: true },
            { title: 'Sound Ownership Information', isActive: false, isDisabled: true }
        ]
    };

    let musicData = {
        fileInformation: { name: '', file: null },
        generalInformation: {
            title: '',
            artists: [
                { name: '' }
            ],
            beatRate: 0,
            primaryGenre: '',
            secondaryGenre: ''
        },
        ownershipInformation: {
            songwriters: [
                { name: '', primaryEmail: '', primaryPhone: '', secondaryPhone: '' }
            ],
            copyright: '',
            pubCompany: '',
            pro: ''
        },
        soundInformation: {
            soundOwners: [
                { name: '', primaryEmail: '', primaryPhone: '', secondaryPhone: '' }
            ]
        }
    };

    let musicSize = 10 * 1024 * 1024;

    let musicUrl = {
        direct: '/MLL/SubmissionServlet',
        cloud: '/MLL/SubmissionServlet'
    };

    angular
        .module('mllApp.upload')
        .constant('musicFormats', musicFormats)
        .constant('musicGenres', musicGenres)
        .constant('musicForms', musicForms)
        .constant('musicData', musicData)
        .constant('musicSize', musicSize)
        .constant('musicUrl', musicUrl);
})(window.angular);
(function(angular){
    'use strict';

    angular
        .module('mllApp.upload')
        .factory('musicUploadService', musicUploadService);

    musicUploadService.$inject = ['$http', 'musicUrl'];

    function musicUploadService($http, musicUrl) {
        let service = {
            submitCloud: (data) => {
                return $http({
                    url: musicUrl.direct,
                    method: 'POST',
                    data: data,
                    contentType: 'application/json'
                });
            },

            submitDirect: (data, fileProp) => {
                let fd = new FormData();

                Object.keys(data).forEach((key) =>
                    fd.append(key, (key === fileProp) ? data[key] : JSON.stringify(data[key])));

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
(function (angular) {
    'use strict';

    angular
        .module('mllApp.upload')
        .controller('MusicAgreementFormController', MusicAgreementFormController);

    function MusicAgreementFormController() {
        this.form = { invalid: true, submitted: false };

        this.validate = (isChecked) => this.form.invalid = !isChecked;

        this.submit = () => {
            if (this.form.invalid) this.form.submitted = true;
            else this.onNext();
        };
    }
})(window.angular);
(function (angular) {
    'use strict';

    angular
        .module('mllApp.upload')
        .directive('mllMusicAgreementForm', mllMusicAgreementForm);

    function mllMusicAgreementForm() {
        return {
            restrict: 'AE',
            scope: {},
            controller: 'MusicAgreementFormController',
            controllerAs: 'ctrl',
            bindToController: {
                onNext: '&'
            },
            templateUrl: 'music-agreement-form.template.html'
        };
    }
})(window.angular);
(function (angular) {
    'use strict';

    angular
        .module('mllApp.upload')
        .controller('MusicFileFormController', MusicFileFormController);

    MusicFileFormController.$inject = ['musicFormats', 'musicSize'];

    function MusicFileFormController(musicFormats, musicSize) {
        this.size = musicSize;
        this.formats = musicFormats;

        // Replication of Angular Form Behaviour
        this.form = {
            invalid: true,
            submitted: false,
            errors: {
                size: false,
                format: false,
                required: true
            }
        };

        this.validateFormat = (fileName) =>
            this.formats.includes(fileName.slice(fileName.lastIndexOf('.')));

        this.validateSize = (size) => size <= this.size;

        this.selectHdd = (fileInformation) => {
            this.form.errors.size = !this.validateSize(fileInformation.file.size);
            this.form.errors.format = !this.validateFormat(fileInformation.file.name);
            this.form.errors.required = false;

            this.form.invalid = this.form.errors.size || this.form.errors.format;

            if (!this.form.invalid) this.data = fileInformation;

        };

        this.selectDropbox = (fileInformation) => {
            this.form.invalid = false;

            this.data = fileInformation;
        };

        this.submit = () => {
            if (this.form.invalid) this.form.submitted = true;
            else this.onNext();
        };

        this.reset = () => this.onPrevious();
    }
})(window.angular);
(function (angular) {
    'use strict';

    angular
        .module('mllApp.upload')
        .directive('mllFileForm', mllFileForm);

    function mllFileForm() {
        return {
            restrict: 'AE',
            replace: true,
            scope: {},
            controller: 'MusicFileFormController',
            controllerAs: 'ctrl',
            bindToController: {
                data: '=',
                onNext: '&',
                onPrevious: '&'
            },
            templateUrl: 'music-file-form.template.html'
        };
    }
})(window.angular);
(function (angular) {
    'use strict';

    angular
        .module('mllApp.upload')
        .controller('MusicGeneralInformationFormController', MusicGeneralInformationFormController);

    MusicGeneralInformationFormController.$inject = ['musicGenres'];

    function MusicGeneralInformationFormController(musicGenres) {

        this.genres = musicGenres;

        this.addArtist = () => this.data.artists.push({ name: '' });

        this.removeArtist = (i) => this.data.artists.splice(i, 1);

        this.agreement = () => this.onAgree({ isChecked: this.isChecked});

        this.selectGenre = (genre) => { if(!genre) this.data.secondaryGenre = null; };

        this.submit = () => {
            if (this.generalForm.$invalid) this.generalForm.$submitted = true;
            else this.onNext();
        };

        this.reset = () => this.onPrevious();

    }
})(window.angular);
(function (angular) {
    'use strict';

    angular
        .module('mllApp.upload')
        .directive('mllMusicGeneralInformationForm', mllMusicGeneralInformationForm);

    function mllMusicGeneralInformationForm() {
        return {
            restrict: 'AE',
            replace: true,
            scope: {},
            controller: 'MusicGeneralInformationFormController',
            controllerAs: 'ctrl',
            bindToController: {
                data: '=',
                onNext: '&',
                onPrevious:'&'
            },
            templateUrl: 'music-general-information-form.template.html'
        };
    }
})(window.angular);
(function (angular) {
    'use strict';

    angular
        .module('mllApp.upload')
        .controller('MusicOwnerInformationFormController', MusicOwnerInformationFormController);

    function MusicOwnerInformationFormController() {

        this.addWriter = () => this.data.songwriters.push({
            name: '', primaryPhone: '', secondaryPhone: '', primaryEmail: '', secondaryEmail: ''
        });

        this.removeWriter = (i) => this.data.songwriters.splice(i, 1);

        this.submit = () => {
            if (this.ownerForm.$invalid) this.ownerForm.$submitted = true;
            else this.onNext();
        };

        this.reset = () => this.onPrevious();

    }
})(window.angular);
(function (angular) {
    'use strict';

    angular
        .module('mllApp.upload')
        .directive('mllMusicOwnerInformationForm', mllMusicOwnerInformationForm);

    function mllMusicOwnerInformationForm() {
        return {
            restrict: 'AE',
            replace: true,
            scope: {},
            controller: 'MusicOwnerInformationFormController',
            controllerAs: 'ctrl',
            bindToController: {
                data: '=',
                onNext: '&',
                onPrevious:'&'
            },
            templateUrl: 'music-owner-information-form.template.html'
        };
    }
})(window.angular);
(function (angular) {
    'use strict';

    angular
        .module('mllApp.upload')
        .controller('MusicSoundInformationFormController', MusicSoundInformationFormController);

    function MusicSoundInformationFormController() {

        this.addOwner = () => this.data.soundOwners.push({
            name: '', primaryPhone: '', secondaryPhone: '', primaryEmail: '', secondaryEmail: ''
        });

        this.removeOwner = (i) => this.data.soundOwners.splice(i, 1);

        this.copyOwners = () => {
            if (this.isIdentical) {
                this.data.soundOwners = angular.copy(this.ownersFn());
            }
        };

        this.submit = () => {
            if (this.soundForm.$invalid) { this.soundForm.$submitted = true; }
            else this.onNext();
        };

        this.reset = () => this.onPrevious();

    }
})(window.angular);
(function (angular) {
    'use strict';

    angular
        .module('mllApp.upload')
        .directive('mllMusicSoundInformationForm', mllMusicSoundInformationForm);

    function mllMusicSoundInformationForm() {
        return {
            restrict: 'AE',
            replace: true,
            scope: {},
            controller: 'MusicSoundInformationFormController',
            controllerAs: 'ctrl',
            bindToController: {
                data: '=',
                ownersFn: '&',
                onNext: '&',
                onPrevious: '&'
            },
            templateUrl: 'music-sound-information-form.template.html'
        };
    }
})(window.angular);
(function (angular) {
    'use strict';

    angular
        .module('mllApp.upload')
        .controller('MusicFileUploaderController', MusicFileUploaderController);

    MusicFileUploaderController.$inject = ['musicForms', 'musicData', 'musicUploadService'];

    function MusicFileUploaderController(musicForms, musicData, musicUploadService) {
        this.forms = musicForms;

        this.data = musicData;

        this.uploadService = musicUploadService;

        this.next = () => {
            if (this.forms.current < this.forms.data.length - 1) {
                this.forms.data[this.forms.current].isActive = false;

                this.forms.current++;

                this.forms.data[this.forms.current].isActive = true;
                this.forms.data[this.forms.current].isDisabled = false;
            }

            else this.submit();
        };

        this.previous = () => {
            this.forms.data[this.forms.current].isActive = false;

            this.forms.current--;

            this.forms.data[this.forms.current].isActive = true;
        };

        this.prepare = (data) => {
            let obj = {
                generalInformation: data.generalInformation,
                ownershipInformation: data.ownershipInformation,
                soundInformation: data.soundInformation
            };

            obj.isDirect = data.fileInformation.isDirect;
            obj.file = (obj.isDirect) ? data.fileInformation.file : data.fileInformation.file.link;

            return obj;
        };

        this.submit = () => {
            let data = this.prepare(this.data);

            if (data.isDirect)
                this.uploadService.submitDirect(data, 'file')
                    .then((response) => {
                        alert('OK');
                        console.dir(response);
                    })
                    .catch((reject) => {
                        alert('ERROR');
                        console.dir(reject);
                    });

            else
                this.uploadService.submitCloud(data)
                    .then((response) => {
                        alert('OK');
                        console.dir(response);
                    })
                    .catch((reject) => {
                        alert('ERROR');
                        console.dir(reject);
                    });
        };
    }
})(window.angular);
(function (angular) {
    'use strict';

    angular
        .module('mllApp.upload')
        .directive('mllMusicFileUploader', mllMusicFileUploader);

    function mllMusicFileUploader() {
        return {
            restrict: 'AE',
            scope: {},
            controller: 'MusicFileUploaderController',
            controllerAs: 'ctrl',
            templateUrl: 'music-file-uploader.template.html'
        };
    }
})(window.angular);
(function (angular) {
    'use strict';

    angular.module('mllApp.shared', ['mllApp.templates', 'ui.bootstrap', 'ngCookies']);

})(window.angular);
(function (angular) {
    'use strict';

    angular
        .module('mllApp.shared')
        .controller('ScrollableAgreementController', ScrollableAgreementController);

    function ScrollableAgreementController() {
        this.agree = () => this.onAgree({ isChecked: this.isChecked });
    }
})(window.angular);
(function (angular) {
    'use strict';

    angular
        .module('mllApp.shared')
        .directive('mllScrollableAgreement', mllScrollableAgreement);

    function mllScrollableAgreement() {
        return {
            restrict: 'AE',
            transclude: true,
            scope: {},
            controller: 'ScrollableAgreementController',
            controllerAs: 'ctrl',
            bindToController: {
                onAgree: '&'
            },
            templateUrl: 'scrollable-agreement.template.html',
            link: link
        };

        function link(scope, elem, attrs, ctrl) {
            let doc = elem.find('.agreement__document');

            doc.on('scroll', onScroll);

            function onScroll() {
                let ratio = ($(this).prop('scrollTop') + $(this).prop('offsetHeight')) / $(this).prop('scrollHeight');

                if (ratio === 1) {
                    scope.$apply(() => { ctrl.isScrolled = true; });
                }
            }
        }
    }
})(window.angular);
(function(angular) {
    'use strict';

    angular
        .module('mllApp.shared')
        .factory('AuthDetails', AuthDetails);

    function AuthDetails() {
        class AuthenticationDetails {
            constructor() {
                this.isAuth = false;
                this.data = {};
            }

            clear() {
                this.isAuth = false;

                this.data = {};
            }

            change(id, type, permissions) {
                this.isAuth = true;

                this.data.id = id;
                this.data.type = type;
                this.data.permissions = permissions;
            }
        }

        return AuthenticationDetails;
    }
})(window.angular);
(function(angular) {
    'use strict';

    angular
        .module('mllApp.shared')
        .factory('authenticationService', authenticationService);

    authenticationService.$inject = ['$cookies', 'AuthDetails'];

    function authenticationService($cookies, AuthDetails) {
        let cookiesKey = 'mllApp.authDetails';

        return {
            details: new AuthDetails(),
            clear: clear,
            change: change,
            check: check
        };

        function check() {
            let authDetails = $cookies.getObject(cookiesKey);

            if (authDetails) {
                let data = authDetails.data;
                this.details.change(data.id, data.type, data.permissions);
            }
        }

        function clear() {
            $cookies.remove(cookiesKey);

            this.details.clear();
        }

        function change(id, type, permissions) {
            this.details.change(id, type, permissions);

            $cookies.putObject(cookiesKey, this.details);
        }
    }
})(window.angular);
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