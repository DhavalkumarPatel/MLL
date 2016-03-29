(function (angular) {
    'use strict';

    angular
        .module('mllApp.upload')
        .controller('MusicGeneralInformationFormController', MusicGeneralInformationFormController);

    function MusicGeneralInformationFormController() {

        this.genres = [
            "Alternative", "Blues", "Children's Music", "Christian & Gospel", "Comedy", "Classical", "Country", "Dance",
            "Electronic", "Hip - Hop / Rap", "Pop", "Jazz", "Latino", "R & B / Soul", "Reggae", "Metal", "Rock",
            "Singer / Songwriter", "Folk / Americana", "Funk"
        ];

        this.addArtist = () => this.data.artists.push({ name: '' });

        this.removeArtist = (i) => this.data.artists.splice(i, 1);

        this.selectGenre = (genre) => { if (!genre) this.data.secondaryGenre = null; };

        this.submit = () => {
            if (this.generalForm.$invalid) this.generalForm.$submitted = true;
            else this.onNext();
        };

        this.reset = () => this.onPrevious();

    }
})(window.angular);