!function(e){"object"==typeof module&&module.exports?module.exports=e():"function"==typeof define&&define.amd&&define(e)}(function(){return function(e,n,i,t,o){return'<div component="topic/reply/container" class="btn-group action-bar bottom-sheet '+(i(n&&n.privileges&&n.privileges["topics:reply"])?"":"hidden")+'">\n\t<a href="'+e.__escape(i(n&&n.config&&n.config.relative_path))+"/compose?tid="+e.__escape(i(n&&n.tid))+"&title="+e.__escape(i(n&&n.title))+'" class="btn btn-primary" component="topic/reply" data-ajaxify="false" role="button"><i class="fa fa-reply visible-xs-inline"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline"> [[topic:reply]]</span></a>\n\t<button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown">\n\t\t<span class="caret"></span>\n\t</button>\n\t<ul class="dropdown-menu pull-right" role="menu">\n\t\t<li><a href="#" component="topic/reply-as-topic">[[topic:reply-as-topic]]</a></li>\n\t</ul>\n</div>\n\n'+(i(n&&n.loggedIn)?"\n"+(i(n&&n.privileges&&n.privileges["topics:reply"])?"":"\n"+(i(n&&n.locked)?'\n<a component="topic/reply/locked" class="btn btn-primary" disabled><i class="fa fa-lock"></i> [[topic:locked]]</a>\n':"")+"\n")+"\n\n"+(i(n&&n.locked)?"":'\n<a component="topic/reply/locked" class="btn btn-primary hidden" disabled><i class="fa fa-lock"></i> [[topic:locked]]</a>\n')+"\n\n":"\n\n"+(i(n&&n.privileges&&n.privileges["topics:reply"])?"":'\n<a component="topic/reply/guest" href="'+e.__escape(i(n&&n.config&&n.config.relative_path))+'/login" class="btn btn-primary">[[topic:guest-login-reply]]</a>\n')+"\n")}});