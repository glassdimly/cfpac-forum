!function(s){"object"==typeof module&&module.exports?module.exports=s():"function"==typeof define&&define.amd&&define(s)}(function(){function a(s,n,o,t,e){return(o(n&&n.posts&&n.posts.display_moderator_tools)?'\n<li role="presentation" class="dropdown-header">[[topic:tools]]</li>\n<li role="presentation">\n\t<a component="post/edit" role="menuitem" tabindex="-1" href="#">\n\t\t<span class="menu-icon"><i class="fa fa-fw fa-pencil"></i></span> [[topic:edit]]\n\t</a>\n</li>\n<li role="presentation" '+(o(n&&n.posts&&n.posts.deleted)?"hidden":"")+'>\n\t<a component="post/delete" role="menuitem" tabindex="-1" href="#" class="'+(o(n&&n.posts&&n.posts.deleted)?"hidden":"")+'">\n\t\t<div class="inline menu-icon"><i class="fa fa-fw fa-trash-o"></i></div> <span>[[topic:delete]]</span>\n\t</a>\n</li>\n<li role="presentation" '+(o(n&&n.posts&&n.posts.deleted)?"":"hidden")+'>\n\t<a component="post/restore" role="menuitem" tabindex="-1" href="#" class="'+(o(n&&n.posts&&n.posts.deleted)?"":"hidden")+'">\n\t\t<div class="inline menu-icon"><i class="fa fa-fw fa-history"></i></div> <span>[[topic:restore]]</span>\n\t</a>\n</li>\n'+(o(n&&n.posts&&n.posts.display_purge_tools)?'\n<li role="presentation" '+(o(n&&n.posts&&n.posts.deleted)?"":"hidden")+'>\n\t<a component="post/purge" role="menuitem" tabindex="-1" href="#" class="'+(o(n&&n.posts&&n.posts.deleted)?"":"hidden")+'">\n\t\t<span class="menu-icon"><i class="fa fa-fw fa-eraser"></i></span> [[topic:purge]]\n\t</a>\n</li>\n':"")+"\n\n"+(o(n&&n.posts&&n.posts.display_history)?'\n<li role="presentation">\n\t<a component="post/view-history" role="menuitem" tabindex="-1" href="#">\n\t\t<span class="menu-icon"><i class="fa fa-fw fa-history"></i></span> [[topic:view-history]]\n\t</a>\n</li>\n':"")+"\n\n"+(o(n&&n.posts&&n.posts.display_move_tools)?'\n<li role="presentation">\n\t<a component="post/move" role="menuitem" tabindex="-1" href="#">\n\t\t<span class="menu-icon"><i class="fa fa-fw fa-arrows"></i></span> [[topic:move]]\n\t</a>\n</li>\n':"")+"\n\n"+(o(n&&n.posts&&n.posts.display_change_owner_tools)?'\n<li role="presentation">\n\t<a component="post/change-owner" role="menuitem" tabindex="-1" href="#">\n\t\t<span class="menu-icon"><i class="fa fa-fw fa-user"></i></span> [[topic:change-owner]]\n\t</a>\n</li>\n':"")+"\n\n"+(o(n&&n.posts&&n.posts.ip)?'\n<li role="presentation">\n\t<a component="post/copy-ip" role="menuitem" tabindex="-1" href="#" data-clipboard-text="'+s.__escape(o(n&&n.posts&&n.posts.ip))+'">\n\t\t<span class="menu-icon" ><i class="fa fa-fw fa-copy"></i></span> [[topic:copy-ip]] '+s.__escape(o(n&&n.posts&&n.posts.ip))+"\n\t</a>\n</li>\n"+(o(n&&n.posts&&n.posts.display_ip_ban)?'\n<li role="presentation">\n\t<a component="post/ban-ip" role="menuitem" tabindex="-1" href="#" data-ip="'+s.__escape(o(n&&n.posts&&n.posts.ip))+'">\n\t\t<span class="menu-icon"><i class="fa fa-fw fa-ban"></i></span> [[topic:ban-ip]] '+s.__escape(o(n&&n.posts&&n.posts.ip))+"\n\t</a>\n</li>\n":"")+"\n":"")+"\n":"")+"\n\n"+a.blocks["posts.tools"](s,n,o,t,e)+"\n"+(o(n&&n.posts&&n.posts.toolsVisible)?'\n<li role="presentation" class="divider"></li>\n':"")+"\n\n"+(o(n&&n.posts&&n.posts.deleted)?"":"\n"+(o(n&&n.config&&n.config.loggedIn)?'\n<li role="presentation">\n\t<a component="post/bookmark" role="menuitem" tabindex="-1" href="#" data-bookmarked="'+s.__escape(o(n&&n.posts&&n.posts.bookmarked))+'">\n\n\t\t<span class="bookmark-text">[[topic:bookmark]]</span>\n\t\t<span component="post/bookmark-count" class="bookmarkCount" data-bookmarks="'+s.__escape(o(n&&n.posts&&n.posts.bookmarks))+'">'+s.__escape(o(n&&n.posts&&n.posts.bookmarks))+'</span>&nbsp;\n\n\t\t<i component="post/bookmark/on" class="fa fa-fw fa-heart '+(o(n&&n.posts&&n.posts.bookmarked)?"":"hidden")+'"></i>\n\t\t<i component="post/bookmark/off" class="fa fa-fw fa-heart-o '+(o(n&&n.posts&&n.posts.bookmarked)?"hidden":"")+'"></i>\n\t</a>\n</li>\n':"")+"\n\n"+(o(n&&n.postSharing&&n.postSharing.length)?'\n<li role="presentation" class="divider"></li>\n<li role="presentation" class="dropdown-header">[[topic:share_this_post]]</li>\n':"")+"\n"+a.blocks.postSharing(s,n,o,t,e)+"\n\n"+(o(n&&n.posts&&n.posts.display_flag_tools)?'\n<li role="presentation" class="divider"></li>\n<li role="presentation">\n\t<a component="post/flag" role="menuitem" tabindex="-1" href="#">\n\t\t[[topic:flag_title]]\n\t</a>\n</li>\n':"")+"\n")}return a.blocks={postSharing:function(n,o,t,s){return s(t(o&&o.postSharing),function(s){return'\n\t<li role="presentation">\n\t\t<a role="menuitem" component="share/'+n.__escape(t(o&&o.postSharing&&o.postSharing[s]&&o.postSharing[s].id))+'" tabindex="-1" href="#"><span class="menu-icon"><i class="fa fa-fw '+n.__escape(t(o&&o.postSharing&&o.postSharing[s]&&o.postSharing[s].class))+'"></i></span> '+n.__escape(t(o&&o.postSharing&&o.postSharing[s]&&o.postSharing[s].name))+"</a>\n\t</li>\n"})},"posts.tools":function(n,o,t,s){return s(t(o&&o.posts&&o.posts.tools),function(s){return'\n<li role="presentation">\n\t<a component="'+n.__escape(t(o&&o.posts&&o.posts.tools&&o.posts.tools[s]&&o.posts.tools[s].action))+'" role="menuitem" tabindex="-1" href="#">\n\t\t<span class="menu-icon"><i class="fa fa-fw '+n.__escape(t(o&&o.posts&&o.posts.tools&&o.posts.tools[s]&&o.posts.tools[s].icon))+'"></i></span> '+t(o&&o.posts&&o.posts.tools&&o.posts.tools[s]&&o.posts.tools[s].html)+"\n\t</a>\n</li>\n"})}},a});