/**
 * Created by subbaraju on 1/4/2016.
 */
'use strict';

describe("Music General Information form Controller:", function() {
    beforeEach(module('mllApp.upload'));

    let ctrl, value;

    let AddArtists = (val) => value = val;
    let RemoveArtists = (val) => value = val;
    let SelectGenre = (val) => value = val;
    let submit = (val) => value = val;
    let reset = (val) => value = val;

    beforeEach(inject(function($controller) {
        ctrl = $controller('MusicGeneralInformationFormController', {}, {addArtist: AddArtists });
        value = null;
    }));

    it("'addArtist' should be defined", function() {
        expect(ctrl.addArtist).toBeDefined();
    });

    it("'addArtist' should be a function", function() {
        expect(typeof ctrl.addArtist).toBe('function');
    });

    it("'addArtist' should call 'addArtist'", function() {
        spyOn(ctrl, 'addArtist');

        ctrl.addArtist();

        expect(ctrl.addArtist).toHaveBeenCalled();
    });

    /* it("'addArtist' function should pass '' to 'addArtist'", function() {
     ctrl.name = '';
     ctrl.;

     expect(value.name).toBeNull();
     });*/

//---------------------------------------------------------------------------------------------------------
    beforeEach(inject(function($controller) {
        ctrl = $controller('MusicGeneralInformationFormController', {}, {removeArtist: RemoveArtists });
        value = null;
    }));

    it("'removeArtist' should be defined", function() {
        expect(ctrl.removeArtist).toBeDefined();
    });

    it("'removeArtist' should be a function", function() {
        expect(typeof ctrl.removeArtist).toBe('function');
    });

    it("'removeArtist' should call 'removeArtist'", function() {
        spyOn(ctrl, 'removeArtist');

        ctrl.removeArtist();

        expect(ctrl.removeArtist).toHaveBeenCalled();
    });
//--------------------------------------------------------------------------------------
    // data.artists.push({ name: '' })
    beforeEach(inject(function($controller) {
        ctrl = $controller('MusicGeneralInformationFormController', {}, {selectGenre: SelectGenre });
        value = null;
    }));

    it("'selectGenre' should be defined", function() {
        expect(ctrl.selectGenre).toBeDefined();
    });

    it("'selectGenre' should be a function", function() {
        expect(typeof ctrl.selectGenre).toBe('function');
    });

    it("'removeArtist' should call 'selectGenre'", function() {
        spyOn(ctrl, 'selectGenre');

        ctrl.selectGenre();

        expect(ctrl.selectGenre).toHaveBeenCalled();
    });

//--------------------------------------------------------------------------------------
    /*beforeEach(inject(function($controller) {
     ctrl = $controller('MusicGeneralInformationFormController', {}, {submit: Submit });
     value = null;
     }));

     it("'submit' should be defined", function() {
     expect(ctrl.submit).toBeDefined();
     });

     it("'submit' should be a function", function() {
     expect(typeof ctrl.submit).toBe('function');
     });

     it("'submit' should call 'selectGenre'", function() {
     spyOn(ctrl, 'submit');

     ctrl.submit();

     expect(ctrl.submit).toHaveBeenCalled();
     });*/
});

