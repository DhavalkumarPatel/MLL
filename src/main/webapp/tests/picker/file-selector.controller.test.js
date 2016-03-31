'use strict';

describe("File Selector Controller:", function() {
    beforeEach(module('mllApp.picker'));

    let ctrl;

    let selectedFile;
    let onSelectHdd = (file) => selectedFile = file,
        onSelectDropbox = (file) => selectedFile = file;

    beforeEach(inject(function($controller) {
        ctrl = $controller('FileSelectorController', {},
            { onSelectHdd: onSelectHdd, onSelectDropbox: onSelectDropbox });

        selectedFile = null;
    }));

    it("'onSelectHdd' should be defined", function() {
        expect(ctrl.onSelectHdd).toBeDefined();
    });

    it("'onSelectDropbox' should be defined", function() {
        expect(ctrl.onSelectDropbox).toBeDefined();
    });

    it("'onSelectHdd' should be a function", function() {
        expect(typeof ctrl.onSelectHdd).toBe('function');
    });

    it("'onSelectDropbox' should be a function", function() {
        expect(typeof ctrl.onSelectDropbox).toBe('function');
    });

    it("'selectHdd' should call 'onSelectHdd' and set 'selectedFile' field", function() {
        let file = { name: 'sample.mp3', size: 50000, type: 'audio/mp3' };

        spyOn(ctrl, 'onSelectHdd');

        ctrl.selectHdd(file);

        expect(ctrl.onSelectHdd).toHaveBeenCalled();
        expect(ctrl.selectedFile).toBeDefined();
        expect(ctrl.selectedFile).toEqual('sample.mp3');
    });

    it("'selectDropbox' should call 'onSelectDropbox' and set 'selectedFile' field", function() {
        let file = { name: 'demo.wav', size: 50000, type: 'audio/wav' };

        spyOn(ctrl, 'onSelectDropbox');

        ctrl.selectDropbox(file);

        expect(ctrl.onSelectDropbox).toHaveBeenCalled();
        expect(ctrl.selectedFile).toBeDefined();
        expect(ctrl.selectedFile).toEqual('demo.wav');
    });

    it("'selectHdd' function should pass 'sample.mp3' to 'onSelectHdd'", function() {
        let file = { name: 'sample.mp3', size: 50000, type: 'audio/mp3' };
        ctrl.selectHdd(file);

        expect(selectedFile.file).toBeDefined();
        expect(selectedFile.file.name).toEqual('sample.mp3');
    });

    it("'selectDropbox' function should pass 'demo.wav' to 'onSelectDropbox'", function() {
        let file = { name: 'demo.wav', size: 50000, type: 'audio/wav' };
        ctrl.selectDropbox(file);

        expect(selectedFile.file).toBeDefined();
        expect(selectedFile.file.name).toEqual('demo.wav');
    });
});