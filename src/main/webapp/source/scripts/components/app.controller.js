(function (angular) {
    'use strict';

    angular
        .module('mllApp')
        .controller('ApplicationController', ApplicationController);

    ApplicationController.$inject = ['$http'];

    function ApplicationController($http) {
        this.homeLink = { text: 'Home', href: '/profile' };

        this.navigationLinks = [
            { text: 'People', href: '/people' },
            { text: 'Music', href: '/misuc' }
        ];

        this.maxSize = 10 * 1024 * 1024;
        this.availableFormats = ['.mp3', '.pdf'];

        this.selectFile = (fileInformation) => {
            console.dir(fileInformation);
            this.data.isLink = fileInformation.isLink;
            this.data.file = fileInformation.data;
        };

        this.data = {


            generalInformation: {
                title: 'Awesome Test Song',
                artists: [{name: 'Pavel Chernikov'}, {name: 'Dhaval Patel'}],
                beatRate: 300,
                genres: ['Pop', 'Rock']
            },

            ownershipInformation: {
                songwriters: [
                    {
                        name: 'Pavel Chernikov',
                        primaryEmail: 'chernikov.p@husky.neu.edu',
                        primaryPhone: '123-123-1234',
                        secondaryPhone: '321-321-4321'
                    },
                    {
                        name: 'Dhaval Patel',
                        primaryEmail: 'patel.dha@husky.neu.edu',
                        secondaryEmail: 'patel.dha@gmail.com',
                        primaryPhone: '123-123-1234'
                    }],
                copyright: 'SC123',
                pubCompany: 'Test Company',
                pbo: 'test123'
            },

            soundInformation: {
                soundOwners: [
                    {
                        name: 'Pavel Chernikov',
                        primaryEmail: 'chernikov.p@husky.neu.edu',
                        primaryPhone: '123-123-1234',
                        secondaryPhone: '321-321-4321'
                    },
                    {
                        name: 'Dhaval Patel',
                        primaryEmail: 'patel.dha@husky.neu.edu',
                        secondaryEmail: 'patel.dha@gmail.com',
                        primaryPhone: '123-123-1234'
                    }
                ]
            }
        };

        this.prev = () => alert('BACK');

        this.next = () => alert('NEXT');

        this.writers = () => this.ownerData.songwriters;

        this.submit = () => {
            let data;

            if (this.data.isLink !== false) {
                data = this.data;
                
                $http({
                	url: "/MediaLicencingLab/SubmissionServlet",
                	method: "POST",
                	data:  data,
                	contentType: "application/json"
                }).success(function (data, status) {
                    alert('OK');
                }).catch(function () {
                    alert('FAIL!');
                });
            }

            else {
                data = new FormData();
                Object.keys(this.data).forEach( (key) => data.append(key, this.data[key]));
                
                $http.post("/MediaLicencingLab/SubmissionServlet", data,
                    {
                        transformRequest: angular.identity,
                        headers: { 'Content-Type': undefined }
                    }).success(function (data, status) {
                    alert('OK');
                }).catch(function () {
                    alert('FAIL!');
                });
            }
        };
    }

})(window.angular);
