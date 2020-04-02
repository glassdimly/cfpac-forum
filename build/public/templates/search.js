!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function i(t,a,s,e,n){return(s(a&&a.breadcrumbs&&a.breadcrumbs.length)?'\n<ol class="breadcrumb" itemscope="itemscope" itemprop="breadcrumb" itemtype="http://schema.org/BreadcrumbList">\n\t'+i.blocks.breadcrumbs(t,a,s,e,n)+"\n</ol>\n":"")+'\n\n\n<div class="search">\n\t<div class="row">\n\t\t<div class="col-xs-12">\n\t\t\t<form id="advanced-search">\n\t\t\t\t<div class="form-group">\n\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t<div class="col-md-6">\n\t\t\t\t\t\t\t<label>[[global:search]]</label>\n\t\t\t\t\t\t\t<input type="text" class="form-control" id="search-input" placeholder="[[global:search]]">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="col-md-2">\n\t\t\t\t\t\t\t<label>[[search:in]]</label>\n\t\t\t\t\t\t\t<select id="search-in" class="form-control">\n\t\t\t\t\t\t\t\t<option value="titlesposts">[[search:titles-posts]]</option>\n\t\t\t\t\t\t\t\t<option value="titles">[[search:titles]]</option>\n\t\t\t\t\t\t\t\t<option value="posts">[[global:posts]]</option>\n\t\t\t\t\t\t\t\t<option value="users">[[global:users]]</option>\n\t\t\t\t\t\t\t\t<option value="tags">[[tags:tags]]</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="col-md-2">\n\t\t\t\t\t\t\t<label>[[search:match-words]]</label>\n\t\t\t\t\t\t\t<select id="match-words-filter" class="form-control">\n\t\t\t\t\t\t\t\t<option value="all">[[search:all]]</option>\n\t\t\t\t\t\t\t\t<option value="any">[[search:any]]</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="col-md-2">\n\t\t\t\t\t\t\t<label>&nbsp;</label>\n\t\t\t\t\t\t\t<button type="submit" class="btn btn-primary form-control">[[global:search]]</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="panel panel-default">\n\t\t\t\t\t<div class="panel-heading" data-toggle="collapse" data-target=".search-options">\n\t\t\t\t\t\t<h3 class="panel-title"><i class="fa fa-caret-down"></i> [[search:advanced-search]]</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="panel-body search-options collapse '+(s(a&&a.expandSearch)?"in":"")+'">\n\t\t\t\t\t\t<div class="form-group post-search-item">\n\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t<div class="col-md-6">\n\t\t\t\t\t\t\t\t\t<label>[[search:in-categories]]</label>\n\t\t\t\t\t\t\t\t\t<select multiple class="form-control" id="posted-in-categories" size="'+t.__escape(s(a&&a.categoriesCount))+'">\n\t\t\t\t\t\t\t\t\t\t'+i.blocks.categories(t,a,s,e,n)+'\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t<input type="checkbox" id="search-children"> [[search:search-child-categories]]\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="col-md-6">\n\t\t\t\t\t\t\t\t\t<div class="form-group post-search-item">\n\t\t\t\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-md-6">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>[[search:posted-by]]</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" id="posted-by-user" placeholder="[[search:posted-by]]">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-md-6">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>[[search:has-tags]]</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" id="has-tags">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class="form-group post-search-item">\n\t\t\t\t\t\t\t\t\t\t<label>[[search:reply-count]]</label>\n\t\t\t\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-md-6">\n\t\t\t\t\t\t\t\t\t\t\t\t<select id="reply-count-filter" class="form-control">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value="atleast">[[search:at-least]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value="atmost">[[search:at-most]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-md-6">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" id="reply-count">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class="form-group post-search-item">\n\t\t\t\t\t\t\t\t\t\t<label>[[search:post-time]]</label>\n\t\t\t\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-md-6">\n\t\t\t\t\t\t\t\t\t\t\t\t<select id="post-time-filter" class="form-control">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value="newer">[[search:newer-than]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value="older">[[search:older-than]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-md-6">\n\t\t\t\t\t\t\t\t\t\t\t\t<select id="post-time-range" class="form-control">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value="">[[search:any-date]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value="86400">[[search:yesterday]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value="604800">[[search:one-week]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value="1209600">[[search:two-weeks]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value="2592000">[[search:one-month]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value="7776000">[[search:three-months]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value="15552000">[[search:six-months]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value="31104000">[[search:one-year]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class="form-group post-search-item">\n\t\t\t\t\t\t\t\t\t\t<label>[[search:sort-by]]</label>\n\t\t\t\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-md-6">\n\t\t\t\t\t\t\t\t\t\t\t\t<select id="post-sort-by" class="form-control">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value="relevance">[[search:relevance]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value="timestamp">[[search:post-time]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value="votes">[[search:votes]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value="topic.lastposttime">[[search:last-reply-time]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value="topic.title">[[search:topic-title]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value="topic.postcount">[[search:number-of-replies]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value="topic.viewcount">[[search:number-of-views]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value="topic.votes">[[search:topic-votes]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value="topic.timestamp">[[search:topic-start-date]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value="user.username">[[search:username]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value="category.name">[[search:category]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-md-6">\n\t\t\t\t\t\t\t\t\t\t\t\t<select id="post-sort-direction" class="form-control">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value="desc">[[search:descending]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value="asc">[[search:ascending]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class="form-group post-search-item">\n\t\t\t\t\t\t\t\t\t\t<label>[[search:show-results-as]]</label>\n\t\t\t\t\t\t\t\t\t\t<div class="radio">\n\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" name="options" id="show-as-posts" checked>\n\t\t\t\t\t\t\t\t\t\t\t\t[[global:posts]]\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="radio">\n\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" name="options" id="show-as-topics">\n\t\t\t\t\t\t\t\t\t\t\t\t[[global:topics]]\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t<div class="btn-group">\n\t\t\t\t\t\t\t<button type="submit" class="btn btn-primary">[[global:search]]</button>\n\t\t\t\t\t\t\t<a class="btn btn-default" id="save-preferences" href="#">[[search:save-preferences]]</a>\n\t\t\t\t\t\t\t<a class="btn btn-default" id="clear-preferences" href="#">[[search:clear-preferences]]</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n\n\t<div class="row">\n\t\t<div id="results" class="search-results col-md-12" data-search-query="'+t.__escape(s(a&&a.search_query))+'">\n\t\t\t'+(s(a&&a.matchCount)?'\n\t\t\t<div class="alert alert-info">[[search:results_matching, '+t.__escape(s(a&&a.matchCount))+", "+t.__escape(s(a&&a.search_query))+", "+t.__escape(s(a&&a.time))+"]] </div>\n\t\t\t":"\n\t\t\t"+(s(a&&a.search_query)?'\n\t\t\t<div class="alert alert-warning">[[search:no-matches]]</div>\n\t\t\t':"")+"\n\t\t\t")+"\n\n\t\t\t"+i.blocks.posts(t,a,s,e,n)+"\n\n\t\t\t"+(s(a&&a.users&&a.users.length)?'\n\t\t\t<ul id="users-container" class="users-container">\n\t\t\t'+i.blocks.users(t,a,s,e,n)+"\n\t\t\t</ul>\n\t\t\t":"")+"\n\n\t\t\t"+(s(a&&a.tags&&a.tags.length)?"\n\t\t\t"+i.blocks.tags(t,a,s,e,n)+"\n\t\t\t":"")+'\n\n\t\t\t<div component="pagination" class="text-center pagination-container'+(s(a&&a.pagination&&a.pagination.pages&&a.pagination.pages.length)?"":" hidden")+'">\n\t<ul class="pagination hidden-xs">\n\t\t<li class="previous pull-left'+(s(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(s(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.qs))+'" data-page="'+t.__escape(s(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t'+i.blocks["pagination.pages"](t,a,s,e,n)+'\n\n\t\t<li class="next pull-right'+(s(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(s(a&&a.pagination&&a.pagination.next&&a.pagination.next.qs))+'" data-page="'+t.__escape(s(a&&a.pagination&&a.pagination.next&&a.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\t</ul>\n\n\t<ul class="pagination hidden-sm hidden-md hidden-lg">\n\t\t<li class="first'+(s(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(s(a&&a.pagination&&a.pagination.first&&a.pagination.first.qs))+'" data-page="1"><i class="fa fa-fast-backward"></i> </a>\n\t\t</li>\n\n\t\t<li class="previous'+(s(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(s(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.qs))+'" data-page="'+t.__escape(s(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t<a href="#">'+t.__escape(s(a&&a.pagination&&a.pagination.currentPage))+" / "+t.__escape(s(a&&a.pagination&&a.pagination.pageCount))+'</a>\n\t\t</li>\n\n\t\t<li class="next'+(s(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(s(a&&a.pagination&&a.pagination.next&&a.pagination.next.qs))+'" data-page="'+t.__escape(s(a&&a.pagination&&a.pagination.next&&a.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\n\t\t<li class="last'+(s(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(s(a&&a.pagination&&a.pagination.last&&a.pagination.last.qs))+'" data-page="'+t.__escape(s(a&&a.pagination&&a.pagination.pageCount))+'"><i class="fa fa-fast-forward"></i> </a>\n\t\t</li>\n\t</ul>\n</div>\n\t\t</div>\n\t</div>\n</div>\n'}return i.blocks={"pagination.pages":function(a,s,e,t){return t(e(s&&s.pagination&&s.pagination.pages),function(t){return"\n\t\t\t"+(e(s&&s.pagination&&s.pagination.pages&&s.pagination.pages[t]&&s.pagination.pages[t].separator)?'\n\t\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t\t<a href="#"><i class="fa fa-ellipsis-h"></i></a>\n\t\t\t</li>\n\t\t\t':'\n\t\t\t<li class="page'+(e(s&&s.pagination&&s.pagination.pages&&s.pagination.pages[t]&&s.pagination.pages[t].active)?" active":"")+'" >\n\t\t\t\t<a href="?'+a.__escape(e(s&&s.pagination&&s.pagination.pages&&s.pagination.pages[t]&&s.pagination.pages[t].qs))+'" data-page="'+a.__escape(e(s&&s.pagination&&s.pagination.pages&&s.pagination.pages[t]&&s.pagination.pages[t].page))+'">'+a.__escape(e(s&&s.pagination&&s.pagination.pages&&s.pagination.pages[t]&&s.pagination.pages[t].page))+"</a>\n\t\t\t</li>\n\t\t\t")+"\n\t\t"})},tags:function(a,s,e,t){return t(e(s&&s.tags),function(t){return'\n<h3 class="pull-left tag-container">\n\t<a href="'+a.__escape(e(s&&s.config&&s.config.relative_path))+"/tags/"+a.__escape(e(s&&s.tags&&s.tags[t]&&s.tags[t].valueEscaped))+'" data-value="'+a.__escape(e(s&&s.tags&&s.tags[t]&&s.tags[t].valueEscaped))+'"><span class="tag-item" data-tag="'+a.__escape(e(s&&s.tags&&s.tags[t]&&s.tags[t].valueEscaped))+'" style="'+(e(s&&s.tags&&s.tags[t]&&s.tags[t].color)?"color: "+a.__escape(e(s&&s.tags&&s.tags[t]&&s.tags[t].color))+";":"")+(e(s&&s.tags&&s.tags[t]&&s.tags[t].bgColor)?"background-color: "+a.__escape(e(s&&s.tags&&s.tags[t]&&s.tags[t].bgColor))+";":"")+'">'+a.__escape(e(s&&s.tags&&s.tags[t]&&s.tags[t].valueEscaped))+'</span><span class="tag-topic-count human-readable-number" title="'+a.__escape(e(s&&s.tags&&s.tags[t]&&s.tags[t].score))+'">'+a.__escape(e(s&&s.tags&&s.tags[t]&&s.tags[t].score))+"</span></a>\n</h3>\n"})},users:function(a,s,e,t,n){return t(e(s&&s.users),function(t){return'\n<li class="users-box registered-user" data-uid="'+a.__escape(e(s&&s.users&&s.users[t]&&s.users[t].uid))+'">\n\t<a href="'+a.__escape(e(s&&s.config&&s.config.relative_path))+"/user/"+a.__escape(e(s&&s.users&&s.users[t]&&s.users[t].userslug))+'">'+a.__escape(n(s,a,"buildAvatar",[e(s&&s.users&&s.users[t]),"80",e(s&&s.true)]))+'</a>\n\t<br/>\n\t<div class="user-info">\n\t\t<span>\n\t\t\t<i component="user/status" class="fa fa-circle status '+a.__escape(e(s&&s.users&&s.users[t]&&s.users[t].status))+'" title="[[global:'+a.__escape(e(s&&s.users&&s.users[t]&&s.users[t].status))+']]"></i>\n\t\t\t<a href="'+a.__escape(e(s&&s.config&&s.config.relative_path))+"/user/"+a.__escape(e(s&&s.users&&s.users[t]&&s.users[t].userslug))+'">'+a.__escape(e(s&&s.users&&s.users[t]&&s.users[t].username))+"</a>\n\t\t</span>\n\t\t<br/>\n\n\t\t"+(e(s&&s.section_joindate)?'\n\t\t<div title="joindate" class="joindate">\n\t\t\t<span class="timeago" title="'+a.__escape(e(s&&s.users&&s.users[t]&&s.users[t].joindateISO))+'"></span>\n\t\t</div>\n\t\t':"")+"\n\n\t\t"+(e(s&&s["section_sort-reputation"])?'\n\t\t<div title="reputation" class="reputation">\n\t\t\t<i class="fa fa-star"></i>\n\t\t\t<span class="formatted-number">'+a.__escape(e(s&&s.users&&s.users[t]&&s.users[t].reputation))+"</span>\n\t\t</div>\n\t\t":"")+"\n\n\t\t"+(e(s&&s["section_sort-posts"])?'\n\t\t<div title="post count" class="post-count">\n\t\t\t<i class="fa fa-pencil"></i>\n\t\t\t<span class="formatted-number">'+a.__escape(e(s&&s.users&&s.users[t]&&s.users[t].postcount))+"</span>\n\t\t</div>\n\t\t":"")+"\n\n\t\t"+(e(s&&s.section_flagged)?'\n\t\t<div title="flag count" class="flag-count">\n\t\t\t<i class="fa fa-flag"></i>\n\t\t\t<span><a class="formatted-number" href="'+a.__escape(e(s&&s.config&&s.config.relative_path))+"/flags?targetUid="+a.__escape(e(s&&s.users&&s.users[t]&&s.users[t].uid))+'">'+a.__escape(e(s&&s.users&&s.users[t]&&s.users[t].flags))+"</a></span>\n\t\t</div>\n\t\t":"")+"\n\t</div>\n</li>\n"})},posts:function(a,s,e,t,n){return t(e(s&&s.posts),function(t){return'\n\t\t\t<div class="topic-row panel panel-default clearfix">\n\t\t\t\t<div class="panel-body">\n\t\t\t\t\t<a href="'+a.__escape(e(s&&s.config&&s.config.relative_path))+"/user/"+a.__escape(e(s&&s.posts&&s.posts[t]&&s.posts[t].user&&s.posts[t].user.userslug))+'">'+a.__escape(n(s,a,"buildAvatar",[e(s&&s.posts&&s.posts[t]&&s.posts[t].user),"sm",e(s&&s.true)]))+'</a>\n\t\t\t\t\t<span class="search-result-text search-result-title"><a href="'+a.__escape(e(s&&s.config&&s.config.relative_path))+"/post/"+a.__escape(e(s&&s.posts&&s.posts[t]&&s.posts[t].pid))+'">'+a.__escape(e(s&&s.posts&&s.posts[t]&&s.posts[t].topic&&s.posts[t].topic.title))+"</a></span>\n\t\t\t\t\t<br/>\n\t\t\t\t\t"+(e(s&&s.showAsPosts)?'\n\t\t\t\t\t<div class="search-result-text">\n\t\t\t\t\t\t'+a.__escape(e(s&&s.posts&&s.posts[t]&&s.posts[t].content))+'\n\t\t\t\t\t\t<p class="fade-out"></p>\n\t\t\t\t\t</div>\n\t\t\t\t\t':"")+'\n\n\t\t\t\t\t<small class="post-info pull-right">\n\t\t\t\t\t\t<a href="'+a.__escape(e(s&&s.config&&s.config.relative_path))+"/category/"+a.__escape(e(s&&s.posts&&s.posts[t]&&s.posts[t].category&&s.posts[t].category.slug))+'"><span class="fa-stack" style="'+a.__escape(n(s,a,"generateCategoryBackground",[e(s&&s.posts&&s.posts[t]&&s.posts[t].category)]))+'"><i style="color:'+a.__escape(e(s&&s.posts&&s.posts[t]&&s.posts[t].category&&s.posts[t].category.color))+';" class="fa '+a.__escape(e(s&&s.posts&&s.posts[t]&&s.posts[t].category&&s.posts[t].category.icon))+' fa-stack-1x"></i></span> '+a.__escape(e(s&&s.posts&&s.posts[t]&&s.posts[t].category&&s.posts[t].category.name))+'</a> &bull;\n\t\t\t\t\t\t<span class="timeago" title="'+a.__escape(e(s&&s.posts&&s.posts[t]&&s.posts[t].timestampISO))+'"></span>\n\t\t\t\t\t</small>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t'})},categories:function(a,s,e,t){return t(e(s&&s.categories),function(t){return'\n\t\t\t\t\t\t\t\t\t\t<option value="'+a.__escape(e(s&&s.categories&&s.categories[t]&&s.categories[t].value))+'">'+a.__escape(e(s&&s.categories&&s.categories[t]&&s.categories[t].text))+"</option>\n\t\t\t\t\t\t\t\t\t\t"})},breadcrumbs:function(e,n,i,t){return t(i(n&&n.breadcrumbs),function(t,a,s){return"\n\t<li"+(a===s-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemprop="itemListElement" itemtype="http://schema.org/ListItem" '+(a===s-1?'class="active"':"")+'>\n\t\t<meta itemprop="position" content="'+e.__escape(a)+'" />\n\t\t'+(a!==s-1?'<a href="'+e.__escape(i(n&&n.breadcrumbs&&n.breadcrumbs[t]&&n.breadcrumbs[t].url))+'" itemprop="item">':"")+'\n\t\t\t<span itemprop="name">\n\t\t\t\t'+e.__escape(i(n&&n.breadcrumbs&&n.breadcrumbs[t]&&n.breadcrumbs[t].text))+"\n\t\t\t\t"+(a===s-1?"\n\t\t\t\t"+(i(n&&n["feeds:disableRSS"])?"":"\n\t\t\t\t"+(i(n&&n.rssFeedUrl)?'<a target="_blank" href="'+e.__escape(i(n&&n.rssFeedUrl))+'" itemprop="item"><i class="fa fa-rss-square"></i></a>':""))+"\n\t\t\t\t":"")+"\n\t\t\t</span>\n\t\t"+(a!==s-1?"</a>":"")+"\n\t</li>\n\t"})}},i});