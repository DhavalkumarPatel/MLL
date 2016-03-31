(function(){
    'use strict';

    let musicFormats = ['.mp3', '.wav'];
    let musicGenres = [];
    let musicSize = 10 * 1024 * 1024;

    angular
        .module('mllApp.upload')
        .constant('musicFormats', musicFormats)
        .constant('musicGenres', musicGenres)
        .constant('musicSize', musicSize);
})();