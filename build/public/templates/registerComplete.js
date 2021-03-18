!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function o(t,e,n,r,s){return(n(e&&e.breadcrumbs&&e.breadcrumbs.length)?'\n<ol class="breadcrumb" itemscope="itemscope" itemprop="breadcrumb" itemtype="http://schema.org/BreadcrumbList">\n\t'+o.blocks.breadcrumbs(t,e,n,r,s)+"\n</ol>\n":"")+'\n\n\n<div class="row">\n\t<div class="col-xs-12 col-sm-8 col-sm-offset-2">\n\t\t<p class="lead text-center">\n\t\t\t[[register:interstitial.intro]]\n\t\t</p>\n\n\t\t'+(n(e&&e.errors&&e.errors.length)?'\n\t\t<div class="alert alert-warning">\n\t\t\t<p>\n\t\t\t\t[[register:interstitial.errors-found]]\n\t\t\t</p>\n\t\t\t<ul>\n\t\t\t\t'+o.blocks.errors(t,e,n,r,s)+"\n\t\t\t</ul>\n\t\t</div>\n\t\t":"")+'\n\t</div>\n</div>\n\n<form role="form" method="post" action="'+t.__escape(n(e&&e.config&&e.config.relative_path))+"/register/complete/?_csrf="+t.__escape(n(e&&e.config&&e.config.csrf_token))+'" enctype="multipart/form-data">\n\t'+o.blocks.sections(t,e,n,r,s)+'\n\n\t<div class="row">\n\t\t<div class="col-xs-12 col-sm-8 col-sm-offset-2">\n\t\t\t<button class="btn btn-primary btn-block">[[topic:composer.submit]]</button>\n\t\t</div>\n\t</div>\n</form>\n<form role="form" method="post" action="'+t.__escape(n(e&&e.config&&e.config.relative_path))+'/register/abort">\n\t<p class="text-center">\n\t\t<button class="btn btn-link">[[register:cancel_registration]]</button>\n\t</p>\n</form>\n\n<script>\n\t// @TODO This is pretty hacky having this here.\n\twindow.setCookie(\'login:shouldRedirect\', \'true\', 10);\n<\/script>'}return o.blocks={sections:function(e,n,r,t){return t(r(n&&n.sections),function(t){return'\n\t<div class="row">\n\t\t<div class="col-xs-12 col-sm-8 col-sm-offset-2">\n\t\t\t<div class="panel panel-default">\n\t\t\t\t<div class="panel-body">\n\t\t\t\t\t'+e.__escape(r(n&&n.sections&&n.sections[t]))+"\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t"})},errors:function(e,n,r,t){return t(r(n&&n.errors),function(t){return"\n\t\t\t\t<li>"+e.__escape(r(n&&n.errors&&n.errors[t]))+"</li>\n\t\t\t\t"})},breadcrumbs:function(r,s,o,t){return t(o(s&&s.breadcrumbs),function(t,e,n){return"\n\t<li"+(e===n-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemprop="itemListElement" itemtype="http://schema.org/ListItem" '+(e===n-1?'class="active"':"")+'>\n\t\t<meta itemprop="position" content="'+r.__escape(e)+'" />\n\t\t'+(e!==n-1?'<a href="'+r.__escape(o(s&&s.breadcrumbs&&s.breadcrumbs[t]&&s.breadcrumbs[t].url))+'" itemprop="item">':"")+'\n\t\t\t<span itemprop="name">\n\t\t\t\t'+r.__escape(o(s&&s.breadcrumbs&&s.breadcrumbs[t]&&s.breadcrumbs[t].text))+"\n\t\t\t\t"+(e===n-1?"\n\t\t\t\t"+(o(s&&s["feeds:disableRSS"])?"":"\n\t\t\t\t"+(o(s&&s.rssFeedUrl)?'<a target="_blank" href="'+r.__escape(o(s&&s.rssFeedUrl))+'" itemprop="item"><i class="fa fa-rss-square"></i></a>':""))+"\n\t\t\t\t":"")+"\n\t\t\t</span>\n\t\t"+(e!==n-1?"</a>":"")+"\n\t</li>\n\t"})}},o});