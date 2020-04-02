!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function s(e,a,n,t,i){return"<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<title>"+e.__escape(n(a&&a.title))+'</title>\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\n\t\t<link rel="stylesheet" type="text/css" href="'+e.__escape(n(a&&a.relative_path))+"/assets/admin.css?"+e.__escape(n(a&&a["cache-buster"]))+'" />\n\t\t<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">\n\n\t\t<script>\n\t\t\tvar RELATIVE_PATH = "'+e.__escape(n(a&&a.relative_path))+"\";\n\t\t\tvar config = JSON.parse('"+n(a&&a.configJSON)+"');\n\t\t\tvar app = {\n\t\t\t\ttemplate: \""+e.__escape(n(a&&a.template&&a.template.name))+"\",\n\t\t\t\tuser: JSON.parse('"+n(a&&a.userJSON)+"'),\n\t\t\t\tconfig: JSON.parse(decodeURIComponent(\""+n(a&&a.adminConfigJSON)+'")),\n\t\t\t\tflags: {},\n\t\t\t\tinAdmin: true\n\t\t\t};\n\t\t\tconsolt.log(\'in header.tpl nodebb admin. changes deployed.\');\n\t\t<\/script>\n\n\t\t<script type="text/javascript" src="'+e.__escape(n(a&&a.relative_path))+"/assets/acp.min.js?"+e.__escape(n(a&&a["cache-buster"]))+'"><\/script>\n\n\t\t'+s.blocks.scripts(e,a,n,t,i)+'\n\t</head>\n\n\t<body class="admin '+e.__escape(n(a&&a.bodyClass))+'">\n\t\t<nav id="menu" class="hidden-md hidden-lg">\n\t<section class="menu-section quick-actions">\n\t\t<ul class="menu-section-list">\n\t\t\t<div class="button-group">\n\t\t\t\t<li component="logout">\n\t<a href="#" title="[[admin/menu:logout]]" data-placement="bottom" data-toggle="tooltip">\n\t\t<i class="fa fw-fw fa-sign-out"></i>\n\t</a>\n</li>\n<li>\n\t<a href="#" class="restart" data-toggle="tooltip" data-placement="bottom" title="[[admin/menu:restart-forum]]">\n\t\t<i class="fa fa-fw fa-repeat"></i>\n\t</a>\n</li>\n<li>\n\t<a href="#" class="rebuild-and-restart" data-toggle="tooltip" data-placement="bottom" title="[[admin/menu:rebuild-and-restart-forum]]">\n\t\t<i class="fa fa-fw fa-refresh"></i>\n\t</a>\n</li>\n\n<li>\n\t<a href="'+e.__escape(n(a&&a.config&&a.config.relative_path))+'/" data-toggle="tooltip" data-placement="bottom" title="[[admin/menu:view-forum]]">\n\t\t<i class="fa fa-fw fa-home"></i>\n\t</a>\n</li>\n\t\t\t</div>\n\n\t\t\t<div class="alert '+(n(a&&a.upgradeAvailable)?"alert-warning":"alert-info")+' well-sm">\n\t<span>[[admin/menu:alerts.version, '+e.__escape(n(a&&a.version))+"]]</span>\n\t"+(n(a&&a.upgradeAvailable)?'\n\t<span style="margin-left: 10px">\n\t\t<a href="https://docs.nodebb.org/configuring/upgrade/" target="_blank">\n\t\t\t<u>[[admin/menu:alerts.upgrade, '+e.__escape(n(a&&a.latestVersion))+"]]</u>\n\t\t</a>\n\t</span>\n\t":"")+'\n</div>\n\t\t</ul>\n\t</section>\n\n\t<section class="menu-section">\n\t\t<h3 class="menu-section-title">[[admin/menu:section-general]]</h3>\n\t\t<ul class="menu-section-list">\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/general/dashboard">[[admin/menu:general/dashboard]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/general/homepage">[[admin/menu:general/homepage]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/general/navigation">[[admin/menu:general/navigation]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/general/languages">[[admin/menu:general/languages]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/general/sounds">[[admin/menu:general/sounds]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/general/social">[[admin/menu:general/social]]</a></li>\n\t\t</ul>\n\t</section>\n\n\t<section class="menu-section">\n\t\t<h3 class="menu-section-title">[[admin/menu:section-manage]]</h3>\n\t\t<ul class="menu-section-list">\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/manage/categories">[[admin/menu:manage/categories]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/manage/privileges">[[admin/menu:manage/privileges]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/manage/users">[[admin/menu:manage/users]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/manage/admins-mods">[[admin/menu:manage/admins-mods]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/manage/groups">[[admin/menu:manage/groups]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/manage/tags">[[admin/menu:manage/tags]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/manage/registration">[[admin/menu:manage/registration]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/manage/post-queue">[[admin/menu:manage/post-queue]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/manage/ip-blacklist">[[admin/menu:manage/ip-blacklist]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/manage/uploads">[[admin/menu:manage/uploads]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/manage/digest">[[admin/menu:manage/digest]]</a></li>\n\t\t</ul>\n\t</section>\n\n\t<section class="menu-section">\n\t\t<h3 class="menu-section-title">[[admin/menu:section-settings]]</h3>\n\t\t<ul class="menu-section-list">\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/settings/general">[[admin/menu:section-general]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/settings/user">[[admin/menu:settings/user]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/settings/group">[[admin/menu:settings/group]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/settings/tags">[[admin/menu:manage/tags]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/settings/post">[[admin/menu:settings/post]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/settings/email">[[admin/menu:settings/email]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/settings/reputation">[[admin/menu:settings/reputation]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/settings/guest">[[admin/menu:settings/guest]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/settings/uploads">[[admin/menu:settings/uploads]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/settings/chat">[[admin/menu:settings/chat]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/settings/pagination">[[admin/menu:settings/pagination]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/settings/notifications">[[admin/menu:settings/notifications]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/settings/cookies">[[admin/menu:settings/cookies]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/settings/web-crawler">[[admin/menu:settings/web-crawler]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/settings/sockets">[[admin/menu:settings/sockets]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/settings/advanced">[[admin/menu:settings/advanced]]</a></li>\n\t\t</ul>\n\t</section>\n\n\t<section class="menu-section">\n\t\t<h3 class="menu-section-title">[[admin/menu:section-appearance]]</h3>\n\t\t<ul class="menu-section-list">\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/appearance/themes">[[admin/menu:appearance/themes]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/appearance/skins">[[admin/menu:appearance/skins]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/appearance/customise">[[admin/menu:appearance/customise]]</a></li>\n\t\t</ul>\n\t</section>\n\n\t<section class="menu-section">\n\t\t<h3 class="menu-section-title">[[admin/menu:section-extend]]</h3>\n\t\t<ul class="menu-section-list">\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/extend/plugins">[[admin/menu:extend/plugins]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/extend/widgets">[[admin/menu:extend/widgets]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/extend/rewards">[[admin/menu:extend/rewards]]</a></li>\n\t\t</ul>\n\t</section>\n\n\t'+(n(a&&a.plugins&&a.plugins.length)?'\n\t<section class="menu-section">\n\t\t<h3 class="menu-section-title">[[admin/menu:section-plugins]]</h3>\n\t\t<ul class="menu-section-list">\n\t\t\t'+t(n(a&&a.plugins),function(t){return'\n\t\t\t<li>\n\t\t\t\t<a href="'+e.__escape(n(a&&a.relative_path))+"/admin"+e.__escape(n(a&&a.plugins&&a.plugins[t]&&a.plugins[t].route))+'">'+e.__escape(n(a&&a.plugins&&a.plugins[t]&&a.plugins[t].name))+"</a>\n\t\t\t</li>\n\t\t\t"})+"\n\t\t</ul>\n\t</section>\n\t":"")+"\n\n\t"+(n(a&&a.authentication&&a.authentication.length)?'\n\t<section class="menu-section">\n\t\t<h3 class="menu-section-title">[[admin/menu:section-social-auth]]</h3>\n\t\t<ul class="menu-section-list">\n\t\t\t'+t(n(a&&a.authentication),function(t){return'\n\t\t\t<li>\n\t\t\t\t<a href="'+e.__escape(n(a&&a.relative_path))+"/admin"+e.__escape(n(a&&a.authentication&&a.authentication[t]&&a.authentication[t].route))+'">'+e.__escape(n(a&&a.authentication&&a.authentication[t]&&a.authentication[t].name))+"</a>\n\t\t\t</li>\n\t\t\t"})+"\n\t\t</ul>\n\t</section>\n\t":"")+'\n\n\t<section class="menu-section">\n\t\t<h3 class="menu-section-title">[[admin/menu:section-advanced]]</h3>\n\t\t<ul class="menu-section-list">\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/advanced/database">[[admin/menu:advanced/database]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/advanced/events">[[admin/menu:advanced/events]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/advanced/hooks">[[admin/menu:advanced/hooks]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/advanced/cache">[[admin/menu:advanced/cache]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/advanced/errors">[[admin/menu:advanced/errors]]</a></li>\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/advanced/logs">[[admin/menu:advanced/logs]]</a></li>\n\t\t\t'+(n(a&&a.env)?'\n\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/development/logger">[[admin/menu:development/logger]]</a></li>\n\t\t\t':"")+'\n\t\t</ul>\n\t</section>\n</nav>\n\n<main id="panel">\n\t<nav class="header" id="header">\n\t\t<div class="pull-left">\n\t\t\t<div id="mobile-menu">\n\t\t\t\t<div class="bar"></div>\n\t\t\t\t<div class="bar"></div>\n\t\t\t\t<div class="bar"></div>\n\t\t\t</div>\n\t\t\t<h1 id="main-page-title"></h1>\n\t\t</div>\n\n\t\t<ul class="quick-actions hidden-xs hidden-sm">\n\t\t\t<li component="logout">\n\t<a href="#" title="[[admin/menu:logout]]" data-placement="bottom" data-toggle="tooltip">\n\t\t<i class="fa fw-fw fa-sign-out"></i>\n\t</a>\n</li>\n<li>\n\t<a href="#" class="restart" data-toggle="tooltip" data-placement="bottom" title="[[admin/menu:restart-forum]]">\n\t\t<i class="fa fa-fw fa-repeat"></i>\n\t</a>\n</li>\n<li>\n\t<a href="#" class="rebuild-and-restart" data-toggle="tooltip" data-placement="bottom" title="[[admin/menu:rebuild-and-restart-forum]]">\n\t\t<i class="fa fa-fw fa-refresh"></i>\n\t</a>\n</li>\n\n<li>\n\t<a href="'+e.__escape(n(a&&a.config&&a.config.relative_path))+'/" data-toggle="tooltip" data-placement="bottom" title="[[admin/menu:view-forum]]">\n\t\t<i class="fa fa-fw fa-home"></i>\n\t</a>\n</li>\n\n\t\t\t<form role="search">\n\t\t\t\t<div id="acp-search" >\n\t\t\t\t\t<div class="dropdown">\n\t\t\t\t\t\t<input type="text" autofocus data-toggle="dropdown" class="form-control" placeholder="[[admin/menu:search.placeholder]]">\n\t\t\t\t\t\t<ul class="dropdown-menu dropdown-menu-right state-start-typing" role="menu">\n\t\t\t\t\t\t\t<li role="presentation" class="no-results">\n\t\t\t\t\t\t\t\t<a>[[admin/menu:search.no-results]]</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li role="presentation" class="divider search-forum"></li>\n\t\t\t\t\t\t\t<li role="presentation" class="search-forum">\n\t\t\t\t\t\t\t\t<a role="menuitem" target="_top" href="#">\n\t\t\t\t\t\t\t\t\t[[admin/menu:search.search-forum]]\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li role="presentation" class="keep-typing">\n\t\t\t\t\t\t\t\t<a>[[admin/menu:search.keep-typing]]</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li role="presentation" class="start-typing">\n\t\t\t\t\t\t\t\t<a>[[admin/menu:search.start-typing]]</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\n\t\t\t<div class="alert '+(n(a&&a.upgradeAvailable)?"alert-warning":"alert-info")+' well-sm">\n\t<span>[[admin/menu:alerts.version, '+e.__escape(n(a&&a.version))+"]]</span>\n\t"+(n(a&&a.upgradeAvailable)?'\n\t<span style="margin-left: 10px">\n\t\t<a href="https://docs.nodebb.org/configuring/upgrade/" target="_blank">\n\t\t\t<u>[[admin/menu:alerts.upgrade, '+e.__escape(n(a&&a.latestVersion))+"]]</u>\n\t\t</a>\n\t</span>\n\t":"")+'\n</div>\n\n\t\t\t<li class="reconnect-spinner">\n\t\t\t\t<a href="#" id="reconnect" class="hide" title="[[admin/menu:connection-lost, '+e.__escape(n(a&&a.title))+']]">\n\t\t\t\t\t<i class="fa fa-check"></i>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t</ul>\n\n\n\t\t<ul id="main-menu">\n\t\t\t<li class="menu-item">\n\t\t\t\t<a href="'+e.__escape(n(a&&a.relative_path))+'/admin/general/dashboard">[[admin/menu:general/dashboard]]</a>\n\t\t\t</li>\n\t\t\t<li class="dropdown menu-item">\n\t\t\t\t<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">[[admin/menu:section-general]]</a>\n\t\t\t\t<ul class="dropdown-menu" role="menu">\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/general/homepage">[[admin/menu:general/homepage]]</a></li>\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/general/navigation">[[admin/menu:general/navigation]]</a></li>\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/general/languages">[[admin/menu:general/languages]]</a></li>\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/general/sounds">[[admin/menu:general/sounds]]</a></li>\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/general/social">[[admin/menu:general/social]]</a></li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t<li class="dropdown menu-item">\n\t\t\t\t<a id="manage-menu" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">[[admin/menu:section-manage]]</a>\n\t\t\t\t<ul class="dropdown-menu" role="menu">\n\t\t\t\t\t<li><a id="manage-categories" href="'+e.__escape(n(a&&a.relative_path))+'/admin/manage/categories">[[admin/menu:manage/categories]]</a></li>\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/manage/privileges">[[admin/menu:manage/privileges]]</a></li>\n\t\t\t\t\t<li><a id="manage-users" href="'+e.__escape(n(a&&a.relative_path))+'/admin/manage/users">[[admin/menu:manage/users]]</a></li>\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/manage/admins-mods">[[admin/menu:manage/admins-mods]]</a></li>\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/manage/groups">[[admin/menu:manage/groups]]</a></li>\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/manage/tags">[[admin/menu:manage/tags]]</a></li>\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/manage/registration">[[admin/menu:manage/registration]]</a></li>\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/manage/post-queue">[[admin/menu:manage/post-queue]]</a></li>\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/manage/ip-blacklist">[[admin/menu:manage/ip-blacklist]]</a></li>\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/manage/uploads">[[admin/menu:manage/uploads]]</a></li>\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/manage/digest">[[admin/menu:manage/digest]]</a></li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t<li class="dropdown menu-item">\n\t\t\t\t<a id="settings-menu" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">[[admin/menu:section-settings]]</a>\n\t\t\t\t<ul class="dropdown-menu" role="menu">\n\t\t\t\t\t<li><a id="settings-general" href="'+e.__escape(n(a&&a.relative_path))+'/admin/settings/general">[[admin/menu:section-general]]</a></li>\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/settings/user">[[admin/menu:settings/user]]</a></li>\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/settings/group">[[admin/menu:settings/group]]</a></li>\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/settings/tags">[[admin/menu:manage/tags]]</a></li>\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/settings/post">[[admin/menu:settings/post]]</a></li>\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/settings/email">[[admin/menu:settings/email]]</a></li>\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/settings/reputation">[[admin/menu:settings/reputation]]</a></li>\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/settings/guest">[[admin/menu:settings/guest]]</a></li>\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/settings/uploads">[[admin/menu:settings/uploads]]</a></li>\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/settings/chat">[[admin/menu:settings/chat]]</a></li>\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/settings/pagination">[[admin/menu:settings/pagination]]</a></li>\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/settings/notifications">[[admin/menu:settings/notifications]]</a></li>\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/settings/cookies">[[admin/menu:settings/cookies]]</a></li>\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/settings/web-crawler">[[admin/menu:settings/web-crawler]]</a></li>\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/settings/sockets">[[admin/menu:settings/sockets]]</a></li>\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/settings/advanced">[[admin/menu:settings/advanced]]</a></li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t<li class="dropdown menu-item">\n\t\t\t\t<a id="appearance-menu" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">[[admin/menu:section-appearance]]</a>\n\t\t\t\t<ul class="dropdown-menu" role="menu">\n\t\t\t\t\t<li><a id="appearance-themes" href="'+e.__escape(n(a&&a.relative_path))+'/admin/appearance/themes">[[admin/menu:appearance/themes]]</a></li>\n\t\t\t\t\t<li><a id="appearance-skins" href="'+e.__escape(n(a&&a.relative_path))+'/admin/appearance/skins">[[admin/menu:appearance/skins]]</a></li>\n\t\t\t\t\t<li><a id="appearance-customise" href="'+e.__escape(n(a&&a.relative_path))+'/admin/appearance/customise">[[admin/menu:appearance/customise]]</a></li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t<li class="dropdown menu-item">\n\t\t\t\t<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">[[admin/menu:section-extend]]</a>\n\t\t\t\t<ul class="dropdown-menu" role="menu">\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/extend/plugins">[[admin/menu:extend/plugins]]</a></li>\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/extend/widgets">[[admin/menu:extend/widgets]]</a></li>\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/extend/rewards">[[admin/menu:extend/rewards]]</a></li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\n\t\t\t'+(n(a&&a.plugins&&a.plugins.length)?'\n\t\t\t<li class="dropdown menu-item">\n\t\t\t\t<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">[[admin/menu:section-plugins]]</a>\n\t\t\t\t<ul class="dropdown-menu" role="menu">\n\t\t\t\t\t<li class="dropdown-header">[[admin/menu:section-plugins]]</li>\n\t\t\t\t\t'+s.blocks.plugins(e,a,n,t,i)+"\n\t\t\t\t\t"+(n(a&&a.authentication&&a.authentication.length)?'\n\t\t\t\t\t<li class="divider"></li>\n\t\t\t\t\t'+(n(a&&a.authentication&&a.authentication.length)?'\n\t\t\t\t\t<li class="dropdown-header">[[admin/menu:section-social-auth]]</li>\n\t\t\t\t\t'+s.blocks.authentication(e,a,n,t,i)+"\n\t\t\t\t\t":"")+"\n\t\t\t\t\t":"")+'\n\t\t\t\t\t<li class="divider"></li>\n\t\t\t\t\t<li data-link="1">\n\t\t\t\t\t\t<a href="'+e.__escape(n(a&&a.relative_path))+'/admin/extend/plugins">[[admin/menu:extend/plugins.install]]</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t':"")+'\n\t\t\t<li class="dropdown menu-item">\n\t\t\t\t<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">[[admin/menu:section-advanced]]</a>\n\t\t\t\t<ul class="dropdown-menu" role="menu">\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/advanced/database">[[admin/menu:advanced/database]]</a></li>\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/advanced/events">[[admin/menu:advanced/events]]</a></li>\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/advanced/hooks">[[admin/menu:advanced/hooks]]</a></li>\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/advanced/cache">[[admin/menu:advanced/cache]]</a></li>\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/advanced/errors">[[admin/menu:advanced/errors]]</a></li>\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/advanced/logs">[[admin/menu:advanced/logs]]</a></li>\n\t\t\t\t\t'+(n(a&&a.env)?'\n\t\t\t\t\t<li><a href="'+e.__escape(n(a&&a.relative_path))+'/admin/development/logger">[[admin/menu:development/logger]]</a></li>\n\t\t\t\t\t':"")+'\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t</ul>\n\t</nav>\n\t\t<div class="container" id="content">'}return s.blocks={authentication:function(e,a,n,t){return t(n(a&&a.authentication),function(t){return'\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="'+e.__escape(n(a&&a.relative_path))+"/admin"+e.__escape(n(a&&a.authentication&&a.authentication[t]&&a.authentication[t].route))+'">'+e.__escape(n(a&&a.authentication&&a.authentication[t]&&a.authentication[t].name))+"</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t"})},plugins:function(e,a,n,t){return t(n(a&&a.plugins),function(t){return'\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="'+e.__escape(n(a&&a.relative_path))+"/admin"+e.__escape(n(a&&a.plugins&&a.plugins[t]&&a.plugins[t].route))+'">'+e.__escape(n(a&&a.plugins&&a.plugins[t]&&a.plugins[t].name))+"</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t"})},scripts:function(e,a,n,t){return t(n(a&&a.scripts),function(t){return'\n\t\t<script type="text/javascript" src="'+e.__escape(n(a&&a.scripts&&a.scripts[t]&&a.scripts[t].src))+'"><\/script>\n\t\t'})}},s});