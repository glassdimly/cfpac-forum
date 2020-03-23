!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function s(t,n,e,o,a){return'<div class="account">\n\t'+(e(n&&n.breadcrumbs&&n.breadcrumbs.length)?'\n<ol class="breadcrumb" itemscope="itemscope" itemprop="breadcrumb" itemtype="http://schema.org/BreadcrumbList">\n\t'+s.blocks.breadcrumbs(t,n,e,o,a)+"\n</ol>\n":"")+'\n\n\n<div class="cover" component="account/cover" style="background-image: url('+t.__escape(e(n&&n["cover:url"]))+"); background-position: "+t.__escape(e(n&&n["cover:position"]))+';">\n\t<div class="avatar-wrapper" data-uid="'+t.__escape(e(n&&n.uid))+'">\n\t\t'+(e(n&&n.picture)?'\n\t\t<img src="'+t.__escape(e(n&&n.picture))+'" class="avatar avatar-xl avatar-rounded" />\n\t\t':'\n\t\t<div class="avatar avatar-xl avatar-rounded" style="background-color: '+t.__escape(e(n&&n["icon:bgColor"]))+';" title="'+t.__escape(e(n&&n.username))+'">'+t.__escape(e(n&&n["icon:text"]))+"</div>\n\t\t")+'\n\t\t<i component="user/status" class="fa fa-circle status '+t.__escape(e(n&&n.status))+'" title="[[global:'+t.__escape(e(n&&n.status))+']]"></i>\n\n\t\t'+(e(n&&n.loggedIn)?"\n\t\t"+(e(n&&n.isSelf)?"":'\n\t\t<button class="btn-morph fab '+(e(n&&n.isFollowing)?"heart":"plus")+'" title="'+(e(n&&n.isFollowing)?"[[global:unfollow]]":"[[global:follow]]")+'">\n\t\t\t<span>\n\t\t\t\t<span class="s1"></span>\n\t\t\t\t<span class="s2"></span>\n\t\t\t\t<span class="s3"></span>\n\t\t\t</span>\n\t\t</button>\n\t\t')+"\n\t\t":"")+'\n\t</div>\n\n\t<div class="container">\n\t\t<div class="btn-group account-fab bottom-sheet">\n\t<button type="button" class="fab dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n\t\t<i class="fa fa-ellipsis-v"></i>\n\t</button>\n\t<ul class="dropdown-menu dropdown-menu-right">\n\t\t'+(e(n&&n.loggedIn)?"\n\t\t"+(e(n&&n.isSelf)?"":"\n\t\t"+(e(n&&n.banned)?"":"\n\t\t"+(e(n&&n.config&&n.config.disableChat)?"":'\n\t\t<li class="'+(e(n&&n.hasPrivateChat)?"":"hidden")+'">\n\t\t\t<a component="account/chat" href="#">[[user:chat_with, '+t.__escape(e(n&&n.username))+']]</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component="account/new-chat" href="#">[[user:new_chat_with, '+t.__escape(e(n&&n.username))+"]]</a>\n\t\t</li>\n\t\t")+'\n\t\t<li>\n\t\t\t<a component="account/flag" href="#">[[user:flag-profile]]</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component="account/block" href="#">'+(e(n&&n.isBlocked)?"[[user:unblock_user]]":"[[user:block_user]]")+'</a>\n\t\t</li>\n\t\t<li class="divider"></li>\n\t\t')+"\n\t\t")+"\n\t\t":"")+'\n\t\t<li>\n\t\t\t<a href="'+t.__escape(e(n&&n.config&&n.config.relative_path))+"/user/"+t.__escape(e(n&&n.userslug))+'" class="inline-block" id="profile">[[user:profile]]</a>\n\t\t</li>\n\t\t'+(e(n&&n.showHidden)?'\n\t\t<li><a href="'+t.__escape(e(n&&n.config&&n.config.relative_path))+"/user/"+t.__escape(e(n&&n.userslug))+'/edit">[[user:edit]]</a></li>\n\t\t<li><a href="'+t.__escape(e(n&&n.config&&n.config.relative_path))+"/user/"+t.__escape(e(n&&n.userslug))+'/settings">[[user:settings]]</a></li>\n\t\t':"")+"\n\n\t\t"+(e(n&&n.isSelf)?"":"\n\t\t"+(e(n&&n.canBan)?'\n\t\t<li class="'+(e(n&&n.banned)?"hide":"")+'">\n\t\t\t<a component="account/ban" href="#">[[user:ban_account]]</a>\n\t\t</li>\n\t\t<li class="'+(e(n&&n.banned)?"":"hide")+'">\n\t\t\t<a component="account/unban" href="#">[[user:unban_account]]</a>\n\t\t</li>\n\t\t':"")+"\n\t\t"+(e(n&&n.isAdmin)?'\n\t\t<li>\n\t\t\t<a component="account/delete" href="#" class="">[[user:delete_account]]</a>\n\t\t</li>\n\t\t':"")+"\n\t\t")+'\n\n\t\t<li class="divider"></li>\n\t\t<li><a href="'+t.__escape(e(n&&n.config&&n.config.relative_path))+"/user/"+t.__escape(e(n&&n.userslug))+'/following">[[user:following]]</a></li>\n\t\t<li><a href="'+t.__escape(e(n&&n.config&&n.config.relative_path))+"/user/"+t.__escape(e(n&&n.userslug))+'/followers">[[user:followers]]</a></li>\n\t\t'+(e(n&&n.showHidden)?'\n\t\t<li><a href="'+t.__escape(e(n&&n.config&&n.config.relative_path))+"/user/"+t.__escape(e(n&&n.userslug))+'/blocks">[[user:blocks]]</a></li>\n\t\t':"")+'\n\t\t<li class="divider"></li>\n\t\t<li><a href="'+t.__escape(e(n&&n.config&&n.config.relative_path))+"/user/"+t.__escape(e(n&&n.userslug))+'/topics">[[global:topics]]</a></li>\n\t\t<li><a href="'+t.__escape(e(n&&n.config&&n.config.relative_path))+"/user/"+t.__escape(e(n&&n.userslug))+'/posts">[[global:posts]]</a></li>\n\t\t'+(e(n&&n["reputation:disabled"])?"":'\n\t\t<li><a href="'+t.__escape(e(n&&n.config&&n.config.relative_path))+"/user/"+t.__escape(e(n&&n.userslug))+'/best">[[global:best]]</a></li>\n\t\t')+'\n\t\t<li><a href="'+t.__escape(e(n&&n.config&&n.config.relative_path))+"/user/"+t.__escape(e(n&&n.userslug))+'/groups">[[global:header.groups]]</a></li>\n\n\t\t'+(e(n&&n.showHidden)?'\n\t\t<li><a href="'+t.__escape(e(n&&n.config&&n.config.relative_path))+"/user/"+t.__escape(e(n&&n.userslug))+'/categories">[[user:watched_categories]]</a></li>\n\t\t<li><a href="'+t.__escape(e(n&&n.config&&n.config.relative_path))+"/user/"+t.__escape(e(n&&n.userslug))+'/bookmarks">[[user:bookmarks]]</a></li>\n\t\t<li><a href="'+t.__escape(e(n&&n.config&&n.config.relative_path))+"/user/"+t.__escape(e(n&&n.userslug))+'/watched">[[user:watched]]</a></li>\n\t\t<li><a href="'+t.__escape(e(n&&n.config&&n.config.relative_path))+"/user/"+t.__escape(e(n&&n.userslug))+'/ignored">[[user:ignored]]</a></li>\n\t\t'+(e(n&&n["reputation:disabled"])?"":'\n\t\t<li><a href="'+t.__escape(e(n&&n.config&&n.config.relative_path))+"/user/"+t.__escape(e(n&&n.userslug))+'/upvoted">[[global:upvoted]]</a></li>\n\t\t'+(e(n&&n["downvote:disabled"])?"":'\n\t\t<li><a href="'+t.__escape(e(n&&n.config&&n.config.relative_path))+"/user/"+t.__escape(e(n&&n.userslug))+'/downvoted">[[global:downvoted]]</a></li>\n\t\t')+"\n\t\t")+'\n\t\t<li><a href="'+t.__escape(e(n&&n.config&&n.config.relative_path))+"/user/"+t.__escape(e(n&&n.userslug))+'/uploads">[[global:uploads]]</a></li>\n\t\t':"")+"\n\n\t\t"+s.blocks.profile_links(t,n,e,o,a)+"\n\t</ul>\n</div>\n\n\n\t\t"+(e(n&&n.allowCoverPicture)?"\n\t\t"+(e(n&&n.canEdit)?'\n\t\t<div class="controls">\n\t\t\t<span class="upload"><i class="fa fa-fw fa-4x fa-upload"></i></span>\n\t\t\t<span class="resize"><i class="fa fa-fw fa-4x fa-arrows"></i></span>\n\t\t\t<span class="remove"><i class="fa fa-fw fa-4x fa-times"></i></span>\n\t\t</div>\n\t\t<div class="save">[[groups:cover-save]] <i class="fa fa-fw fa-floppy-o"></i></div>\n\t\t<div class="indicator">[[groups:cover-saving]] <i class="fa fa-fw fa-refresh fa-spin"></i></div>\n\t\t':"")+"\n\t\t":"")+'\n\t</div>\n</div>\n\n\n\t<div class="row">\n\t\t<div class="col-xs-12 col-md-6">\n\t\t\t'+(e(n&&n.disableCustomUserSkins)?"":'\n\t\t\t<h4>[[user:select-skin]]</h4>\n\t\t\t<div class="well">\n\t\t\t\t<select class="form-control" id="bootswatchSkin" data-property="bootswatchSkin">\n\t\t\t\t\t'+s.blocks.bootswatchSkinOptions(t,n,e,o,a)+"\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t")+"\n\n\t\t\t"+(e(n&&n.allowUserHomePage)?'\n\t\t\t<h4>[[user:select-homepage]]</h4>\n\t\t\t<div class="well">\n\t\t\t\t<div class="form-group">\n\t\t\t\t\t<label for="dailyDigestFreq">[[user:homepage]]</label>\n\t\t\t\t\t<select class="form-control" data-property="homePageRoute">\n\t\t\t\t\t\t<option value="none">None</option>\n\t\t\t\t\t\t'+s.blocks.homePageRoutes(t,n,e,o,a)+'\n\t\t\t\t\t</select>\n\t\t\t\t\t<p class="help-block">[[user:homepage_description]]</p>\n\t\t\t\t</div>\n\t\t\t\t<div id="homePageCustom" class="form-group" style="display: none;">\n\t\t\t\t\t<label for="homePageCustom">[[user:custom_route]]</label>\n\t\t\t\t\t<input type="text" class="form-control" data-property="homePageCustom" id="homePageCustom" value="'+t.__escape(e(n&&n.settings&&n.settings.homePageRoute))+'"/>\n\t\t\t\t\t<p class="help-block">[[user:custom_route_help]]</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t':"")+'\n\n\t\t\t<h4>[[global:privacy]]</h4>\n\t\t\t<div class="well">\n\t\t\t\t'+(e(n&&n.hideEmail)?"":'\n\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type="checkbox" data-property="showemail" '+(e(n&&n.settings&&n.settings.showemail)?"checked ":"")+"/> <strong>[[user:show_email]]</strong>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t")+"\n\n\t\t\t\t"+(e(n&&n.hideFullname)?"":'\n\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type="checkbox" data-property="showfullname" '+(e(n&&n.settings&&n.settings.showfullname)?"checked":"")+"/> <strong>[[user:show_fullname]]</strong>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t")+"\n\t\t\t\t"+(e(n&&n.config&&n.config.disableChat)?"":'\n\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type="checkbox" data-property="restrictChat" '+(e(n&&n.settings&&n.settings.restrictChat)?"checked":"")+"/> <strong>[[user:restrict_chats]]</strong>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t")+'\n\t\t\t</div>\n\n\t\t\t<h4>[[user:browsing]]</h4>\n\t\t\t<div class="well">\n\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type="checkbox" data-property="openOutgoingLinksInNewTab" '+(e(n&&n.settings&&n.settings.openOutgoingLinksInNewTab)?"checked":"")+"/> <strong>[[user:open_links_in_new_tab]]</strong>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t"+(e(n&&n.inTopicSearchAvailable)?'\n\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type="checkbox" data-property="topicSearchEnabled" '+(e(n&&n.settings&&n.settings.topicSearchEnabled)?"checked":"")+'/> <strong>[[user:enable_topic_searching]]</strong>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t<p class="help-block">[[user:topic_search_help]]</p>\n\t\t\t\t':"")+'\n\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type="checkbox" data-property="scrollToMyPost" '+(e(n&&n.settings&&n.settings.scrollToMyPost)?"checked":"")+'/> <strong>[[user:scroll_to_my_post]]</strong>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<h4>[[global:pagination]]</h4>\n\t\t\t<div class="well">\n\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type="checkbox" data-property="usePagination" '+(e(n&&n.settings&&n.settings.usePagination)?"checked":"")+"> <strong>[[user:paginate_description]]</strong>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\n\t\t\t\t<strong>[[user:topics_per_page]] ([[user:max_items_per_page, "+t.__escape(e(n&&n.maxTopicsPerPage))+']])</strong><br /> <input type="text" class="form-control" data-property="topicsPerPage" value="'+t.__escape(e(n&&n.settings&&n.settings.topicsPerPage))+'"><br />\n\t\t\t\t<strong>[[user:posts_per_page]] ([[user:max_items_per_page, '+t.__escape(e(n&&n.maxPostsPerPage))+']])</strong><br /> <input type="text" class="form-control" data-property="postsPerPage" value="'+t.__escape(e(n&&n.settings&&n.settings.postsPerPage))+'"><br />\n\t\t\t</div>\n\n\t\t\t'+(e(n&&n.disableEmailSubscriptions)?"":'\n\t\t\t<h4>[[global:email]]</h4>\n\t\t\t<div class="well">\n\t\t\t\t<div class="form-group">\n\t\t\t\t\t<label for="dailyDigestFreq">[[user:digest_label]]</label>\n\t\t\t\t\t<select class="form-control" id="dailyDigestFreq" data-property="dailyDigestFreq" autocomplete="off">\n\t\t\t\t\t\t'+s.blocks.dailyDigestFreqOptions(t,n,e,o,a)+'\n\t\t\t\t\t</select>\n\t\t\t\t\t<p class="help-block">[[user:digest_description]]</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t')+"\n\n\t\t\t"+s.blocks.customSettings(t,n,e,o,a)+'\n\n\t\t</div>\n\n\t\t<div class="col-xs-12 col-md-6">\n\t\t\t<h4>[[global:language]]</h4>\n\t\t\t<div class="well">\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="form-group col-lg-12">\n\t\t\t\t\t\t<select data-property="userLang" class="form-control">\n\t\t\t\t\t\t\t'+s.blocks.languages(t,n,e,o,a)+"\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t"+(e(n&&n.isAdmin)?"\n\t\t\t\t"+(e(n&&n.isSelf)?'\n\t\t\t\t<label>[[user:acp_language]]</label>\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="form-group col-lg-12">\n\t\t\t\t\t\t<select data-property="acpLang" class="form-control">\n\t\t\t\t\t\t\t'+s.blocks.acpLanguages(t,n,e,o,a)+"\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t":"")+"\n\t\t\t\t":"")+'\n\t\t\t</div>\n\n\t\t\t<h4>[[topic:watch]]</h4>\n\t\t\t<div class="well">\n\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type="checkbox" data-property="followTopicsOnCreate" '+(e(n&&n.settings&&n.settings.followTopicsOnCreate)?"checked ":"")+'/> <strong>[[user:follow_topics_you_create]]</strong>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type="checkbox" data-property="followTopicsOnReply" '+(e(n&&n.settings&&n.settings.followTopicsOnReply)?"checked":"")+'/> <strong>[[user:follow_topics_you_reply_to]]</strong>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t<div class="form-group">\n\t\t\t\t\t<label>[[user:default-category-watch-state]]</label>\n\t\t\t\t\t<select class="form-control" data-property="categoryWatchState">\n\t\t\t\t\t\t<option value="watching" '+(e(n&&n.categoryWatchState&&n.categoryWatchState.watching)?"selected":"")+'>[[category:watching]]</option>\n\t\t\t\t\t\t<option value="notwatching" '+(e(n&&n.categoryWatchState&&n.categoryWatchState.notwatching)?"selected":"")+'>[[category:not-watching]]</option>\n\t\t\t\t\t\t<option value="ignoring" '+(e(n&&n.categoryWatchState&&n.categoryWatchState.ignoring)?"selected":"")+'>[[category:ignoring]]</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\n\t\t\t<h4>[[user:notifications_and_sounds]]</h4>\n\t\t\t<div class="well">\n\n\t\t\t\t'+s.blocks.notificationSettings(t,n,e,o,a)+'\n\n\t\t\t\t<label for="upvote-notif-freq">[[user:upvote-notif-freq]]</label>\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="form-group col-xs-9">\n\t\t\t\t\t\t<select class="form-control" id="upvote-notif-freq" name="upvote-notif-freq" data-property="upvoteNotifFreq">\n\t\t\t\t\t\t\t'+s.blocks.upvoteNotifFreq(t,n,e,o,a)+'\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<label for="notification">[[user:notification-sound]]</label>\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="form-group col-xs-9">\n\t\t\t\t\t\t<select class="form-control" id="notification" name="notification" data-property="notificationSound">\n\t\t\t\t\t\t\t<option value="">[[user:no-sound]]</option>\n\t\t\t\t\t\t\t'+s.blocks.notificationSound(t,n,e,o,a)+'\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="btn-group col-xs-3">\n\t\t\t\t\t\t<button type="button" class="form-control btn btn-sm btn-default" data-action="play"><span class="hidden-xs">[[global:play]] </span><i class="fa fa-play"></i></button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t'+(e(n&&n.config&&n.config.disableChat)?"":'\n\t\t\t\t<label for="chat-incoming">[[user:incoming-message-sound]]</label>\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="form-group col-xs-9">\n\t\t\t\t\t\t<select class="form-control" id="chat-incoming" name="chat-incoming" data-property="incomingChatSound">\n\t\t\t\t\t\t\t<option value="">[[user:no-sound]]</option>\n\t\t\t\t\t\t\t'+s.blocks.incomingChatSound(t,n,e,o,a)+'\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="btn-group col-xs-3">\n\t\t\t\t\t\t<button type="button" class="form-control btn btn-sm btn-default" data-action="play"><span class="hidden-xs">[[global:play]] </span><i class="fa fa-play"></i></button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<label for="chat-outgoing">[[user:outgoing-message-sound]]</label>\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="form-group col-xs-9">\n\t\t\t\t\t\t<select class="form-control" id="chat-outgoing" name="chat-outgoing" data-property="outgoingChatSound">\n\t\t\t\t\t\t\t<option value="">[[user:no-sound]]</option>\n\t\t\t\t\t\t\t'+s.blocks.outgoingChatSound(t,n,e,o,a)+'\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="btn-group col-xs-3">\n\t\t\t\t\t\t<button type="button" class="form-control btn btn-sm btn-default" data-action="play"><span class="hidden-xs">[[global:play]] </span><i class="fa fa-play"></i></button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t')+'\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class="form-actions">\n\t\t<a id="submitBtn" href="#" class="btn btn-primary">[[global:save_changes]]</a>\n\t</div>\n</div>\n\n'}return s.blocks={outgoingChatSound:function(n,e,o,t){return t(o(e&&e.outgoingChatSound),function(t){return'\n\t\t\t\t\t\t\t<option value="'+n.__escape(o(e&&e.outgoingChatSound&&e.outgoingChatSound[t]&&e.outgoingChatSound[t].name))+'" '+(o(e&&e.outgoingChatSound&&e.outgoingChatSound[t]&&e.outgoingChatSound[t].selected)?"selected":"")+">"+n.__escape(o(e&&e.outgoingChatSound&&e.outgoingChatSound[t]&&e.outgoingChatSound[t].name))+"</option>\n\t\t\t\t\t\t\t"})},incomingChatSound:function(n,e,o,t){return t(o(e&&e.incomingChatSound),function(t){return'\n\t\t\t\t\t\t\t<option value="'+n.__escape(o(e&&e.incomingChatSound&&e.incomingChatSound[t]&&e.incomingChatSound[t].name))+'" '+(o(e&&e.incomingChatSound&&e.incomingChatSound[t]&&e.incomingChatSound[t].selected)?"selected":"")+">"+n.__escape(o(e&&e.incomingChatSound&&e.incomingChatSound[t]&&e.incomingChatSound[t].name))+"</option>\n\t\t\t\t\t\t\t"})},notificationSound:function(n,e,o,t){return t(o(e&&e.notificationSound),function(t){return'\n\t\t\t\t\t\t\t<option value="'+n.__escape(o(e&&e.notificationSound&&e.notificationSound[t]&&e.notificationSound[t].name))+'" '+(o(e&&e.notificationSound&&e.notificationSound[t]&&e.notificationSound[t].selected)?"selected":"")+">"+n.__escape(o(e&&e.notificationSound&&e.notificationSound[t]&&e.notificationSound[t].name))+"</option>\n\t\t\t\t\t\t\t"})},upvoteNotifFreq:function(n,e,o,t){return t(o(e&&e.upvoteNotifFreq),function(t){return'\n\t\t\t\t\t\t\t<option value="'+n.__escape(o(e&&e.upvoteNotifFreq&&e.upvoteNotifFreq[t]&&e.upvoteNotifFreq[t].name))+'" '+(o(e&&e.upvoteNotifFreq&&e.upvoteNotifFreq[t]&&e.upvoteNotifFreq[t].selected)?"selected":"")+">\n\t\t\t\t\t\t\t\t[[user:upvote-notif-freq."+n.__escape(o(e&&e.upvoteNotifFreq&&e.upvoteNotifFreq[t]&&e.upvoteNotifFreq[t].name))+"]]\n\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t"})},notificationSettings:function(n,e,o,t){return t(o(e&&e.notificationSettings),function(t){return'\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="form-group col-xs-7">\n\t\t\t\t\t\t<label>'+n.__escape(o(e&&e.notificationSettings&&e.notificationSettings[t]&&e.notificationSettings[t].label))+'</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="form-group col-xs-5">\n\t\t\t\t\t\t<select class="form-control" data-property="'+n.__escape(o(e&&e.notificationSettings&&e.notificationSettings[t]&&e.notificationSettings[t].name))+'">\n\t\t\t\t\t\t\t<option value="none" '+(o(e&&e.notificationSettings&&e.notificationSettings[t]&&e.notificationSettings[t].none)?"selected":"")+'>[[notifications:none]]</option>\n\t\t\t\t\t\t\t<option value="notification" '+(o(e&&e.notificationSettings&&e.notificationSettings[t]&&e.notificationSettings[t].notification)?"selected":"")+'>[[notifications:notification_only]]</option>\n\t\t\t\t\t\t\t<option value="email" '+(o(e&&e.notificationSettings&&e.notificationSettings[t]&&e.notificationSettings[t].email)?"selected":"")+'>[[notifications:email_only]]</option>\n\t\t\t\t\t\t\t<option value="notificationemail" '+(o(e&&e.notificationSettings&&e.notificationSettings[t]&&e.notificationSettings[t].notificationemail)?"selected":"")+">[[notifications:notification_and_email]]</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t"})},acpLanguages:function(n,e,o,t){return t(o(e&&e.acpLanguages),function(t){return'\n\t\t\t\t\t\t\t<option value="'+n.__escape(o(e&&e.acpLanguages&&e.acpLanguages[t]&&e.acpLanguages[t].code))+'" '+(o(e&&e.acpLanguages&&e.acpLanguages[t]&&e.acpLanguages[t].selected)?"selected":"")+">"+n.__escape(o(e&&e.acpLanguages&&e.acpLanguages[t]&&e.acpLanguages[t].name))+" ("+n.__escape(o(e&&e.acpLanguages&&e.acpLanguages[t]&&e.acpLanguages[t].code))+")</option>\n\t\t\t\t\t\t\t"})},languages:function(n,e,o,t){return t(o(e&&e.languages),function(t){return'\n\t\t\t\t\t\t\t<option value="'+n.__escape(o(e&&e.languages&&e.languages[t]&&e.languages[t].code))+'" '+(o(e&&e.languages&&e.languages[t]&&e.languages[t].selected)?"selected":"")+">"+n.__escape(o(e&&e.languages&&e.languages[t]&&e.languages[t].name))+" ("+n.__escape(o(e&&e.languages&&e.languages[t]&&e.languages[t].code))+")</option>\n\t\t\t\t\t\t\t"})},customSettings:function(n,e,o,t){return t(o(e&&e.customSettings),function(t){return"\n\t\t\t<h4>"+n.__escape(o(e&&e.customSettings&&e.customSettings[t]&&e.customSettings[t].title))+'</h4>\n\t\t\t<div class="well">\n\t\t\t\t'+n.__escape(o(e&&e.customSettings&&e.customSettings[t]&&e.customSettings[t].content))+"\n\t\t\t</div>\n\t\t\t"})},dailyDigestFreqOptions:function(n,e,o,t){return t(o(e&&e.dailyDigestFreqOptions),function(t){return'\n\t\t\t\t\t\t<option value="'+n.__escape(o(e&&e.dailyDigestFreqOptions&&e.dailyDigestFreqOptions[t]&&e.dailyDigestFreqOptions[t].value))+'" '+(o(e&&e.dailyDigestFreqOptions&&e.dailyDigestFreqOptions[t]&&e.dailyDigestFreqOptions[t].selected)?'selected="1"':"")+">"+n.__escape(o(e&&e.dailyDigestFreqOptions&&e.dailyDigestFreqOptions[t]&&e.dailyDigestFreqOptions[t].name))+"</option>\n\t\t\t\t\t\t"})},homePageRoutes:function(n,e,o,t){return t(o(e&&e.homePageRoutes),function(t){return'\n\t\t\t\t\t\t<option value="'+n.__escape(o(e&&e.homePageRoutes&&e.homePageRoutes[t]&&e.homePageRoutes[t].route))+'" '+(o(e&&e.homePageRoutes&&e.homePageRoutes[t]&&e.homePageRoutes[t].selected)?'selected="1"':"")+">"+n.__escape(o(e&&e.homePageRoutes&&e.homePageRoutes[t]&&e.homePageRoutes[t].name))+"</option>\n\t\t\t\t\t\t"})},bootswatchSkinOptions:function(n,e,o,t){return t(o(e&&e.bootswatchSkinOptions),function(t){return'\n\t\t\t\t\t<option value="'+n.__escape(o(e&&e.bootswatchSkinOptions&&e.bootswatchSkinOptions[t]&&e.bootswatchSkinOptions[t].value))+'" '+(o(e&&e.bootswatchSkinOptions&&e.bootswatchSkinOptions[t]&&e.bootswatchSkinOptions[t].selected)?"selected":"")+">"+n.__escape(o(e&&e.bootswatchSkinOptions&&e.bootswatchSkinOptions[t]&&e.bootswatchSkinOptions[t].name))+"</option>\n\t\t\t\t\t"})},profile_links:function(e,o,a,t){return t(a(o&&o.profile_links),function(t,n){return"\n\t\t"+(0===n?'\n\t\t<li class="divider"></li>\n\t\t':"")+'\n\t\t<li id="'+e.__escape(a(o&&o.profile_links&&o.profile_links[t]&&o.profile_links[t].id))+'" class="plugin-link '+(a(o&&o.profile_links&&o.profile_links[t]&&o.profile_links[t].public)?"public":"private")+'"><a href="'+e.__escape(a(o&&o.config&&o.config.relative_path))+"/user/"+e.__escape(a(o&&o.userslug))+"/"+e.__escape(a(o&&o.profile_links&&o.profile_links[t]&&o.profile_links[t].route))+'">'+(a(o&&o.profile_links&&o.profile_links[t]&&o.profile_links[t].icon)?'<i class="fa fa-fw '+e.__escape(a(o&&o.profile_links&&o.profile_links[t]&&o.profile_links[t].icon))+'"></i> ':"")+e.__escape(a(o&&o.profile_links&&o.profile_links[t]&&o.profile_links[t].name))+"</a></li>\n\t\t"})},breadcrumbs:function(o,a,s,t){return t(s(a&&a.breadcrumbs),function(t,n,e){return"\n\t<li"+(n===e-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemprop="itemListElement" itemtype="http://schema.org/ListItem" '+(n===e-1?'class="active"':"")+'>\n\t\t<meta itemprop="position" content="'+o.__escape(n)+'" />\n\t\t'+(n!==e-1?'<a href="'+o.__escape(s(a&&a.breadcrumbs&&a.breadcrumbs[t]&&a.breadcrumbs[t].url))+'" itemprop="item">':"")+'\n\t\t\t<span itemprop="name">\n\t\t\t\t'+o.__escape(s(a&&a.breadcrumbs&&a.breadcrumbs[t]&&a.breadcrumbs[t].text))+"\n\t\t\t\t"+(n===e-1?"\n\t\t\t\t"+(s(a&&a["feeds:disableRSS"])?"":"\n\t\t\t\t"+(s(a&&a.rssFeedUrl)?'<a target="_blank" href="'+o.__escape(s(a&&a.rssFeedUrl))+'" itemprop="item"><i class="fa fa-rss-square"></i></a>':""))+"\n\t\t\t\t":"")+"\n\t\t\t</span>\n\t\t"+(n!==e-1?"</a>":"")+"\n\t</li>\n\t"})}},s});