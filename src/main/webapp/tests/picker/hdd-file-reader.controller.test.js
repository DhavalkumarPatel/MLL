'use strict';

describe("HDD File Reader Controller:", function() {
    beforeEach(module('mllApp.picker'));

    let ctrl, value, event;

    let onSelect = (file) => value = file;

    beforeEach(inject(function($controller) {
        ctrl = $controller('HddFileReaderController', {}, { onSelect: onSelect });
        event = { target: { files: ['sample.mp3'] } };
        value = null;
    }));

    it("'onSelect should be defined", function() {
        expect(ctrl.onSelect).toBeDefined();
    });

    it("'onSelect' should be a function", function() {
        expect(typeof ctrl.onSelect).toBe('function');
    });

    it("'change' should call 'onSelect'", function() {
        spyOn(ctrl, 'onSelect');

        ctrl.change(event);

        expect(ctrl.onSelect).toHaveBeenCalled();
    });

    it("'change' function should pass 'sample.mp3' file to 'onSelect' function", function() {
        ctrl.change(event);

        expect(value.file).toEqual('sample.mp3');
    });

    it("'change' function should pass 'sample.wav' file to 'onSelect' function", function() {
        event.target.files[0] = 'sample.wav';
        ctrl.change(event);

        expect(value.file).toEqual('sample.wav');
    });

    it("'change' function should throw an exception if the file isn't passed", function() {
        expect(ctrl.change).toThrow();
    });
});