!function(e){"object"==typeof module&&module.exports?module.exports=e():"function"==typeof define&&define.amd&&define(e)}(function(){function o(e,s,r,t,p){return o.blocks.groups(e,s,r,t,p)+"\n"}return o.blocks={groups:function(s,r,t,e){return e(t(r&&r.groups),function(e){return'\n<li data-name="'+s.__escape(t(r&&r.groups&&r.groups[e]&&r.groups[e].displayName))+'">\n\t<div class="btn-group pull-right">\n\t\t<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\n\t\t\tPrivileges <span class="caret"></span>\n\t\t</button>\n\t\t<ul class="dropdown-menu" role="menu">\n\t\t\t<li role="presentation"><a href="#" data-priv="groups:find" class="'+(t(r&&r.groups&&r.groups[e]&&r.groups[e].privileges&&r.groups[e].privileges["groups:find"])?"active":"")+'">Find Category</a></li>\n\t\t\t<li role="presentation"><a href="#" data-priv="groups:read" class="'+(t(r&&r.groups&&r.groups[e]&&r.groups[e].privileges&&r.groups[e].privileges["groups:read"])?"active":"")+'">Access Category</a></li>\n\t\t\t<li role="presentation"><a href="#" data-priv="groups:topics:read" class="'+(t(r&&r.groups&&r.groups[e]&&r.groups[e].privileges&&r.groups[e].privileges["groups:topics:read"])?"active":"")+'">Access Topics</a></li>\n\t\t\t<li role="presentation"><a href="#" data-priv="groups:topics:create" class="'+(t(r&&r.groups&&r.groups[e]&&r.groups[e].privileges&&r.groups[e].privileges["groups:topics:create"])?"active":"")+'">Create Topics</a></li>\n\t\t\t<li role="presentation"><a href="#" data-priv="groups:topics:reply" class="'+(t(r&&r.groups&&r.groups[e]&&r.groups[e].privileges&&r.groups[e].privileges["groups:topics:reply"])?"active":"")+'">Reply to Topics</a></li>\n\t\t\t<li role="presentation"><a href="#" data-priv="groups:posts:edit" class="'+(t(r&&r.groups&&r.groups[e]&&r.groups[e].privileges&&r.groups[e].privileges["groups:posts:edit"])?"active":"")+'">Edit Posts</a></li>\n\t\t\t<li role="presentation"><a href="#" data-priv="groups:posts:delete" class="'+(t(r&&r.groups&&r.groups[e]&&r.groups[e].privileges&&r.groups[e].privileges["groups:posts:delete"])?"active":"")+'">Delete Posts</a></li>\n\t\t\t<li role="presentation"><a href="#" data-priv="groups:topics:delete" class="'+(t(r&&r.groups&&r.groups[e]&&r.groups[e].privileges&&r.groups[e].privileges["groups:topics:delete"])?"active":"")+'">Delete Topics</a></li>\n\t\t</ul>\n\t</div>\n\t'+s.__escape(t(r&&r.groups&&r.groups[e]&&r.groups[e].displayName))+"\n</li>\n"})}},o});