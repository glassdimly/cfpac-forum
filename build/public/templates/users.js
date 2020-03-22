!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function i(t,a,n,e,s){return(n(a&&a.breadcrumbs&&a.breadcrumbs.length)?'\r\n<ol class="breadcrumb" itemscope="itemscope" itemprop="breadcrumb" itemtype="http://schema.org/BreadcrumbList">\r\n\t'+i.blocks.breadcrumbs(t,a,n,e,s)+"\r\n</ol>\r\n":"")+'\r\n\r\n\r\n<div data-widget-area="header">\r\n\t'+i.blocks["widgets.header"](t,a,n,e,s)+'\r\n</div>\r\n<div class="users">\r\n\t<div class="row">\r\n\t\t<div class="col-lg-6">\r\n\t\t<ul class="nav nav-pills">\r\n\t<li><a href="'+t.__escape(n(a&&a.config&&a.config.relative_path))+'/users?section=online">[[global:online]]</a></li>\r\n\t<li><a href="'+t.__escape(n(a&&a.config&&a.config.relative_path))+'/users?section=sort-posts">[[users:top_posters]]</a></li>\r\n\t'+(n(a&&a["reputation:disabled"])?"":'\r\n\t<li><a href="'+t.__escape(n(a&&a.config&&a.config.relative_path))+'/users?section=sort-reputation">[[users:most_reputation]]</a></li>\r\n\t')+"\r\n\t"+(n(a&&a.isAdminOrGlobalMod)?'\r\n\t<li><a href="'+t.__escape(n(a&&a.config&&a.config.relative_path))+'/users?section=flagged">[[users:most_flags]]</a></li>\r\n\t<li><a href="'+t.__escape(n(a&&a.config&&a.config.relative_path))+'/users?section=banned">[[user:banned]]</a></li>\r\n\t':"")+'\r\n</ul>\r\n\t\t</div>\r\n\t\t<div class="col-xs-3 text-right">\r\n\t\t\t'+(n(a&&a.showInviteButton)?'\r\n\t\t\t<button component="user/invite" class="btn btn-success"><i class="fa fa-users"></i> [[users:invite]]</button>\r\n\t\t\t':"")+"\r\n\t\t</div>\r\n\t\t"+(n(a&&a.displayUserSearch)?'\r\n\t\t<div class="col-lg-3 col-xs-9">\r\n\t\t\t<div class="search">\r\n\t\t\t\t<div class="input-group">\r\n\t\t\t\t\t<input class="form-control" id="search-user" type="text" placeholder="[[users:enter_username]]"/>\r\n\t\t\t\t\t<span class="input-group-addon">\r\n\t\t\t\t\t\t<i component="user/search/icon" class="fa fa-search"></i>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t':"")+'\r\n\t</div>\r\n\r\n\t<ul id="users-container" class="users-container">\r\n\t\t'+i.blocks.users(t,a,n,e,s)+"\r\n\t\t"+(n(a&&a.anonymousUserCount)?'\r\n\t\t<li class="users-box anon-user">\r\n\t\t\t<div class="avatar avatar-lg avatar-rounded">G</div>\r\n\t\t\t<br/>\r\n\t\t\t<div class="user-info">\r\n\t\t\t\t<span id="online_anon_count">'+t.__escape(n(a&&a.anonymousUserCount))+"</span>\r\n\t\t\t\t<span>[[global:guests]]</span>\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t\t":"")+'\r\n\t</ul>\r\n\r\n\t<div component="pagination" class="text-center pagination-container'+(n(a&&a.pagination&&a.pagination.pages&&a.pagination.pages.length)?"":" hidden")+'">\r\n\t<ul class="pagination hidden-xs">\r\n\t\t<li class="previous pull-left'+(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?"":" disabled")+'">\r\n\t\t\t<a href="?'+t.__escape(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.qs))+'" data-page="'+t.__escape(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t'+i.blocks["pagination.pages"](t,a,n,e,s)+'\r\n\r\n\t\t<li class="next pull-right'+(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?"":" disabled")+'">\r\n\t\t\t<a href="?'+t.__escape(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.qs))+'" data-page="'+t.__escape(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\r\n\t\t</li>\r\n\t</ul>\r\n\r\n\t<ul class="pagination hidden-sm hidden-md hidden-lg">\r\n\t\t<li class="first'+(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?"":" disabled")+'">\r\n\t\t\t<a href="?'+t.__escape(n(a&&a.pagination&&a.pagination.first&&a.pagination.first.qs))+'" data-page="1"><i class="fa fa-fast-backward"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t<li class="previous'+(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?"":" disabled")+'">\r\n\t\t\t<a href="?'+t.__escape(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.qs))+'" data-page="'+t.__escape(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t<li component="pagination/select-page" class="page select-page">\r\n\t\t\t<a href="#">'+t.__escape(n(a&&a.pagination&&a.pagination.currentPage))+" / "+t.__escape(n(a&&a.pagination&&a.pagination.pageCount))+'</a>\r\n\t\t</li>\r\n\r\n\t\t<li class="next'+(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?"":" disabled")+'">\r\n\t\t\t<a href="?'+t.__escape(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.qs))+'" data-page="'+t.__escape(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\r\n\t\t</li>\r\n\r\n\t\t<li class="last'+(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?"":" disabled")+'">\r\n\t\t\t<a href="?'+t.__escape(n(a&&a.pagination&&a.pagination.last&&a.pagination.last.qs))+'" data-page="'+t.__escape(n(a&&a.pagination&&a.pagination.pageCount))+'"><i class="fa fa-fast-forward"></i> </a>\r\n\t\t</li>\r\n\t</ul>\r\n</div>\r\n</div>\r\n'}return i.blocks={"pagination.pages":function(a,n,e,t){return t(e(n&&n.pagination&&n.pagination.pages),function(t){return"\r\n\t\t\t"+(e(n&&n.pagination&&n.pagination.pages&&n.pagination.pages[t]&&n.pagination.pages[t].separator)?'\r\n\t\t\t<li component="pagination/select-page" class="page select-page">\r\n\t\t\t\t<a href="#"><i class="fa fa-ellipsis-h"></i></a>\r\n\t\t\t</li>\r\n\t\t\t':'\r\n\t\t\t<li class="page'+(e(n&&n.pagination&&n.pagination.pages&&n.pagination.pages[t]&&n.pagination.pages[t].active)?" active":"")+'" >\r\n\t\t\t\t<a href="?'+a.__escape(e(n&&n.pagination&&n.pagination.pages&&n.pagination.pages[t]&&n.pagination.pages[t].qs))+'" data-page="'+a.__escape(e(n&&n.pagination&&n.pagination.pages&&n.pagination.pages[t]&&n.pagination.pages[t].page))+'">'+a.__escape(e(n&&n.pagination&&n.pagination.pages&&n.pagination.pages[t]&&n.pagination.pages[t].page))+"</a>\r\n\t\t\t</li>\r\n\t\t\t")+"\r\n\t\t"})},users:function(a,n,e,t,s){return t(e(n&&n.users),function(t){return'\r\n<li class="users-box registered-user" data-uid="'+a.__escape(e(n&&n.users&&n.users[t]&&n.users[t].uid))+'">\r\n\t<a href="'+a.__escape(e(n&&n.config&&n.config.relative_path))+"/user/"+a.__escape(e(n&&n.users&&n.users[t]&&n.users[t].userslug))+'">'+a.__escape(s(n,a,"buildAvatar",[e(n&&n.users&&n.users[t]),"80",e(n&&n.true)]))+'</a>\r\n\t<br/>\r\n\t<div class="user-info">\r\n\t\t<span>\r\n\t\t\t<i component="user/status" class="fa fa-circle status '+a.__escape(e(n&&n.users&&n.users[t]&&n.users[t].status))+'" title="[[global:'+a.__escape(e(n&&n.users&&n.users[t]&&n.users[t].status))+']]"></i>\r\n\t\t\t<a href="'+a.__escape(e(n&&n.config&&n.config.relative_path))+"/user/"+a.__escape(e(n&&n.users&&n.users[t]&&n.users[t].userslug))+'">'+a.__escape(e(n&&n.users&&n.users[t]&&n.users[t].username))+"</a>\r\n\t\t</span>\r\n\t\t<br/>\r\n\r\n\t\t"+(e(n&&n.section_joindate)?'\r\n\t\t<div title="joindate" class="joindate">\r\n\t\t\t<span class="timeago" title="'+a.__escape(e(n&&n.users&&n.users[t]&&n.users[t].joindateISO))+'"></span>\r\n\t\t</div>\r\n\t\t':"")+"\r\n\r\n\t\t"+(e(n&&n["section_sort-reputation"])?'\r\n\t\t<div title="reputation" class="reputation">\r\n\t\t\t<i class="fa fa-star"></i>\r\n\t\t\t<span class="formatted-number">'+a.__escape(e(n&&n.users&&n.users[t]&&n.users[t].reputation))+"</span>\r\n\t\t</div>\r\n\t\t":"")+"\r\n\r\n\t\t"+(e(n&&n["section_sort-posts"])?'\r\n\t\t<div title="post count" class="post-count">\r\n\t\t\t<i class="fa fa-pencil"></i>\r\n\t\t\t<span class="formatted-number">'+a.__escape(e(n&&n.users&&n.users[t]&&n.users[t].postcount))+"</span>\r\n\t\t</div>\r\n\t\t":"")+"\r\n\r\n\t\t"+(e(n&&n.section_flagged)?'\r\n\t\t<div title="flag count" class="flag-count">\r\n\t\t\t<i class="fa fa-flag"></i>\r\n\t\t\t<span><a class="formatted-number" href="'+a.__escape(e(n&&n.config&&n.config.relative_path))+"/flags?targetUid="+a.__escape(e(n&&n.users&&n.users[t]&&n.users[t].uid))+'">'+a.__escape(e(n&&n.users&&n.users[t]&&n.users[t].flags))+"</a></span>\r\n\t\t</div>\r\n\t\t":"")+"\r\n\t</div>\r\n</li>\r\n"})},"widgets.header":function(t,a,n,e){return e(n(a&&a.widgets&&a.widgets.header),function(t){return"\r\n\t"+n(a&&a.widgets&&a.widgets.header&&a.widgets.header[t]&&a.widgets.header[t].html)+"\r\n\t"})},breadcrumbs:function(e,s,i,t){return t(i(s&&s.breadcrumbs),function(t,a,n){return"\r\n\t<li"+(a===n-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemprop="itemListElement" itemtype="http://schema.org/ListItem" '+(a===n-1?'class="active"':"")+'>\r\n\t\t<meta itemprop="position" content="'+e.__escape(a)+'" />\r\n\t\t'+(a!==n-1?'<a href="'+e.__escape(i(s&&s.breadcrumbs&&s.breadcrumbs[t]&&s.breadcrumbs[t].url))+'" itemprop="item">':"")+'\r\n\t\t\t<span itemprop="name">\r\n\t\t\t\t'+e.__escape(i(s&&s.breadcrumbs&&s.breadcrumbs[t]&&s.breadcrumbs[t].text))+"\r\n\t\t\t\t"+(a===n-1?"\r\n\t\t\t\t"+(i(s&&s["feeds:disableRSS"])?"":"\r\n\t\t\t\t"+(i(s&&s.rssFeedUrl)?'<a target="_blank" href="'+e.__escape(i(s&&s.rssFeedUrl))+'" itemprop="item"><i class="fa fa-rss-square"></i></a>':""))+"\r\n\t\t\t\t":"")+"\r\n\t\t\t</span>\r\n\t\t"+(a!==n-1?"</a>":"")+"\r\n\t</li>\r\n\t"})}},i});