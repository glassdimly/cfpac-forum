!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function n(t,e,r,s,a){return'<div class="account">\r\n\t'+(r(e&&e.breadcrumbs&&e.breadcrumbs.length)?'\r\n<ol class="breadcrumb" itemscope="itemscope" itemprop="breadcrumb" itemtype="http://schema.org/BreadcrumbList">\r\n\t'+n.blocks.breadcrumbs(t,e,r,s,a)+"\r\n</ol>\r\n":"")+'\r\n\r\n\r\n<div class="cover" component="account/cover" style="background-image: url('+t.__escape(r(e&&e["cover:url"]))+"); background-position: "+t.__escape(r(e&&e["cover:position"]))+';">\r\n\t<div class="avatar-wrapper" data-uid="'+t.__escape(r(e&&e.uid))+'">\r\n\t\t'+(r(e&&e.picture)?'\r\n\t\t<img src="'+t.__escape(r(e&&e.picture))+'" class="avatar avatar-xl avatar-rounded" />\r\n\t\t':'\r\n\t\t<div class="avatar avatar-xl avatar-rounded" style="background-color: '+t.__escape(r(e&&e["icon:bgColor"]))+';" title="'+t.__escape(r(e&&e.username))+'">'+t.__escape(r(e&&e["icon:text"]))+"</div>\r\n\t\t")+'\r\n\t\t<i component="user/status" class="fa fa-circle status '+t.__escape(r(e&&e.status))+'" title="[[global:'+t.__escape(r(e&&e.status))+']]"></i>\r\n\r\n\t\t'+(r(e&&e.loggedIn)?"\r\n\t\t"+(r(e&&e.isSelf)?"":'\r\n\t\t<button class="btn-morph fab '+(r(e&&e.isFollowing)?"heart":"plus")+'" title="'+(r(e&&e.isFollowing)?"[[global:unfollow]]":"[[global:follow]]")+'">\r\n\t\t\t<span>\r\n\t\t\t\t<span class="s1"></span>\r\n\t\t\t\t<span class="s2"></span>\r\n\t\t\t\t<span class="s3"></span>\r\n\t\t\t</span>\r\n\t\t</button>\r\n\t\t')+"\r\n\t\t":"")+'\r\n\t</div>\r\n\r\n\t<div class="container">\r\n\t\t<div class="btn-group account-fab bottom-sheet">\r\n\t<button type="button" class="fab dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\r\n\t\t<i class="fa fa-ellipsis-v"></i>\r\n\t</button>\r\n\t<ul class="dropdown-menu dropdown-menu-right">\r\n\t\t'+(r(e&&e.loggedIn)?"\r\n\t\t"+(r(e&&e.isSelf)?"":"\r\n\t\t"+(r(e&&e.banned)?"":"\r\n\t\t"+(r(e&&e.config&&e.config.disableChat)?"":'\r\n\t\t<li class="'+(r(e&&e.hasPrivateChat)?"":"hidden")+'">\r\n\t\t\t<a component="account/chat" href="#">[[user:chat_with, '+t.__escape(r(e&&e.username))+']]</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a component="account/new-chat" href="#">[[user:new_chat_with, '+t.__escape(r(e&&e.username))+"]]</a>\r\n\t\t</li>\r\n\t\t")+'\r\n\t\t<li>\r\n\t\t\t<a component="account/flag" href="#">[[user:flag-profile]]</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a component="account/block" href="#">'+(r(e&&e.isBlocked)?"[[user:unblock_user]]":"[[user:block_user]]")+'</a>\r\n\t\t</li>\r\n\t\t<li class="divider"></li>\r\n\t\t')+"\r\n\t\t")+"\r\n\t\t":"")+'\r\n\t\t<li>\r\n\t\t\t<a href="'+t.__escape(r(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(r(e&&e.userslug))+'" class="inline-block" id="profile">[[user:profile]]</a>\r\n\t\t</li>\r\n\t\t'+(r(e&&e.showHidden)?'\r\n\t\t<li><a href="'+t.__escape(r(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(r(e&&e.userslug))+'/edit">[[user:edit]]</a></li>\r\n\t\t<li><a href="'+t.__escape(r(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(r(e&&e.userslug))+'/settings">[[user:settings]]</a></li>\r\n\t\t':"")+"\r\n\r\n\t\t"+(r(e&&e.isSelf)?"":"\r\n\t\t"+(r(e&&e.canBan)?'\r\n\t\t<li class="'+(r(e&&e.banned)?"hide":"")+'">\r\n\t\t\t<a component="account/ban" href="#">[[user:ban_account]]</a>\r\n\t\t</li>\r\n\t\t<li class="'+(r(e&&e.banned)?"":"hide")+'">\r\n\t\t\t<a component="account/unban" href="#">[[user:unban_account]]</a>\r\n\t\t</li>\r\n\t\t':"")+"\r\n\t\t"+(r(e&&e.isAdmin)?'\r\n\t\t<li>\r\n\t\t\t<a component="account/delete" href="#" class="">[[user:delete_account]]</a>\r\n\t\t</li>\r\n\t\t':"")+"\r\n\t\t")+'\r\n\r\n\t\t<li class="divider"></li>\r\n\t\t<li><a href="'+t.__escape(r(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(r(e&&e.userslug))+'/following">[[user:following]]</a></li>\r\n\t\t<li><a href="'+t.__escape(r(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(r(e&&e.userslug))+'/followers">[[user:followers]]</a></li>\r\n\t\t'+(r(e&&e.showHidden)?'\r\n\t\t<li><a href="'+t.__escape(r(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(r(e&&e.userslug))+'/blocks">[[user:blocks]]</a></li>\r\n\t\t':"")+'\r\n\t\t<li class="divider"></li>\r\n\t\t<li><a href="'+t.__escape(r(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(r(e&&e.userslug))+'/topics">[[global:topics]]</a></li>\r\n\t\t<li><a href="'+t.__escape(r(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(r(e&&e.userslug))+'/posts">[[global:posts]]</a></li>\r\n\t\t'+(r(e&&e["reputation:disabled"])?"":'\r\n\t\t<li><a href="'+t.__escape(r(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(r(e&&e.userslug))+'/best">[[global:best]]</a></li>\r\n\t\t')+'\r\n\t\t<li><a href="'+t.__escape(r(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(r(e&&e.userslug))+'/groups">[[global:header.groups]]</a></li>\r\n\r\n\t\t'+(r(e&&e.showHidden)?'\r\n\t\t<li><a href="'+t.__escape(r(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(r(e&&e.userslug))+'/categories">[[user:watched_categories]]</a></li>\r\n\t\t<li><a href="'+t.__escape(r(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(r(e&&e.userslug))+'/bookmarks">[[user:bookmarks]]</a></li>\r\n\t\t<li><a href="'+t.__escape(r(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(r(e&&e.userslug))+'/watched">[[user:watched]]</a></li>\r\n\t\t<li><a href="'+t.__escape(r(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(r(e&&e.userslug))+'/ignored">[[user:ignored]]</a></li>\r\n\t\t'+(r(e&&e["reputation:disabled"])?"":'\r\n\t\t<li><a href="'+t.__escape(r(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(r(e&&e.userslug))+'/upvoted">[[global:upvoted]]</a></li>\r\n\t\t'+(r(e&&e["downvote:disabled"])?"":'\r\n\t\t<li><a href="'+t.__escape(r(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(r(e&&e.userslug))+'/downvoted">[[global:downvoted]]</a></li>\r\n\t\t')+"\r\n\t\t")+'\r\n\t\t<li><a href="'+t.__escape(r(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(r(e&&e.userslug))+'/uploads">[[global:uploads]]</a></li>\r\n\t\t':"")+"\r\n\r\n\t\t"+n.blocks.profile_links(t,e,r,s,a)+"\r\n\t</ul>\r\n</div>\r\n\r\n\r\n\t\t"+(r(e&&e.allowCoverPicture)?"\r\n\t\t"+(r(e&&e.canEdit)?'\r\n\t\t<div class="controls">\r\n\t\t\t<span class="upload"><i class="fa fa-fw fa-4x fa-upload"></i></span>\r\n\t\t\t<span class="resize"><i class="fa fa-fw fa-4x fa-arrows"></i></span>\r\n\t\t\t<span class="remove"><i class="fa fa-fw fa-4x fa-times"></i></span>\r\n\t\t</div>\r\n\t\t<div class="save">[[groups:cover-save]] <i class="fa fa-fw fa-floppy-o"></i></div>\r\n\t\t<div class="indicator">[[groups:cover-saving]] <i class="fa fa-fw fa-refresh fa-spin"></i></div>\r\n\t\t':"")+"\r\n\t\t":"")+'\r\n\t</div>\r\n</div>\r\n\r\n\r\n\t<form class="edit-form">\r\n\t\t\x3c!-- disables autocomplete on FF --\x3e<input type="password" style="display:none">\r\n\r\n\t\t'+(r(e&&e.isSelf)?'\r\n\t\t<div class="form-group">\r\n\t\t\t<label class="control-label" for="inputCurrentPassword">[[user:current_password]]</label>\r\n\t\t\t<div class="controls">\r\n\t\t\t\t<input autocomplete="off" class="form-control" type="password" id="inputCurrentPassword" placeholder="[[user:current_password]]" value=""'+(r(e&&e.hasPassword)?"":" disabled")+">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t":"")+'\r\n\r\n\t\t<div class="form-group">\r\n\t\t\t<label class="control-label" for="inputNewPassword">[[user:password]]</label>\r\n\t\t\t<input class="form-control" type="password" id="inputNewPassword" placeholder="[[user:password]]" value="">\r\n\t\t\t<span class="form-feedback" id="password-notify"></span>\r\n\t\t</div>\r\n\r\n\t\t<div class="form-group">\r\n\t\t\t<label class="control-label" for="inputNewPasswordAgain">[[user:confirm_password]]</label>\r\n\t\t\t<input class="form-control" type="password" id="inputNewPasswordAgain" placeholder="[[user:confirm_password]]" value="">\r\n\t\t\t<span class="form-feedback" id="password-confirm-notify"></span>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div class="form-actions">\r\n\t\t\t<button id="changePasswordBtn" class="btn btn-primary btn-block"><i class="hide fa fa-spinner fa-spin"></i> [[user:change_password]]</button>\r\n\t\t</div>\r\n\t</form>\r\n</div>'}return n.blocks={profile_links:function(r,s,a,t){return t(a(s&&s.profile_links),function(t,e){return"\r\n\t\t"+(0===e?'\r\n\t\t<li class="divider"></li>\r\n\t\t':"")+'\r\n\t\t<li id="'+r.__escape(a(s&&s.profile_links&&s.profile_links[t]&&s.profile_links[t].id))+'" class="plugin-link '+(a(s&&s.profile_links&&s.profile_links[t]&&s.profile_links[t].public)?"public":"private")+'"><a href="'+r.__escape(a(s&&s.config&&s.config.relative_path))+"/user/"+r.__escape(a(s&&s.userslug))+"/"+r.__escape(a(s&&s.profile_links&&s.profile_links[t]&&s.profile_links[t].route))+'">'+(a(s&&s.profile_links&&s.profile_links[t]&&s.profile_links[t].icon)?'<i class="fa fa-fw '+r.__escape(a(s&&s.profile_links&&s.profile_links[t]&&s.profile_links[t].icon))+'"></i> ':"")+r.__escape(a(s&&s.profile_links&&s.profile_links[t]&&s.profile_links[t].name))+"</a></li>\r\n\t\t"})},breadcrumbs:function(s,a,n,t){return t(n(a&&a.breadcrumbs),function(t,e,r){return"\r\n\t<li"+(e===r-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemprop="itemListElement" itemtype="http://schema.org/ListItem" '+(e===r-1?'class="active"':"")+'>\r\n\t\t<meta itemprop="position" content="'+s.__escape(e)+'" />\r\n\t\t'+(e!==r-1?'<a href="'+s.__escape(n(a&&a.breadcrumbs&&a.breadcrumbs[t]&&a.breadcrumbs[t].url))+'" itemprop="item">':"")+'\r\n\t\t\t<span itemprop="name">\r\n\t\t\t\t'+s.__escape(n(a&&a.breadcrumbs&&a.breadcrumbs[t]&&a.breadcrumbs[t].text))+"\r\n\t\t\t\t"+(e===r-1?"\r\n\t\t\t\t"+(n(a&&a["feeds:disableRSS"])?"":"\r\n\t\t\t\t"+(n(a&&a.rssFeedUrl)?'<a target="_blank" href="'+s.__escape(n(a&&a.rssFeedUrl))+'" itemprop="item"><i class="fa fa-rss-square"></i></a>':""))+"\r\n\t\t\t\t":"")+"\r\n\t\t\t</span>\r\n\t\t"+(e!==r-1?"</a>":"")+"\r\n\t</li>\r\n\t"})}},n});