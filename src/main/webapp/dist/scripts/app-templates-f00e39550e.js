angular.module("mllApp.templates",[]).run(["$templateCache",function(e){e.put("app.template.html",'<div class="app"><mll-header nav-links="ctrl.navigationLinks" home-link="ctrl.homeLink"></mll-header><main class="app__main"><div class="container-fluid"><div class="row"><div class="col-sm-3 col-sm-offset-1"><div ui-view="left"></div></div><div class="col-sm-4"><div ui-view="center"></div></div><div class="col-sm-3"><div ui-view="right"></div></div><!--<div>--><!--<mll-music-file-uploader></mll-music-file-uploader>--><!--</div>--></div></div></main><footer class="app__footer"><div class="container">Northeastern University, 2016</div></footer></div>'),e.put("header.template.html",'<header class="app__header"><nav class="navbar navbar-default navbar-static-top"><div class="container-fluid"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#search-bar" aria-expanded="false"><span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button> <a class="navbar-brand" ng-href="ctrl.homeLink.href" title="{{ctrl.homeLink.text}}"><span class="glyphicon glyphicon-home" aria-hidden="true"></span></a></div><div class="collapse navbar-collapse" id="search-bar"><ul class="nav navbar-nav"><li ng-repeat="link in ctrl.navLinks"><a ui-sref="{{link.href}}"><span ng-bind="link.text"></span></a></li></ul><ul class="nav navbar-nav navbar-right"><li ng-show="!ctrl.authService.details.isAuthenticated"><a ui-sref="{{ctrl.loginLink.href}}"><span ng-bind="ctrl.loginLink.text"></span></a></li><li ng-show="ctrl.authService.details.isAuthenticated"><a ui-sref="{{ctrl.logoutLink.href}}"><span ng-bind="ctrl.logoutLink.text"></span></a></li></ul></div></div></nav><div class="container"><h1>Media Licensing Lab</h1><p></p></div></header>'),e.put("common-login-form.template.html",'<form name="ctrl.loginForm" class="form-horizontal" novalidate><legend>Login</legend><div class="form-group" ng-class="{ \'has-success\': ctrl.loginForm.email.$valid && ctrl.loginForm.$submitted,\r\n                     \'has-error\': ctrl.loginForm.$invalid && ctrl.loginForm.$submitted }"><label class="col-xs-3" for="login-email">E-mail</label><div class="col-xs-9"><input type="email" name="email" class="form-control" id="login-email" ng-model="ctrl.data.email" required><div class="alert alert-danger" role="alert" ng-show="ctrl.loginForm.email.$invalid && ctrl.loginForm.$submitted"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> <span ng-show="ctrl.loginForm.email.$error.email">Please, provide a valid e-mail address! </span><span ng-show="ctrl.loginForm.email.$error.required">Please, provide a e-mail address!</span></div></div></div><hr><div class="form-group has-feedback" ng-class="{ \'has-success\': ctrl.loginForm.password.$valid && ctrl.loginForm.$submitted,\r\n                     \'has-error\': ctrl.loginForm.password.$invalid && ctrl.loginForm.$submitted }"><label for="login-password" class="col-xs-3">Password</label><div class="col-xs-9"><input type="password" name="password" class="form-control" id="login-password" ng-model="ctrl.data.password" ng-minlength="8" required><div class="alert alert-danger" role="alert" ng-show="ctrl.loginForm.password.$invalid && ctrl.loginForm.$submitted"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> <span ng-show="ctrl.loginForm.password.$error.required">Please, provide a password! </span><span ng-show="ctrl.loginForm.password.$error.minlength">Please, provide a password with at least 8 symbols!</span></div></div></div><div class="row"><div class="col-xs-12"><div class="alert alert-danger" role="alert" ng-show="ctrl.loginForm.$serverError"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> <span ng-bind="ctrl.errorMessage"></span></div></div></div><div class="form-group"><div class="col-xs-12"><button class="btn btn-block btn-primary" ng-click="ctrl.login()">Log In</button></div></div></form>'),e.put("login-central.view.html","<div><mll-common-login-form></mll-common-login-form></div>"),e.put("dropbox-file-reader.template.html",'<div class="form-group"><a class="btn btn-block btn-social btn-dropbox" ng-click="ctrl.select()"><span class="fa fa-dropbox"></span> <span>Select from a Dropbox</span></a></div>'),e.put("file-selector.template.html",'<div><mll-hdd-file-reader on-select="ctrl.selectHdd(fileInformation)"></mll-hdd-file-reader><mll-dropbox-file-reader formats="ctrl.formats" on-select="ctrl.selectDropbox(fileInformation)"></mll-dropbox-file-reader><div class="form-group"><input typ="text" class="form-control" ng-model="ctrl.selectedFile" placeholder="Selected File..." disabled="disabled"></div></div>'),e.put("hdd-file-reader.template.html",'<div class="form-group"><span class="btn btn-block btn-default btn-social btn-file"><span class="glyphicon glyphicon-hdd"></span> <span>Select from a Hard Drive</span> <input type="file"></span></div>'),e.put("scrollable-agreement.template.html",'<div class="agreement"><div class="agreement__document" ng-transclude></div><div class="text-center"><label><div class="agreement__checkbox-wrapper" uib-tooltip="Please, read the agreement!" tooltip-placement="top" tooltip-enable="!ctrl.isScrolled"><input type="checkbox" ng-disabled="!ctrl.isScrolled" ng-model="ctrl.isChecked" ng-change="ctrl.agree()"></div><span>I agree to the Terms & Conditions</span></label></div></div>'),e.put("music-agreement-form.template.html",'<form class="form-horizontal form-tab" novalidate><legend></legend><mll-scrollable-agreement on-agree="ctrl.validate(isChecked)"><h3>Agreement</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum quis mi eu luctus. Phasellus posuere ultricies arcu a elementum. Duis et sodales neque. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec at eleifend leo. Praesent elementum a ex nec bibendum. Etiam porta nec nisl ac interdum. Quisque sed dolor non metus blandit mollis. Nunc scelerisque urna vitae quam egestas dictum. Integer malesuada ante eget diam scelerisque blandit. Ut sed purus efficitur, viverra eros eget, efficitur justo. Suspendisse id libero sagittis, rhoncus leo fringilla, vulputate felis.</p><p>Proin eget tortor non ante tempor mattis. Curabitur porttitor sodales neque, eget cursus nulla porta ultricies. Mauris diam sapien, dictum sit amet dapibus in, semper nec tellus. Morbi a placerat elit. Ut lorem risus, elementum quis massa id, ullamcorper faucibus lorem. Sed libero justo, mattis quis massa id, mattis euismod diam. Vivamus sem diam, dignissim congue arcu ornare, tempor pharetra ligula. Aenean lobortis, tellus ut ornare rhoncus, turpis ante porta ex, at hendrerit dolor arcu ac ex. Morbi iaculis non augue vel vehicula. Phasellus ut risus euismod, varius tellus tempor, pellentesque nunc. Nullam eget sapien sagittis, dignissim nibh ut, sodales lorem.</p><p>Vivamus et dolor vel nisl egestas sagittis eget sit amet enim. Praesent arcu quam, pharetra nec arcu vel, vestibulum ornare risus. Donec sagittis lacus velit, et cursus elit interdum et. Donec pretium in nulla in viverra. Suspendisse sit amet ipsum ut mauris tincidunt ultricies sit amet et massa. Etiam eget arcu tempus, semper turpis in, condimentum risus. Sed augue turpis, rutrum a mauris eu, sodales scelerisque massa.</p><p>Nunc molestie sit amet ex id sodales. In aliquet risus tortor, in vehicula nunc sodales id. Integer a elit vel urna vestibulum tristique id eget lorem. In et tincidunt nisi. Duis viverra a nisl quis mattis. Donec vitae est sem. Nunc sagittis euismod diam congue efficitur. Nam vel quam erat.</p><p>Nulla eu lectus quis nibh dignissim maximus. Sed bibendum ex ut dolor laoreet elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse ultricies libero at leo rutrum interdum. Praesent nec nisl suscipit, viverra justo sit amet, condimentum libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas rhoncus euismod augue. Nam ultricies mi eget urna ultrices varius. Cras a laoreet sem. Nullam imperdiet, mauris et fermentum porttitor, ipsum augue tincidunt massa, laoreet bibendum nunc ipsum quis arcu. Donec vitae dolor enim.</p></mll-scrollable-agreement><div class="alert alert-danger" role="alert" ng-show="ctrl.form.invalid && ctrl.form.submitted"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> <span>Please, agree with terms & conditions!</span></div><div class="form-group"><div class="col-xs-3 col-xs-offset-9"><button class="btn btn-block btn-primary" ng-click="ctrl.submit()">Next</button></div></div></form>'),e.put("music-file-form.template.html",'<form class="form-horizontal form-tab" novalidate><legend></legend><div class="container"><div><mll-file-selector formats="ctrl.formats" on-select-hdd="ctrl.selectHdd(fileInformation)" on-select-dropbox="ctrl.selectDropbox(fileInformation)"></mll-file-selector><div class="form-group alert alert-danger" role="alert" ng-show="ctrl.form.invalid && ctrl.form.submitted"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> <span ng-show="ctrl.form.errors.required">Please, select a file! </span><span ng-show="ctrl.form.errors.size">Please, select a file which is less than 10MB, if you decided to chose it from Hard Drive! </span><span ng-show="ctrl.form.errors.format">Please, select a file which has appropriate format, if you decided to chose it from Hard Drive!</span></div></div></div><div class="form-group"><div class="col-xs-3 col-xs-offset-6"><button class="btn btn-block btn-default" ng-click="ctrl.reset()">Previous</button></div><div class="col-xs-3"><button class="btn btn-block btn-primary" ng-click="ctrl.submit()">Next</button></div></div></form>'),e.put("music-file-uploader.template.html",'<div><uib-tabset active="ctrl.forms.current" justified="true" type="pills"><uib-tab index="0" heading="{{ctrl.forms.data[0].title}}" disable="ctrl.forms.data[0].isDisabled"><mll-music-agreement-form on-next="ctrl.next()"></mll-music-agreement-form></uib-tab><uib-tab index="1" heading="{{ctrl.forms.data[1].title}}" disable="ctrl.forms.data[1].isDisabled"><mll-file-form on-next="ctrl.next()" on-previous="ctrl.previous()" data="ctrl.data.fileInformation"></mll-file-form></uib-tab><uib-tab index="2" heading="{{ctrl.forms.data[2].title}}" disable="ctrl.forms.data[2].isDisabled"><mll-music-general-information-form data="ctrl.data.generalInformation" on-next="ctrl.next()" on-previous="ctrl.previous()"></mll-music-general-information-form></uib-tab><uib-tab index="3" heading="{{ctrl.forms.data[3].title}}" disable="ctrl.forms.data[3].isDisabled"><mll-music-owner-information-form data="ctrl.data.ownershipInformation" on-next="ctrl.next()" on-previous="ctrl.previous()"></mll-music-owner-information-form></uib-tab><uib-tab index="4" heading="{{ctrl.forms.data[4].title}}" disable="ctrl.forms.data[4].isDisabled"><mll-music-sound-information-form data="ctrl.data.soundInformation" on-next="ctrl.next()" on-previous="ctrl.previous()"></mll-music-sound-information-form></uib-tab></uib-tabset></div>'),e.put("music-general-information-form.template.html",'<form name="ctrl.generalForm" class="form-horizontal form-tab" novalidate><legend>General Information</legend><div class="form-group has-feedback" ng-class="{ \'has-success\': ctrl.generalForm.title.$valid && ctrl.generalForm.$submitted,\r\n                     \'has-error\': ctrl.generalForm.title.$invalid && ctrl.generalForm.$submitted }"><label for="general-title" class="col-xs-2">Song Title:</label><div class="col-xs-10"><input type="text" name="title" class="form-control" id="general-title" ng-model="ctrl.data.title" required autofocus><div class="alert alert-danger" role="alert" ng-show="ctrl.generalForm.title.$invalid && ctrl.generalForm.$submitted"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> <span ng-show="ctrl.generalForm.title.$error.required">Please, provide a song title!</span></div></div></div><hr><div ng-repeat="artist in ctrl.data.artists"><ng-form name="artistForm"><div class="form-group has-feedback" ng-class="{ \'has-success\': artistForm.artist.$valid && ctrl.generalForm.$submitted,\r\n                             \'has-error\': artistForm.artist.$invalid && ctrl.generalForm.$submitted }"><label class="col-xs-2">Artist<span ng-show="$index">&nbsp;#{{$index + 1}}</span>:</label><div class="col-xs-8"><input type="text" name="artist" class="form-control" ng-model="artist.name" required><div class="alert alert-danger" role="alert" ng-show="artistForm.artist.$invalid && ctrl.generalForm.$submitted"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> <span ng-show="artistForm.artist.$error.required">Please, provide an artist name!</span></div></div><div class="col-xs-2 text-right"><a class="btn btn-danger" ng-show="$index" ng-click="ctrl.removeArtist($index)"><span class="glyphicon glyphicon-trash"></span> </a><a class="btn btn-success" ng-click="ctrl.addArtist()"><span class="glyphicon glyphicon-plus-sign"></span></a></div></div></ng-form></div><hr><div class="form-group has-feedback" ng-class="{ \'has-success\': ctrl.generalForm.beatRate.$valid && ctrl.generalForm.$submitted,\r\n                     \'has-error\': ctrl.generalForm.beatRate.$invalid && ctrl.generalForm.$submitted }"><label for="beat-rate" class="col-xs-2">Beat Rate/Minute:</label><div class="col-xs-10"><input type="number" name="beatRate" class="form-control" id="beat-rate" ng-model="ctrl.data.beatRate" min="0" max="320" required><div class="alert alert-danger" role="alert" ng-show="ctrl.generalForm.beatRate.$invalid && ctrl.generalForm.$submitted"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> <span ng-show="ctrl.generalForm.beatRate.$error.required">Please, provide a beat rate! </span><span ng-show="ctrl.generalForm.beatRate.$error.min">Beat rate could not be below zero! </span><span ng-show="ctrl.generalForm.beatRate.$error.max">Beat rate could not exceed 320!</span></div></div></div><div class="form-group has-feedback" ng-class="{ \'has-success\': ctrl.generalForm.agreement.$valid && ctrl.generalForm.$submitted,\r\n                     \'has-error\': ctrl.generalForm.agreement.$invalid && ctrl.generalForm.$submitted }"><label class="col-xs-3">Any Written Agreements :</label><label class="radio-inline"><input type="radio" name="agreement" ng-change="ctrl.agreement()" ng-model="ctrl.isChecked">Yes</label><label class="radio-inline"><input type="radio" name="agreement" ng-change="ctrl.agreement()" ng-model="ctrl.isChecked"> No</label><div class="alert alert-danger" role="alert" ng-show="ctrl.generalForm.agreement.$invalid && ctrl.generalForm.$submitted"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> <span ng-show="ctrl.generalForm.agreement.$error.required">Please, Say yes or no</span></div></div><div class="form-group has-feedback" ng-class="{ \'has-success\': ctrl.generalForm.primaryGenre.$valid && ctrl.generalForm.$submitted,\r\n                     \'has-error\': ctrl.generalForm.primaryGenre.$invalid && ctrl.generalForm.$submitted }"><label class="col-xs-2">Primary Genre:</label><div class="col-xs-10"><select name="primaryGenre" class="form-control" ng-model="ctrl.data.primaryGenre" ng-options="genre for genre in ctrl.genres" ng-change="ctrl.selectGenre(genre)" required><option value="">Select Genre...</option></select><div class="alert alert-danger" role="alert" ng-show="ctrl.generalForm.primaryGenre.$invalid && ctrl.generalForm.$submitted"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> <span ng-show="ctrl.generalForm.primaryGenre.$error.required">Please, select a genre!</span></div></div></div><div class="form-group" ng-show="ctrl.data.primaryGenre"><label class="col-xs-2">Secondary Genre:</label><div class="col-xs-10"><select name="secondaryGenre" class="form-control" ng-model="ctrl.data.secondaryGenre" ng-options="genre for genre in ctrl.genres"><option value="">Select Genre...</option></select></div></div><div class="form-group"><div class="col-xs-3 col-xs-offset-6"><button class="btn btn-block btn-default" ng-click="ctrl.reset()">Previous</button></div><div class="col-xs-3"><button class="btn btn-block btn-primary" ng-click="ctrl.submit()">Next</button></div></div></form>'),e.put("music-owner-information-form.template.html",'<form name="ctrl.ownerForm" class="form-horizontal form-tab" novalidate><legend>Ownership Information</legend><div ng-repeat="songwriter in ctrl.data.songwriters"><ng-form name="writerForm"><legend class="inner-legend">Songwriter<small ng-show="$index">&nbsp;#{{$index + 1}}</small></legend><div class="form-group has-feedback" ng-class="{ \'has-success\': writerForm.name.$valid && ctrl.ownerForm.$submitted,\r\n                             \'has-error\': writerForm.name.$invalid && ctrl.ownerForm.$submitted }"><label class="col-xs-3">Name</label><div class="col-xs-7"><input type="text" name="name" class="form-control" ng-model="songwriter.name" required><div class="alert alert-danger" role="alert" ng-show="writerForm.name.$invalid && ctrl.ownerForm.$submitted"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> <span ng-show="writerForm.name.$error.required">Please, provide an song writer name!</span></div></div><div class="col-xs-2 text-right"><a class="btn btn-danger" ng-show="$index" ng-click="ctrl.removeWriter($index)"><span class="glyphicon glyphicon-trash"></span> </a><a class="btn btn-success" ng-click="ctrl.addWriter()"><span class="glyphicon glyphicon-plus-sign"></span></a></div></div><div class="form-group has-feedback" ng-class="{ \'has-success\': writerForm.primaryPhone.$valid && ctrl.ownerForm.$submitted,\r\n                             \'has-error\': writerForm.primaryPhone.$invalid && ctrl.ownerForm.$submitted }"><label class="col-xs-3">Primary Phone</label><div class="col-xs-7"><input type="text" name="primaryPhone" class="form-control" ng-model="songwriter.primaryPhone" ng-pattern="/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/" required><div class="alert alert-danger" role="alert" ng-show="writerForm.primaryPhone.$invalid && ctrl.ownerForm.$submitted"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> <span ng-show="writerForm.primaryPhone.$error.required">Please, provide a phone number! </span><span ng-show="writerForm.primaryPhone.$error.pattern">Please, provide an valid phone number in a following format: xxx-xxx-xxxx!</span></div></div></div><div class="form-group has-feedback" ng-class="{ \'has-success\': writerForm.secondaryPhone.$valid && ctrl.ownerForm.$submitted,\r\n                             \'has-error\': writerForm.secondaryPhone.$invalid && ctrl.ownerForm.$submitted }"><label class="col-xs-3">Secondary Phone</label><div class="col-xs-7"><input type="text" name="secondaryPhone" class="form-control" ng-model="songwriter.secondaryPhone" ng-pattern="/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/" placeholder="123-123-1234"><div class="alert alert-danger" role="alert" ng-show="writerForm.secondaryPhone.$invalid && ctrl.ownerForm.$submitted"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> <span ng-show="writerForm.secondaryPhone.$error.pattern">Please, provide an valid phone number in a following format: xxx-xxx-xxxx!</span></div></div></div><div class="form-group has-feedback" ng-class="{ \'has-success\': writerForm.primaryEmail.$valid && ctrl.ownerForm.$submitted,\r\n                             \'has-error\': writerForm.primaryEmail.$invalid && ctrl.ownerForm.$submitted }"><label class="col-xs-3">Primary E-mail</label><div class="col-xs-7"><input type="email" name="primaryEmail" class="form-control" ng-model="songwriter.primaryEmail" required><div class="alert alert-danger" role="alert" ng-show="writerForm.primaryEmail.$invalid && ctrl.ownerForm.$submitted"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> <span ng-show="writerForm.primaryEmail.$error.required">Please, provide a e-mail address! </span><span ng-show="writerForm.primaryEmail.$error.email">Please, provide a valid e-mail address!</span></div></div></div><div class="form-group" ng-class="{ \'has-success\': writerForm.secondaryEmail.$valid && ctrl.ownerForm.$submitted,\r\n                             \'has-error\': writerForm.secondaryEmail.$invalid && ctrl.ownerForm.$submitted }"><label class="col-xs-3">Secondary E-mail</label><div class="col-xs-7"><input type="email" name="secondaryEmail" class="form-control" ng-model="songwriter.secondaryEmail"><div class="alert alert-danger" role="alert" ng-show="writerForm.secondaryEmail.$invalid && ctrl.ownerForm.$submitted"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> <span ng-show="writerForm.secondaryEmail.$error.email">Please, provide a valid e-mail address!</span></div></div></div></ng-form></div><hr><div class="form-group"><label for="copyright" class="col-xs-3">Copyright Number</label><div class="col-xs-9"><input type="text" class="form-control" name="copyright" id="copyright" ng-model="ctrl.data.copyright"></div></div><hr><div class="form-group"><label for="pubCompany" class="col-xs-3">Publishing Company</label><div class="col-xs-9"><input type="text" class="form-control" name="pubCompany" id="pubCompany" ng-model="ctrl.data.pubCompany"></div></div><hr><div class="form-group"><label for="pro" class="col-xs-3">PRO</label><div class="col-xs-9"><input type="text" class="form-control" name="pbo" id="pro" ng-model="ctrl.data.pro"></div></div><hr><div class="form-group"><div class="col-xs-3 col-lg-offset-6"><button class="btn btn-block btn-default" ng-click="ctrl.reset()">Previous</button></div><div class="col-xs-3"><button class="btn btn-block btn-primary" ng-click="ctrl.submit()">Next</button></div></div></form>'),e.put("music-sound-information-form.template.html",'<form name="ctrl.soundForm" class="form-horizontal form-tab" novalidate><legend>Sound Recording Ownership Information</legend><div ng-repeat="soundOwner in ctrl.data.soundOwners"><ng-form name="masterForm"><legend class="inner-legend">Master Owner<small ng-show="$index">&nbsp;#{{$index + 1}}</small></legend><div class="form-group has-feedback" ng-class="{ \'has-success\': masterForm.name.$valid && ctrl.soundForm.$submitted,\r\n                             \'has-error\': masterForm.name.$invalid && ctrl.soundForm.$submitted }"><label class="col-xs-3">Name</label><div class="col-xs-7"><input type="text" name="name" class="form-control" ng-model="soundOwner.name" required><div class="alert alert-danger" role="alert" ng-show="soundForm.name.$invalid && ctrl.soundForm.$submitted"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> <span ng-show="soundForm.name.$error.required">Please, provide an master owner name!</span></div></div><div class="col-xs-2 text-right"><a class="btn btn-danger" ng-show="$index" ng-click="ctrl.removeOwner($index)"><span class="glyphicon glyphicon-trash"></span> </a><a class="btn btn-success" ng-click="ctrl.addOwner()"><span class="glyphicon glyphicon-plus-sign"></span></a></div></div><div class="form-group has-feedback" ng-class="{ \'has-success\': masterForm.primaryPhone.$valid && ctrl.soundForm.$submitted,\r\n                             \'has-error\': masterForm.primaryPhone.$invalid && ctrl.soundForm.$submitted }"><label class="col-xs-3">Primary Phone</label><div class="col-xs-7"><input type="text" name="primaryPhone" class="form-control" ng-model="soundOwner.primaryPhone" ng-pattern="/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/" required><div class="alert alert-danger" role="alert" ng-show="masterForm.primaryPhone.$invalid && ctrl.soundForm.$submitted"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> <span ng-show="masterForm.primaryPhone.$error.required">Please, provide a phone number! </span><span ng-show="masterForm.primaryPhone.$error.pattern">Please, provide an valid phone number in a following format: xxx-xxx-xxxx!</span></div></div></div><div class="form-group has-feedback" ng-class="{ \'has-success\': masterForm.secondaryPhone.$valid && ctrl.soundForm.$submitted,\r\n                             \'has-error\': masterForm.secondaryPhone.$invalid && ctrl.soundForm.$submitted }"><label class="col-xs-3">Secondary Phone</label><div class="col-xs-7"><input type="text" name="secondaryPhone" class="form-control" ng-model="soundOwner.secondaryPhone" ng-pattern="/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/" placeholder="123-123-1234"><div class="alert alert-danger" role="alert" ng-show="masterForm.secondaryPhone.$invalid && ctrl.soundForm.$submitted"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> <span ng-show="masterForm.secondaryPhone.$error.pattern">Please, provide an valid phone number in a following format: xxx-xxx-xxxx!</span></div></div></div><div class="form-group has-feedback" ng-class="{ \'has-success\': masterForm.primaryEmail.$valid && ctrl.soundForm.$submitted,\r\n                             \'has-error\': masterForm.primaryEmail.$invalid && ctrl.soundForm.$submitted }"><label class="col-xs-3">Primary E-mail</label><div class="col-xs-7"><input type="email" name="primaryEmail" class="form-control" ng-model="soundOwner.primaryEmail" required><div class="alert alert-danger" role="alert" ng-show="masterForm.primaryEmail.$invalid && ctrl.soundForm.$submitted"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> <span ng-show="masterForm.primaryEmail.$error.required">Please, provide a e-mail address! </span><span ng-show="masterForm.primaryEmail.$error.email">Please, provide a valid e-mail address!</span></div></div></div><div class="form-group" ng-class="{ \'has-success\': masterForm.secondaryEmail.$valid && ctrl.soundForm.$submitted,\r\n                             \'has-error\': masterForm.secondaryEmail.$invalid && ctrl.soundForm.$submitted }"><label class="col-xs-3">Secondary E-mail</label><div class="col-xs-7"><input type="email" name="secondaryEmail" class="form-control" ng-model="soundOwner.secondaryEmail"><div class="alert alert-danger" role="alert" ng-show="masterForm.secondaryEmail.$invalid && ctrl.soundForm.$submitted"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> <span ng-show="masterForm.secondaryEmail.$error.email">Please, provide a valid e-mail address!</span></div></div></div></ng-form></div><div class="form-group"><div class="col-xs-3 col-lg-offset-6"><button class="btn btn-block btn-default" ng-click="ctrl.reset()">Prrevious</button></div><div class="col-xs-3"><button class="btn btn-block btn-primary" ng-click="ctrl.submit()">Submit</button></div></div></form>')}]);