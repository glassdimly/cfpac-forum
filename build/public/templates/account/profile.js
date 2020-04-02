!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function o(t,s,e,n,a){return"<script>\n\tvar referrer = window.getCookie('login:referrer');\n\n\tif (referrer && window.getCookie('login:shouldRedirect')) {\n\t\twindow.setCookie('login:shouldRedirect', '', 0)\n\t\twindow.setCookie('login:referrer', '', 0)\n\t\twindow.location.href = referrer;\n\t}\n<\/script>\n\n\n\n<div class=\"account\">\n\t"+(e(s&&s.breadcrumbs&&s.breadcrumbs.length)?'\n<ol class="breadcrumb" itemscope="itemscope" itemprop="breadcrumb" itemtype="http://schema.org/BreadcrumbList">\n\t'+o.blocks.breadcrumbs(t,s,e,n,a)+"\n</ol>\n":"")+'\n\n\n<div class="cover" component="account/cover" style="background-image: url('+t.__escape(e(s&&s["cover:url"]))+"); background-position: "+t.__escape(e(s&&s["cover:position"]))+';">\n\t<div class="avatar-wrapper" data-uid="'+t.__escape(e(s&&s.uid))+'">\n\t\t'+(e(s&&s.picture)?'\n\t\t<img src="'+t.__escape(e(s&&s.picture))+'" class="avatar avatar-xl avatar-rounded" />\n\t\t':'\n\t\t<div class="avatar avatar-xl avatar-rounded" style="background-color: '+t.__escape(e(s&&s["icon:bgColor"]))+';" title="'+t.__escape(e(s&&s.username))+'">'+t.__escape(e(s&&s["icon:text"]))+"</div>\n\t\t")+'\n\t\t<i component="user/status" class="fa fa-circle status '+t.__escape(e(s&&s.status))+'" title="[[global:'+t.__escape(e(s&&s.status))+']]"></i>\n\n\t\t'+(e(s&&s.loggedIn)?"\n\t\t"+(e(s&&s.isSelf)?"":'\n\t\t<button class="btn-morph fab '+(e(s&&s.isFollowing)?"heart":"plus")+'" title="'+(e(s&&s.isFollowing)?"[[global:unfollow]]":"[[global:follow]]")+'">\n\t\t\t<span>\n\t\t\t\t<span class="s1"></span>\n\t\t\t\t<span class="s2"></span>\n\t\t\t\t<span class="s3"></span>\n\t\t\t</span>\n\t\t</button>\n\t\t')+"\n\t\t":"")+'\n\t</div>\n\n\t<div class="container">\n\t\t<div class="btn-group account-fab bottom-sheet">\n\t<button type="button" class="fab dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n\t\t<i class="fa fa-ellipsis-v"></i>\n\t</button>\n\t<ul class="dropdown-menu dropdown-menu-right">\n\t\t'+(e(s&&s.loggedIn)?"\n\t\t"+(e(s&&s.isSelf)?"":"\n\t\t"+(e(s&&s.banned)?"":"\n\t\t"+(e(s&&s.config&&s.config.disableChat)?"":'\n\t\t<li class="'+(e(s&&s.hasPrivateChat)?"":"hidden")+'">\n\t\t\t<a component="account/chat" href="#">[[user:chat_with, '+t.__escape(e(s&&s.username))+']]</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component="account/new-chat" href="#">[[user:new_chat_with, '+t.__escape(e(s&&s.username))+"]]</a>\n\t\t</li>\n\t\t")+'\n\t\t<li>\n\t\t\t<a component="account/flag" href="#">[[user:flag-profile]]</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component="account/block" href="#">'+(e(s&&s.isBlocked)?"[[user:unblock_user]]":"[[user:block_user]]")+'</a>\n\t\t</li>\n\t\t<li class="divider"></li>\n\t\t')+"\n\t\t")+"\n\t\t":"")+'\n\t\t<li>\n\t\t\t<a href="'+t.__escape(e(s&&s.config&&s.config.relative_path))+"/user/"+t.__escape(e(s&&s.userslug))+'" class="inline-block" id="profile">[[user:profile]]</a>\n\t\t</li>\n\t\t'+(e(s&&s.showHidden)?'\n\t\t<li><a href="'+t.__escape(e(s&&s.config&&s.config.relative_path))+"/user/"+t.__escape(e(s&&s.userslug))+'/edit">[[user:edit]]</a></li>\n\t\t<li><a href="'+t.__escape(e(s&&s.config&&s.config.relative_path))+"/user/"+t.__escape(e(s&&s.userslug))+'/settings">[[user:settings]]</a></li>\n\t\t':"")+"\n\n\t\t"+(e(s&&s.isSelf)?"":"\n\t\t"+(e(s&&s.canBan)?'\n\t\t<li class="'+(e(s&&s.banned)?"hide":"")+'">\n\t\t\t<a component="account/ban" href="#">[[user:ban_account]]</a>\n\t\t</li>\n\t\t<li class="'+(e(s&&s.banned)?"":"hide")+'">\n\t\t\t<a component="account/unban" href="#">[[user:unban_account]]</a>\n\t\t</li>\n\t\t':"")+"\n\t\t"+(e(s&&s.isAdmin)?'\n\t\t<li>\n\t\t\t<a component="account/delete" href="#" class="">[[user:delete_account]]</a>\n\t\t</li>\n\t\t':"")+"\n\t\t")+'\n\n\t\t<li class="divider"></li>\n\t\t<li><a href="'+t.__escape(e(s&&s.config&&s.config.relative_path))+"/user/"+t.__escape(e(s&&s.userslug))+'/following">[[user:following]]</a></li>\n\t\t<li><a href="'+t.__escape(e(s&&s.config&&s.config.relative_path))+"/user/"+t.__escape(e(s&&s.userslug))+'/followers">[[user:followers]]</a></li>\n\t\t'+(e(s&&s.showHidden)?'\n\t\t<li><a href="'+t.__escape(e(s&&s.config&&s.config.relative_path))+"/user/"+t.__escape(e(s&&s.userslug))+'/blocks">[[user:blocks]]</a></li>\n\t\t':"")+'\n\t\t<li class="divider"></li>\n\t\t<li><a href="'+t.__escape(e(s&&s.config&&s.config.relative_path))+"/user/"+t.__escape(e(s&&s.userslug))+'/topics">[[global:topics]]</a></li>\n\t\t<li><a href="'+t.__escape(e(s&&s.config&&s.config.relative_path))+"/user/"+t.__escape(e(s&&s.userslug))+'/posts">[[global:posts]]</a></li>\n\t\t'+(e(s&&s["reputation:disabled"])?"":'\n\t\t<li><a href="'+t.__escape(e(s&&s.config&&s.config.relative_path))+"/user/"+t.__escape(e(s&&s.userslug))+'/best">[[global:best]]</a></li>\n\t\t')+'\n\t\t<li><a href="'+t.__escape(e(s&&s.config&&s.config.relative_path))+"/user/"+t.__escape(e(s&&s.userslug))+'/groups">[[global:header.groups]]</a></li>\n\n\t\t'+(e(s&&s.showHidden)?'\n\t\t<li><a href="'+t.__escape(e(s&&s.config&&s.config.relative_path))+"/user/"+t.__escape(e(s&&s.userslug))+'/categories">[[user:watched_categories]]</a></li>\n\t\t<li><a href="'+t.__escape(e(s&&s.config&&s.config.relative_path))+"/user/"+t.__escape(e(s&&s.userslug))+'/bookmarks">[[user:bookmarks]]</a></li>\n\t\t<li><a href="'+t.__escape(e(s&&s.config&&s.config.relative_path))+"/user/"+t.__escape(e(s&&s.userslug))+'/watched">[[user:watched]]</a></li>\n\t\t<li><a href="'+t.__escape(e(s&&s.config&&s.config.relative_path))+"/user/"+t.__escape(e(s&&s.userslug))+'/ignored">[[user:ignored]]</a></li>\n\t\t'+(e(s&&s["reputation:disabled"])?"":'\n\t\t<li><a href="'+t.__escape(e(s&&s.config&&s.config.relative_path))+"/user/"+t.__escape(e(s&&s.userslug))+'/upvoted">[[global:upvoted]]</a></li>\n\t\t'+(e(s&&s["downvote:disabled"])?"":'\n\t\t<li><a href="'+t.__escape(e(s&&s.config&&s.config.relative_path))+"/user/"+t.__escape(e(s&&s.userslug))+'/downvoted">[[global:downvoted]]</a></li>\n\t\t')+"\n\t\t")+'\n\t\t<li><a href="'+t.__escape(e(s&&s.config&&s.config.relative_path))+"/user/"+t.__escape(e(s&&s.userslug))+'/uploads">[[global:uploads]]</a></li>\n\t\t':"")+"\n\n\t\t"+o.blocks.profile_links(t,s,e,n,a)+"\n\t</ul>\n</div>\n\n\n\t\t"+(e(s&&s.allowCoverPicture)?"\n\t\t"+(e(s&&s.canEdit)?'\n\t\t<div class="controls">\n\t\t\t<span class="upload"><i class="fa fa-fw fa-4x fa-upload"></i></span>\n\t\t\t<span class="resize"><i class="fa fa-fw fa-4x fa-arrows"></i></span>\n\t\t\t<span class="remove"><i class="fa fa-fw fa-4x fa-times"></i></span>\n\t\t</div>\n\t\t<div class="save">[[groups:cover-save]] <i class="fa fa-fw fa-floppy-o"></i></div>\n\t\t<div class="indicator">[[groups:cover-saving]] <i class="fa fa-fw fa-refresh fa-spin"></i></div>\n\t\t':"")+"\n\t\t":"")+'\n\t</div>\n</div>\n\n\n\t<div class="profile row">\n\t\t<h1 class="fullname">'+(e(s&&s.fullname)?t.__escape(e(s&&s.fullname)):t.__escape(e(s&&s.username)))+'</h1>\n\t\t<h2 class="username">'+(e(s&&s.banned)?"[[user:banned]]":"@"+t.__escape(e(s&&s.username)))+"</h2>\n\t\t"+(e(s&&s.isAdminOrGlobalModeratorOrModerator)?"\n\t\t"+(e(s&&s.banned)?'\n\t\t<div class="text-center">\n\t\t'+(e(s&&s.banned_until)?"\n\t\t[[user:info.banned-until, "+t.__escape(e(s&&s.banned_until_readable))+"]]\n\t\t":"\n\t\t[[user:info.banned-permanently]]\n\t\t")+"\n\t\t</div>\n\t\t":"")+"\n\t\t":"")+"\n\n\t\t"+(e(s&&s.selectedGroup&&s.selectedGroup.length)?'\n\t\t<div class="text-center">\n\t\t'+o.blocks.selectedGroup(t,s,e,n,a)+"\n\t\t</div>\n\t\t<br/>\n\t\t":"")+"\n\n\t\t"+(e(s&&s.aboutme)?'\n\t\t<span component="aboutme" class="text-center aboutme">'+t.__escape(e(s&&s.aboutmeParsed))+"</span>\n\t\t":"")+'\n\n\t\t<div class="account-stats">\n\t\t\t'+(e(s&&s["reputation:disabled"])?"":'\n\t\t\t<div class="stat">\n\t\t\t\t<div class="human-readable-number" title="'+t.__escape(e(s&&s.reputation))+'">'+t.__escape(e(s&&s.reputation))+'</div>\n\t\t\t\t<span class="stat-label">[[global:reputation]]</span>\n\t\t\t</div>\n\t\t\t')+'\n\n\t\t\t<div class="stat">\n\t\t\t\t<div class="human-readable-number" title="'+t.__escape(e(s&&s.postcount))+'">'+t.__escape(e(s&&s.postcount))+'</div>\n\t\t\t\t<span class="stat-label">[[global:posts]]</span>\n\t\t\t</div>\n\n\t\t\t<div class="stat">\n\t\t\t\t<div class="human-readable-number" title="'+t.__escape(e(s&&s.profileviews))+'">'+t.__escape(e(s&&s.profileviews))+'</div>\n\t\t\t\t<span class="stat-label">[[user:profile_views]]</span>\n\t\t\t</div>\n\n\t\t\t<div class="stat">\n\t\t\t\t<div class="human-readable-number" title="'+t.__escape(e(s&&s.followerCount))+'">'+t.__escape(e(s&&s.followerCount))+'</div>\n\t\t\t\t<span class="stat-label">[[user:followers]]</span>\n\t\t\t</div>\n\n\t\t\t<div class="stat">\n\t\t\t\t<div class="human-readable-number"  title="'+t.__escape(e(s&&s.followingCount))+'">'+t.__escape(e(s&&s.followingCount))+'</div>\n\t\t\t\t<span class="stat-label">[[user:following]]</span>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="text-center profile-meta">\n\t\t\t<span>[[user:joined]]</span>\n\t\t\t<strong class="timeago" title="'+t.__escape(e(s&&s.joindateISO))+'"></strong>\n\n\t\t\t<span>[[user:lastonline]]</span>\n\t\t\t<strong class="timeago" title="'+t.__escape(e(s&&s.lastonlineISO))+'"></strong><br />\n\n\t\t\t'+(e(s&&s.email)?'\n\t\t\t<span>[[user:email]]</span>\n\t\t\t<strong><i class="fa fa-eye-slash '+t.__escape(e(s&&s.emailClass))+'" title="[[user:email_hidden]]"></i> '+t.__escape(e(s&&s.email))+"</strong>\n\t\t\t":"")+"\n\n\t\t\t"+(e(s&&s.websiteName)?'\n\t\t\t<span>[[user:website]]</span>\n\t\t\t<strong><a href="'+t.__escape(e(s&&s.websiteLink))+'" rel="nofollow noopener noreferrer">'+t.__escape(e(s&&s.websiteName))+"</a></strong>\n\t\t\t":"")+"\n\n\t\t\t"+(e(s&&s.location)?"\n\t\t\t<span>[[user:location]]</span>\n\t\t\t<strong>"+t.__escape(e(s&&s.location))+"</strong>\n\t\t\t":"")+"\n\n\t\t\t"+(e(s&&s.age)?"\n\t\t\t<span>[[user:age]]</span>\n\t\t\t<strong>"+t.__escape(e(s&&s.age))+"</strong>\n\t\t\t":"")+'\n\t\t</div>\n\t</div>\n\n\n\t<hr />\n\n\t<div class="row">\n\t\t<div class="col-xs-12 account-block hidden">\n\t\t\t<div class="account-picture-block text-center">\n\t\t\t\t<span>\n\t\t\t\t\t<span class="account-username"> '+t.__escape(e(s&&s.username))+"</span>\n\t\t\t\t</span>\n\n\t\t\t\t"+(e(s&&s.isSelf)?"":"\n\t\t\t\t"+(e(s&&s.isFollowing)?'\n\t\t\t\t<a component="account/unfollow" href="#" class="btn btn-warning btn-sm">[[user:unfollow]]</a>\n\t\t\t\t':'\n\t\t\t\t<a component="account/follow" href="#" class="btn btn-success btn-sm">[[user:follow]]</a>\n\t\t\t\t')+"\n\t\t\t\t")+"\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t"+(e(s&&s.groups&&s.groups.length)?'\n\t<div class="row">\n\t\t<div class="col-xs-12 hidden">\n\t\t\t'+o.blocks.groups(t,s,e,n,a)+"\n\t\t</div>\n\t</div>\n\t":"")+"\n\n\t"+(e(s&&s.ips&&s.ips.length)?'\n\t<div class="row">\n\t\t<div class="col-xs-12 hidden">\n\t\t\t<div class="panel-heading">\n\t\t\t\t<h3 class="panel-title">[[global:recentips]]</h3>\n\t\t\t</div>\n\t\t\t<div class="panel-body">\n\t\t\t'+o.blocks.ips(t,s,e,n,a)+"\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t":"")+'\n\n\t<div class="row">\n\t\t<div class="col-lg-6 col-xs-12">\n\t\t\t<h1>[[pages:account/best, '+t.__escape(e(s&&s.username))+']]</h1>\n\n\t\t\t<div class="col-xs-12">\n\t\t\t\t'+(e(s&&s.bestPosts&&s.bestPosts.length)?"":'\n\t\t\t\t<div class="alert alert-warning">[[user:has_no_posts]]</div>\n\t\t\t\t')+'\n\n\t\t\t\t<ul component="posts" class="posts-list">\n\t\t\t\t'+o.blocks.bestPosts(t,s,e,n,a)+'\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="col-lg-6 col-xs-12">\n\t\t\t<h1>[[pages:account/latest-posts, '+t.__escape(e(s&&s.username))+']]</h1>\n\n\t\t\t<div class="col-xs-12">\n\t\t\t\t'+(e(s&&s.latestPosts&&s.latestPosts.length)?"":'\n\t\t\t\t<div class="alert alert-warning">[[user:has_no_posts]]</div>\n\t\t\t\t')+'\n\t\t\t\t<ul component="posts" class="posts-list">\n\t\t\t\t'+o.blocks.latestPosts(t,s,e,n,a)+'\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div id="user-action-alert" class="alert alert-success hide"></div>\n</div>\n'}return o.blocks={latestPosts:function(s,e,n,t,a){return t(n(e&&e.latestPosts),function(t){return'\n\t\t\t\t<li component="post" class="posts-list-item row'+(n(e&&e.latestPosts&&e.latestPosts[t]&&e.latestPosts[t].deleted)||n(e&&e.latestPosts&&e.latestPosts[t]&&e.latestPosts[t].topic&&e.latestPosts[t].topic.deleted)?" deleted":"")+'" data-pid="'+s.__escape(n(e&&e.latestPosts&&e.latestPosts[t]&&e.latestPosts[t].pid))+'" data-uid="'+s.__escape(n(e&&e.latestPosts&&e.latestPosts[t]&&e.latestPosts[t].uid))+'">\n    <div class="col-lg-11 col-sm-10 col-xs-9 post-body">\n        <a class="topic-title" href="'+s.__escape(n(e&&e.config&&e.config.relative_path))+"/post/"+s.__escape(n(e&&e.latestPosts&&e.latestPosts[t]&&e.latestPosts[t].pid))+'">\n            '+(n(e&&e.latestPosts&&e.latestPosts[t]&&e.latestPosts[t].isMainPost)?"":"RE: ")+s.__escape(n(e&&e.latestPosts&&e.latestPosts[t]&&e.latestPosts[t].topic&&e.latestPosts[t].topic.title))+'\n        </a>\n\n        <div component="post/content" class="content">\n            '+s.__escape(n(e&&e.latestPosts&&e.latestPosts[t]&&e.latestPosts[t].content))+'\n        </div>\n\n        <small class="topic-category"><a href="'+s.__escape(n(e&&e.config&&e.config.relative_path))+"/category/"+s.__escape(n(e&&e.latestPosts&&e.latestPosts[t]&&e.latestPosts[t].category&&e.latestPosts[t].category.slug))+'">[[global:posted_in, '+s.__escape(n(e&&e.latestPosts&&e.latestPosts[t]&&e.latestPosts[t].category&&e.latestPosts[t].category.name))+']]</a></small>\n\n        <div class="post-info">\n            <a href="'+s.__escape(n(e&&e.config&&e.config.relative_path))+"/user/"+s.__escape(n(e&&e.latestPosts&&e.latestPosts[t]&&e.latestPosts[t].user&&e.latestPosts[t].user.userslug))+'">'+s.__escape(a(e,s,"buildAvatar",[n(e&&e.latestPosts&&e.latestPosts[t]&&e.latestPosts[t].user),"md",n(e&&e.true),"user-img"]))+'</a>\n\n            <div class="post-author">\n                <a href="'+s.__escape(n(e&&e.config&&e.config.relative_path))+"/user/"+s.__escape(n(e&&e.latestPosts&&e.latestPosts[t]&&e.latestPosts[t].user&&e.latestPosts[t].user.userslug))+'">'+s.__escape(n(e&&e.latestPosts&&e.latestPosts[t]&&e.latestPosts[t].user&&e.latestPosts[t].user.username))+'</a><br />\n                <span class="timeago" title="'+s.__escape(n(e&&e.latestPosts&&e.latestPosts[t]&&e.latestPosts[t].timestampISO))+'"></span>\n            </div>\n        </div>\n    </div>\n</li>\n\t\t\t\t'})},bestPosts:function(s,e,n,t,a){return t(n(e&&e.bestPosts),function(t){return'\n\t\t\t\t<li component="post" class="posts-list-item row'+(n(e&&e.bestPosts&&e.bestPosts[t]&&e.bestPosts[t].deleted)||n(e&&e.bestPosts&&e.bestPosts[t]&&e.bestPosts[t].topic&&e.bestPosts[t].topic.deleted)?" deleted":"")+'" data-pid="'+s.__escape(n(e&&e.bestPosts&&e.bestPosts[t]&&e.bestPosts[t].pid))+'" data-uid="'+s.__escape(n(e&&e.bestPosts&&e.bestPosts[t]&&e.bestPosts[t].uid))+'">\n    <div class="col-lg-11 col-sm-10 col-xs-9 post-body">\n        <a class="topic-title" href="'+s.__escape(n(e&&e.config&&e.config.relative_path))+"/post/"+s.__escape(n(e&&e.bestPosts&&e.bestPosts[t]&&e.bestPosts[t].pid))+'">\n            '+(n(e&&e.bestPosts&&e.bestPosts[t]&&e.bestPosts[t].isMainPost)?"":"RE: ")+s.__escape(n(e&&e.bestPosts&&e.bestPosts[t]&&e.bestPosts[t].topic&&e.bestPosts[t].topic.title))+'\n        </a>\n\n        <div component="post/content" class="content">\n            '+s.__escape(n(e&&e.bestPosts&&e.bestPosts[t]&&e.bestPosts[t].content))+'\n        </div>\n\n        <small class="topic-category"><a href="'+s.__escape(n(e&&e.config&&e.config.relative_path))+"/category/"+s.__escape(n(e&&e.bestPosts&&e.bestPosts[t]&&e.bestPosts[t].category&&e.bestPosts[t].category.slug))+'">[[global:posted_in, '+s.__escape(n(e&&e.bestPosts&&e.bestPosts[t]&&e.bestPosts[t].category&&e.bestPosts[t].category.name))+']]</a></small>\n\n        <div class="post-info">\n            <a href="'+s.__escape(n(e&&e.config&&e.config.relative_path))+"/user/"+s.__escape(n(e&&e.bestPosts&&e.bestPosts[t]&&e.bestPosts[t].user&&e.bestPosts[t].user.userslug))+'">'+s.__escape(a(e,s,"buildAvatar",[n(e&&e.bestPosts&&e.bestPosts[t]&&e.bestPosts[t].user),"md",n(e&&e.true),"user-img"]))+'</a>\n\n            <div class="post-author">\n                <a href="'+s.__escape(n(e&&e.config&&e.config.relative_path))+"/user/"+s.__escape(n(e&&e.bestPosts&&e.bestPosts[t]&&e.bestPosts[t].user&&e.bestPosts[t].user.userslug))+'">'+s.__escape(n(e&&e.bestPosts&&e.bestPosts[t]&&e.bestPosts[t].user&&e.bestPosts[t].user.username))+'</a><br />\n                <span class="timeago" title="'+s.__escape(n(e&&e.bestPosts&&e.bestPosts[t]&&e.bestPosts[t].timestampISO))+'"></span>\n            </div>\n        </div>\n    </div>\n</li>\n\t\t\t\t'})},ips:function(s,e,n,t){return t(n(e&&e.ips),function(t){return"\n\t\t\t\t<div>"+s.__escape(n(e&&e.ips&&e.ips[t]))+"</div>\n\t\t\t"})},groups:function(s,e,n,t){return t(n(e&&e.groups),function(t){return'\n\t\t\t<a href="'+s.__escape(n(e&&e.config&&e.config.relative_path))+"/groups/"+s.__escape(n(e&&e.groups&&e.groups[t]&&e.groups[t].slug))+'"><span class="label group-label inline-block" style="background-color: '+s.__escape(n(e&&e.groups&&e.groups[t]&&e.groups[t].labelColor))+';">'+(n(e&&e.groups&&e.groups[t]&&e.groups[t].icon)?'<i class="fa '+s.__escape(n(e&&e.groups&&e.groups[t]&&e.groups[t].icon))+'"></i> ':"")+s.__escape(n(e&&e.groups&&e.groups[t]&&e.groups[t].userTitle))+"</span></a>\n\t\t\t"})},selectedGroup:function(s,e,n,t){return t(n(e&&e.selectedGroup),function(t){return"\n\t\t"+(n(e&&e.selectedGroup&&e.selectedGroup[t]&&e.selectedGroup[t].slug)?'\n\t\t\t<a href="'+s.__escape(n(e&&e.config&&e.config.relative_path))+"/groups/"+s.__escape(n(e&&e.selectedGroup&&e.selectedGroup[t]&&e.selectedGroup[t].slug))+'"><small class="label group-label inline-block" style="color:'+s.__escape(n(e&&e.selectedGroup&&e.selectedGroup[t]&&e.selectedGroup[t].textColor))+";background-color: "+s.__escape(n(e&&e.selectedGroup&&e.selectedGroup[t]&&e.selectedGroup[t].labelColor))+';">'+(n(e&&e.selectedGroup&&e.selectedGroup[t]&&e.selectedGroup[t].icon)?'<i class="fa '+s.__escape(n(e&&e.selectedGroup&&e.selectedGroup[t]&&e.selectedGroup[t].icon))+'"></i> ':"")+s.__escape(n(e&&e.selectedGroup&&e.selectedGroup[t]&&e.selectedGroup[t].userTitle))+"</small></a>\n\t\t":"")+"\n\t\t"})},profile_links:function(e,n,a,t){return t(a(n&&n.profile_links),function(t,s){return"\n\t\t"+(0===s?'\n\t\t<li class="divider"></li>\n\t\t':"")+'\n\t\t<li id="'+e.__escape(a(n&&n.profile_links&&n.profile_links[t]&&n.profile_links[t].id))+'" class="plugin-link '+(a(n&&n.profile_links&&n.profile_links[t]&&n.profile_links[t].public)?"public":"private")+'"><a href="'+e.__escape(a(n&&n.config&&n.config.relative_path))+"/user/"+e.__escape(a(n&&n.userslug))+"/"+e.__escape(a(n&&n.profile_links&&n.profile_links[t]&&n.profile_links[t].route))+'">'+(a(n&&n.profile_links&&n.profile_links[t]&&n.profile_links[t].icon)?'<i class="fa fa-fw '+e.__escape(a(n&&n.profile_links&&n.profile_links[t]&&n.profile_links[t].icon))+'"></i> ':"")+e.__escape(a(n&&n.profile_links&&n.profile_links[t]&&n.profile_links[t].name))+"</a></li>\n\t\t"})},breadcrumbs:function(n,a,o,t){return t(o(a&&a.breadcrumbs),function(t,s,e){return"\n\t<li"+(s===e-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemprop="itemListElement" itemtype="http://schema.org/ListItem" '+(s===e-1?'class="active"':"")+'>\n\t\t<meta itemprop="position" content="'+n.__escape(s)+'" />\n\t\t'+(s!==e-1?'<a href="'+n.__escape(o(a&&a.breadcrumbs&&a.breadcrumbs[t]&&a.breadcrumbs[t].url))+'" itemprop="item">':"")+'\n\t\t\t<span itemprop="name">\n\t\t\t\t'+n.__escape(o(a&&a.breadcrumbs&&a.breadcrumbs[t]&&a.breadcrumbs[t].text))+"\n\t\t\t\t"+(s===e-1?"\n\t\t\t\t"+(o(a&&a["feeds:disableRSS"])?"":"\n\t\t\t\t"+(o(a&&a.rssFeedUrl)?'<a target="_blank" href="'+n.__escape(o(a&&a.rssFeedUrl))+'" itemprop="item"><i class="fa fa-rss-square"></i></a>':""))+"\n\t\t\t\t":"")+"\n\t\t\t</span>\n\t\t"+(s!==e-1?"</a>":"")+"\n\t</li>\n\t"})}},o});