!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){return function(t,n,e,s,i){return'<div class="settings">\n\t<div class="row">\n\t\t<div class="col-sm-2 col-xs-12 content-header">\n\t\t\t[[admin/admin:settings-header-contents]]\n\t\t</div>\n\t\t<div class="col-sm-10 col-xs-12">\n\t\t\t<nav class="section-content">\n\t\t\t\t<ul></ul>\n\t\t\t</nav>\n\t\t</div>\n\t</div>\n\n\n<div class="row">\n\t<div class="col-sm-2 col-xs-12 settings-header">[[admin/settings/reputation:reputation]]</div>\n\t<div class="col-sm-10 col-xs-12">\n\t\t<form>\n\t\t\t<div class="checkbox">\n\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\n\t\t\t\t\t<input type="checkbox" class="mdl-switch__input" data-field="reputation:disabled">\n\t\t\t\t\t<span class="mdl-switch__label"><strong>[[admin/settings/reputation:disable]]</strong></span>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class="checkbox">\n\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\n\t\t\t\t\t<input type="checkbox" class="mdl-switch__input" data-field="downvote:disabled">\n\t\t\t\t\t<span class="mdl-switch__label"><strong>[[admin/settings/reputation:disable-down-voting]]</strong></span>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class="checkbox">\n\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\n\t\t\t\t\t<input type="checkbox" class="mdl-switch__input" data-field="votesArePublic">\n\t\t\t\t\t<span class="mdl-switch__label"><strong>[[admin/settings/reputation:votes-are-public]]</strong></span>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n\n\n<div class="row">\n\t<div class="col-sm-2 col-xs-12 settings-header">[[admin/settings/reputation:thresholds]]</div>\n\t<div class="col-sm-10 col-xs-12">\n\t\t<form>\n\t\t\t<strong>[[admin/settings/reputation:min-rep-downvote]]</strong><br /> <input type="text" class="form-control" placeholder="0" data-field="min:rep:downvote"><br />\n\t\t\t<strong>[[admin/settings/reputation:min-rep-flag]]</strong><br /> <input type="text" class="form-control" placeholder="0" data-field="min:rep:flag"><br />\n\t\t\t<strong>[[admin/settings/reputation:min-rep-website]]</strong><br /> <input type="text" class="form-control" placeholder="0" data-field="min:rep:website"><br />\n\t\t\t<strong>[[admin/settings/reputation:min-rep-aboutme]]</strong><br /> <input type="text" class="form-control" placeholder="0" data-field="min:rep:aboutme"><br />\n\t\t\t<strong>[[admin/settings/reputation:min-rep-signature]]</strong><br /> <input type="text" class="form-control" placeholder="0" data-field="min:rep:signature"><br />\n\t\t\t<strong>[[admin/settings/reputation:min-rep-profile-picture]]</strong><br /> <input type="text" class="form-control" placeholder="0" data-field="min:rep:profile-picture"><br />\n\t\t\t<strong>[[admin/settings/reputation:min-rep-cover-picture]]</strong><br /> <input type="text" class="form-control" placeholder="0" data-field="min:rep:cover-picture"><br />\n\t\t</form>\n\t</div>\n</div>\n\n</div>\n\n<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">\n\t<i class="material-icons">save</i>\n</button>\n\n<script>\n\trequire([\'admin/settings\'], function(Settings) {\n\t\tSettings.prepare();\n\t\tSettings.populateTOC();\n\t});\n<\/script>\n\n'}});