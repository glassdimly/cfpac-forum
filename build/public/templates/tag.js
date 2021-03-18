!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function n(t,s,a,e,i){return(a(s&&s.breadcrumbs&&s.breadcrumbs.length)?'\n<ol class="breadcrumb" itemscope="itemscope" itemprop="breadcrumb" itemtype="http://schema.org/BreadcrumbList">\n\t'+n.blocks.breadcrumbs(t,s,a,e,i)+"\n</ol>\n":"")+'\n\n\n<div class="tag">\n\t<div class="btn-toolbar">\n\t\t<div class="pull-left">\n\t\t\t'+(a(s&&s.loggedIn)?'\n\t\t\t<noscript><div class="dropdown" component="category-selector"></noscript>\n<label component="category/post" for="category-dropdown-check" class="btn btn-primary" id="new_topic">\n\t[[category:new_topic_button]]\n</label>\n<noscript>\n\t<input type="checkbox" class="hidden" id="category-dropdown-check" aria-hidden="true">\n\t<ul component="category/list" class="dropdown-menu category-dropdown-menu" role="menu">\n\t\t'+n.blocks.categories(t,s,a,e,i)+"\n\t</ul>\n</div>\n</noscript>\n\t\t\t":'\n\t\t\t<a component="category/post/guest" href="'+t.__escape(a(s&&s.config&&s.config.relative_path))+'/login" class="btn btn-primary">[[category:guest-login-post]]</a>\n\t\t\t')+'\n\t\t</div>\n\t</div>\n\n\t<hr class="hidden-xs"/>\n\n\t'+(a(s&&s.topics&&s.topics.length)?"":'\n\t<div class="alert alert-warning">[[tags:no_tag_topics]]</div>\n\t')+'\n\n\t<div class="category">\n\t\t<ul component="category" class="topic-list" itemscope itemtype="http://www.schema.org/ItemList" data-nextstart="'+t.__escape(a(s&&s.nextStart))+'" data-set="'+t.__escape(a(s&&s.set))+'">\n\t<meta itemprop="itemListOrder" content="descending">\n\t'+n.blocks.topics(t,s,a,e,i)+'\n</ul>\n\n\t\t<button id="load-more-btn" class="btn btn-primary hide">[[unread:load_more]]</button>\n\t\t'+(a(s&&s.config&&s.config.usePagination)?'\n\t\t\t<div component="pagination" class="text-center pagination-container'+(a(s&&s.pagination&&s.pagination.pages&&s.pagination.pages.length)?"":" hidden")+'">\n\t<ul class="pagination hidden-xs">\n\t\t<li class="previous pull-left'+(a(s&&s.pagination&&s.pagination.prev&&s.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(a(s&&s.pagination&&s.pagination.prev&&s.pagination.prev.qs))+'" data-page="'+t.__escape(a(s&&s.pagination&&s.pagination.prev&&s.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t'+n.blocks["pagination.pages"](t,s,a,e,i)+'\n\n\t\t<li class="next pull-right'+(a(s&&s.pagination&&s.pagination.next&&s.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(a(s&&s.pagination&&s.pagination.next&&s.pagination.next.qs))+'" data-page="'+t.__escape(a(s&&s.pagination&&s.pagination.next&&s.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\t</ul>\n\n\t<ul class="pagination hidden-sm hidden-md hidden-lg">\n\t\t<li class="first'+(a(s&&s.pagination&&s.pagination.prev&&s.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(a(s&&s.pagination&&s.pagination.first&&s.pagination.first.qs))+'" data-page="1"><i class="fa fa-fast-backward"></i> </a>\n\t\t</li>\n\n\t\t<li class="previous'+(a(s&&s.pagination&&s.pagination.prev&&s.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(a(s&&s.pagination&&s.pagination.prev&&s.pagination.prev.qs))+'" data-page="'+t.__escape(a(s&&s.pagination&&s.pagination.prev&&s.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t<a href="#">'+t.__escape(a(s&&s.pagination&&s.pagination.currentPage))+" / "+t.__escape(a(s&&s.pagination&&s.pagination.pageCount))+'</a>\n\t\t</li>\n\n\t\t<li class="next'+(a(s&&s.pagination&&s.pagination.next&&s.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(a(s&&s.pagination&&s.pagination.next&&s.pagination.next.qs))+'" data-page="'+t.__escape(a(s&&s.pagination&&s.pagination.next&&s.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\n\t\t<li class="last'+(a(s&&s.pagination&&s.pagination.next&&s.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(a(s&&s.pagination&&s.pagination.last&&s.pagination.last.qs))+'" data-page="'+t.__escape(a(s&&s.pagination&&s.pagination.pageCount))+'"><i class="fa fa-fast-forward"></i> </a>\n\t\t</li>\n\t</ul>\n</div>\n\t\t':"")+"\n\t</div>\n</div>\n"}return n.blocks={"pagination.pages":function(s,a,e,t){return t(e(a&&a.pagination&&a.pagination.pages),function(t){return"\n\t\t\t"+(e(a&&a.pagination&&a.pagination.pages&&a.pagination.pages[t]&&a.pagination.pages[t].separator)?'\n\t\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t\t<a href="#"><i class="fa fa-ellipsis-h"></i></a>\n\t\t\t</li>\n\t\t\t':'\n\t\t\t<li class="page'+(e(a&&a.pagination&&a.pagination.pages&&a.pagination.pages[t]&&a.pagination.pages[t].active)?" active":"")+'" >\n\t\t\t\t<a href="?'+s.__escape(e(a&&a.pagination&&a.pagination.pages&&a.pagination.pages[t]&&a.pagination.pages[t].qs))+'" data-page="'+s.__escape(e(a&&a.pagination&&a.pagination.pages&&a.pagination.pages[t]&&a.pagination.pages[t].page))+'">'+s.__escape(e(a&&a.pagination&&a.pagination.pages&&a.pagination.pages[t]&&a.pagination.pages[t].page))+"</a>\n\t\t\t</li>\n\t\t\t")+"\n\t\t"})},topics:function(a,e,i,t,n){return t(i(e&&e.topics),function(s){return'\n\t<li component="category/topic" class="row clearfix category-item '+a.__escape(n(e,a,"generateTopicClass",[i(e&&e.topics&&e.topics[s])]))+'" data-tid="'+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].tid))+'" data-index="'+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].index))+'" data-cid="'+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].cid))+'" itemprop="itemListElement">\n\t\t<meta itemprop="name" content="'+a.__escape(n(e,a,"stripTags",[i(e&&e.title)]))+'">\n\n\t\t<div class="col-md-6 col-sm-9 col-xs-10 content">\n\t\t\t<div class="avatar pull-left">\n\t\t\t\t'+(i(e&&e.showSelect)?'\n\t\t\t\t<div class="select" component="topic/select">\n\t\t\t\t\t'+(i(e&&e.topics&&e.topics[s]&&e.topics[s].thumb)?'\n\t\t\t\t\t<img src="'+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].thumb))+'" class="user-img not-responsive" />\n\t\t\t\t\t':"\n\t\t\t\t\t"+a.__escape(n(e,a,"buildAvatar",[i(e&&e.topics&&e.topics[s]&&e.topics[s].user),"46",i(e&&e.true),"not-responsive"]))+"\n\t\t\t\t\t")+'\n\t\t\t\t\t<i class="fa fa-check"></i>\n\t\t\t\t</div>\n\t\t\t\t':"")+"\n\n\t\t\t\t"+(i(e&&e.showSelect)?"":'\n\t\t\t\t<a href="'+(i(e&&e.topics&&e.topics[s]&&e.topics[s].user&&e.topics[s].user.userslug)?a.__escape(i(e&&e.config&&e.config.relative_path))+"/user/"+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].user&&e.topics[s].user.userslug)):"#")+'" class="pull-left">\n\t\t\t\t\t'+(i(e&&e.topics&&e.topics[s]&&e.topics[s].thumb)?'\n\t\t\t\t\t<img src="'+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].thumb))+'" class="user-img not-responsive" />\n\t\t\t\t\t':"\n\t\t\t\t\t"+a.__escape(n(e,a,"buildAvatar",[i(e&&e.topics&&e.topics[s]&&e.topics[s].user),"46",i(e&&e.true),"not-responsive"]))+"\n\t\t\t\t\t")+"\n\t\t\t\t</a>\n\t\t\t\t")+'\n\t\t\t</div>\n\n\t\t\t<h2 component="topic/header" class="title">\n\t\t\t\t<i component="topic/pinned" class="fa fa-thumb-tack '+(i(e&&e.topics&&e.topics[s]&&e.topics[s].pinned)?"":"hide")+'" title="[[topic:pinned]]"></i>\n\t\t\t\t<i component="topic/locked" class="fa fa-lock '+(i(e&&e.topics&&e.topics[s]&&e.topics[s].locked)?"":"hide")+'" title="[[topic:locked]]"></i>\n\t\t\t\t<i component="topic/moved" class="fa fa-arrow-circle-right '+(i(e&&e.topics&&e.topics[s]&&e.topics[s].oldCid)?"":"hide")+'" title="[[topic:moved]]"></i>\n\t\t\t\t'+t(i(e&&e.icons),function(t){return a.__escape(i(e&&e.icons&&e.icons[t]))})+"\n\n\t\t\t\t"+(i(e&&e.topics&&e.topics[s]&&e.topics[s].noAnchor)?"\n\t\t\t\t<span>"+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].title))+"</span><br />\n\t\t\t\t":'\n\t\t\t\t<a href="'+a.__escape(i(e&&e.config&&e.config.relative_path))+"/topic/"+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].slug))+(i(e&&e.topics&&e.topics[s]&&e.topics[s].bookmark)?"/"+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].bookmark)):"")+'" itemprop="url">'+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].title))+"</a><br />\n\t\t\t\t")+"\n\n\t\t\t\t"+(i(e&&e.template&&e.template.category)?"":'\n\t\t\t\t<small>\n\t\t\t\t\t<a href="'+a.__escape(i(e&&e.config&&e.config.relative_path))+"/category/"+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].category&&e.topics[s].category.slug))+'"><span class="fa-stack fa-lg" style="'+a.__escape(n(e,a,"generateCategoryBackground",[i(e&&e.topics&&e.topics[s]&&e.topics[s].category)]))+'"><i style="color:'+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].category&&e.topics[s].category.color))+';" class="fa '+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].category&&e.topics[s].category.icon))+' fa-stack-1x"></i></span> '+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].category&&e.topics[s].category.name))+"</a> &bull;\n\t\t\t\t</small>\n\t\t\t\t")+"\n\n\t\t\t\t"+(i(e&&e.topics&&e.topics[s]&&e.topics[s].tags&&e.topics[s].tags.length)?'\n\t\t\t\t<span class="tag-list hidden-xs">\n\t\t\t\t\t'+t(i(e&&e.topics&&e.topics[s]&&e.topics[s].tags),function(t){return'\n\t\t\t\t\t<a href="'+a.__escape(i(e&&e.config&&e.config.relative_path))+"/tags/"+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].tags&&e.topics[s].tags[t]&&e.topics[s].tags[t].valueEscaped))+'"><span class="tag" style="'+(i(e&&e.topics&&e.topics[s]&&e.topics[s].tags&&e.topics[s].tags[t]&&e.topics[s].tags[t].color)?"color: "+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].tags&&e.topics[s].tags[t]&&e.topics[s].tags[t].color))+";":"")+(i(e&&e.topics&&e.topics[s]&&e.topics[s].tags&&e.topics[s].tags[t]&&e.topics[s].tags[t].bgColor)?"background-color: "+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].tags&&e.topics[s].tags[t]&&e.topics[s].tags[t].bgColor))+";":"")+'">'+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].tags&&e.topics[s].tags[t]&&e.topics[s].tags[t].valueEscaped))+"</span></a>\n\t\t\t\t\t"})+"\n\t\t\t\t\t<small>&bull;</small>\n\t\t\t\t</span>\n\t\t\t\t":"")+'\n\n\t\t\t\t<small class="hidden-xs"><span class="timeago" title="'+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].timestampISO))+'"></span> &bull; <a href="'+(i(e&&e.topics&&e.topics[s]&&e.topics[s].user&&e.topics[s].user.userslug)?a.__escape(i(e&&e.config&&e.config.relative_path))+"/user/"+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].user&&e.topics[s].user.userslug)):"#")+'">'+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].user&&e.topics[s].user.username))+'</a></small>\n\t\t\t\t<small class="visible-xs-inline">\n\t\t\t\t\t<i class="fa fa-reply"></i> &nbsp;\n\t\t\t\t\t'+(i(e&&e.topics&&e.topics[s]&&e.topics[s].teaser&&e.topics[s].teaser.timestamp)?'\n\t\t\t\t\t<span class="timeago" title="'+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].teaser&&e.topics[s].teaser.timestampISO))+'"></span>\n\t\t\t\t\t':'\n\t\t\t\t\t<span class="timeago" title="'+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].timestampISO))+'"></span>\n\t\t\t\t\t')+'\n\t\t\t\t</small>\n\t\t\t</h2>\n\t\t</div>\n\n\t\t<div class="mobile-stat col-xs-2 visible-xs text-right">\n\t\t\t<span class="human-readable-number">'+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].postcount))+'</span> <a href="'+a.__escape(i(e&&e.config&&e.config.relative_path))+"/topic/"+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].slug))+"/"+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].teaser&&e.topics[s].teaser.index))+'"><i class="fa fa-arrow-circle-right"></i></a>\n\t\t</div>\n\n\t\t<div class="col-md-1 hidden-sm hidden-xs stats stats-votes">\n\t\t\t'+(i(e&&e["reputation:disabled"])?"":'\n\t\t\t<span class="human-readable-number" title="'+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].votes))+'">'+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].votes))+"</span><br />\n\t\t\t<small>[[global:votes]]</small>\n\t\t\t")+'\n\t\t</div>\n\n\t\t<div class="col-md-1 hidden-sm hidden-xs stats stats-postcount">\n\t\t\t<span class="human-readable-number" title="'+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].postcount))+'">'+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].postcount))+'</span><br />\n\t\t\t<small>[[global:posts]]</small>\n\t\t</div>\n\n\t\t<div class="col-md-1 hidden-sm hidden-xs stats stats-viewcount">\n\t\t\t<span class="human-readable-number" title="'+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].viewcount))+'">'+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].viewcount))+'</span><br />\n\t\t\t<small>[[global:views]]</small>\n\t\t</div>\n\n\t\t<div class="col-md-3 col-sm-3 teaser hidden-xs" component="topic/teaser">\n\t\t\t<div class="card" style="border-color: '+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].category&&e.topics[s].category.bgColor))+'">\n\t\t\t\t'+(i(e&&e.topics&&e.topics[s]&&e.topics[s].unreplied)?"\n\t\t\t\t<p>\n\t\t\t\t\t[[category:no_replies]]\n\t\t\t\t</p>\n\t\t\t\t":"\n\t\t\t\t"+(i(e&&e.topics&&e.topics[s]&&e.topics[s].teaser&&e.topics[s].teaser.pid)?'\n\t\t\t\t<p>\n\t\t\t\t\t<a href="'+a.__escape(i(e&&e.config&&e.config.relative_path))+"/user/"+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].teaser&&e.topics[s].teaser.user&&e.topics[s].teaser.user.userslug))+'">'+a.__escape(n(e,a,"buildAvatar",[i(e&&e.topics&&e.topics[s]&&e.topics[s].teaser&&e.topics[s].teaser.user),"24",i(e&&e.true),"not-responsive"]))+'</a>\n\t\t\t\t\t<a class="permalink" href="'+a.__escape(i(e&&e.config&&e.config.relative_path))+"/topic/"+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].slug))+"/"+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].teaser&&e.topics[s].teaser.index))+'">\n\t\t\t\t\t\t<span class="timeago" title="'+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].teaser&&e.topics[s].teaser.timestampISO))+'"></span>\n\t\t\t\t\t</a>\n\t\t\t\t</p>\n\t\t\t\t<div class="post-content">\n\t\t\t\t\t'+a.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].teaser&&e.topics[s].teaser.content))+"\n\t\t\t\t</div>\n\t\t\t\t":"")+"\n\t\t\t\t")+"\n\t\t\t</div>\n\t\t</div>\n\t</li>\n\t"})},categories:function(s,a,e,t,i){return t(e(a&&a.categories),function(t){return'\n\t\t<li role="presentation" class="category '+(e(a&&a.categories&&a.categories[t]&&a.categories[t].disabledClass)?"disabled":"")+'">\n\t\t\t<a role="menu-item" href="'+s.__escape(e(a&&a.config&&a.config.relative_path))+"/compose?cid="+s.__escape(e(a&&a.categories&&a.categories[t]&&a.categories[t].cid))+'">'+s.__escape(e(a&&a.categories&&a.categories[t]&&a.categories[t].level))+'<span component="category-markup">'+(e(a&&a.categories&&a.categories[t]&&a.categories[t].icon)?'<span class="fa-stack" style="'+s.__escape(i(a,s,"generateCategoryBackground",[e(a&&a.categories&&a.categories[t])]))+'"><i style="color: '+s.__escape(e(a&&a.categories&&a.categories[t]&&a.categories[t].color))+';" class="fa fa-stack-1x fa-fw '+s.__escape(e(a&&a.categories&&a.categories[t]&&a.categories[t].icon))+'"></i></span>':"")+" "+s.__escape(e(a&&a.categories&&a.categories[t]&&a.categories[t].name))+"</span></a>\n\t\t</li>\n\t\t"})},breadcrumbs:function(e,i,n,t){return t(n(i&&i.breadcrumbs),function(t,s,a){return"\n\t<li"+(s===a-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemprop="itemListElement" itemtype="http://schema.org/ListItem" '+(s===a-1?'class="active"':"")+'>\n\t\t<meta itemprop="position" content="'+e.__escape(s)+'" />\n\t\t'+(s!==a-1?'<a href="'+e.__escape(n(i&&i.breadcrumbs&&i.breadcrumbs[t]&&i.breadcrumbs[t].url))+'" itemprop="item">':"")+'\n\t\t\t<span itemprop="name">\n\t\t\t\t'+e.__escape(n(i&&i.breadcrumbs&&i.breadcrumbs[t]&&i.breadcrumbs[t].text))+"\n\t\t\t\t"+(s===a-1?"\n\t\t\t\t"+(n(i&&i["feeds:disableRSS"])?"":"\n\t\t\t\t"+(n(i&&i.rssFeedUrl)?'<a target="_blank" href="'+e.__escape(n(i&&i.rssFeedUrl))+'" itemprop="item"><i class="fa fa-rss-square"></i></a>':""))+"\n\t\t\t\t":"")+"\n\t\t\t</span>\n\t\t"+(s!==a-1?"</a>":"")+"\n\t</li>\n\t"})}},n});