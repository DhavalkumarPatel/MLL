'use strict';

describe("Music General Information form Controller:", function() {
    beforeEach(module('mllApp.upload'));

    let ctrl,ctrl2;

    let onNext = () => {};
    let onPrevious = () => {};

    beforeEach(inject(function ($controller) {
        ctrl = $controller('MusicGeneralInformationFormController', {},
            { onNext: onNext, onPrevious: onPrevious,
                generalForm : {
                    $invalid: true,
                    $submitted: false,
                    errors: {
                        required: true
                    }
                },
                data: { artists: [] },
            }
        );}));

    beforeEach(inject(function ($controller) {
        ctrl2 = $controller('MusicGeneralInformationFormController', {},
            {data:{secondaryGenre:null}}
        );}));



    it("'musicGenres' should be injected", function () {
        expect(ctrl.genres).toBeDefined();
        expect(angular.isArray(ctrl.genres)).toBeTruthy();
    });

    it("general form should be defined", function () {
        expect(ctrl.generalForm).toBeDefined();
    });

    it("'addArtist' should be defined", function () {
        expect(ctrl.addArtist).toBeDefined();
    });

    it("'removeArtist' should be defined", function () {
        expect(ctrl.removeArtist).toBeDefined();
    });

    it("'selectGenre' should be defined", function () {
        expect(ctrl.selectGenre).toBeDefined();
    });

    it("'onNext' should be defined", function() {
        expect(ctrl.onNext).toBeDefined();
    });

    it("'onPrevious' should be defined", function() {
        expect(ctrl.onPrevious).toBeDefined();
    });



    it("'addArtist' should be a function", function () {
        expect(typeof ctrl.addArtist).toBe('function');
    });

    it("'removeArtist' should be a function", function () {
        expect(typeof ctrl.removeArtist).toBe('function');
    });

    it("'selectGenre' should be a function", function () {
        expect(typeof ctrl.selectGenre).toBe('function');
    });

    it("'addArtist' should be a function", function () {
        expect(typeof ctrl.onNext).toBe('function');
    });

    it("'addArtist' should be a function", function () {
        expect(typeof ctrl.onPrevious).toBe('function');
    });

    it("'addArtist' should call 'addArtist'", function () {
        spyOn(ctrl, 'addArtist');

        ctrl.addArtist();

        expect(ctrl.addArtist).toHaveBeenCalled();
    });

    it("'addArtist should add an extra field check for the length of the array'", function () {

        expect(ctrl.data.artists).toBeDefined();
        let before_add = ctrl.data.artists.length;

        ctrl.addArtist();

        expect(ctrl.data.artists.length).toEqual(before_add+1);


    });




    it("'removeArtist' should call 'removeArtist'", function () {
        spyOn(ctrl, 'removeArtist');

        ctrl.removeArtist();

        expect(ctrl.removeArtist).toHaveBeenCalled();
    });


    it("'removeArtist' should remove a field ", function () {
        expect(ctrl.data.artists).toBeDefined();
        let before_add = ctrl.data.artists.length;
        ctrl.addArtist();
        ctrl.addArtist();
        let after_add = ctrl.data.artists.length;
        ctrl.removeArtist(1);

        expect(ctrl.data.artists.length).toEqual(after_add-1);
    });

    it("'selectGenre' should call 'selectGenre'", function () {
        spyOn(ctrl2, 'selectGenre');

        ctrl2.selectGenre();

        expect(ctrl2.selectGenre).toHaveBeenCalled();
    });

    it("'selectGenre' parameter cannot be empty,null,NAN ", function () {

        let genre = ' ';

        ctrl2.selectGenre(genre);

        expect(ctrl2.data.secondaryGenre).toBeNull();
        expect(ctrl.generalForm.$invalid).toBeTruthy();
        expect(ctrl.generalForm.errors.required).toBeTruthy();


    });




    it("'submit' function shouldn't call 'onNext'", function() {
        spyOn(ctrl, 'onNext');

        ctrl.generalForm.$invalid = true;

        ctrl.submit();

        expect(ctrl.generalForm.$submitted).toBeTruthy();
        expect(ctrl.onNext.calls.any()).toBeFalsy();
    });

    it("'submit' function shouldn call 'onNext'", function() {
        spyOn(ctrl, 'onNext');

        ctrl.generalForm.$invalid = false;

        ctrl.submit();

        expect(ctrl.generalForm.$submitted).toBeFalsy();
        expect(ctrl.onNext).toHaveBeenCalled();
    });

    it("'reset' function should call 'onPrevious'", function() {
        spyOn(ctrl, 'onPrevious');

        ctrl.reset();

        expect(ctrl.onPrevious).toHaveBeenCalled();
    });



});