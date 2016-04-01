'use strict';

describe('Music Upload Service:', function () {
    beforeEach(module('mllApp.upload'));

    let httpBackend, service;

    let directData = { isDirect: true, file: {} },
        cloudData = { isDirect: true, file: 'http://someurl.org' },
        respondData;

    let url;

    beforeEach(inject(function (musicUrl) {
        url = musicUrl;
    }));

    beforeEach(inject(function ($injector) {
        httpBackend = $injector.get('$httpBackend');
        httpBackend.when('POST', url.direct).respond('ok');
        httpBackend.when('POST', url.cloud, {
            'Content-Type': undefined
        }).respond('ok');
    }));

    beforeEach(inject(function (musicUploadService) {
        service = musicUploadService;

        service.submitCloud(cloudData).then(function (data) {
            respondData = data;
        });

        service.submitDirect(directData, 'file').then(function (data) {
            respondData = data;
        });
    }));

    it("'submitDirect' should respond with 'ok'", function () {
        service.submitDirect(directData, 'file').then(function (data) {
            respondData = data;
        });

        httpBackend.flush();

        expect(respondData.data).toEqual('ok');
    });

    it("'submitCloud' should respond with 'ok'", function () {
        service.submitCloud(cloudData).then(function (data) {
            respondData = data;
        });

        httpBackend.flush();

        expect(respondData.data).toEqual('ok');
    });
});