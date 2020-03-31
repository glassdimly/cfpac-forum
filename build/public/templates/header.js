!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function i(t,a,n,e,s){return'<!DOCTYPE html>\n<html lang="'+t.__escape(s(a,t,"localeToHTML",[n(a&&a.userLang),n(a&&a.defaultLang)]))+'" '+(n(a&&a.languageDirection)?'data-dir="'+t.__escape(n(a&&a.languageDirection))+'" style="direction: '+t.__escape(n(a&&a.languageDirection))+';" ':"")+" >\n<head>\n\t<title>"+t.__escape(n(a&&a.browserTitle))+"</title>\n\t"+i.blocks.metaTags(t,a,n,e,s)+'\n\t<link rel="stylesheet" type="text/css" href="'+t.__escape(n(a&&a.relative_path))+"/assets/client"+(n(a&&a.bootswatchSkin)?"-"+t.__escape(n(a&&a.bootswatchSkin)):"")+".css?"+t.__escape(n(a&&a.config&&a.config["cache-buster"]))+'" />\n\t'+i.blocks.linkTags(t,a,n,e,s)+"\n\n\t<script>\n\t\t// @TODO do this properly\n\t\tif (window.location.href.startsWith('http://') && !window.location.href.startsWith('http://localhost')) {\n\t\t\twindow.location.replace(window.location.href.replace('http://', 'https://'))\n\t\t}\n\t\tvar RELATIVE_PATH = \""+t.__escape(n(a&&a.relative_path))+"\";\n\t\tvar config = JSON.parse('"+n(a&&a.configJSON)+"');\n\t\tvar app = {\n\t\t\ttemplate: \""+t.__escape(n(a&&a.template&&a.template.name))+"\",\n\t\t\tuser: JSON.parse('"+n(a&&a.userJSON)+'\')\n\t\t};\n\t<\/script>\n\n\t<script>\n\n\t\twindow.setCookie = function(name, value, minutesToLive) {\n\t\t\t// Encode value in order to escape semicolons, commas, and whitespace\n\t\t\tvar cookie = name + "=" + encodeURIComponent(value);\n\t\t\tcookie += \'; path=/\';\n\t\t\t/* Sets the max-age attribute so that the cookie expires\n\t\t\tafter the specified number of days */\n\t\t\tcookie += "; max-age=" + (minutesToLive*60);\n\n\t\t\tdocument.cookie = cookie;\n\t\t}\n\n\t\twindow.getCookie = function(name) {\n\t\t\t// Split cookie string and get all individual name=value pairs in an array\n\t\t\tvar cookieArr = document.cookie.split(";");\n\n\t\t\t// Loop through the array elements\n\t\t\tfor(var i = 0; i < cookieArr.length; i++) {\n\t\t\t\tvar cookiePair = cookieArr[i].split("=");\n\n\t\t\t\t/* Removing whitespace at the beginning of the cookie name\n\t\t\t\tand compare it with the given string */\n\t\t\t\tif(name == cookiePair[0].trim()) {\n\t\t\t\t\t// Decode the cookie value and return\n\t\t\t\t\treturn decodeURIComponent(cookiePair[1]);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// Return null if not found\n\t\t\treturn null;\n\t\t}\n\n\t<\/script>\n\n\t'+(n(a&&a.useCustomHTML)?"\n\t"+n(a&&a.customHTML)+"\n\t":"")+"\n\t"+(n(a&&a.useCustomCSS)?"\n\t<style>"+n(a&&a.customCSS)+"</style>\n\t":"")+'\n</head>\n\n<body class="'+t.__escape(n(a&&a.bodyClass))+" skin-"+(n(a&&a.bootswatchSkin)?t.__escape(n(a&&a.bootswatchSkin)):"noskin")+'">\n<div><a href="'+t.__escape(n(a&&a.config&&a.config.relative_path))+'">'+n(a&&a.config&&a.config.relative_path)+'</a></div>\n\t<nav id="menu" class="slideout-menu hidden">\n\t\t<div class="menu-profile">\n\t'+(n(a&&a.user&&a.user.uid)?"\n\t"+t.__escape(s(a,t,"buildAvatar",[n(a&&a.user),"lg",n(a&&a.true),"user-icon"]))+'\n\t<i component="user/status" class="fa fa-fw fa-circle status '+t.__escape(n(a&&a.user&&a.user.status))+'"></i>\n\t':"")+'\n</div>\n\n\n<section class="menu-section" data-section="navigation">\n\t<h3 class="menu-section-title">Forum Navigation</h3>\n\t<ul class="menu-section-list"></ul>\n</section>\n\n<section class="menu-section accordion" data-section="cfpac-navigation" id="Slideout-cfpac-menu">\n\t<h3 class="menu-section-title">Chicago Food Policy Action Council</h3>\n\t<nav class="Slideout-nav Slideout-nav--primary card">\n\t\t<div class="Slideout-nav-inner">\n\t\t\t<div class="Slideout-nav-item Slideout-nav-item--folder">\n\t\t\t\t<a href="#" class="Slideout-nav-folder-title" data-toggle="collapse" data-target="#Slideout-folder-about" aria-expanded="true">About</a>\n\t\t\t\t<div class="Slideout-nav-folder collapse card-body" data-parent="#Slideout-cfpac-menu" id="Slideout-folder-about">\n\t\t\t\t\t<a href="https://www.chicagofoodpolicy.com/services" class="Slideout-nav-folder-item">Overview</a>\n\t\t\t\t\t<a href="https://www.chicagofoodpolicy.com/services-type-1" class="Slideout-nav-folder-item">Our Mission &amp; Vision</a>\n\t\t\t\t\t<a href="https://www.chicagofoodpolicy.com/board-1" class="Slideout-nav-folder-item">Our Board</a>\n\t\t\t\t\t<a href="https://www.chicagofoodpolicy.com/our-staff" class="Slideout-nav-folder-item">Our Staff</a>\n\t\t\t\t\t<a href="https://www.chicagofoodpolicy.com/menu-details" class="Slideout-nav-folder-item">Our Accomplishments</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<a href="https://www.chicagofoodpolicy.com/covid19" class="Slideout-nav-item">COVID-19</a>\n\n\t\t\t<a href="https://www.chicagofoodpolicy.com/blog" class="Slideout-nav-item"">News</a>\n\n\t\t\t<div class="Slideout-nav-item Slideout-nav-item--folder">\n\t\t\t\t<a href="#" class="Slideout-nav-folder-title" data-toggle="collapse" data-target="#Slideout-folder-initiatives" aria-expanded="true">Initiatives</a>\n\t\t\t\t<div class="Slideout-nav-folder collapse card-body" data-parent="#Slideout-cfpac-menu" id="Slideout-folder-initiatives">\n\t\t\t\t\t<a href="https://www.chicagofoodpolicy.com/initiatives" class="Slideout-nav-folder-item">Overview</a>\n\t\t\t\t\t<a href="https://www.chicagofoodpolicy.com/procurement" class="Slideout-nav-folder-item">Procurement</a>\n\t\t\t\t\t<a href="https://www.chicagofoodpolicy.com/landaccess" class="Slideout-nav-folder-item">Land Access</a>\n\t\t\t\t\t<a href="https://www.chicagofoodpolicy.com/urbanagriculture" class="Slideout-nav-folder-item">Urban Agriculture</a>\n\t\t\t\t\t<a href="https://www.chicagofoodpolicy.com/licensespermits" class="Slideout-nav-folder-item">Licenses + Permits</a>\n\t\t\t\t\t<a href="https://www.chicagofoodpolicy.com/urbanfarmland" class="Slideout-nav-folder-item">Urban Farmland Policy</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<a href="https://www.chicagofoodpolicy.com/events-1" class="Slideout-nav-item">Events</a>\n\n\t\t\t<div class="Slideout-nav-item Slideout-nav-item--folder">\n\t\t\t\t<a href="#" class="Slideout-nav-folder-title" data-toggle="collapse" data-target="#Slideout-folder-resources" aria-expanded="true">Resources</a>\n\t\t\t\t<div class="Slideout-nav-folder collapse card-body" data-parent="#Slideout-cfpac-menu" id="Slideout-folder-resources">\n\t\t\t\t\t<a href="http://www.chicagofoodpolicy.com/resources-1" class="Slideout-nav-folder-item">Reports</a>\n\t\t\t\t\t<a href="http://www.chicagofoodpolicy.com/reports-press-releases/#docs" class="Slideout-nav-folder-item">Policy Documents</a>\n\t\t\t\t\t<a href="http://www.chicagofoodpolicy.com/reports-press-releases/#presentations" class="Slideout-nav-folder-item">Presentations</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="Slideout-nav-item Slideout-nav-item--folder">\n\t\t\t\t<a href="#" class="Slideout-nav-folder-title" data-toggle="collapse" data-target="#Slideout-folder-connect" aria-expanded="true">Connect</a>\n\t\t\t\t<div class="Slideout-nav-folder collapse card-body" data-parent="#Slideout-cfpac-menu">\n\t\t\t\t\t<a href="https://www.chicagofoodpolicy.com/contact" class="Slideout-nav-folder-item" id="Slideout-folder-connect">Connect With Us</a>\n\t\t\t\t\t<a href="https://www.chicagofoodpolicy.com/speakingandtraining-overview" class="Slideout-nav-folder-item">Public Speaking &amp; Training</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<a href="https://chicagofoodpolicy.z2systems.com/donation.jsp?campaign=1&amp;" target="_blank" class="Mobile-overlay-nav-item Slideout-nav-item Slideout-nav-item--donate" id="yui_3_17_2_1_1585087201814_414">\n\t\t\t\tDonate\n\t\t\t</a>\n\n\t\t\t<div class="SocialLinks-inner">\n\t\t\t\t<a href="https://www.linkedin.com/company/cfpac/" target="_blank" class="SocialLinks-link linkedin" style="">\n\t\t\t\t\t<svg class="SocialLinks-link-svg" viewBox="0 0 64 64">\n\t\t\t\t\t\t<use class="SocialLinks-link-icon" xlink:href="#linkedin-icon">\n\t\t\t\t\t\t</use>\n\t\t\t\t\t</svg>\n\t\t\t\t</a>\n\t\t\t\t<a href="http://www.facebook.com/chifoodpolicy" target="_blank" class="SocialLinks-link facebook" style="">\n\t\t\t\t\t<svg class="SocialLinks-link-svg" viewBox="0 0 64 64">\n\t\t\t\t\t\t<use class="SocialLinks-link-icon" xlink:href="#facebook-icon"></use>\n\t\t\t\t\t</svg>\n\t\t\t\t</a>\n\t\t\t\t<a href="https://twitter.com/ChiFoodPolicy" target="_blank" class="SocialLinks-link twitter" style="">\n\t\t\t\t\t<svg class="SocialLinks-link-svg" viewBox="0 0 64 64">\n\t\t\t\t\t\t<use class="SocialLinks-link-icon" xlink:href="#twitter-icon"></use>\n\t\t\t\t\t</svg>\n\t\t\t\t</a>\n\t\t\t\t<a href="https://www.instagram.com/chifoodpolicy/" target="_blank" class="SocialLinks-link instagram" style="">\n\t\t\t\t\t<svg class="SocialLinks-link-svg" viewBox="0 0 64 64">\n\t\t\t\t\t\t<use class="SocialLinks-link-icon" xlink:href="#instagram-icon"></use>\n\t\t\t\t\t</svg>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t</nav>\n\n</section>\n\n\n'+(n(a&&a.config&&a.config.loggedIn)?'\n<section class="menu-section" data-section="profile">\n\t<h3 class="menu-section-title">Forum Profile</h3>\n\t<ul class="menu-section-list" component="header/usercontrol"></ul>\n</section>\n\n<section class="menu-section" data-section="notifications">\n\t<h3 class="menu-section-title">\n\t\t[[global:header.notifications]]\n\t\t<div class="counter unread-count" component="notifications/icon" data-content="'+t.__escape(n(a&&a.unreadCount&&a.unreadCount.notification))+'"></div>\n\t</h3>\n\t<ul class="menu-section-list notification-list-mobile" component="notifications/list"></ul>\n\t<p class="menu-section-list"><a href="'+t.__escape(n(a&&a.relative_path))+'/notifications">[[notifications:see_all]]</a></p>\n</section>\n':"")+'\n\n<svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display:none" data-usage="social-icons-svg"><symbol id="linkedin-icon" viewBox="0 0 64 64"><path d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"></path></symbol><symbol id="linkedin-mask" viewBox="0 0 64 64"><path d="M0,0v64h64V0H0z M25.8,44h-5.4V26.6h5.4V44z M23.1,24.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1 c1.7,0,3.1,1.4,3.1,3.1C26.2,22.9,24.8,24.3,23.1,24.3z M46,44h-5.4v-8.4c0-2,0-4.6-2.8-4.6c-2.8,0-3.2,2.2-3.2,4.5V44h-5.4V26.6 h5.2V29h0.1c0.7-1.4,2.5-2.8,5.1-2.8c5.5,0,6.5,3.6,6.5,8.3V44z"></path></symbol><symbol id="facebook-icon" viewBox="0 0 64 64"><path d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"></path></symbol><symbol id="facebook-mask" viewBox="0 0 64 64"><path d="M0,0v64h64V0H0z M39.6,22l-2.8,0c-2.2,0-2.6,1.1-2.6,2.6V28h5.3l-0.7,5.3h-4.6V47h-5.5V33.3H24V28h4.6V24 c0-4.6,2.8-7,6.9-7c2,0,3.6,0.1,4.1,0.2V22z"></path></symbol><symbol id="twitter-icon" viewBox="0 0 64 64"><path d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"></path></symbol><symbol id="twitter-mask" viewBox="0 0 64 64"><path d="M0,0v64h64V0H0z M44.7,25.5c0,0.3,0,0.6,0,0.8C44.7,35,38.1,45,26.1,45c-3.7,0-7.2-1.1-10.1-2.9 c0.5,0.1,1,0.1,1.6,0.1c3.1,0,5.9-1,8.2-2.8c-2.9-0.1-5.3-2-6.1-4.6c0.4,0.1,0.8,0.1,1.2,0.1c0.6,0,1.2-0.1,1.7-0.2 c-3-0.6-5.3-3.3-5.3-6.4c0,0,0-0.1,0-0.1c0.9,0.5,1.9,0.8,3,0.8c-1.8-1.2-2.9-3.2-2.9-5.5c0-1.2,0.3-2.3,0.9-3.3 c3.2,4,8.1,6.6,13.5,6.9c-0.1-0.5-0.2-1-0.2-1.5c0-3.6,2.9-6.6,6.6-6.6c1.9,0,3.6,0.8,4.8,2.1c1.5-0.3,2.9-0.8,4.2-1.6 c-0.5,1.5-1.5,2.8-2.9,3.6c1.3-0.2,2.6-0.5,3.8-1C47.1,23.4,46,24.5,44.7,25.5z"></path></symbol><symbol id="instagram-icon" viewBox="0 0 64 64"><path d="M46.91,25.816c-0.073-1.597-0.326-2.687-0.697-3.641c-0.383-0.986-0.896-1.823-1.73-2.657c-0.834-0.834-1.67-1.347-2.657-1.73c-0.954-0.371-2.045-0.624-3.641-0.697C36.585,17.017,36.074,17,32,17s-4.585,0.017-6.184,0.09c-1.597,0.073-2.687,0.326-3.641,0.697c-0.986,0.383-1.823,0.896-2.657,1.73c-0.834,0.834-1.347,1.67-1.73,2.657c-0.371,0.954-0.624,2.045-0.697,3.641C17.017,27.415,17,27.926,17,32c0,4.074,0.017,4.585,0.09,6.184c0.073,1.597,0.326,2.687,0.697,3.641c0.383,0.986,0.896,1.823,1.73,2.657c0.834,0.834,1.67,1.347,2.657,1.73c0.954,0.371,2.045,0.624,3.641,0.697C27.415,46.983,27.926,47,32,47s4.585-0.017,6.184-0.09c1.597-0.073,2.687-0.326,3.641-0.697c0.986-0.383,1.823-0.896,2.657-1.73c0.834-0.834,1.347-1.67,1.73-2.657c0.371-0.954,0.624-2.045,0.697-3.641C46.983,36.585,47,36.074,47,32S46.983,27.415,46.91,25.816z M44.21,38.061c-0.067,1.462-0.311,2.257-0.516,2.785c-0.272,0.7-0.597,1.2-1.122,1.725c-0.525,0.525-1.025,0.85-1.725,1.122c-0.529,0.205-1.323,0.45-2.785,0.516c-1.581,0.072-2.056,0.087-6.061,0.087s-4.48-0.015-6.061-0.087c-1.462-0.067-2.257-0.311-2.785-0.516c-0.7-0.272-1.2-0.597-1.725-1.122c-0.525-0.525-0.85-1.025-1.122-1.725c-0.205-0.529-0.45-1.323-0.516-2.785c-0.072-1.582-0.087-2.056-0.087-6.061s0.015-4.48,0.087-6.061c0.067-1.462,0.311-2.257,0.516-2.785c0.272-0.7,0.597-1.2,1.122-1.725c0.525-0.525,1.025-0.85,1.725-1.122c0.529-0.205,1.323-0.45,2.785-0.516c1.582-0.072,2.056-0.087,6.061-0.087s4.48,0.015,6.061,0.087c1.462,0.067,2.257,0.311,2.785,0.516c0.7,0.272,1.2,0.597,1.725,1.122c0.525,0.525,0.85,1.025,1.122,1.725c0.205,0.529,0.45,1.323,0.516,2.785c0.072,1.582,0.087,2.056,0.087,6.061S44.282,36.48,44.21,38.061z M32,24.297c-4.254,0-7.703,3.449-7.703,7.703c0,4.254,3.449,7.703,7.703,7.703c4.254,0,7.703-3.449,7.703-7.703C39.703,27.746,36.254,24.297,32,24.297z M32,37c-2.761,0-5-2.239-5-5c0-2.761,2.239-5,5-5s5,2.239,5,5C37,34.761,34.761,37,32,37z M40.007,22.193c-0.994,0-1.8,0.806-1.8,1.8c0,0.994,0.806,1.8,1.8,1.8c0.994,0,1.8-0.806,1.8-1.8C41.807,22.999,41.001,22.193,40.007,22.193z"></path></symbol><symbol id="instagram-mask" viewBox="0 0 64 64"><path d="M43.693,23.153c-0.272-0.7-0.597-1.2-1.122-1.725c-0.525-0.525-1.025-0.85-1.725-1.122c-0.529-0.205-1.323-0.45-2.785-0.517c-1.582-0.072-2.056-0.087-6.061-0.087s-4.48,0.015-6.061,0.087c-1.462,0.067-2.257,0.311-2.785,0.517c-0.7,0.272-1.2,0.597-1.725,1.122c-0.525,0.525-0.85,1.025-1.122,1.725c-0.205,0.529-0.45,1.323-0.516,2.785c-0.072,1.582-0.087,2.056-0.087,6.061s0.015,4.48,0.087,6.061c0.067,1.462,0.311,2.257,0.516,2.785c0.272,0.7,0.597,1.2,1.122,1.725s1.025,0.85,1.725,1.122c0.529,0.205,1.323,0.45,2.785,0.516c1.581,0.072,2.056,0.087,6.061,0.087s4.48-0.015,6.061-0.087c1.462-0.067,2.257-0.311,2.785-0.516c0.7-0.272,1.2-0.597,1.725-1.122s0.85-1.025,1.122-1.725c0.205-0.529,0.45-1.323,0.516-2.785c0.072-1.582,0.087-2.056,0.087-6.061s-0.015-4.48-0.087-6.061C44.143,24.476,43.899,23.682,43.693,23.153z M32,39.703c-4.254,0-7.703-3.449-7.703-7.703s3.449-7.703,7.703-7.703s7.703,3.449,7.703,7.703S36.254,39.703,32,39.703z M40.007,25.793c-0.994,0-1.8-0.806-1.8-1.8c0-0.994,0.806-1.8,1.8-1.8c0.994,0,1.8,0.806,1.8,1.8C41.807,24.987,41.001,25.793,40.007,25.793z M0,0v64h64V0H0z M46.91,38.184c-0.073,1.597-0.326,2.687-0.697,3.641c-0.383,0.986-0.896,1.823-1.73,2.657c-0.834,0.834-1.67,1.347-2.657,1.73c-0.954,0.371-2.044,0.624-3.641,0.697C36.585,46.983,36.074,47,32,47s-4.585-0.017-6.184-0.09c-1.597-0.073-2.687-0.326-3.641-0.697c-0.986-0.383-1.823-0.896-2.657-1.73c-0.834-0.834-1.347-1.67-1.73-2.657c-0.371-0.954-0.624-2.044-0.697-3.641C17.017,36.585,17,36.074,17,32c0-4.074,0.017-4.585,0.09-6.185c0.073-1.597,0.326-2.687,0.697-3.641c0.383-0.986,0.896-1.823,1.73-2.657c0.834-0.834,1.67-1.347,2.657-1.73c0.954-0.371,2.045-0.624,3.641-0.697C27.415,17.017,27.926,17,32,17s4.585,0.017,6.184,0.09c1.597,0.073,2.687,0.326,3.641,0.697c0.986,0.383,1.823,0.896,2.657,1.73c0.834,0.834,1.347,1.67,1.73,2.657c0.371,0.954,0.624,2.044,0.697,3.641C46.983,27.415,47,27.926,47,32C47,36.074,46.983,36.585,46.91,38.184z M32,27c-2.761,0-5,2.239-5,5s2.239,5,5,5s5-2.239,5-5S34.761,27,32,27z"></path></symbol>\n\t<symbol xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 15 15">\n\t\t<line fill="none" stroke-miterlimit="10" stroke-linecap="butt" x1="9.7" y1="9.8" x2="13.6" y2="13.5"/>\n\t\t<circle fill="none" stroke-miterlimit="10" cx="6.5" cy="6.5" r="4.5"/>\n\t</symbol>\n\t<symbol xmlns="http://www.w3.org/2000/svg" id="search-icon" viewBox="0 0 16.97 19.21"><defs><style>.cls-1{fill:#231f20;}</style></defs><title>icon-search</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M17,17.93l-4.29-5.15A7.46,7.46,0,1,0,0,6.8,7.47,7.47,0,0,0,6.8,14.9l.67,0A7.41,7.41,0,0,0,11.08,14l4.35,5.23Zm-10-5A5.47,5.47,0,0,1,2,7,5.47,5.47,0,0,1,7.46,2l.48,0A5.46,5.46,0,0,1,7,12.9Z"/></g></g></symbol>\n</svg>\n\t</nav>\n\t<nav id="chats-menu" class="slideout-menu hidden">\n\t\t'+(n(a&&a.config&&a.config.loggedIn)?'\n<section class="menu-section" data-section="chats">\n\t<h3 class="menu-section-title">\n\t\t[[global:header.chats]]\n\t\t<i class="counter unread-count" component="chat/icon" data-content="'+t.__escape(n(a&&a.unreadCount&&a.unreadCount.chat))+'"></i>\n\t</h3>\n\t<ul class="menu-section-list chat-list" component="chat/list">\n\t\t<a class="navigation-link" href="'+t.__escape(n(a&&a.relative_path))+"/user/"+t.__escape(n(a&&a.user&&a.user.userslug))+'/chats">[[modules:chat.see_all]]</a>\n\t</ul>\n</section>\n':"")+'\n\t</nav>\n\t<main id="panel" class="slideout-panel">\n\t\t<nav class="navbar navbar-default navbar-fixed-top header" id="header-menu" component="navbar">\n\t\t\t<div class="container">\n\t\t\t\t\t\t\t<span class="navbar-header">\n\t\t\t\t<button type="button" class="navbar-toggle pull-left" id="mobile-menu">\n\t\t\t\t\t<span component="notifications/icon" class="notification-icon fa fa-fw fa-bell-o unread-count" data-content="'+t.__escape(n(a&&a.unreadCount&&a.unreadCount.notification))+'"></span>\n\t\t\t\t\t<i class="fa fa-lg fa-fw fa-bars"></i>\n\t\t\t\t</button>\n\n\t\t\t\t'+(n(a&&a["brand:logo"])?'\n\t\t\t\t<a href="'+(n(a&&a["brand:logo:url"])?t.__escape(n(a&&a["brand:logo:url"])):t.__escape(n(a&&a.relative_path))+"/")+'">\n\t\t\t\t\t<img alt="'+t.__escape(n(a&&a["brand:logo:alt"]))+'" class="'+t.__escape(n(a&&a["brand:logo:display"]))+' forum-logo" src="'+t.__escape(n(a&&a["brand:logo"]))+"?"+t.__escape(n(a&&a.config&&a.config["cache-buster"]))+'" />\n\t\t\t\t</a>\n\t\t\t\t':"")+"\n\t\t\t\t"+(n(a&&a.config&&a.config.showSiteTitle)?'\n\t\t\t\t<a href="'+(n(a&&a["title:url"])?t.__escape(n(a&&a["title:url"])):t.__escape(n(a&&a.relative_path))+"/")+'">\n\t\t\t\t\t<h1 class="navbar-brand forum-title">'+t.__escape(n(a&&a.config&&a.config.siteTitle))+'</h1>\n\t\t\t\t</a>\n\t\t\t\t<span class="forum-title-subtext">a project of</span>\n\t\t\t\t<a href="https://www.chicagofoodpolicy.com/" target="_blank" class="Header-branding" data-nc-element="branding" data-content-field="site-title">\n\t\t\t\t\t<img src="//static1.squarespace.com/static/5a8c555751a5846fc4c22984/t/5b94928cc2241b0779113936/1584495272576/?format=1500w" alt="Chicago Food Policy Action Council" class="Header-branding-logo">\n\t\t\t\t</a>\n\t\t\t\t':"")+'\n\n\t\t\t\t<button type="button" class="navbar-toggle hidden" id="mobile-chats">\n\t\t\t\t\t<span component="chat/icon" class="notification-icon fa fa-fw fa-comments unread-count" data-content="'+t.__escape(n(a&&a.unreadCount&&a.unreadCount.chat))+'"></span>\n\t\t\t\t\t<i class="fa fa-lg fa-comment-o"></i>\n\t\t\t\t</button>\n\t\t\t\t<div component="navbar/title" class="visible-xs hidden">\n\t\t\t\t\t<span></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div id="nav-dropdown" class="hidden-xs container">\n\t\t\t\t'+(n(a&&a.maintenanceHeader)?'\n\t\t\t\t<ul class="nav navbar-nav navbar-right">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="'+t.__escape(n(a&&a.relative_path))+'/login">\n\t\t\t\t\t\t\t<i class="fa fa-sign-in fa-fw hidden-sm hidden-md hidden-lg"></i>\n\t\t\t\t\t\t\t<span>[[global:login]]</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t':"\n\t\t\t\t"+(n(a&&a.config&&a.config.loggedIn)?'\n\n\t\t\t\t<ul id="logged-in-menu" class="nav navbar-nav navbar-right">\n\t\t\t\t\t<li class="notifications dropdown text-center hidden-xs" component="notifications">\n\t\t\t\t\t\t<a href="'+t.__escape(n(a&&a.relative_path))+'/notifications" title="[[global:header.notifications]]" class="dropdown-toggle" data-toggle="dropdown" id="notif_dropdown" data-ajaxify="false" role="button">\n\t\t\t\t\t\t\t<i component="notifications/icon" class="fa fa-fw fa-bell-o unread-count" data-content="'+t.__escape(n(a&&a.unreadCount&&a.unreadCount.notification))+'"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ul class="dropdown-menu" aria-labelledby="notif_dropdown">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<ul component="notifications/list" class="notification-list">\n\t\t\t\t\t\t\t\t\t<li class="loading-text">\n\t\t\t\t\t\t\t\t\t\t<a href="#"><i class="fa fa-refresh fa-spin"></i> [[global:notifications.loading]]</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class="notif-dropdown-link"><a href="#" class="mark-all-read">[[notifications:mark_all_read]]</a></li>\n\t\t\t\t\t\t\t<li class="notif-dropdown-link"><a href="'+t.__escape(n(a&&a.relative_path))+'/notifications">[[notifications:see_all]]</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t'+(n(a&&a.config&&a.config.disableChat)?"":'\n\t\t\t\t\t<li class="chats dropdown">\n\t\t\t\t\t\t<a class="dropdown-toggle" data-toggle="dropdown" href="'+t.__escape(n(a&&a.relative_path))+"/user/"+t.__escape(n(a&&a.user&&a.user.userslug))+'/chats" title="[[global:header.chats]]" id="chat_dropdown" component="chat/dropdown" data-ajaxify="false" role="button">\n\t\t\t\t\t\t\t<i component="chat/icon" class="fa fa-comment-o fa-fw unread-count" data-content="'+t.__escape(n(a&&a.unreadCount&&a.unreadCount.chat))+'"></i> <span class="visible-xs-inline">[[global:header.chats]]</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ul class="dropdown-menu" aria-labelledby="chat_dropdown">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<ul component="chat/list" class="chat-list chats-list">\n\t\t\t\t\t\t\t\t\t<li class="loading-text">\n\t\t\t\t\t\t\t\t\t\t<a href="#"><i class="fa fa-refresh fa-spin"></i> [[global:chats.loading]]</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class="notif-dropdown-link"><a href="#" class="mark-all-read" component="chats/mark-all-read">[[modules:chat.mark_all_read]]</a></li>\n\t\t\t\t\t\t\t<li class="notif-dropdown-link"><a href="'+t.__escape(n(a&&a.relative_path))+"/user/"+t.__escape(n(a&&a.user&&a.user.userslug))+'/chats">[[modules:chat.see_all]]</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t')+'\n\n\t\t\t\t\t<li id="user_label" class="dropdown">\n\t\t\t\t\t\t<label for="user-control-list-check" class="dropdown-toggle" data-toggle="dropdown" id="user_dropdown" title="[[global:header.profile]]" role="button">\n\t\t\t\t\t\t\t'+t.__escape(s(a,t,"buildAvatar",[n(a&&a.user),"md",n(a&&a.true)]))+'\n\t\t\t\t\t\t\t<span id="user-header-name" class="visible-xs-inline">'+t.__escape(n(a&&a.user&&a.user.username))+'</span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<input type="checkbox" class="hidden" id="user-control-list-check" aria-hidden="true">\n\t\t\t\t\t\t<ul id="user-control-list" component="header/usercontrol" class="dropdown-menu" aria-labelledby="user_dropdown">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a component="header/profilelink" href="'+t.__escape(n(a&&a.relative_path))+"/user/"+t.__escape(n(a&&a.user&&a.user.userslug))+'">\n\t\t\t\t\t\t\t\t\t<i component="user/status" class="fa fa-fw fa-circle status '+t.__escape(n(a&&a.user&&a.user.status))+'"></i> <span component="header/username">'+t.__escape(n(a&&a.user&&a.user.username))+'</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li role="presentation" class="divider"></li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href="#" class="user-status" data-status="online">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-circle status online"></i><span '+(n(a&&a.user&&a.user.online)?'class="bold"':"")+'> [[global:online]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href="#" class="user-status" data-status="away">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-circle status away"></i><span '+(n(a&&a.user&&a.user.away)?'class="bold"':"")+'> [[global:away]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href="#" class="user-status" data-status="dnd">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-circle status dnd"></i><span '+(n(a&&a.user&&a.user.dnd)?'class="bold"':"")+'> [[global:dnd]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href="#" class="user-status" data-status="offline">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-circle status offline"></i><span '+(n(a&&a.user&&a.user.offline)?'class="bold"':"")+'> [[global:invisible]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li role="presentation" class="divider"></li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a component="header/profilelink/edit" href="'+t.__escape(n(a&&a.relative_path))+"/user/"+t.__escape(n(a&&a.user&&a.user.userslug))+'/edit">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-edit"></i> <span>[[user:edit-profile]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a component="header/profilelink/settings" href="'+t.__escape(n(a&&a.relative_path))+"/user/"+t.__escape(n(a&&a.user&&a.user.userslug))+'/settings">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-gear"></i> <span>[[user:settings]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t'+(n(a&&a.showModMenu)?'\n\t\t\t\t\t\t\t<li role="presentation" class="divider"></li>\n\t\t\t\t\t\t\t<li class="dropdown-header">[[pages:moderator-tools]]</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href="'+t.__escape(n(a&&a.relative_path))+'/flags">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-flag"></i> <span>[[pages:flagged-content]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href="'+t.__escape(n(a&&a.relative_path))+'/post-queue">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-list-alt"></i> <span>[[pages:post-queue]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href="'+t.__escape(n(a&&a.relative_path))+'/ip-blacklist">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-ban"></i> <span>[[pages:ip-blacklist]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t':"")+'\n\t\t\t\t\t\t\t<li role="presentation" class="divider"></li>\n\t\t\t\t\t\t\t<li component="user/logout">\n\t\t\t\t\t\t\t\t<form method="post" action="'+t.__escape(n(a&&a.relative_path))+'/logout">\n\t\t\t\t\t\t\t\t\t<input type="hidden" name="_csrf" value="'+t.__escape(n(a&&a.config&&a.config.csrf_token))+'">\n\t\t\t\t\t\t\t\t\t<input type="hidden" name="noscript" value="true">\n\t\t\t\t\t\t\t\t\t<button type="submit" class="btn btn-link">\n\t\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-sign-out"></i><span> [[global:logout]]</span>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\n\t\t\t\t</ul>\n\t\t\t\t':'\n\t\t\t\t<ul id="logged-out-menu" class="nav navbar-nav navbar-right">\n\t\t\t\t\t'+(n(a&&a.allowRegistration)?'\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="'+t.__escape(n(a&&a.relative_path))+'/register">\n\t\t\t\t\t\t\t<i class="fa fa-pencil fa-fw hidden-sm hidden-md hidden-lg"></i>\n\t\t\t\t\t\t\t<span>[[global:register]]</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t':"")+'\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="'+t.__escape(n(a&&a.relative_path))+'/login">\n\t\t\t\t\t\t\t<i class="fa fa-sign-in fa-fw hidden-sm hidden-md hidden-lg"></i>\n\t\t\t\t\t\t\t<span>[[global:login]]</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t')+"\n\t\t\t\t"+(n(a&&a.config&&a.config.searchEnabled)?'\n\t\t\t\t<ul class="nav navbar-nav navbar-right">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<form id="search-form" class="navbar-form navbar-right hidden-xs" role="search" method="GET">\n\t\t\t\t\t\t\t<button id="search-button" type="button" class="btn btn-link"><i class="fa fa-search fa-fw" title="[[global:header.search]]"></i></button>\n\t\t\t\t\t\t\t<div class="hidden" id="search-fields">\n\t\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t\t<input autocomplete="off" type="text" class="form-control" placeholder="[[global:search]]" name="query" value="">\n\t\t\t\t\t\t\t\t\t<a href="#"><i class="fa fa-gears fa-fw advanced-search-link"></i></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<button type="submit" class="btn btn-default hide">[[global:search]]</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\t<ul id="quick-search-results" class="dropdown-menu quick-search-results hidden">\n\t\t\t\t\t\t\t'+i.blocks.posts(t,a,n,e,s)+"\n"+(n(a&&a.multiplePages)?'\n<li class="text-center">\n\t<a href="'+t.__escape(n(a&&a.url))+'">\n\t\t[[search:see-more-results, '+t.__escape(n(a&&a.matchCount))+"]]\n\t</a>\n</li>\n":"")+'\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class="visible-xs" id="search-menu">\n\t\t\t\t\t\t<a href="'+t.__escape(n(a&&a.relative_path))+'/search">\n\t\t\t\t\t\t\t<i class="fa fa-search fa-fw"></i> [[global:search]]\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t':"")+'\n\n\t\t\t\t<ul class="nav navbar-nav navbar-right hidden-xs">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="#" id="reconnect" class="hide" title="[[global:reconnecting-message, '+t.__escape(n(a&&a.config&&a.config.siteTitle))+']]">\n\t\t\t\t\t\t\t<i class="fa fa-check"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\n\t\t\t\t<ul class="nav navbar-nav navbar-right pagination-block visible-lg visible-md">\n\t\t\t\t\t<li class="dropdown">\n\t\t\t\t\t\t<a><i class="fa fa-angle-double-up pointer fa-fw pagetop"></i></a>\n\t\t\t\t\t\t<a><i class="fa fa-angle-up pointer fa-fw pageup"></i></a>\n\n\t\t\t\t\t\t<a href="#" class="dropdown-toggle" data-toggle="dropdown">\n\t\t\t\t\t\t\t<span class="pagination-text"></span>\n\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t<a><i class="fa fa-angle-down pointer fa-fw pagedown"></i></a>\n\t\t\t\t\t\t<a><i class="fa fa-angle-double-down pointer fa-fw pagebottom"></i></a>\n\n\t\t\t\t\t\t<div class="progress-container">\n\t\t\t\t\t\t\t<div class="progress-bar"></div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<ul class="dropdown-menu" role="menu">\n\t\t\t\t\t\t\t<li>\n  \t\t\t\t\t\t\t\t<input type="text" class="form-control" id="indexInput" placeholder="[[global:pagination.enter_index]]">\n  \t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\n\t\t\t\t<ul id="main-nav" class="nav navbar-nav">\n\t\t\t\t\t'+i.blocks.navigation(t,a,n,e,s)+"\n\t\t\t\t</ul>\n\n\t\t\t\t")+'\n\t\t\t</div>\n\n\t\t\t</div>\n\t\t</nav>\n\t\t<div class="container" id="content">\n\t\t\t<noscript>\n\t\t<div class="alert alert-danger">\n\t\t\t<p>\n\t\t\t\tYour browser does not seem to support JavaScript. As a result, your viewing experience will be diminished, and you may not be able to execute some actions.\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\tPlease download a browser that supports JavaScript, or enable it if it\'s disabled (i.e. NoScript).\n\t\t\t</p>\n\t\t</div>\n\t</noscript>\n\n'}return i.blocks={navigation:function(n,e,s,t,i){return t(s(e&&e.navigation),function(t,a){return"\n\t\t\t\t\t"+(i(e,n,"displayMenuItem",[e,a])?'\n\t\t\t\t\t<li class="'+n.__escape(s(e&&e.navigation&&e.navigation[t]&&e.navigation[t].class))+'">\n\t\t\t\t\t\t<a class="navigation-link" href="'+n.__escape(s(e&&e.navigation&&e.navigation[t]&&e.navigation[t].route))+'" title="'+n.__escape(s(e&&e.navigation&&e.navigation[t]&&e.navigation[t].title))+'" '+(s(e&&e.navigation&&e.navigation[t]&&e.navigation[t].id)?'id="'+n.__escape(s(e&&e.navigation&&e.navigation[t]&&e.navigation[t].id))+'"':"")+(s(e&&e.navigation&&e.navigation[t]&&e.navigation[t].properties&&e.navigation[t].properties.targetBlank)?' target="_blank"':"")+">\n\t\t\t\t\t\t\t"+(s(e&&e.navigation&&e.navigation[t]&&e.navigation[t].iconClass)?'\n\t\t\t\t\t\t\t<i class="fa fa-fw '+n.__escape(s(e&&e.navigation&&e.navigation[t]&&e.navigation[t].iconClass))+'" data-content="'+n.__escape(s(e&&e.navigation&&e.navigation[t]&&e.navigation[t].content))+'"></i>\n\t\t\t\t\t\t\t':"")+"\n\n\t\t\t\t\t\t\t"+(s(e&&e.navigation&&e.navigation[t]&&e.navigation[t].text)?'\n\t\t\t\t\t\t\t<span class="'+n.__escape(s(e&&e.navigation&&e.navigation[t]&&e.navigation[t].textClass))+'">'+n.__escape(s(e&&e.navigation&&e.navigation[t]&&e.navigation[t].text))+"</span>\n\t\t\t\t\t\t\t":"")+"\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t":"")+"\n\t\t\t\t\t"})},posts:function(e,s,i,t,o){return t(i(s&&s.posts),function(t,a,n){return'\n<li>\n\t<a href="'+e.__escape(i(s&&s.config&&s.config.relative_path))+"/post/"+e.__escape(i(s&&s.posts&&s.posts[t]&&s.posts[t].pid))+'">\n\t\t'+e.__escape(o(s,e,"buildAvatar",[i(s&&s.posts&&s.posts[t]&&s.posts[t].user),"sm",i(s&&s.true)]))+'\n\t\t<span class="quick-search-title">'+e.__escape(i(s&&s.posts&&s.posts[t]&&s.posts[t].topic&&s.posts[t].topic.title))+'</span>\n\t\t<br/>\n\t\t<p class="snippet">\n\t\t'+e.__escape(i(s&&s.posts&&s.posts[t]&&s.posts[t].snippet))+'\n\t\t</p>\n\t\t<small class="post-info pull-right">\n\t\t\t<span class="fa-stack" style="'+e.__escape(o(s,e,"generateCategoryBackground",[i(s&&s.posts&&s.posts[t]&&s.posts[t].category)]))+'"><i style="color:'+e.__escape(i(s&&s.posts&&s.posts[t]&&s.posts[t].category&&s.posts[t].category.color))+';" class="fa '+e.__escape(i(s&&s.posts&&s.posts[t]&&s.posts[t].category&&s.posts[t].category.icon))+' fa-stack-1x"></i></span> '+e.__escape(i(s&&s.posts&&s.posts[t]&&s.posts[t].category&&s.posts[t].category.name))+' &bull;\n\t\t\t<span class="timeago" title="'+e.__escape(i(s&&s.posts&&s.posts[t]&&s.posts[t].timestampISO))+'"></span>\n\t\t</small>\n\t </a>\n</li>\n'+(a!==n-1?'\n<li role="separator" class="divider"></li>\n':"")+"\n"})},linkTags:function(a,n,e,t,s){return t(e(n&&n.linkTags),function(t){return a.__escape(s(n,a,"buildLinkTag",[e(n&&n.linkTags&&n.linkTags[t])]))})},metaTags:function(a,n,e,t,s){return t(e(n&&n.metaTags),function(t){return a.__escape(s(n,a,"buildMetaTag",[e(n&&n.metaTags&&n.metaTags[t])]))})}},i});