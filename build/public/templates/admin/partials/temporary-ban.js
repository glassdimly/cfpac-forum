!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){return function(t,n,e,a,s){return'<form class="form">\n\t<div class="row">\n\t\t<div class="col-xs-4">\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="length">[[admin/manage/users:temp-ban.length]]</label>\n\t\t\t\t<input class="form-control" id="length" name="length" type="number" min="0" value="1" />\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="col-xs-8">\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="reason">[[admin/manage/users:temp-ban.reason]]</label>\n\t\t\t\t<input type="text" class="form-control" id="reason" name="reason" />\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class="row">\n\t\t<div class="col-sm-4 text-center">\n\t\t\t<div class="form-group units">\n\t\t\t\t<label>[[admin/manage/users:temp-ban.hours]]</label>\n\t\t\t\t<input type="radio" name="unit" value="0" checked />\n\t\t\t\t&nbsp;&nbsp;\n\t\t\t\t<label>[[admin/manage/users:temp-ban.days]]</label>\n\t\t\t\t<input type="radio" name="unit" value="1" />\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="col-sm-8">\n\t\t\t<p class="help-block">\n\t\t\t\t[[admin/manage/users:temp-ban.explanation]]\n\t\t\t</p>\n\t\t</div>\n\t</div>\n</form>\n'}});