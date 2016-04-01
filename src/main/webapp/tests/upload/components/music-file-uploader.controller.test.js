'use strict';

describe("Music File Uploader Controller:", function() {
    beforeEach(module('mllApp.upload'));

    let ctrl, q;

    let directData = {
        fileInformation: {
            isDirect: true,
            file: { name: 'sample.mp3', size: 1000 }
        },
        generalInformation: {},
        ownershipInformation: {},
        soundInformation: {}
    };

    let cloudData = {
        fileInformation: {
            isDirect: false,
            file: { name: 'sample.mp3', link: 'http://someurl.com' }
        },
        generalInformation: {},
        ownershipInformation: {},
        soundInformation: {}
    };

    beforeEach(inject(function($controller, $q) {
        ctrl = $controller('MusicFileUploaderController', {}, { });
        q = $q;
    }));

    it("'musicForms' should be injected", function() {
        expect(ctrl.forms).toBeDefined();
        expect(angular.isArray(ctrl.forms.data)).toBeTruthy();
    });

    it("'musicData' should be injected", function() {
        expect(ctrl.data).toBeDefined();
    });

    it("'musicUploadService' should be injected", function() {
        expect(ctrl.uploadService).toBeDefined();
    });

    it("'prepare' should reduce 'fileInformation' object to 2 properties 'file' and 'isDirect'",
        function() {
            let result = ctrl.prepare(directData);

            expect(result.isDirect).toBeTruthy();
            expect(result.file).toEqual(directData.fileInformation.file);
        }
    );

    it("'prepare' should reduce 'fileInformation' object to 2 properties 'file' and 'isDirect'",
        function() {
            let result = ctrl.prepare(cloudData);

            expect(result.isDirect).toBeFalsy();
            expect(result.file).toEqual(cloudData.fileInformation.file.link);
        }
    );

    it("'next' call should set the 2nd form as active", function () {
        ctrl.next();

        expect(ctrl.forms.current).toBe(1);

        expect(ctrl.forms.data[0].isActive).toBeFalsy();
        expect(ctrl.forms.data[0].isDisabled).toBeFalsy();

        expect(ctrl.forms.data[1].isActive).toBeTruthy();
        expect(ctrl.forms.data[1].isDisabled).toBeFalsy();

        expect(ctrl.forms.data[2].isActive).toBeFalsy();
        expect(ctrl.forms.data[2].isDisabled).toBeTruthy();
    });

    it("2nd call to 'next' function should set the 3rd form as active", function () {
        ctrl.next();

        expect(ctrl.forms.current).toBe(2);

        expect(ctrl.forms.data[0].isActive).toBeFalsy();
        expect(ctrl.forms.data[0].isDisabled).toBeFalsy();

        expect(ctrl.forms.data[1].isActive).toBeFalsy();
        expect(ctrl.forms.data[1].isDisabled).toBeFalsy();

        expect(ctrl.forms.data[2].isActive).toBeTruthy();
        expect(ctrl.forms.data[2].isDisabled).toBeFalsy();

        expect(ctrl.forms.data[3].isActive).toBeFalsy();
        expect(ctrl.forms.data[3].isDisabled).toBeTruthy();
    });

    it("'previous' call should set the 1st form as active", function () {
        ctrl.previous();

        expect(ctrl.forms.current).toBe(1);

        expect(ctrl.forms.data[0].isActive).toBeFalsy();
        expect(ctrl.forms.data[0].isDisabled).toBeFalsy();

        expect(ctrl.forms.data[1].isActive).toBeTruthy();
        expect(ctrl.forms.data[1].isDisabled).toBeFalsy();

        expect(ctrl.forms.data[2].isActive).toBeFalsy();
        expect(ctrl.forms.data[2].isDisabled).toBeFalsy();
    });

    it("4 other calls to 'next' function should trigger 'submit' function", function () {
        spyOn(ctrl, 'submit');

        ctrl.next();
        ctrl.next();
        ctrl.next();
        ctrl.next();

        expect(ctrl.submit).toHaveBeenCalled();
    });

    it("'submit' function should trigger 'submitCloud' on 'uploadService'", function () {
        ctrl.data = cloudData;

        spyOn(ctrl.uploadService, 'submitCloud').and.returnValue(q.when({}));

        ctrl.submit();

        expect(ctrl.uploadService.submitCloud).toHaveBeenCalled();
    });

    it("'submit' function should trigger 'submitDirect' on 'uploadService'", function () {
        ctrl.data = directData;

        spyOn(ctrl.uploadService, 'submitDirect').and.returnValue(q.when({}));

        ctrl.submit();

        expect(ctrl.uploadService.submitDirect).toHaveBeenCalled();
    });
});