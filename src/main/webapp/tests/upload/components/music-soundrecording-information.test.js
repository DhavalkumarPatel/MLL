
'use strict';

describe("Music Ownership Information form Controller:", function() {
    beforeEach(module('mllApp.upload'));

    let ctrl;


    let onNext = () => {
    };
    let onPrevious = () => {
    };

    beforeEach(inject(function ($controller) {
        ctrl = $controller('MusicSoundInformationFormController', {},

            {onNext: onNext, onPrevious: onPrevious,
                data:{soundOwners:[]},
                soundForm:{
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
        expect(ctrl.soundForm).toBeDefined();
    });

    it("'addSongwriter' should be defined", function () {
        expect(ctrl.addOwner).toBeDefined();
    });

    it("'addOwner' should call 'addOwner' and add new fields for writer information", function () {
        spyOn(ctrl,'addOwner');

        ctrl.addOwner();

        expect(ctrl.addOwner).toHaveBeenCalled();
    });

    it("'addOwner should add  extra fields, check for the length of the array'", function () {

        expect(ctrl.data.soundOwners).toBeDefined();
        let before_add = ctrl.data.soundOwners.length;

        ctrl.addOwner();

        expect(ctrl.data.soundOwners.length).toEqual(before_add+1);


    });

    it("'removeOwner' should be defined", function () {
        expect(ctrl.removeOwner).toBeDefined();
    });

    it("'removeOwner' should be a function", function () {
        expect(typeof ctrl.removeOwner).toBe('function');
    });

    it("'removeOwner' should call 'removeOwner'", function () {
        spyOn(ctrl, 'removeOwner');

        ctrl.removeOwner();

        expect(ctrl.removeOwner).toHaveBeenCalled();
    });


    it("'removeOwner' should remove a field ", function () {
        expect(ctrl.data.soundOwners).toBeDefined();
        let before_add = ctrl.data.soundOwners.length;
        ctrl.addOwner();
        ctrl.addOwner();
        let after_add = ctrl.data.soundOwners.length;
        ctrl.removeOwner(1);

        expect(ctrl.data.soundOwners.length).toEqual(after_add-1);
    });




    it("'onNext' should be a function", function () {
        expect(typeof ctrl.onNext).toBe('function');
    });


    it("'onPrevious' should be a function", function () {
        expect(typeof ctrl.onPrevious).toBe('function');
    });


    it("'submit' function shouldn't call 'onNext'", function() {
        spyOn(ctrl, 'onNext');

        ctrl.soundForm.$invalid = true;

        ctrl.submit();

        expect(ctrl.soundForm.$submitted).toBeTruthy();
        expect(ctrl.onNext.calls.any()).toBeFalsy();
    });

    it("'submit' function shouldn call 'onNext'", function() {
        spyOn(ctrl, 'onNext');

        ctrl.soundForm.$invalid = false;

        ctrl.submit();

        expect(ctrl.soundForm.$submitted).toBeFalsy();
        expect(ctrl.onNext).toHaveBeenCalled();
    });

    it("'reset' function should call 'onPrevious'", function() {
        spyOn(ctrl, 'onPrevious');

        ctrl.reset();

        expect(ctrl.onPrevious).toHaveBeenCalled();
    });
});
