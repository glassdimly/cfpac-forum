!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function s(t,n,a,i,e){return'\n<div class="notifications">\n\n\t'+(a(n&&n.breadcrumbs&&n.breadcrumbs.length)?'\n<ol class="breadcrumb" itemscope="itemscope" itemprop="breadcrumb" itemtype="http://schema.org/BreadcrumbList">\n\t'+s.blocks.breadcrumbs(t,n,a,i,e)+"\n</ol>\n":"")+'\n\n\n\t<div class="btn-toolbar">\n\t\t<div class="dropdown pull-right">\n\t\t\t<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="true">\n\t\t\t\t<i class="fa fa-eye"></i>\n\t\t\t\t<span class="caret"></span>\n\t\t\t</button>\n\t\t\t<ul class="dropdown-menu dropdown-menu-right" role="menu" aria-labelledby="dropdownMenu1">\n\t\t\t\t<li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-ajaxify="false" component="notifications/mark_all">[[notifications:mark_all_read]]</a></li>\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<div class="dropdown pull-right">\n\t\t\t<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">\n\t\t\t\t'+(a(n&&n.selectedFilter)?t.__escape(a(n&&n.selectedFilter&&n.selectedFilter.name)):"")+' <span class="caret"></span>\n\t\t\t</button>\n\t\t\t<ul class="dropdown-menu" role="menu">\n\t\t\t\t'+s.blocks.filters(t,n,a,i,e)+'\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\n\t<hr />\n\n\t<div class="alert alert-info '+(a(n&&n.notifications&&n.notifications.length)?"hidden":"")+'">\n\t\t[[notifications:no_notifs]]\n\t</div>\n\n\t<ul class="notifications-list" data-nextstart="'+t.__escape(a(n&&n.nextStart))+'">\n\t'+s.blocks.notifications(t,n,a,i,e)+'\n\t</ul>\n\t<div component="pagination" class="text-center pagination-container'+(a(n&&n.pagination&&n.pagination.pages&&n.pagination.pages.length)?"":" hidden")+'">\n\t<ul class="pagination hidden-xs">\n\t\t<li class="previous pull-left'+(a(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(a(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.qs))+'" data-page="'+t.__escape(a(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t'+s.blocks["pagination.pages"](t,n,a,i,e)+'\n\n\t\t<li class="next pull-right'+(a(n&&n.pagination&&n.pagination.next&&n.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(a(n&&n.pagination&&n.pagination.next&&n.pagination.next.qs))+'" data-page="'+t.__escape(a(n&&n.pagination&&n.pagination.next&&n.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\t</ul>\n\n\t<ul class="pagination hidden-sm hidden-md hidden-lg">\n\t\t<li class="first'+(a(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(a(n&&n.pagination&&n.pagination.first&&n.pagination.first.qs))+'" data-page="1"><i class="fa fa-fast-backward"></i> </a>\n\t\t</li>\n\n\t\t<li class="previous'+(a(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(a(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.qs))+'" data-page="'+t.__escape(a(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t<a href="#">'+t.__escape(a(n&&n.pagination&&n.pagination.currentPage))+" / "+t.__escape(a(n&&n.pagination&&n.pagination.pageCount))+'</a>\n\t\t</li>\n\n\t\t<li class="next'+(a(n&&n.pagination&&n.pagination.next&&n.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(a(n&&n.pagination&&n.pagination.next&&n.pagination.next.qs))+'" data-page="'+t.__escape(a(n&&n.pagination&&n.pagination.next&&n.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\n\t\t<li class="last'+(a(n&&n.pagination&&n.pagination.next&&n.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(a(n&&n.pagination&&n.pagination.last&&n.pagination.last.qs))+'" data-page="'+t.__escape(a(n&&n.pagination&&n.pagination.pageCount))+'"><i class="fa fa-fast-forward"></i> </a>\n\t\t</li>\n\t</ul>\n</div>\n</div>\n\n\n'}return s.blocks={"pagination.pages":function(n,a,i,t){return t(i(a&&a.pagination&&a.pagination.pages),function(t){return"\n\t\t\t"+(i(a&&a.pagination&&a.pagination.pages&&a.pagination.pages[t]&&a.pagination.pages[t].separator)?'\n\t\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t\t<a href="#"><i class="fa fa-ellipsis-h"></i></a>\n\t\t\t</li>\n\t\t\t':'\n\t\t\t<li class="page'+(i(a&&a.pagination&&a.pagination.pages&&a.pagination.pages[t]&&a.pagination.pages[t].active)?" active":"")+'" >\n\t\t\t\t<a href="?'+n.__escape(i(a&&a.pagination&&a.pagination.pages&&a.pagination.pages[t]&&a.pagination.pages[t].qs))+'" data-page="'+n.__escape(i(a&&a.pagination&&a.pagination.pages&&a.pagination.pages[t]&&a.pagination.pages[t].page))+'">'+n.__escape(i(a&&a.pagination&&a.pagination.pages&&a.pagination.pages[t]&&a.pagination.pages[t].page))+"</a>\n\t\t\t</li>\n\t\t\t")+"\n\t\t"})},notifications:function(n,a,i,t){return t(i(a&&a.notifications),function(t){return'\n\t\t<li data-nid="'+n.__escape(i(a&&a.notifications&&a.notifications[t]&&a.notifications[t].nid))+'" class="'+n.__escape(i(a&&a.notifications&&a.notifications[t]&&a.notifications[t].readClass))+'" component="notifications/item">\n\t\t\t'+(i(a&&a.notifications&&a.notifications[t]&&a.notifications[t].image)?"\n\t\t\t"+(i(a&&a.notifications&&a.notifications[t]&&a.notifications[t].from)?'\n\t\t\t<a class="pull-left" href="'+n.__escape(i(a&&a.config&&a.config.relative_path))+"/user/"+n.__escape(i(a&&a.notifications&&a.notifications[t]&&a.notifications[t].user&&a.notifications[t].user.userslug))+'"><img class="user-img" src="'+n.__escape(i(a&&a.notifications&&a.notifications[t]&&a.notifications[t].image))+'" /></a>\n\t\t\t':"")+"\n\t\t\t":'\n\t\t\t<a class="pull-left" href="'+n.__escape(i(a&&a.config&&a.config.relative_path))+"/user/"+n.__escape(i(a&&a.notifications&&a.notifications[t]&&a.notifications[t].user&&a.notifications[t].user.userslug))+'"><div class="pull-left user-icon user-img" style="background-color: '+n.__escape(i(a&&a.notifications&&a.notifications[t]&&a.notifications[t].user&&a.notifications[t].user["icon:bgColor"]))+';">'+n.__escape(i(a&&a.notifications&&a.notifications[t]&&a.notifications[t].user&&a.notifications[t].user["icon:text"]))+"</div></a>\n\t\t\t")+'\n\n\t\t\t<p>\n\t\t\t\t<a component="notifications/item/link" href="'+n.__escape(i(a&&a.notifications&&a.notifications[t]&&a.notifications[t].path))+'">'+n.__escape(i(a&&a.notifications&&a.notifications[t]&&a.notifications[t].bodyShort))+'</a>\n\t\t\t</p>\n\t\t\t<p class="timestamp">\n\t\t\t\t<span class="timeago" title="'+n.__escape(i(a&&a.notifications&&a.notifications[t]&&a.notifications[t].datetimeISO))+'"></span>\n\t\t\t</p>\n\t\t</li>\n\t'})},filters:function(n,a,i,t){return t(i(a&&a.filters),function(t){return"\n\t\t\t\t"+(i(a&&a.filters&&a.filters[t]&&a.filters[t].separator)?'\n\t\t\t\t<li role="separator" class="divider"></li>\n\t\t\t\t':'\n\t\t\t\t<li role="presentation" class="category">\n\t\t\t\t\t<a role="menu-item" href="'+n.__escape(i(a&&a.config&&a.config.relative_path))+"/notifications?filter="+n.__escape(i(a&&a.filters&&a.filters[t]&&a.filters[t].filter))+'"><i class="fa fa-fw '+(i(a&&a.filters&&a.filters[t]&&a.filters[t].selected)?"fa-check":"")+'"></i> '+n.__escape(i(a&&a.filters&&a.filters[t]&&a.filters[t].name))+"</a>\n\t\t\t\t</li>\n\t\t\t\t")+"\n\t\t\t\t"})},breadcrumbs:function(i,e,s,t){return t(s(e&&e.breadcrumbs),function(t,n,a){return"\n\t<li"+(n===a-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemprop="itemListElement" itemtype="http://schema.org/ListItem" '+(n===a-1?'class="active"':"")+'>\n\t\t<meta itemprop="position" content="'+i.__escape(n)+'" />\n\t\t'+(n!==a-1?'<a href="'+i.__escape(s(e&&e.breadcrumbs&&e.breadcrumbs[t]&&e.breadcrumbs[t].url))+'" itemprop="item">':"")+'\n\t\t\t<span itemprop="name">\n\t\t\t\t'+i.__escape(s(e&&e.breadcrumbs&&e.breadcrumbs[t]&&e.breadcrumbs[t].text))+"\n\t\t\t\t"+(n===a-1?"\n\t\t\t\t"+(s(e&&e["feeds:disableRSS"])?"":"\n\t\t\t\t"+(s(e&&e.rssFeedUrl)?'<a target="_blank" href="'+i.__escape(s(e&&e.rssFeedUrl))+'" itemprop="item"><i class="fa fa-rss-square"></i></a>':""))+"\n\t\t\t\t":"")+"\n\t\t\t</span>\n\t\t"+(n!==a-1?"</a>":"")+"\n\t</li>\n\t"})}},s});