!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function i(t,e,n,r,s){return'<div class="outgoing">\n\n\t'+(n(e&&e.breadcrumbs&&e.breadcrumbs.length)?'\n<ol class="breadcrumb" itemscope="itemscope" itemprop="breadcrumb" itemtype="http://schema.org/BreadcrumbList">\n\t'+i.blocks.breadcrumbs(t,e,n,r,s)+"\n</ol>\n":"")+'\n\n\n\t<div class="well">\n\t\t<h3>\n\t\t\t[[notifications:outgoing_link_message, '+t.__escape(n(e&&e.title))+']]\n\t\t</h3>\n\t\t<p>\n\t\t\t<a href="'+t.__escape(n(e&&e.outgoing))+'" rel="nofollow noopener noreferrer" class="btn btn-primary btn-lg">[[notifications:continue_to, '+t.__escape(n(e&&e.outgoing))+']]</a>\n\t\t\t<a id="return-btn" href="#" class="btn btn-lg btn-warning">[[notifications:return_to, '+t.__escape(n(e&&e.title))+"]]</a>\n\t\t</p>\n\t</div>\n</div>\n\n<script>\n\t$('#return-btn').on('click', function() {\n\t\thistory.back();\n\t\treturn false;\n\t});\n<\/script>\n"}return i.blocks={breadcrumbs:function(r,s,i,t){return t(i(s&&s.breadcrumbs),function(t,e,n){return"\n\t<li"+(e===n-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemprop="itemListElement" itemtype="http://schema.org/ListItem" '+(e===n-1?'class="active"':"")+'>\n\t\t<meta itemprop="position" content="'+r.__escape(e)+'" />\n\t\t'+(e!==n-1?'<a href="'+r.__escape(i(s&&s.breadcrumbs&&s.breadcrumbs[t]&&s.breadcrumbs[t].url))+'" itemprop="item">':"")+'\n\t\t\t<span itemprop="name">\n\t\t\t\t'+r.__escape(i(s&&s.breadcrumbs&&s.breadcrumbs[t]&&s.breadcrumbs[t].text))+"\n\t\t\t\t"+(e===n-1?"\n\t\t\t\t"+(i(s&&s["feeds:disableRSS"])?"":"\n\t\t\t\t"+(i(s&&s.rssFeedUrl)?'<a target="_blank" href="'+r.__escape(i(s&&s.rssFeedUrl))+'" itemprop="item"><i class="fa fa-rss-square"></i></a>':""))+"\n\t\t\t\t":"")+"\n\t\t\t</span>\n\t\t"+(e!==n-1?"</a>":"")+"\n\t</li>\n\t"})}},i});