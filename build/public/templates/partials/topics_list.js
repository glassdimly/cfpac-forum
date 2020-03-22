!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function o(t,s,c,e,i){return'<ul component="category" class="topic-list" itemscope itemtype="http://www.schema.org/ItemList" data-nextstart="'+t.__escape(c(s&&s.nextStart))+'" data-set="'+t.__escape(c(s&&s.set))+'">\r\n\t<meta itemprop="itemListOrder" content="descending">\r\n\t'+o.blocks.topics(t,s,c,e,i)+"\r\n</ul>\r\n"}return o.blocks={topics:function(c,e,i,t,o){return t(i(e&&e.topics),function(s){return'\r\n\t<li component="category/topic" class="row clearfix category-item '+c.__escape(o(e,c,"generateTopicClass",[i(e&&e.topics&&e.topics[s])]))+'" data-tid="'+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].tid))+'" data-index="'+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].index))+'" data-cid="'+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].cid))+'" itemprop="itemListElement">\r\n\t\t<meta itemprop="name" content="'+c.__escape(o(e,c,"stripTags",[i(e&&e.title)]))+'">\r\n\r\n\t\t<div class="col-md-6 col-sm-9 col-xs-10 content">\r\n\t\t\t<div class="avatar pull-left">\r\n\t\t\t\t'+(i(e&&e.showSelect)?'\r\n\t\t\t\t<div class="select" component="topic/select">\r\n\t\t\t\t\t'+(i(e&&e.topics&&e.topics[s]&&e.topics[s].thumb)?'\r\n\t\t\t\t\t<img src="'+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].thumb))+'" class="user-img not-responsive" />\r\n\t\t\t\t\t':"\r\n\t\t\t\t\t"+c.__escape(o(e,c,"buildAvatar",[i(e&&e.topics&&e.topics[s]&&e.topics[s].user),"46",i(e&&e.true),"not-responsive"]))+"\r\n\t\t\t\t\t")+'\r\n\t\t\t\t\t<i class="fa fa-check"></i>\r\n\t\t\t\t</div>\r\n\t\t\t\t':"")+"\r\n\r\n\t\t\t\t"+(i(e&&e.showSelect)?"":'\r\n\t\t\t\t<a href="'+(i(e&&e.topics&&e.topics[s]&&e.topics[s].user&&e.topics[s].user.userslug)?c.__escape(i(e&&e.config&&e.config.relative_path))+"/user/"+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].user&&e.topics[s].user.userslug)):"#")+'" class="pull-left">\r\n\t\t\t\t\t'+(i(e&&e.topics&&e.topics[s]&&e.topics[s].thumb)?'\r\n\t\t\t\t\t<img src="'+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].thumb))+'" class="user-img not-responsive" />\r\n\t\t\t\t\t':"\r\n\t\t\t\t\t"+c.__escape(o(e,c,"buildAvatar",[i(e&&e.topics&&e.topics[s]&&e.topics[s].user),"46",i(e&&e.true),"not-responsive"]))+"\r\n\t\t\t\t\t")+"\r\n\t\t\t\t</a>\r\n\t\t\t\t")+'\r\n\t\t\t</div>\r\n\r\n\t\t\t<h2 component="topic/header" class="title">\r\n\t\t\t\t<i component="topic/pinned" class="fa fa-thumb-tack '+(i(e&&e.topics&&e.topics[s]&&e.topics[s].pinned)?"":"hide")+'" title="[[topic:pinned]]"></i>\r\n\t\t\t\t<i component="topic/locked" class="fa fa-lock '+(i(e&&e.topics&&e.topics[s]&&e.topics[s].locked)?"":"hide")+'" title="[[topic:locked]]"></i>\r\n\t\t\t\t<i component="topic/moved" class="fa fa-arrow-circle-right '+(i(e&&e.topics&&e.topics[s]&&e.topics[s].oldCid)?"":"hide")+'" title="[[topic:moved]]"></i>\r\n\t\t\t\t'+t(i(e&&e.icons),function(t){return c.__escape(i(e&&e.icons&&e.icons[t]))})+"\r\n\r\n\t\t\t\t"+(i(e&&e.topics&&e.topics[s]&&e.topics[s].noAnchor)?"\r\n\t\t\t\t<span>"+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].title))+"</span><br />\r\n\t\t\t\t":'\r\n\t\t\t\t<a href="'+c.__escape(i(e&&e.config&&e.config.relative_path))+"/topic/"+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].slug))+(i(e&&e.topics&&e.topics[s]&&e.topics[s].bookmark)?"/"+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].bookmark)):"")+'" itemprop="url">'+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].title))+"</a><br />\r\n\t\t\t\t")+"\r\n\r\n\t\t\t\t"+(i(e&&e.template&&e.template.category)?"":'\r\n\t\t\t\t<small>\r\n\t\t\t\t\t<a href="'+c.__escape(i(e&&e.config&&e.config.relative_path))+"/category/"+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].category&&e.topics[s].category.slug))+'"><span class="fa-stack fa-lg" style="'+c.__escape(o(e,c,"generateCategoryBackground",[i(e&&e.topics&&e.topics[s]&&e.topics[s].category)]))+'"><i style="color:'+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].category&&e.topics[s].category.color))+';" class="fa '+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].category&&e.topics[s].category.icon))+' fa-stack-1x"></i></span> '+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].category&&e.topics[s].category.name))+"</a> &bull;\r\n\t\t\t\t</small>\r\n\t\t\t\t")+"\r\n\r\n\t\t\t\t"+(i(e&&e.topics&&e.topics[s]&&e.topics[s].tags&&e.topics[s].tags.length)?'\r\n\t\t\t\t<span class="tag-list hidden-xs">\r\n\t\t\t\t\t'+t(i(e&&e.topics&&e.topics[s]&&e.topics[s].tags),function(t){return'\r\n\t\t\t\t\t<a href="'+c.__escape(i(e&&e.config&&e.config.relative_path))+"/tags/"+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].tags&&e.topics[s].tags[t]&&e.topics[s].tags[t].valueEscaped))+'"><span class="tag" style="'+(i(e&&e.topics&&e.topics[s]&&e.topics[s].tags&&e.topics[s].tags[t]&&e.topics[s].tags[t].color)?"color: "+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].tags&&e.topics[s].tags[t]&&e.topics[s].tags[t].color))+";":"")+(i(e&&e.topics&&e.topics[s]&&e.topics[s].tags&&e.topics[s].tags[t]&&e.topics[s].tags[t].bgColor)?"background-color: "+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].tags&&e.topics[s].tags[t]&&e.topics[s].tags[t].bgColor))+";":"")+'">'+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].tags&&e.topics[s].tags[t]&&e.topics[s].tags[t].valueEscaped))+"</span></a>\r\n\t\t\t\t\t"})+"\r\n\t\t\t\t\t<small>&bull;</small>\r\n\t\t\t\t</span>\r\n\t\t\t\t":"")+'\r\n\r\n\t\t\t\t<small class="hidden-xs"><span class="timeago" title="'+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].timestampISO))+'"></span> &bull; <a href="'+(i(e&&e.topics&&e.topics[s]&&e.topics[s].user&&e.topics[s].user.userslug)?c.__escape(i(e&&e.config&&e.config.relative_path))+"/user/"+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].user&&e.topics[s].user.userslug)):"#")+'">'+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].user&&e.topics[s].user.username))+'</a></small>\r\n\t\t\t\t<small class="visible-xs-inline">\r\n\t\t\t\t\t<i class="fa fa-reply"></i> &nbsp;\r\n\t\t\t\t\t'+(i(e&&e.topics&&e.topics[s]&&e.topics[s].teaser&&e.topics[s].teaser.timestamp)?'\r\n\t\t\t\t\t<span class="timeago" title="'+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].teaser&&e.topics[s].teaser.timestampISO))+'"></span>\r\n\t\t\t\t\t':'\r\n\t\t\t\t\t<span class="timeago" title="'+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].timestampISO))+'"></span>\r\n\t\t\t\t\t')+'\r\n\t\t\t\t</small>\r\n\t\t\t</h2>\r\n\t\t</div>\r\n\r\n\t\t<div class="mobile-stat col-xs-2 visible-xs text-right">\r\n\t\t\t<span class="human-readable-number">'+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].postcount))+'</span> <a href="'+c.__escape(i(e&&e.config&&e.config.relative_path))+"/topic/"+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].slug))+"/"+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].teaser&&e.topics[s].teaser.index))+'"><i class="fa fa-arrow-circle-right"></i></a>\r\n\t\t</div>\r\n\r\n\t\t<div class="col-md-1 hidden-sm hidden-xs stats stats-votes">\r\n\t\t\t'+(i(e&&e["reputation:disabled"])?"":'\r\n\t\t\t<span class="human-readable-number" title="'+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].votes))+'">'+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].votes))+"</span><br />\r\n\t\t\t<small>[[global:votes]]</small>\r\n\t\t\t")+'\r\n\t\t</div>\r\n\r\n\t\t<div class="col-md-1 hidden-sm hidden-xs stats stats-postcount">\r\n\t\t\t<span class="human-readable-number" title="'+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].postcount))+'">'+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].postcount))+'</span><br />\r\n\t\t\t<small>[[global:posts]]</small>\r\n\t\t</div>\r\n\r\n\t\t<div class="col-md-1 hidden-sm hidden-xs stats stats-viewcount">\r\n\t\t\t<span class="human-readable-number" title="'+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].viewcount))+'">'+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].viewcount))+'</span><br />\r\n\t\t\t<small>[[global:views]]</small>\r\n\t\t</div>\r\n\r\n\t\t<div class="col-md-3 col-sm-3 teaser hidden-xs" component="topic/teaser">\r\n\t\t\t<div class="card" style="border-color: '+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].category&&e.topics[s].category.bgColor))+'">\r\n\t\t\t\t'+(i(e&&e.topics&&e.topics[s]&&e.topics[s].unreplied)?"\r\n\t\t\t\t<p>\r\n\t\t\t\t\t[[category:no_replies]]\r\n\t\t\t\t</p>\r\n\t\t\t\t":"\r\n\t\t\t\t"+(i(e&&e.topics&&e.topics[s]&&e.topics[s].teaser&&e.topics[s].teaser.pid)?'\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<a href="'+c.__escape(i(e&&e.config&&e.config.relative_path))+"/user/"+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].teaser&&e.topics[s].teaser.user&&e.topics[s].teaser.user.userslug))+'">'+c.__escape(o(e,c,"buildAvatar",[i(e&&e.topics&&e.topics[s]&&e.topics[s].teaser&&e.topics[s].teaser.user),"24",i(e&&e.true),"not-responsive"]))+'</a>\r\n\t\t\t\t\t<a class="permalink" href="'+c.__escape(i(e&&e.config&&e.config.relative_path))+"/topic/"+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].slug))+"/"+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].teaser&&e.topics[s].teaser.index))+'">\r\n\t\t\t\t\t\t<span class="timeago" title="'+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].teaser&&e.topics[s].teaser.timestampISO))+'"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class="post-content">\r\n\t\t\t\t\t'+c.__escape(i(e&&e.topics&&e.topics[s]&&e.topics[s].teaser&&e.topics[s].teaser.content))+"\r\n\t\t\t\t</div>\r\n\t\t\t\t":"")+"\r\n\t\t\t\t")+"\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</li>\r\n\t"})}},o});