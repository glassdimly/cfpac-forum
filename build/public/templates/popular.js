!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function n(e,a,s,t,i){return(s(a&&a.breadcrumbs&&a.breadcrumbs.length)?'\r\n<ol class="breadcrumb" itemscope="itemscope" itemprop="breadcrumb" itemtype="http://schema.org/BreadcrumbList">\r\n\t'+n.blocks.breadcrumbs(e,a,s,t,i)+"\r\n</ol>\r\n":"")+'\r\n\r\n<div data-widget-area="header">\r\n\t'+n.blocks["widgets.header"](e,a,s,t,i)+'\r\n</div>\r\n<div class="popular">\r\n\t<div class="btn-toolbar">\r\n\t\t<div class="pull-left">\r\n\t\t\t'+(s(a&&a.canPost)?'\r\n\t\t\t<noscript><div class="dropdown" component="category-selector"></noscript>\r\n<label component="category/post" for="category-dropdown-check" class="btn btn-primary" id="new_topic">\r\n\t[[category:new_topic_button]]\r\n</label>\r\n<noscript>\r\n\t<input type="checkbox" class="hidden" id="category-dropdown-check" aria-hidden="true">\r\n\t<ul component="category/list" class="dropdown-menu category-dropdown-menu" role="menu">\r\n\t\t'+t(s(a&&a.categories),function(t){return'\r\n\t\t<li role="presentation" class="category '+(s(a&&a.categories&&a.categories[t]&&a.categories[t].disabledClass)?"disabled":"")+'">\r\n\t\t\t<a role="menu-item" href="'+e.__escape(s(a&&a.config&&a.config.relative_path))+"/compose?cid="+e.__escape(s(a&&a.categories&&a.categories[t]&&a.categories[t].cid))+'">'+e.__escape(s(a&&a.categories&&a.categories[t]&&a.categories[t].level))+'<span component="category-markup">'+(s(a&&a.categories&&a.categories[t]&&a.categories[t].icon)?'<span class="fa-stack" style="'+e.__escape(i(a,e,"generateCategoryBackground",[s(a&&a.categories&&a.categories[t])]))+'"><i style="color: '+e.__escape(s(a&&a.categories&&a.categories[t]&&a.categories[t].color))+';" class="fa fa-stack-1x fa-fw '+e.__escape(s(a&&a.categories&&a.categories[t]&&a.categories[t].icon))+'"></i></span>':"")+" "+e.__escape(s(a&&a.categories&&a.categories[t]&&a.categories[t].name))+"</span></a>\r\n\t\t</li>\r\n\t\t"})+"\r\n\t</ul>\r\n</div>\r\n</noscript>\r\n\t\t\t":'\r\n\t\t\t<a component="category/post/guest" href="'+e.__escape(s(a&&a.config&&a.config.relative_path))+'/login" class="btn btn-primary">[[category:guest-login-post]]</a>\r\n\t\t\t')+'\r\n\t\t</div>\r\n\r\n\t\t<div component="category/dropdown" class="btn-group pull-right category-dropdown-container bottom-sheet '+(s(a&&a.categories&&a.categories.length)?"":"hidden")+'">\r\n    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\r\n        '+(s(a&&a.selectedCategory)?'<span class="fa-stack" style="'+e.__escape(i(a,e,"generateCategoryBackground",[s(a&&a.selectedCategory)]))+'"><i class="fa fa-fw fa-stack-1x '+e.__escape(s(a&&a.selectedCategory&&a.selectedCategory.icon))+'" style="color: '+e.__escape(s(a&&a.selectedCategory&&a.selectedCategory.color))+';"></i></span> '+e.__escape(s(a&&a.selectedCategory&&a.selectedCategory.name)):"\r\n        [[unread:all_categories]]")+' <span class="caret"></span>\r\n    </button>\r\n    <div component="category-selector-search" class="hidden">\r\n        <input type="text" class="form-control" autocomplete="off">\r\n    </div>\r\n    <ul component="category/list" class="dropdown-menu category-dropdown-menu" role="menu">\r\n        <li role="presentation" class="category">\r\n            <a role="menu-item" href="'+e.__escape(s(a&&a.config&&a.config.relative_path))+"/"+e.__escape(s(a&&a.allCategoriesUrl))+'"><i class="fa fa-fw '+(s(a&&a.selectedCategory)?"":"fa-check")+'"></i> [[unread:all_categories]]</a>\r\n        </li>\r\n        '+n.blocks.categories(e,a,s,t,i)+'\r\n    </ul>\r\n</div>\r\n\r\n\t\t<div class="btn-group pull-right bottom-sheet '+(s(a&&a.filters&&a.filters.length)?"":"hidden")+'">\r\n\t\t\t<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\r\n\t\t\t'+e.__escape(s(a&&a.selectedFilter&&a.selectedFilter.name))+' <span class="caret"></span>\r\n\t\t\t</button>\r\n\t\t\t<ul class="dropdown-menu" role="menu">\r\n\t\t\t\t'+n.blocks.filters(e,a,s,t,i)+'\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\r\n\t\t<div class="btn-group pull-right bottom-sheet '+(s(a&&a.terms&&a.terms.length)?"":"hidden")+'">\r\n\t\t\t<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\r\n\t\t\t'+e.__escape(s(a&&a.selectedTerm&&a.selectedTerm.name))+' <span class="caret"></span>\r\n\t\t\t</button>\r\n\t\t\t<ul class="dropdown-menu" role="menu">\r\n\t\t\t\t'+n.blocks.terms(e,a,s,t,i)+'\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<br />\r\n\r\n\t<div class="category">\r\n\t\t'+(s(a&&a.topics&&a.topics.length)?"":'\r\n\t\t<div class="alert alert-warning" id="category-no-topics">[[recent:no_popular_topics]]</div>\r\n\t\t')+'\r\n\r\n\t\t<ul component="category" class="topic-list" itemscope itemtype="http://www.schema.org/ItemList" data-nextstart="'+e.__escape(s(a&&a.nextStart))+'" data-set="'+e.__escape(s(a&&a.set))+'">\r\n\t<meta itemprop="itemListOrder" content="descending">\r\n\t'+n.blocks.topics(e,a,s,t,i)+"\r\n</ul>\r\n\r\n\r\n\t\t"+(s(a&&a.config&&a.config.usePagination)?'\r\n\t\t\t<div component="pagination" class="text-center pagination-container'+(s(a&&a.pagination&&a.pagination.pages&&a.pagination.pages.length)?"":" hidden")+'">\r\n\t<ul class="pagination hidden-xs">\r\n\t\t<li class="previous pull-left'+(s(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?"":" disabled")+'">\r\n\t\t\t<a href="?'+e.__escape(s(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.qs))+'" data-page="'+e.__escape(s(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t'+n.blocks["pagination.pages"](e,a,s,t,i)+'\r\n\r\n\t\t<li class="next pull-right'+(s(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?"":" disabled")+'">\r\n\t\t\t<a href="?'+e.__escape(s(a&&a.pagination&&a.pagination.next&&a.pagination.next.qs))+'" data-page="'+e.__escape(s(a&&a.pagination&&a.pagination.next&&a.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\r\n\t\t</li>\r\n\t</ul>\r\n\r\n\t<ul class="pagination hidden-sm hidden-md hidden-lg">\r\n\t\t<li class="first'+(s(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?"":" disabled")+'">\r\n\t\t\t<a href="?'+e.__escape(s(a&&a.pagination&&a.pagination.first&&a.pagination.first.qs))+'" data-page="1"><i class="fa fa-fast-backward"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t<li class="previous'+(s(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?"":" disabled")+'">\r\n\t\t\t<a href="?'+e.__escape(s(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.qs))+'" data-page="'+e.__escape(s(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t<li component="pagination/select-page" class="page select-page">\r\n\t\t\t<a href="#">'+e.__escape(s(a&&a.pagination&&a.pagination.currentPage))+" / "+e.__escape(s(a&&a.pagination&&a.pagination.pageCount))+'</a>\r\n\t\t</li>\r\n\r\n\t\t<li class="next'+(s(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?"":" disabled")+'">\r\n\t\t\t<a href="?'+e.__escape(s(a&&a.pagination&&a.pagination.next&&a.pagination.next.qs))+'" data-page="'+e.__escape(s(a&&a.pagination&&a.pagination.next&&a.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\r\n\t\t</li>\r\n\r\n\t\t<li class="last'+(s(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?"":" disabled")+'">\r\n\t\t\t<a href="?'+e.__escape(s(a&&a.pagination&&a.pagination.last&&a.pagination.last.qs))+'" data-page="'+e.__escape(s(a&&a.pagination&&a.pagination.pageCount))+'"><i class="fa fa-fast-forward"></i> </a>\r\n\t\t</li>\r\n\t</ul>\r\n</div>\r\n\t\t':"")+"\r\n\t</div>\r\n</div>\r\n"}return n.blocks={"pagination.pages":function(e,a,s,t){return t(s(a&&a.pagination&&a.pagination.pages),function(t){return"\r\n\t\t\t"+(s(a&&a.pagination&&a.pagination.pages&&a.pagination.pages[t]&&a.pagination.pages[t].separator)?'\r\n\t\t\t<li component="pagination/select-page" class="page select-page">\r\n\t\t\t\t<a href="#"><i class="fa fa-ellipsis-h"></i></a>\r\n\t\t\t</li>\r\n\t\t\t':'\r\n\t\t\t<li class="page'+(s(a&&a.pagination&&a.pagination.pages&&a.pagination.pages[t]&&a.pagination.pages[t].active)?" active":"")+'" >\r\n\t\t\t\t<a href="?'+e.__escape(s(a&&a.pagination&&a.pagination.pages&&a.pagination.pages[t]&&a.pagination.pages[t].qs))+'" data-page="'+e.__escape(s(a&&a.pagination&&a.pagination.pages&&a.pagination.pages[t]&&a.pagination.pages[t].page))+'">'+e.__escape(s(a&&a.pagination&&a.pagination.pages&&a.pagination.pages[t]&&a.pagination.pages[t].page))+"</a>\r\n\t\t\t</li>\r\n\t\t\t")+"\r\n\t\t"})},topics:function(a,s,i,t,n){return t(i(s&&s.topics),function(e){return'\r\n\t<li component="category/topic" class="row clearfix category-item '+a.__escape(n(s,a,"generateTopicClass",[i(s&&s.topics&&s.topics[e])]))+'" data-tid="'+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].tid))+'" data-index="'+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].index))+'" data-cid="'+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].cid))+'" itemprop="itemListElement">\r\n\t\t<meta itemprop="name" content="'+a.__escape(n(s,a,"stripTags",[i(s&&s.title)]))+'">\r\n\r\n\t\t<div class="col-md-6 col-sm-9 col-xs-10 content">\r\n\t\t\t<div class="avatar pull-left">\r\n\t\t\t\t'+(i(s&&s.showSelect)?'\r\n\t\t\t\t<div class="select" component="topic/select">\r\n\t\t\t\t\t'+(i(s&&s.topics&&s.topics[e]&&s.topics[e].thumb)?'\r\n\t\t\t\t\t<img src="'+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].thumb))+'" class="user-img not-responsive" />\r\n\t\t\t\t\t':"\r\n\t\t\t\t\t"+a.__escape(n(s,a,"buildAvatar",[i(s&&s.topics&&s.topics[e]&&s.topics[e].user),"46",i(s&&s.true),"not-responsive"]))+"\r\n\t\t\t\t\t")+'\r\n\t\t\t\t\t<i class="fa fa-check"></i>\r\n\t\t\t\t</div>\r\n\t\t\t\t':"")+"\r\n\r\n\t\t\t\t"+(i(s&&s.showSelect)?"":'\r\n\t\t\t\t<a href="'+(i(s&&s.topics&&s.topics[e]&&s.topics[e].user&&s.topics[e].user.userslug)?a.__escape(i(s&&s.config&&s.config.relative_path))+"/user/"+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].user&&s.topics[e].user.userslug)):"#")+'" class="pull-left">\r\n\t\t\t\t\t'+(i(s&&s.topics&&s.topics[e]&&s.topics[e].thumb)?'\r\n\t\t\t\t\t<img src="'+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].thumb))+'" class="user-img not-responsive" />\r\n\t\t\t\t\t':"\r\n\t\t\t\t\t"+a.__escape(n(s,a,"buildAvatar",[i(s&&s.topics&&s.topics[e]&&s.topics[e].user),"46",i(s&&s.true),"not-responsive"]))+"\r\n\t\t\t\t\t")+"\r\n\t\t\t\t</a>\r\n\t\t\t\t")+'\r\n\t\t\t</div>\r\n\r\n\t\t\t<h2 component="topic/header" class="title">\r\n\t\t\t\t<i component="topic/pinned" class="fa fa-thumb-tack '+(i(s&&s.topics&&s.topics[e]&&s.topics[e].pinned)?"":"hide")+'" title="[[topic:pinned]]"></i>\r\n\t\t\t\t<i component="topic/locked" class="fa fa-lock '+(i(s&&s.topics&&s.topics[e]&&s.topics[e].locked)?"":"hide")+'" title="[[topic:locked]]"></i>\r\n\t\t\t\t<i component="topic/moved" class="fa fa-arrow-circle-right '+(i(s&&s.topics&&s.topics[e]&&s.topics[e].oldCid)?"":"hide")+'" title="[[topic:moved]]"></i>\r\n\t\t\t\t'+t(i(s&&s.icons),function(t){return a.__escape(i(s&&s.icons&&s.icons[t]))})+"\r\n\r\n\t\t\t\t"+(i(s&&s.topics&&s.topics[e]&&s.topics[e].noAnchor)?"\r\n\t\t\t\t<span>"+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].title))+"</span><br />\r\n\t\t\t\t":'\r\n\t\t\t\t<a href="'+a.__escape(i(s&&s.config&&s.config.relative_path))+"/topic/"+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].slug))+(i(s&&s.topics&&s.topics[e]&&s.topics[e].bookmark)?"/"+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].bookmark)):"")+'" itemprop="url">'+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].title))+"</a><br />\r\n\t\t\t\t")+"\r\n\r\n\t\t\t\t"+(i(s&&s.template&&s.template.category)?"":'\r\n\t\t\t\t<small>\r\n\t\t\t\t\t<a href="'+a.__escape(i(s&&s.config&&s.config.relative_path))+"/category/"+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].category&&s.topics[e].category.slug))+'"><span class="fa-stack fa-lg" style="'+a.__escape(n(s,a,"generateCategoryBackground",[i(s&&s.topics&&s.topics[e]&&s.topics[e].category)]))+'"><i style="color:'+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].category&&s.topics[e].category.color))+';" class="fa '+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].category&&s.topics[e].category.icon))+' fa-stack-1x"></i></span> '+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].category&&s.topics[e].category.name))+"</a> &bull;\r\n\t\t\t\t</small>\r\n\t\t\t\t")+"\r\n\r\n\t\t\t\t"+(i(s&&s.topics&&s.topics[e]&&s.topics[e].tags&&s.topics[e].tags.length)?'\r\n\t\t\t\t<span class="tag-list hidden-xs">\r\n\t\t\t\t\t'+t(i(s&&s.topics&&s.topics[e]&&s.topics[e].tags),function(t){return'\r\n\t\t\t\t\t<a href="'+a.__escape(i(s&&s.config&&s.config.relative_path))+"/tags/"+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].tags&&s.topics[e].tags[t]&&s.topics[e].tags[t].valueEscaped))+'"><span class="tag" style="'+(i(s&&s.topics&&s.topics[e]&&s.topics[e].tags&&s.topics[e].tags[t]&&s.topics[e].tags[t].color)?"color: "+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].tags&&s.topics[e].tags[t]&&s.topics[e].tags[t].color))+";":"")+(i(s&&s.topics&&s.topics[e]&&s.topics[e].tags&&s.topics[e].tags[t]&&s.topics[e].tags[t].bgColor)?"background-color: "+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].tags&&s.topics[e].tags[t]&&s.topics[e].tags[t].bgColor))+";":"")+'">'+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].tags&&s.topics[e].tags[t]&&s.topics[e].tags[t].valueEscaped))+"</span></a>\r\n\t\t\t\t\t"})+"\r\n\t\t\t\t\t<small>&bull;</small>\r\n\t\t\t\t</span>\r\n\t\t\t\t":"")+'\r\n\r\n\t\t\t\t<small class="hidden-xs"><span class="timeago" title="'+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].timestampISO))+'"></span> &bull; <a href="'+(i(s&&s.topics&&s.topics[e]&&s.topics[e].user&&s.topics[e].user.userslug)?a.__escape(i(s&&s.config&&s.config.relative_path))+"/user/"+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].user&&s.topics[e].user.userslug)):"#")+'">'+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].user&&s.topics[e].user.username))+'</a></small>\r\n\t\t\t\t<small class="visible-xs-inline">\r\n\t\t\t\t\t<i class="fa fa-reply"></i> &nbsp;\r\n\t\t\t\t\t'+(i(s&&s.topics&&s.topics[e]&&s.topics[e].teaser&&s.topics[e].teaser.timestamp)?'\r\n\t\t\t\t\t<span class="timeago" title="'+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].teaser&&s.topics[e].teaser.timestampISO))+'"></span>\r\n\t\t\t\t\t':'\r\n\t\t\t\t\t<span class="timeago" title="'+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].timestampISO))+'"></span>\r\n\t\t\t\t\t')+'\r\n\t\t\t\t</small>\r\n\t\t\t</h2>\r\n\t\t</div>\r\n\r\n\t\t<div class="mobile-stat col-xs-2 visible-xs text-right">\r\n\t\t\t<span class="human-readable-number">'+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].postcount))+'</span> <a href="'+a.__escape(i(s&&s.config&&s.config.relative_path))+"/topic/"+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].slug))+"/"+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].teaser&&s.topics[e].teaser.index))+'"><i class="fa fa-arrow-circle-right"></i></a>\r\n\t\t</div>\r\n\r\n\t\t<div class="col-md-1 hidden-sm hidden-xs stats stats-votes">\r\n\t\t\t'+(i(s&&s["reputation:disabled"])?"":'\r\n\t\t\t<span class="human-readable-number" title="'+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].votes))+'">'+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].votes))+"</span><br />\r\n\t\t\t<small>[[global:votes]]</small>\r\n\t\t\t")+'\r\n\t\t</div>\r\n\r\n\t\t<div class="col-md-1 hidden-sm hidden-xs stats stats-postcount">\r\n\t\t\t<span class="human-readable-number" title="'+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].postcount))+'">'+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].postcount))+'</span><br />\r\n\t\t\t<small>[[global:posts]]</small>\r\n\t\t</div>\r\n\r\n\t\t<div class="col-md-1 hidden-sm hidden-xs stats stats-viewcount">\r\n\t\t\t<span class="human-readable-number" title="'+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].viewcount))+'">'+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].viewcount))+'</span><br />\r\n\t\t\t<small>[[global:views]]</small>\r\n\t\t</div>\r\n\r\n\t\t<div class="col-md-3 col-sm-3 teaser hidden-xs" component="topic/teaser">\r\n\t\t\t<div class="card" style="border-color: '+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].category&&s.topics[e].category.bgColor))+'">\r\n\t\t\t\t'+(i(s&&s.topics&&s.topics[e]&&s.topics[e].unreplied)?"\r\n\t\t\t\t<p>\r\n\t\t\t\t\t[[category:no_replies]]\r\n\t\t\t\t</p>\r\n\t\t\t\t":"\r\n\t\t\t\t"+(i(s&&s.topics&&s.topics[e]&&s.topics[e].teaser&&s.topics[e].teaser.pid)?'\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<a href="'+a.__escape(i(s&&s.config&&s.config.relative_path))+"/user/"+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].teaser&&s.topics[e].teaser.user&&s.topics[e].teaser.user.userslug))+'">'+a.__escape(n(s,a,"buildAvatar",[i(s&&s.topics&&s.topics[e]&&s.topics[e].teaser&&s.topics[e].teaser.user),"24",i(s&&s.true),"not-responsive"]))+'</a>\r\n\t\t\t\t\t<a class="permalink" href="'+a.__escape(i(s&&s.config&&s.config.relative_path))+"/topic/"+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].slug))+"/"+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].teaser&&s.topics[e].teaser.index))+'">\r\n\t\t\t\t\t\t<span class="timeago" title="'+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].teaser&&s.topics[e].teaser.timestampISO))+'"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class="post-content">\r\n\t\t\t\t\t'+a.__escape(i(s&&s.topics&&s.topics[e]&&s.topics[e].teaser&&s.topics[e].teaser.content))+"\r\n\t\t\t\t</div>\r\n\t\t\t\t":"")+"\r\n\t\t\t\t")+"\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</li>\r\n\t"})},terms:function(e,a,s,t){return t(s(a&&a.terms),function(t){return'\r\n\t\t\t\t<li role="presentation" class="category">\r\n\t\t\t\t\t<a role="menu-item" href="'+e.__escape(s(a&&a.config&&a.config.relative_path))+"/"+e.__escape(s(a&&a.terms&&a.terms[t]&&a.terms[t].url))+'"><i class="fa fa-fw '+(s(a&&a.terms&&a.terms[t]&&a.terms[t].selected)?"fa-check":"")+'"></i>'+e.__escape(s(a&&a.terms&&a.terms[t]&&a.terms[t].name))+"</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t"})},filters:function(e,a,s,t){return t(s(a&&a.filters),function(t){return'\r\n\t\t\t\t<li role="presentation" class="category">\r\n\t\t\t\t\t<a role="menu-item" href="'+e.__escape(s(a&&a.config&&a.config.relative_path))+"/"+e.__escape(s(a&&a.filters&&a.filters[t]&&a.filters[t].url))+'"><i class="fa fa-fw '+(s(a&&a.filters&&a.filters[t]&&a.filters[t].selected)?"fa-check":"")+'"></i>'+e.__escape(s(a&&a.filters&&a.filters[t]&&a.filters[t].name))+"</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t"})},categories:function(e,a,s,t,i){return t(s(a&&a.categories),function(t){return'\r\n        <li role="presentation" class="category" data-cid="'+e.__escape(s(a&&a.categories&&a.categories[t]&&a.categories[t].cid))+'" data-parent-cid="'+e.__escape(s(a&&a.categories&&a.categories[t]&&a.categories[t].parentCid))+'" data-name="'+e.__escape(s(a&&a.categories&&a.categories[t]&&a.categories[t].name))+'">\r\n            <a role="menu-item" href="#">'+e.__escape(s(a&&a.categories&&a.categories[t]&&a.categories[t].level))+'<i component="category/select/icon" class="fa fa-fw '+(s(a&&a.categories&&a.categories[t]&&a.categories[t].selected)?"fa-check":"")+'"></i><span component="category-markup">'+(s(a&&a.categories&&a.categories[t]&&a.categories[t].icon)?'<span class="fa-stack" style="'+e.__escape(i(a,e,"generateCategoryBackground",[s(a&&a.categories&&a.categories[t])]))+'"><i class="fa fa-fw fa-stack-1x '+e.__escape(s(a&&a.categories&&a.categories[t]&&a.categories[t].icon))+'" style="color: '+e.__escape(s(a&&a.categories&&a.categories[t]&&a.categories[t].color))+';"></i></span>':"")+" "+e.__escape(s(a&&a.categories&&a.categories[t]&&a.categories[t].name))+"</span></a>\r\n        </li>\r\n        "})},"widgets.header":function(t,e,a,s){return s(a(e&&e.widgets&&e.widgets.header),function(t){return"\r\n\t"+a(e&&e.widgets&&e.widgets.header&&e.widgets.header[t]&&e.widgets.header[t].html)+"\r\n\t"})},breadcrumbs:function(s,i,n,t){return t(n(i&&i.breadcrumbs),function(t,e,a){return"\r\n\t<li"+(e===a-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemprop="itemListElement" itemtype="http://schema.org/ListItem" '+(e===a-1?'class="active"':"")+'>\r\n\t\t<meta itemprop="position" content="'+s.__escape(e)+'" />\r\n\t\t'+(e!==a-1?'<a href="'+s.__escape(n(i&&i.breadcrumbs&&i.breadcrumbs[t]&&i.breadcrumbs[t].url))+'" itemprop="item">':"")+'\r\n\t\t\t<span itemprop="name">\r\n\t\t\t\t'+s.__escape(n(i&&i.breadcrumbs&&i.breadcrumbs[t]&&i.breadcrumbs[t].text))+"\r\n\t\t\t\t"+(e===a-1?"\r\n\t\t\t\t"+(n(i&&i["feeds:disableRSS"])?"":"\r\n\t\t\t\t"+(n(i&&i.rssFeedUrl)?'<a target="_blank" href="'+s.__escape(n(i&&i.rssFeedUrl))+'" itemprop="item"><i class="fa fa-rss-square"></i></a>':""))+"\r\n\t\t\t\t":"")+"\r\n\t\t\t</span>\r\n\t\t"+(e!==a-1?"</a>":"")+"\r\n\t</li>\r\n\t"})}},n});