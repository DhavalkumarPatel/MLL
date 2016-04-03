'use strict';

describe("Music Ownership Information form Controller:", function() {
    beforeEach(module('mllApp.upload'));

    let ctrl;


    let onNext = () => {
    };
    let onPrevious = () => {
    };

    beforeEach(inject(function ($controller) {
        ctrl = $controller('MusicOwnerInformationFormController', {},

            {onNext: onNext, onPrevious: onPrevious,
            data:{songwriters:[]},
                ownerForm:{
                    $invalid: true,
                    $submitted: false,
                    errors: {
                        required: true
                    }
                }
            }
        );
    }));

    it("Owner form should be defined", function () {
        expect(ctrl.ownerForm).toBeDefined();
    });

    it("'addSongwriter' should be defined", function () {
        expect(ctrl.addWriter).toBeDefined();
    });

    it("'addwriter' should call 'addwriter' and add new fields for writer information", function () {
        spyOn(ctrl,'addWriter');

        ctrl.addWriter();

        expect(ctrl.addWriter).toHaveBeenCalled();
    });

    it("'addWriter should add  extra fields, check for the length of the array'", function () {

        expect(ctrl.data.songwriters).toBeDefined();
        let before_add = ctrl.data.songwriters.length;

        ctrl.addWriter();

        expect(ctrl.data.songwriters.length).toEqual(before_add+1);


    });

    it("'removeWriter' should be defined", function () {
        expect(ctrl.removeWriter).toBeDefined();
    });

    it("'removeWriter' should be a function", function () {
        expect(typeof ctrl.removeWriter).toBe('function');
    });

    it("'removeWriter' should call 'removeWriter'", function () {
        spyOn(ctrl, 'removeWriter');

        ctrl.removeWriter();

        expect(ctrl.removeWriter).toHaveBeenCalled();
    });


    it("'removeWriter' should remove a field ", function () {
        expect(ctrl.data.songwriters).toBeDefined();
        let before_add = ctrl.data.songwriters.length;
        ctrl.addWriter();
        ctrl.addWriter();
        let after_add = ctrl.data.songwriters.length;
        ctrl.removeWriter(1);

        expect(ctrl.data.songwriters.length).toEqual(after_add-1);
    });




    it("'onNext' should be a function", function () {
        expect(typeof ctrl.onNext).toBe('function');
    });


    it("'onPrevious' should be a function", function () {
        expect(typeof ctrl.onPrevious).toBe('function');
    });


    it("'submit' function shouldn't call 'onNext'", function() {
        spyOn(ctrl, 'onNext');

        ctrl.ownerForm.$invalid = true;

        ctrl.submit();

        expect(ctrl.ownerForm.$submitted).toBeTruthy();
        expect(ctrl.onNext.calls.any()).toBeFalsy();
    });

    it("'submit' function shouldn call 'onNext'", function() {
        spyOn(ctrl, 'onNext');

        ctrl.ownerForm.$invalid = false;

        ctrl.submit();

        expect(ctrl.ownerForm.$submitted).toBeFalsy();
        expect(ctrl.onNext).toHaveBeenCalled();
    });

    it("'reset' function should call 'onPrevious'", function() {
        spyOn(ctrl, 'onPrevious');

        ctrl.reset();

        expect(ctrl.onPrevious).toHaveBeenCalled();
    });
});
