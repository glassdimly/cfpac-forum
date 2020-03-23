!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function i(t,n,a,e,s){return'<!DOCTYPE html>\n<html lang="'+t.__escape(s(n,t,"localeToHTML",[a(n&&n.userLang),a(n&&n.defaultLang)]))+'" '+(a(n&&n.languageDirection)?'data-dir="'+t.__escape(a(n&&n.languageDirection))+'" style="direction: '+t.__escape(a(n&&n.languageDirection))+';" ':"")+" >\n<head>\n\t<title>"+t.__escape(a(n&&n.browserTitle))+"</title>\n\t"+i.blocks.metaTags(t,n,a,e,s)+'\n\t<link rel="stylesheet" type="text/css" href="'+t.__escape(a(n&&n.relative_path))+"/assets/client"+(a(n&&n.bootswatchSkin)?"-"+t.__escape(a(n&&n.bootswatchSkin)):"")+".css?"+t.__escape(a(n&&n.config&&n.config["cache-buster"]))+'" />\n\t'+i.blocks.linkTags(t,n,a,e,s)+'\n\n\t<script>\n\t\tvar RELATIVE_PATH = "'+t.__escape(a(n&&n.relative_path))+"\";\n\t\tvar config = JSON.parse('"+a(n&&n.configJSON)+"');\n\t\tvar app = {\n\t\t\ttemplate: \""+t.__escape(a(n&&n.template&&n.template.name))+"\",\n\t\t\tuser: JSON.parse('"+a(n&&n.userJSON)+"')\n\t\t};\n\t<\/script>\n\n\n\n\t"+(a(n&&n.useCustomHTML)?"\n\t"+a(n&&n.customHTML)+"\n\t":"")+"\n\t"+(a(n&&n.useCustomCSS)?"\n\t<style>"+a(n&&n.customCSS)+"</style>\n\t":"")+'\n\t<style>\n\n\n\t</style>\n</head>\n\n<body class="'+t.__escape(a(n&&n.bodyClass))+" skin-"+(a(n&&n.bootswatchSkin)?t.__escape(a(n&&n.bootswatchSkin)):"noskin")+'">\n<div><a href="'+t.__escape(a(n&&n.config&&n.config.relative_path))+'">'+a(n&&n.config&&n.config.relative_path)+'</a></div>\n\t<header class="Header Header--top">\n\t<div class="Header-inner Header-inner--top" data-nc-group="top" data-nc-collapse="">\n\t\t<div data-nc-container="top-left">\n\n\n\t\t\t<nav class="Header-nav Header-nav--primary" data-nc-element="primary-nav" data-content-field="navigation">\n\n\t\t\t\t<div class="Header-nav-inner">\n    <span class="Header-nav-item Header-nav-item--folder">\n\n      <a href="/about" class="Header-nav-folder-title" data-controller="HeaderNavFolderTouch" data-controllers-bound="HeaderNavFolderTouch">About</a>\n\n      <span class="Header-nav-folder">\n\n\n\n              <a href="/services" class="Header-nav-folder-item">Overview</a>\n\n\n\n\n\n              <a href="/services-type-1" class="Header-nav-folder-item">Our Mission &amp; Vision</a>\n\n\n\n\n\n              <a href="/board-1" class="Header-nav-folder-item">Our Board</a>\n\n\n\n\n\n              <a href="/our-staff" class="Header-nav-folder-item">Our Staff</a>\n\n\n\n\n\n              <a href="/menu-details" class="Header-nav-folder-item">Our Accomplishments</a>\n\n\n\n      </span>\n    </span><a href="/covid19" class="Header-nav-item" data-test="template-nav">COVID-19</a><a href="/blog" class="Header-nav-item" data-test="template-nav">News</a><span class="Header-nav-item Header-nav-item--folder">\n\n      <a href="/working-groups-1" class="Header-nav-folder-title" data-controller="HeaderNavFolderTouch" data-controllers-bound="HeaderNavFolderTouch">Initiatives</a>\n\n      <span class="Header-nav-folder">\n\n\n\n              <a href="/initiatives" class="Header-nav-folder-item">Overview</a>\n\n\n\n\n\n              <a href="/procurement" class="Header-nav-folder-item">Procurement</a>\n\n\n\n\n\n              <a href="/landaccess" class="Header-nav-folder-item">Land Access</a>\n\n\n\n\n\n              <a href="/urbanagriculture" class="Header-nav-folder-item">Urban Agriculture</a>\n\n\n\n\n\n              <a href="/licensespermits" class="Header-nav-folder-item">Licenses + Permits</a>\n\n\n\n\n\n              <a href="/urbanfarmland" class="Header-nav-folder-item">Urban Farmland Policy</a>\n\n\n\n      </span>\n    </span><a href="/events-1" class="Header-nav-item">Events</a><span class="Header-nav-item Header-nav-item--folder">\n\n      <a href="/resources" class="Header-nav-folder-title" data-controller="HeaderNavFolderTouch" data-controllers-bound="HeaderNavFolderTouch">Resources</a>\n\n      <span class="Header-nav-folder">\n\n\n\n              <a href="http://www.chicagofoodpolicy.com/resources-1" class="Header-nav-folder-item">Reports</a>\n\n\n\n\n\n              <a href="http://www.chicagofoodpolicy.com/reports-press-releases/#docs" class="Header-nav-folder-item">Policy Documents</a>\n\n\n\n\n\n              <a href="http://www.chicagofoodpolicy.com/reports-press-releases/#presentations" class="Header-nav-folder-item">Presentations</a>\n\n\n\n      </span>\n    </span><span class="Header-nav-item Header-nav-item--folder">\n\n      <a href="/connect" class="Header-nav-folder-title" data-controller="HeaderNavFolderTouch" data-controllers-bound="HeaderNavFolderTouch">Connect</a>\n\n      <span class="Header-nav-folder">\n\n\n\n              <a href="/contact" class="Header-nav-folder-item">Connect With Us</a>\n\n\n\n\n\n              <a href="/speakingandtraining-overview" class="Header-nav-folder-item">Public Speaking &amp; Training</a>\n\n\n\n      </span>\n    </span>\n\t\t\t\t</div>\n\n\t\t\t</nav><a href="/" class="Header-branding" data-nc-element="branding" data-content-field="site-title">\n\n\n\t\t\t\t<img src="//static1.squarespace.com/static/5a8c555751a5846fc4c22984/t/5b94928cc2241b0779113936/1584495272576/?format=1500w" alt="Chicago Food Policy Action Council" class="Header-branding-logo">\n\n\n\t\t\t</a><nav class="Header-nav Header-nav--secondary" data-nc-element="secondary-nav" data-content-field="navigation">\n\n\t\t\t\t<div class="Header-nav-inner">\n\t\t\t\t\t<a href="https://chicagofoodpolicy.z2systems.com/donation.jsp?campaign=1&amp;" target="_blank" class="Header-nav-item">Donate</a>\n\t\t\t\t</div>\n\n\t\t\t</nav></div>\n\t\t<div data-nc-container="top-center">\n\n\n\n\n\t\t</div>\n\t\t<div data-nc-container="top-right">\n\n\n\n\t\t\t<div class="Header-search" data-nc-element="search">\n\t\t\t\t<form class="Header-search-form" action="/search" method="get">\n\t\t\t\t\t<input class="Header-search-form-input" name="q" type="text" spellcheck="false" value="" autocomplete="off" placeholder="Search">\n\t\t\t\t\t<button class="Header-search-form-submit" type="submit" data-test="template-search">\n\t\t\t\t\t\t<svg class="Icon Icon--search--small" viewBox="0 0 15 15">\n\t\t\t\t\t\t\t<use xlink:href="/assets/ui-icons.svg#search-icon--small"></use>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t<svg class="Icon Icon--search" viewBox="0 0 20 20">\n\t\t\t\t\t\t\t<use xlink:href="/assets/ui-icons.svg#search-icon"></use>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</button>\n\t\t\t\t</form>\n\t\t\t</div><div class="Header-social" data-nc-element="social">\n\n\t\t\t\t<nav class="SocialLinks" data-content-field="connected-accounts">\n\t\t\t\t\t<div class="SocialLinks-inner">\n\t\t\t\t\t\t<a href="https://www.linkedin.com/company/cfpac/" target="_blank" class="SocialLinks-link linkedin" style="">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<svg class="SocialLinks-link-svg" viewBox="0 0 64 64">\n\n\t\t\t\t\t\t\t\t\t<use class="SocialLinks-link-icon" xlink:href="https://www.chicagofoodpolicy.com/#linkedin-icon"></use>\n\t\t\t\t\t\t\t\t\t<use class="SocialLinks-link-mask" xlink:href="https://www.chicagofoodpolicy.com/#linkedin-mask"></use>\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a><a href="http://www.facebook.com/chifoodpolicy" target="_blank" class="SocialLinks-link facebook" style="">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<svg class="SocialLinks-link-svg" viewBox="0 0 64 64">\n\n\t\t\t\t\t\t\t\t\t<use class="SocialLinks-link-icon" xlink:href="https://www.chicagofoodpolicy.com/#facebook-icon"></use>\n\t\t\t\t\t\t\t\t\t<use class="SocialLinks-link-mask" xlink:href="https://www.chicagofoodpolicy.com/#facebook-mask"></use>\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a><a href="https://twitter.com/ChiFoodPolicy" target="_blank" class="SocialLinks-link twitter" style="">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<svg class="SocialLinks-link-svg" viewBox="0 0 64 64">\n\n\t\t\t\t\t\t\t\t\t<use class="SocialLinks-link-icon" xlink:href="https://www.chicagofoodpolicy.com/#twitter-icon"></use>\n\t\t\t\t\t\t\t\t\t<use class="SocialLinks-link-mask" xlink:href="https://www.chicagofoodpolicy.com/#twitter-mask"></use>\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a><a href="https://www.instagram.com/chifoodpolicy/" target="_blank" class="SocialLinks-link instagram" style="">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<svg class="SocialLinks-link-svg" viewBox="0 0 64 64">\n\n\t\t\t\t\t\t\t\t\t<use class="SocialLinks-link-icon" xlink:href="https://www.chicagofoodpolicy.com/#instagram-icon"></use>\n\t\t\t\t\t\t\t\t\t<use class="SocialLinks-link-mask" xlink:href="https://www.chicagofoodpolicy.com/#instagram-mask"></use>\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</nav>\n\n\t\t\t</div></div>\n\t</div>\n</header>\n\n\t<nav id="menu" class="slideout-menu hidden">\n\t\t<div class="menu-profile">\n\t'+(a(n&&n.user&&n.user.uid)?"\n\t"+t.__escape(s(n,t,"buildAvatar",[a(n&&n.user),"lg",a(n&&n.true),"user-icon"]))+'\n\t<i component="user/status" class="fa fa-fw fa-circle status '+t.__escape(a(n&&n.user&&n.user.status))+'"></i>\n\t':"")+'\n</div>\n\n<section class="menu-section" data-section="navigation">\n\t<h3 class="menu-section-title">[[global:header.navigation]]</h3>\n\t<ul class="menu-section-list"></ul>\n</section>\n\n'+(a(n&&n.config&&n.config.loggedIn)?'\n<section class="menu-section" data-section="profile">\n\t<h3 class="menu-section-title">[[global:header.profile]]</h3>\n\t<ul class="menu-section-list" component="header/usercontrol"></ul>\n</section>\n\n<section class="menu-section" data-section="notifications">\n\t<h3 class="menu-section-title">\n\t\t[[global:header.notifications]]\n\t\t<span class="counter unread-count" component="notifications/icon" data-content="'+t.__escape(a(n&&n.unreadCount&&n.unreadCount.notification))+'"></span>\n\t</h3>\n\t<ul class="menu-section-list notification-list-mobile" component="notifications/list"></ul>\n\t<p class="menu-section-list"><a href="'+t.__escape(a(n&&n.relative_path))+'/notifications">[[notifications:see_all]]</a></p>\n</section>\n':"")+'\n\t</nav>\n\t<nav id="chats-menu" class="slideout-menu hidden">\n\t\t'+(a(n&&n.config&&n.config.loggedIn)?'\n<section class="menu-section" data-section="chats">\n\t<h3 class="menu-section-title">\n\t\t[[global:header.chats]]\n\t\t<i class="counter unread-count" component="chat/icon" data-content="'+t.__escape(a(n&&n.unreadCount&&n.unreadCount.chat))+'"></i>\n\t</h3>\n\t<ul class="menu-section-list chat-list" component="chat/list">\n\t\t<a class="navigation-link" href="'+t.__escape(a(n&&n.relative_path))+"/user/"+t.__escape(a(n&&n.user&&n.user.userslug))+'/chats">[[modules:chat.see_all]]</a>\n\t</ul>\n</section>\n':"")+'\n\t</nav>\n\t<main id="panel" class="slideout-panel">\n\t\t<nav class="navbar navbar-default navbar-fixed-top header" id="header-menu" component="navbar">\n\t\t\t<div class="container">\n\t\t\t\t\t\t\t<div class="navbar-header">\n\t\t\t\t<button type="button" class="navbar-toggle pull-left" id="mobile-menu">\n\t\t\t\t\t<span component="notifications/icon" class="notification-icon fa fa-fw fa-bell-o unread-count" data-content="'+t.__escape(a(n&&n.unreadCount&&n.unreadCount.notification))+'"></span>\n\t\t\t\t\t<i class="fa fa-lg fa-fw fa-bars"></i>\n\t\t\t\t</button>\n\t\t\t\t<button type="button" class="navbar-toggle hidden" id="mobile-chats">\n\t\t\t\t\t<span component="chat/icon" class="notification-icon fa fa-fw fa-comments unread-count" data-content="'+t.__escape(a(n&&n.unreadCount&&n.unreadCount.chat))+'"></span>\n\t\t\t\t\t<i class="fa fa-lg fa-comment-o"></i>\n\t\t\t\t</button>\n\n\t\t\t\t'+(a(n&&n["brand:logo"])?'\n\t\t\t\t<a href="'+(a(n&&n["brand:logo:url"])?t.__escape(a(n&&n["brand:logo:url"])):t.__escape(a(n&&n.relative_path))+"/")+'">\n\t\t\t\t\t<img alt="'+t.__escape(a(n&&n["brand:logo:alt"]))+'" class="'+t.__escape(a(n&&n["brand:logo:display"]))+' forum-logo" src="'+t.__escape(a(n&&n["brand:logo"]))+"?"+t.__escape(a(n&&n.config&&n.config["cache-buster"]))+'" />\n\t\t\t\t</a>\n\t\t\t\t':"")+"\n\t\t\t\t"+(a(n&&n.config&&n.config.showSiteTitle)?'\n\t\t\t\t<a href="'+(a(n&&n["title:url"])?t.__escape(a(n&&n["title:url"])):t.__escape(a(n&&n.relative_path))+"/")+'">\n\t\t\t\t\t<h1 class="navbar-brand forum-title">'+t.__escape(a(n&&n.config&&n.config.siteTitle))+"</h1>\n\t\t\t\t</a>\n\t\t\t\t":"")+'\n\t\t\t\t<div>biiiig test</div>\n\n\t\t\t\t<div component="navbar/title" class="visible-xs hidden">\n\t\t\t\t\t<span></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div id="nav-dropdown" class="hidden-xs">\n\t\t\t\t'+(a(n&&n.maintenanceHeader)?'\n\t\t\t\t<ul class="nav navbar-nav navbar-right">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="'+t.__escape(a(n&&n.relative_path))+'/login">\n\t\t\t\t\t\t\t<i class="fa fa-sign-in fa-fw hidden-sm hidden-md hidden-lg"></i>\n\t\t\t\t\t\t\t<span>[[global:login]]</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t':"\n\t\t\t\t"+(a(n&&n.config&&n.config.loggedIn)?'\n\n\t\t\t\t<ul id="logged-in-menu" class="nav navbar-nav navbar-right">\n\t\t\t\t\t<li class="notifications dropdown text-center hidden-xs" component="notifications">\n\t\t\t\t\t\t<a href="'+t.__escape(a(n&&n.relative_path))+'/notifications" title="[[global:header.notifications]]" class="dropdown-toggle" data-toggle="dropdown" id="notif_dropdown" data-ajaxify="false" role="button">\n\t\t\t\t\t\t\t<i component="notifications/icon" class="fa fa-fw fa-bell-o unread-count" data-content="'+t.__escape(a(n&&n.unreadCount&&n.unreadCount.notification))+'"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ul class="dropdown-menu" aria-labelledby="notif_dropdown">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<ul component="notifications/list" class="notification-list">\n\t\t\t\t\t\t\t\t\t<li class="loading-text">\n\t\t\t\t\t\t\t\t\t\t<a href="#"><i class="fa fa-refresh fa-spin"></i> [[global:notifications.loading]]</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class="notif-dropdown-link"><a href="#" class="mark-all-read">[[notifications:mark_all_read]]</a></li>\n\t\t\t\t\t\t\t<li class="notif-dropdown-link"><a href="'+t.__escape(a(n&&n.relative_path))+'/notifications">[[notifications:see_all]]</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t'+(a(n&&n.config&&n.config.disableChat)?"":'\n\t\t\t\t\t<li class="chats dropdown">\n\t\t\t\t\t\t<a class="dropdown-toggle" data-toggle="dropdown" href="'+t.__escape(a(n&&n.relative_path))+"/user/"+t.__escape(a(n&&n.user&&n.user.userslug))+'/chats" title="[[global:header.chats]]" id="chat_dropdown" component="chat/dropdown" data-ajaxify="false" role="button">\n\t\t\t\t\t\t\t<i component="chat/icon" class="fa fa-comment-o fa-fw unread-count" data-content="'+t.__escape(a(n&&n.unreadCount&&n.unreadCount.chat))+'"></i> <span class="visible-xs-inline">[[global:header.chats]]</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ul class="dropdown-menu" aria-labelledby="chat_dropdown">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<ul component="chat/list" class="chat-list chats-list">\n\t\t\t\t\t\t\t\t\t<li class="loading-text">\n\t\t\t\t\t\t\t\t\t\t<a href="#"><i class="fa fa-refresh fa-spin"></i> [[global:chats.loading]]</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class="notif-dropdown-link"><a href="#" class="mark-all-read" component="chats/mark-all-read">[[modules:chat.mark_all_read]]</a></li>\n\t\t\t\t\t\t\t<li class="notif-dropdown-link"><a href="'+t.__escape(a(n&&n.relative_path))+"/user/"+t.__escape(a(n&&n.user&&n.user.userslug))+'/chats">[[modules:chat.see_all]]</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t')+'\n\n\t\t\t\t\t<li id="user_label" class="dropdown">\n\t\t\t\t\t\t<label for="user-control-list-check" class="dropdown-toggle" data-toggle="dropdown" id="user_dropdown" title="[[global:header.profile]]" role="button">\n\t\t\t\t\t\t\t'+t.__escape(s(n,t,"buildAvatar",[a(n&&n.user),"md",a(n&&n.true)]))+'\n\t\t\t\t\t\t\t<span id="user-header-name" class="visible-xs-inline">'+t.__escape(a(n&&n.user&&n.user.username))+'</span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<input type="checkbox" class="hidden" id="user-control-list-check" aria-hidden="true">\n\t\t\t\t\t\t<ul id="user-control-list" component="header/usercontrol" class="dropdown-menu" aria-labelledby="user_dropdown">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a component="header/profilelink" href="'+t.__escape(a(n&&n.relative_path))+"/user/"+t.__escape(a(n&&n.user&&n.user.userslug))+'">\n\t\t\t\t\t\t\t\t\t<i component="user/status" class="fa fa-fw fa-circle status '+t.__escape(a(n&&n.user&&n.user.status))+'"></i> <span component="header/username">'+t.__escape(a(n&&n.user&&n.user.username))+'</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li role="presentation" class="divider"></li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href="#" class="user-status" data-status="online">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-circle status online"></i><span '+(a(n&&n.user&&n.user.online)?'class="bold"':"")+'> [[global:online]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href="#" class="user-status" data-status="away">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-circle status away"></i><span '+(a(n&&n.user&&n.user.away)?'class="bold"':"")+'> [[global:away]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href="#" class="user-status" data-status="dnd">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-circle status dnd"></i><span '+(a(n&&n.user&&n.user.dnd)?'class="bold"':"")+'> [[global:dnd]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href="#" class="user-status" data-status="offline">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-circle status offline"></i><span '+(a(n&&n.user&&n.user.offline)?'class="bold"':"")+'> [[global:invisible]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li role="presentation" class="divider"></li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a component="header/profilelink/edit" href="'+t.__escape(a(n&&n.relative_path))+"/user/"+t.__escape(a(n&&n.user&&n.user.userslug))+'/edit">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-edit"></i> <span>[[user:edit-profile]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a component="header/profilelink/settings" href="'+t.__escape(a(n&&n.relative_path))+"/user/"+t.__escape(a(n&&n.user&&n.user.userslug))+'/settings">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-gear"></i> <span>[[user:settings]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t'+(a(n&&n.showModMenu)?'\n\t\t\t\t\t\t\t<li role="presentation" class="divider"></li>\n\t\t\t\t\t\t\t<li class="dropdown-header">[[pages:moderator-tools]]</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href="'+t.__escape(a(n&&n.relative_path))+'/flags">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-flag"></i> <span>[[pages:flagged-content]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href="'+t.__escape(a(n&&n.relative_path))+'/post-queue">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-list-alt"></i> <span>[[pages:post-queue]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href="'+t.__escape(a(n&&n.relative_path))+'/ip-blacklist">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-ban"></i> <span>[[pages:ip-blacklist]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t':"")+'\n\t\t\t\t\t\t\t<li role="presentation" class="divider"></li>\n\t\t\t\t\t\t\t<li component="user/logout">\n\t\t\t\t\t\t\t\t<form method="post" action="'+t.__escape(a(n&&n.relative_path))+'/logout">\n\t\t\t\t\t\t\t\t\t<input type="hidden" name="_csrf" value="'+t.__escape(a(n&&n.config&&n.config.csrf_token))+'">\n\t\t\t\t\t\t\t\t\t<input type="hidden" name="noscript" value="true">\n\t\t\t\t\t\t\t\t\t<button type="submit" class="btn btn-link">\n\t\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-sign-out"></i><span> [[global:logout]]</span>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\n\t\t\t\t</ul>\n\t\t\t\t':'\n\t\t\t\t<ul id="logged-out-menu" class="nav navbar-nav navbar-right">\n\t\t\t\t\t'+(a(n&&n.allowRegistration)?'\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="'+t.__escape(a(n&&n.relative_path))+'/register">\n\t\t\t\t\t\t\t<i class="fa fa-pencil fa-fw hidden-sm hidden-md hidden-lg"></i>\n\t\t\t\t\t\t\t<span>[[global:register]]</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t':"")+'\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="'+t.__escape(a(n&&n.relative_path))+'/login">\n\t\t\t\t\t\t\t<i class="fa fa-sign-in fa-fw hidden-sm hidden-md hidden-lg"></i>\n\t\t\t\t\t\t\t<span>[[global:login]]</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t')+"\n\t\t\t\t"+(a(n&&n.config&&n.config.searchEnabled)?'\n\t\t\t\t<ul class="nav navbar-nav navbar-right">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<form id="search-form" class="navbar-form navbar-right hidden-xs" role="search" method="GET">\n\t\t\t\t\t\t\t<button id="search-button" type="button" class="btn btn-link"><i class="fa fa-search fa-fw" title="[[global:header.search]]"></i></button>\n\t\t\t\t\t\t\t<div class="hidden" id="search-fields">\n\t\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t\t<input autocomplete="off" type="text" class="form-control" placeholder="[[global:search]]" name="query" value="">\n\t\t\t\t\t\t\t\t\t<a href="#"><i class="fa fa-gears fa-fw advanced-search-link"></i></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<button type="submit" class="btn btn-default hide">[[global:search]]</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\t<ul id="quick-search-results" class="dropdown-menu quick-search-results hidden">\n\t\t\t\t\t\t\t'+i.blocks.posts(t,n,a,e,s)+"\n"+(a(n&&n.multiplePages)?'\n<li class="text-center">\n\t<a href="'+t.__escape(a(n&&n.url))+'">\n\t\t[[search:see-more-results, '+t.__escape(a(n&&n.matchCount))+"]]\n\t</a>\n</li>\n":"")+'\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class="visible-xs" id="search-menu">\n\t\t\t\t\t\t<a href="'+t.__escape(a(n&&n.relative_path))+'/search">\n\t\t\t\t\t\t\t<i class="fa fa-search fa-fw"></i> [[global:search]]\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t':"")+'\n\n\t\t\t\t<ul class="nav navbar-nav navbar-right hidden-xs">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="#" id="reconnect" class="hide" title="[[global:reconnecting-message, '+t.__escape(a(n&&n.config&&n.config.siteTitle))+']]">\n\t\t\t\t\t\t\t<i class="fa fa-check"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\n\t\t\t\t<ul class="nav navbar-nav navbar-right pagination-block visible-lg visible-md">\n\t\t\t\t\t<li class="dropdown">\n\t\t\t\t\t\t<a><i class="fa fa-angle-double-up pointer fa-fw pagetop"></i></a>\n\t\t\t\t\t\t<a><i class="fa fa-angle-up pointer fa-fw pageup"></i></a>\n\n\t\t\t\t\t\t<a href="#" class="dropdown-toggle" data-toggle="dropdown">\n\t\t\t\t\t\t\t<span class="pagination-text"></span>\n\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t<a><i class="fa fa-angle-down pointer fa-fw pagedown"></i></a>\n\t\t\t\t\t\t<a><i class="fa fa-angle-double-down pointer fa-fw pagebottom"></i></a>\n\n\t\t\t\t\t\t<div class="progress-container">\n\t\t\t\t\t\t\t<div class="progress-bar"></div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<ul class="dropdown-menu" role="menu">\n\t\t\t\t\t\t\t<li>\n  \t\t\t\t\t\t\t\t<input type="text" class="form-control" id="indexInput" placeholder="[[global:pagination.enter_index]]">\n  \t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\n\t\t\t\t<ul id="main-nav" class="nav navbar-nav">\n\t\t\t\t\t'+i.blocks.navigation(t,n,a,e,s)+"\n\t\t\t\t</ul>\n\n\t\t\t\t")+'\n\t\t\t</div>\n\n\t\t\t</div>\n\t\t</nav>\n\t\t<div class="container" id="content">\n\t\t\t<noscript>\n\t\t<div class="alert alert-danger">\n\t\t\t<p>\n\t\t\t\tYour browser does not seem to support JavaScript. As a result, your viewing experience will be diminished, and you may not be able to execute some actions.\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\tPlease download a browser that supports JavaScript, or enable it if it\'s disabled (i.e. NoScript).\n\t\t\t</p>\n\t\t</div>\n\t</noscript>\n'}return i.blocks={navigation:function(a,e,s,t,i){return t(s(e&&e.navigation),function(t,n){return"\n\t\t\t\t\t"+(i(e,a,"displayMenuItem",[e,n])?'\n\t\t\t\t\t<li class="'+a.__escape(s(e&&e.navigation&&e.navigation[t]&&e.navigation[t].class))+'">\n\t\t\t\t\t\t<a class="navigation-link" href="'+a.__escape(s(e&&e.navigation&&e.navigation[t]&&e.navigation[t].route))+'" title="'+a.__escape(s(e&&e.navigation&&e.navigation[t]&&e.navigation[t].title))+'" '+(s(e&&e.navigation&&e.navigation[t]&&e.navigation[t].id)?'id="'+a.__escape(s(e&&e.navigation&&e.navigation[t]&&e.navigation[t].id))+'"':"")+(s(e&&e.navigation&&e.navigation[t]&&e.navigation[t].properties&&e.navigation[t].properties.targetBlank)?' target="_blank"':"")+">\n\t\t\t\t\t\t\t"+(s(e&&e.navigation&&e.navigation[t]&&e.navigation[t].iconClass)?'\n\t\t\t\t\t\t\t<i class="fa fa-fw '+a.__escape(s(e&&e.navigation&&e.navigation[t]&&e.navigation[t].iconClass))+'" data-content="'+a.__escape(s(e&&e.navigation&&e.navigation[t]&&e.navigation[t].content))+'"></i>\n\t\t\t\t\t\t\t':"")+"\n\n\t\t\t\t\t\t\t"+(s(e&&e.navigation&&e.navigation[t]&&e.navigation[t].text)?'\n\t\t\t\t\t\t\t<span class="'+a.__escape(s(e&&e.navigation&&e.navigation[t]&&e.navigation[t].textClass))+'">'+a.__escape(s(e&&e.navigation&&e.navigation[t]&&e.navigation[t].text))+"</span>\n\t\t\t\t\t\t\t":"")+"\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t":"")+"\n\t\t\t\t\t"})},posts:function(e,s,i,t,o){return t(i(s&&s.posts),function(t,n,a){return'\n<li>\n\t<a href="'+e.__escape(i(s&&s.config&&s.config.relative_path))+"/post/"+e.__escape(i(s&&s.posts&&s.posts[t]&&s.posts[t].pid))+'">\n\t\t'+e.__escape(o(s,e,"buildAvatar",[i(s&&s.posts&&s.posts[t]&&s.posts[t].user),"sm",i(s&&s.true)]))+'\n\t\t<span class="quick-search-title">'+e.__escape(i(s&&s.posts&&s.posts[t]&&s.posts[t].topic&&s.posts[t].topic.title))+'</span>\n\t\t<br/>\n\t\t<p class="snippet">\n\t\t'+e.__escape(i(s&&s.posts&&s.posts[t]&&s.posts[t].snippet))+'\n\t\t</p>\n\t\t<small class="post-info pull-right">\n\t\t\t<span class="fa-stack" style="'+e.__escape(o(s,e,"generateCategoryBackground",[i(s&&s.posts&&s.posts[t]&&s.posts[t].category)]))+'"><i style="color:'+e.__escape(i(s&&s.posts&&s.posts[t]&&s.posts[t].category&&s.posts[t].category.color))+';" class="fa '+e.__escape(i(s&&s.posts&&s.posts[t]&&s.posts[t].category&&s.posts[t].category.icon))+' fa-stack-1x"></i></span> '+e.__escape(i(s&&s.posts&&s.posts[t]&&s.posts[t].category&&s.posts[t].category.name))+' &bull;\n\t\t\t<span class="timeago" title="'+e.__escape(i(s&&s.posts&&s.posts[t]&&s.posts[t].timestampISO))+'"></span>\n\t\t</small>\n\t </a>\n</li>\n'+(n!==a-1?'\n<li role="separator" class="divider"></li>\n':"")+"\n"})},linkTags:function(n,a,e,t,s){return t(e(a&&a.linkTags),function(t){return n.__escape(s(a,n,"buildLinkTag",[e(a&&a.linkTags&&a.linkTags[t])]))})},metaTags:function(n,a,e,t,s){return t(e(a&&a.metaTags),function(t){return n.__escape(s(a,n,"buildMetaTag",[e(a&&a.metaTags&&a.metaTags[t])]))})}},i});