<!DOCTYPE html>
<html lang="{function.localeToHTML, userLang, defaultLang}" <!-- IF languageDirection -->data-dir="{languageDirection}" style="direction: {languageDirection};" <!-- ENDIF languageDirection --> >
<head>
	<title>{browserTitle}</title>
	{{{each metaTags}}}{function.buildMetaTag}{{{end}}}
	<link rel="stylesheet" type="text/css" href="{relative_path}/assets/client<!-- IF bootswatchSkin -->-{bootswatchSkin}<!-- END -->.css?{config.cache-buster}" />
	{{{each linkTags}}}{function.buildLinkTag}{{{end}}}

	<script>
		// @TODO do this properly
		if (window.location.href.startsWith('http://') && !window.location.href.startsWith('http://localhost')) {
			window.location.replace(window.location.href.replace('http://', 'https://'))
		}
		var RELATIVE_PATH = "{relative_path}";
		var config = JSON.parse('{{configJSON}}');
		var app = {
			template: "{template.name}",
			user: JSON.parse('{{userJSON}}')
		};
	</script>



	<!-- IF useCustomHTML -->
	{{customHTML}}
	<!-- END -->
	<!-- IF useCustomCSS -->
	<style>{{customCSS}}</style>
	<!-- END -->
</head>

<body class="{bodyClass} skin-<!-- IF bootswatchSkin -->{bootswatchSkin}<!-- ELSE -->noskin<!-- END -->">
<div><a href="{config.relative_path}">{{config.relative_path}}</a></div>
	<div template-variable="CFPAC">
	<header class="Header Header--top tweak-header-primary-nav-hover-style-spotlight">
	<div class="Header-inner Header-inner--top" data-nc-group="top">
		<div data-nc-container="top-left">
			<nav class="Header-nav Header-nav--primary" data-nc-element="primary-nav" data-content-field="navigation">
				<div class="Header-nav-inner">
     <span class="Header-nav-item Header-nav-item--folder">
        <a href="https://www.chicagofoodpolicy.com/about" class="Header-nav-folder-title" data-controller="HeaderNavFolderTouch" data-controllers-bound="HeaderNavFolderTouch">About</a>
       <span class="Header-nav-folder">
         <a href="https://www.chicagofoodpolicy.com/services" class="Header-nav-folder-item">Overview</a>
         <a href="https://www.chicagofoodpolicy.com/services-type-1" class="Header-nav-folder-item">Our Mission &amp; Vision</a>
         <a href="https://www.chicagofoodpolicy.com/board-1" class="Header-nav-folder-item">Our Board</a>
         <a href="https://www.chicagofoodpolicy.com/our-staff" class="Header-nav-folder-item">Our Staff</a>
         <a href="https://www.chicagofoodpolicy.com/menu-details" class="Header-nav-folder-item">Our Accomplishments</a>
       </span>
     </span>

					<a href="https://www.chicagofoodpolicy.com/covid19" class="Header-nav-item" data-test="template-nav">COVID-19</a>

					<a href="https://www.chicagofoodpolicy.com/blog" class="Header-nav-item" data-test="template-nav">News</a>

					<span class="Header-nav-item Header-nav-item--folder">
      <a href="https://www.chicagofoodpolicy.com/working-groups-1" class="Header-nav-folder-title" data-controller="HeaderNavFolderTouch" data-controllers-bound="HeaderNavFolderTouch">Initiatives</a>
      <span class="Header-nav-folder">
       <a href="https://www.chicagofoodpolicy.com/initiatives" class="Header-nav-folder-item">Overview</a>
       <a href="https://www.chicagofoodpolicy.com/procurement" class="Header-nav-folder-item">Procurement</a>
       <a href="https://www.chicagofoodpolicy.com/landaccess" class="Header-nav-folder-item">Land Access</a>
       <a href="https://www.chicagofoodpolicy.com/urbanagriculture" class="Header-nav-folder-item">Urban Agriculture</a>
       <a href="https://www.chicagofoodpolicy.com/licensespermits" class="Header-nav-folder-item">Licenses + Permits</a>
       <a href="https://www.chicagofoodpolicy.com/urbanfarmland" class="Header-nav-folder-item">Urban Farmland Policy</a>
      </span>
   </span>

					<a href="https://www.chicagofoodpolicy.com/events-1" class="Header-nav-item">Events</a>

					<span class="Header-nav-item Header-nav-item--folder">
       <a href="https://www.chicagofoodpolicy.com/resources" class="Header-nav-folder-title" data-controller="HeaderNavFolderTouch" data-controllers-bound="HeaderNavFolderTouch">Resources</a>
       <span class="Header-nav-folder">
       <a href="http://www.chicagofoodpolicy.com/resources-1" class="Header-nav-folder-item">Reports</a>
       <a href="http://www.chicagofoodpolicy.com/reports-press-releases/#docs" class="Header-nav-folder-item">Policy Documents</a>
       <a href="http://www.chicagofoodpolicy.com/reports-press-releases/#presentations" class="Header-nav-folder-item">Presentations</a>
     </span>
    </span>

			<span class="Header-nav-item Header-nav-item--folder">
			 <a href="https://www.chicagofoodpolicy.com/connect" class="Header-nav-folder-title" data-controller="HeaderNavFolderTouch" data-controllers-bound="HeaderNavFolderTouch">Connect</a>
			 <span class="Header-nav-folder">
				 <a href="https://www.chicagofoodpolicy.com/contact" class="Header-nav-folder-item">Connect With Us</a>
				 <a href="https://www.chicagofoodpolicy.com/speakingandtraining-overview" class="Header-nav-folder-item">Public Speaking &amp; Training</a>
			 </span>
		 </span>
			<a href="https://chicagofoodpolicy.z2systems.com/donation.jsp?campaign=1&amp;" class="Header-nav-folder-title" data-controller="HeaderNavFolderTouch" data-controllers-bound="HeaderNavFolderTouch">Donate</a>

				</div>
			</nav>
			<a href="https://www.chicagofoodpolicy.com/" class="Header-branding" data-nc-element="branding" data-content-field="site-title">
				<img src="//static1.squarespace.com/static/5a8c555751a5846fc4c22984/t/5b94928cc2241b0779113936/1584495272576/?format=1500w" alt="Chicago Food Policy Action Council" class="Header-branding-logo">
			</a>
		</div>
		<div data-nc-container="top-center">
		</div>
		<div data-nc-container="top-right">
			<div class="Header-social" data-nc-element="social">
				<nav class="SocialLinks" data-content-field="connected-accounts">
					<div class="SocialLinks-inner">
						<a href="https://www.linkedin.com/company/cfpac/" target="_blank" class="SocialLinks-link linkedin" style="">
								<svg class="SocialLinks-link-svg" viewBox="0 0 64 64">
									<use class="SocialLinks-link-icon" xlink:href="#linkedin-icon">
									</use>
								</svg>
						</a>
						<a href="http://www.facebook.com/chifoodpolicy" target="_blank" class="SocialLinks-link facebook" style="">
								<svg class="SocialLinks-link-svg" viewBox="0 0 64 64">
									<use class="SocialLinks-link-icon" xlink:href="#facebook-icon"></use>
								</svg>
						</a>
						<a href="https://twitter.com/ChiFoodPolicy" target="_blank" class="SocialLinks-link twitter" style="">
								<svg class="SocialLinks-link-svg" viewBox="0 0 64 64">
									<use class="SocialLinks-link-icon" xlink:href="#twitter-icon"></use>
								</svg>
						</a>
						<a href="https://www.instagram.com/chifoodpolicy/" target="_blank" class="SocialLinks-link instagram" style="">
								<svg class="SocialLinks-link-svg" viewBox="0 0 64 64">
									<use class="SocialLinks-link-icon" xlink:href="#instagram-icon"></use>
								</svg>
						</a>
					</div>
					<div class="Header-search" data-nc-element="search">
						<a href="https://www.chicagofoodpolicy.com/search">
							<svg class="search-link-svg" viewBox="0 0 64 64">
								<use class="search-link-icon" xlink:href="#search-icon">
								</use>
							</svg>
						</a>
					</div>
				</nav>
			</div>
		</div>
	</div>
</header>
	</div>
	<nav id="menu" class="slideout-menu hidden">
		<div class="menu-profile">
	<!-- IF user.uid -->
	{buildAvatar(user, "lg", true, "user-icon")}
	<i component="user/status" class="fa fa-fw fa-circle status {user.status}"></i>
	<!-- ENDIF user.uid -->
</div>

<section class="menu-section accordion" data-section="cfpac-navigation" id="Slideout-cfpac-menu">
	<h3 class="menu-section-title">Chicago Food Policy Action Council</h3>
	<nav class="Slideout-nav Slideout-nav--primary card">
		<div class="Slideout-nav-inner">
     <div class="Slideout-nav-item Slideout-nav-item--folder">
        <a href="#" class="Slideout-nav-folder-title" data-toggle="collapse" data-target="#Slideout-folder-about" aria-expanded="true">About</a>
       <div class="Slideout-nav-folder collapse card-body" data-parent="#Slideout-cfpac-menu" id="Slideout-folder-about">
         <a href="https://www.chicagofoodpolicy.com/services" class="Slideout-nav-folder-item">Overview</a>
         <a href="https://www.chicagofoodpolicy.com/services-type-1" class="Slideout-nav-folder-item">Our Mission &amp; Vision</a>
         <a href="https://www.chicagofoodpolicy.com/board-1" class="Slideout-nav-folder-item">Our Board</a>
         <a href="https://www.chicagofoodpolicy.com/our-staff" class="Slideout-nav-folder-item">Our Staff</a>
         <a href="https://www.chicagofoodpolicy.com/menu-details" class="Slideout-nav-folder-item">Our Accomplishments</a>
			 </div>
     </div>

			<a href="https://www.chicagofoodpolicy.com/covid19" class="Slideout-nav-item">COVID-19</a>

			<a href="https://www.chicagofoodpolicy.com/blog" class="Slideout-nav-item"">News</a>

			<div class="Slideout-nav-item Slideout-nav-item--folder">
      <a href="#" class="Slideout-nav-folder-title" data-toggle="collapse" data-target="#Slideout-folder-initiatives" aria-expanded="true">Initiatives</a>
      <div class="Slideout-nav-folder collapse card-body" data-parent="#Slideout-cfpac-menu" id="Slideout-folder-initiatives">
       <a href="https://www.chicagofoodpolicy.com/initiatives" class="Slideout-nav-folder-item">Overview</a>
       <a href="https://www.chicagofoodpolicy.com/procurement" class="Slideout-nav-folder-item">Procurement</a>
       <a href="https://www.chicagofoodpolicy.com/landaccess" class="Slideout-nav-folder-item">Land Access</a>
       <a href="https://www.chicagofoodpolicy.com/urbanagriculture" class="Slideout-nav-folder-item">Urban Agriculture</a>
       <a href="https://www.chicagofoodpolicy.com/licensespermits" class="Slideout-nav-folder-item">Licenses + Permits</a>
       <a href="https://www.chicagofoodpolicy.com/urbanfarmland" class="Slideout-nav-folder-item">Urban Farmland Policy</a>
      </div>
   </div>

			<a href="https://www.chicagofoodpolicy.com/events-1" class="Slideout-nav-item">Events</a>

			<div class="Slideout-nav-item Slideout-nav-item--folder">
       <a href="#" class="Slideout-nav-folder-title" data-toggle="collapse" data-target="#Slideout-folder-resources" aria-expanded="true">Resources</a>
       <div class="Slideout-nav-folder collapse card-body" data-parent="#Slideout-cfpac-menu" id="Slideout-folder-resources">
       <a href="http://www.chicagofoodpolicy.com/resources-1" class="Slideout-nav-folder-item">Reports</a>
       <a href="http://www.chicagofoodpolicy.com/reports-press-releases/#docs" class="Slideout-nav-folder-item">Policy Documents</a>
       <a href="http://www.chicagofoodpolicy.com/reports-press-releases/#presentations" class="Slideout-nav-folder-item">Presentations</a>
     </div>
    </div>

			<div class="Slideout-nav-item Slideout-nav-item--folder">
     <a href="#" class="Slideout-nav-folder-title" data-toggle="collapse" data-target="#Slideout-folder-connect" aria-expanded="true">Connect</a>
     <div class="Slideout-nav-folder collapse card-body" data-parent="#Slideout-cfpac-menu">
       <a href="https://www.chicagofoodpolicy.com/contact" class="Slideout-nav-folder-item" id="Slideout-folder-connect">Connect With Us</a>
       <a href="https://www.chicagofoodpolicy.com/speakingandtraining-overview" class="Slideout-nav-folder-item">Public Speaking &amp; Training</a>
     </div>
   </div>
			<a href="https://chicagofoodpolicy.z2systems.com/donation.jsp?campaign=1&amp;" target="_blank" class="Mobile-overlay-nav-item Slideout-nav-item Slideout-nav-item--donate" id="yui_3_17_2_1_1585087201814_414">
				Donate
			</a>
		</div>
	</nav>

</section>

<section class="menu-section" data-section="navigation">
	<h3 class="menu-section-title">[[global:header.navigation]]</h3>
	<ul class="menu-section-list"></ul>
</section>

<!-- IF config.loggedIn -->
<section class="menu-section" data-section="profile">
	<h3 class="menu-section-title">[[global:header.profile]]</h3>
	<ul class="menu-section-list" component="header/usercontrol"></ul>
</section>

<section class="menu-section" data-section="notifications">
	<h3 class="menu-section-title">
		[[global:header.notifications]]
		<div class="counter unread-count" component="notifications/icon" data-content="{unreadCount.notification}"></div>
	</h3>
	<ul class="menu-section-list notification-list-mobile" component="notifications/list"></ul>
	<p class="menu-section-list"><a href="{relative_path}/notifications">[[notifications:see_all]]</a></p>
</section>
<!-- ENDIF config.loggedIn -->
	</nav>
	<nav id="chats-menu" class="slideout-menu hidden">
		<!-- IF config.loggedIn -->
<section class="menu-section" data-section="chats">
	<h3 class="menu-section-title">
		[[global:header.chats]]
		<i class="counter unread-count" component="chat/icon" data-content="{unreadCount.chat}"></i>
	</h3>
	<ul class="menu-section-list chat-list" component="chat/list">
		<a class="navigation-link" href="{relative_path}/user/{user.userslug}/chats">[[modules:chat.see_all]]</a>
	</ul>
</section>
<!-- ENDIF config.loggedIn -->
	</nav>
	<main id="panel" class="slideout-panel">
		<nav class="navbar navbar-default navbar-fixed-top header" id="header-menu" component="navbar">
			<div class="container">
							<div class="navbar-header">
				<button type="button" class="navbar-toggle pull-left" id="mobile-menu">
					<span component="notifications/icon" class="notification-icon fa fa-fw fa-bell-o unread-count" data-content="{unreadCount.notification}"></span>
					<i class="fa fa-lg fa-fw fa-bars"></i>
				</button>
				<button type="button" class="navbar-toggle hidden" id="mobile-chats">
					<span component="chat/icon" class="notification-icon fa fa-fw fa-comments unread-count" data-content="{unreadCount.chat}"></span>
					<i class="fa fa-lg fa-comment-o"></i>
				</button>

				<!-- IF brand:logo -->
				<a href="<!-- IF brand:logo:url -->{brand:logo:url}<!-- ELSE -->{relative_path}/<!-- ENDIF brand:logo:url -->">
					<img alt="{brand:logo:alt}" class="{brand:logo:display} forum-logo" src="{brand:logo}?{config.cache-buster}" />
				</a>
				<!-- ENDIF brand:logo -->
				<!-- IF config.showSiteTitle -->
				<a href="<!-- IF title:url -->{title:url}<!-- ELSE -->{relative_path}/<!-- ENDIF title:url -->">
					<h1 class="navbar-brand forum-title">{config.siteTitle}</h1>
				</a>
				<!-- ENDIF config.showSiteTitle -->

				<div component="navbar/title" class="visible-xs hidden">
					<span></span>
				</div>
			</div>

			<div id="nav-dropdown" class="hidden-xs">
				<!-- IF !maintenanceHeader -->
				<!-- IF config.loggedIn -->

				<ul id="logged-in-menu" class="nav navbar-nav navbar-right">
					<li class="notifications dropdown text-center hidden-xs" component="notifications">
						<a href="{relative_path}/notifications" title="[[global:header.notifications]]" class="dropdown-toggle" data-toggle="dropdown" id="notif_dropdown" data-ajaxify="false" role="button">
							<i component="notifications/icon" class="fa fa-fw fa-bell-o unread-count" data-content="{unreadCount.notification}"></i>
						</a>
						<ul class="dropdown-menu" aria-labelledby="notif_dropdown">
							<li>
								<ul component="notifications/list" class="notification-list">
									<li class="loading-text">
										<a href="#"><i class="fa fa-refresh fa-spin"></i> [[global:notifications.loading]]</a>
									</li>
								</ul>
							</li>
							<li class="notif-dropdown-link"><a href="#" class="mark-all-read">[[notifications:mark_all_read]]</a></li>
							<li class="notif-dropdown-link"><a href="{relative_path}/notifications">[[notifications:see_all]]</a></li>
						</ul>
					</li>

					<!-- IF !config.disableChat -->
					<li class="chats dropdown">
						<a class="dropdown-toggle" data-toggle="dropdown" href="{relative_path}/user/{user.userslug}/chats" title="[[global:header.chats]]" id="chat_dropdown" component="chat/dropdown" data-ajaxify="false" role="button">
							<i component="chat/icon" class="fa fa-comment-o fa-fw unread-count" data-content="{unreadCount.chat}"></i> <span class="visible-xs-inline">[[global:header.chats]]</span>
						</a>
						<ul class="dropdown-menu" aria-labelledby="chat_dropdown">
							<li>
								<ul component="chat/list" class="chat-list chats-list">
									<li class="loading-text">
										<a href="#"><i class="fa fa-refresh fa-spin"></i> [[global:chats.loading]]</a>
									</li>
								</ul>
							</li>
							<li class="notif-dropdown-link"><a href="#" class="mark-all-read" component="chats/mark-all-read">[[modules:chat.mark_all_read]]</a></li>
							<li class="notif-dropdown-link"><a href="{relative_path}/user/{user.userslug}/chats">[[modules:chat.see_all]]</a></li>
						</ul>
					</li>
					<!-- ENDIF !config.disableChat -->

					<li id="user_label" class="dropdown">
						<label for="user-control-list-check" class="dropdown-toggle" data-toggle="dropdown" id="user_dropdown" title="[[global:header.profile]]" role="button">
							{buildAvatar(user, "md", true)}
							<span id="user-header-name" class="visible-xs-inline">{user.username}</span>
						</label>
						<input type="checkbox" class="hidden" id="user-control-list-check" aria-hidden="true">
						<ul id="user-control-list" component="header/usercontrol" class="dropdown-menu" aria-labelledby="user_dropdown">
							<li>
								<a component="header/profilelink" href="{relative_path}/user/{user.userslug}">
									<i component="user/status" class="fa fa-fw fa-circle status {user.status}"></i> <span component="header/username">{user.username}</span>
								</a>
							</li>
							<li role="presentation" class="divider"></li>
							<li>
								<a href="#" class="user-status" data-status="online">
									<i class="fa fa-fw fa-circle status online"></i><span <!-- IF user.online -->class="bold"<!-- ENDIF user.online -->> [[global:online]]</span>
								</a>
							</li>
							<li>
								<a href="#" class="user-status" data-status="away">
									<i class="fa fa-fw fa-circle status away"></i><span <!-- IF user.away -->class="bold"<!-- ENDIF user.away -->> [[global:away]]</span>
								</a>
							</li>
							<li>
								<a href="#" class="user-status" data-status="dnd">
									<i class="fa fa-fw fa-circle status dnd"></i><span <!-- IF user.dnd -->class="bold"<!-- ENDIF user.dnd -->> [[global:dnd]]</span>
								</a>
							</li>
							<li>
								<a href="#" class="user-status" data-status="offline">
									<i class="fa fa-fw fa-circle status offline"></i><span <!-- IF user.offline -->class="bold"<!-- ENDIF user.offline -->> [[global:invisible]]</span>
								</a>
							</li>
							<li role="presentation" class="divider"></li>
							<li>
								<a component="header/profilelink/edit" href="{relative_path}/user/{user.userslug}/edit">
									<i class="fa fa-fw fa-edit"></i> <span>[[user:edit-profile]]</span>
								</a>
							</li>
							<li>
								<a component="header/profilelink/settings" href="{relative_path}/user/{user.userslug}/settings">
									<i class="fa fa-fw fa-gear"></i> <span>[[user:settings]]</span>
								</a>
							</li>
							<!-- IF showModMenu -->
							<li role="presentation" class="divider"></li>
							<li class="dropdown-header">[[pages:moderator-tools]]</li>
							<li>
								<a href="{relative_path}/flags">
									<i class="fa fa-fw fa-flag"></i> <span>[[pages:flagged-content]]</span>
								</a>
							</li>
							<li>
								<a href="{relative_path}/post-queue">
									<i class="fa fa-fw fa-list-alt"></i> <span>[[pages:post-queue]]</span>
								</a>
							</li>
							<li>
								<a href="{relative_path}/ip-blacklist">
									<i class="fa fa-fw fa-ban"></i> <span>[[pages:ip-blacklist]]</span>
								</a>
							</li>
							<!-- ENDIF showModMenu -->
							<li role="presentation" class="divider"></li>
							<li component="user/logout">
								<form method="post" action="{relative_path}/logout">
									<input type="hidden" name="_csrf" value="{config.csrf_token}">
									<input type="hidden" name="noscript" value="true">
									<button type="submit" class="btn btn-link">
										<i class="fa fa-fw fa-sign-out"></i><span> [[global:logout]]</span>
									</button>
								</form>
							</li>
						</ul>
					</li>

				</ul>
				<!-- ELSE -->
				<ul id="logged-out-menu" class="nav navbar-nav navbar-right">
					<!-- IF allowRegistration -->
					<li>
						<a href="{relative_path}/register">
							<i class="fa fa-pencil fa-fw hidden-sm hidden-md hidden-lg"></i>
							<span>[[global:register]]</span>
						</a>
					</li>
					<!-- ENDIF allowRegistration -->
					<li>
						<a href="{relative_path}/login">
							<i class="fa fa-sign-in fa-fw hidden-sm hidden-md hidden-lg"></i>
							<span>[[global:login]]</span>
						</a>
					</li>
				</ul>
				<!-- ENDIF config.loggedIn -->
				<!-- IF config.searchEnabled -->
				<ul class="nav navbar-nav navbar-right">
					<li>
						<form id="search-form" class="navbar-form navbar-right hidden-xs" role="search" method="GET">
							<button id="search-button" type="button" class="btn btn-link"><i class="fa fa-search fa-fw" title="[[global:header.search]]"></i></button>
							<div class="hidden" id="search-fields">
								<div class="form-group">
									<input autocomplete="off" type="text" class="form-control" placeholder="[[global:search]]" name="query" value="">
									<a href="#"><i class="fa fa-gears fa-fw advanced-search-link"></i></a>
								</div>
								<button type="submit" class="btn btn-default hide">[[global:search]]</button>
							</div>
						</form>
						<ul id="quick-search-results" class="dropdown-menu quick-search-results hidden">
							{{{each posts}}}
<li>
	<a href="{config.relative_path}/post/{posts.pid}">
		{buildAvatar(posts.user, "sm", true)}
		<span class="quick-search-title">{posts.topic.title}</span>
		<br/>
		<p class="snippet">
		{posts.snippet}
		</p>
		<small class="post-info pull-right">
			<span class="fa-stack" style="{function.generateCategoryBackground, posts.category}"><i style="color:{posts.category.color};" class="fa {posts.category.icon} fa-stack-1x"></i></span> {posts.category.name} &bull;
			<span class="timeago" title="{posts.timestampISO}"></span>
		</small>
	 </a>
</li>
<!-- IF !@last -->
<li role="separator" class="divider"></li>
<!-- ENDIF -->
{{{end}}}
<!-- IF multiplePages -->
<li class="text-center">
	<a href="{url}">
		[[search:see-more-results, {matchCount}]]
	</a>
</li>
<!-- ENDIF multiplePages -->
						</ul>
					</li>
					<li class="visible-xs" id="search-menu">
						<a href="{relative_path}/search">
							<i class="fa fa-search fa-fw"></i> [[global:search]]
						</a>
					</li>
				</ul>
				<!-- ENDIF config.searchEnabled -->

				<ul class="nav navbar-nav navbar-right hidden-xs">
					<li>
						<a href="#" id="reconnect" class="hide" title="[[global:reconnecting-message, {config.siteTitle}]]">
							<i class="fa fa-check"></i>
						</a>
					</li>
				</ul>

				<ul class="nav navbar-nav navbar-right pagination-block visible-lg visible-md">
					<li class="dropdown">
						<a><i class="fa fa-angle-double-up pointer fa-fw pagetop"></i></a>
						<a><i class="fa fa-angle-up pointer fa-fw pageup"></i></a>

						<a href="#" class="dropdown-toggle" data-toggle="dropdown">
							<span class="pagination-text"></span>
						</a>

						<a><i class="fa fa-angle-down pointer fa-fw pagedown"></i></a>
						<a><i class="fa fa-angle-double-down pointer fa-fw pagebottom"></i></a>

						<div class="progress-container">
							<div class="progress-bar"></div>
						</div>

						<ul class="dropdown-menu" role="menu">
							<li>
  								<input type="text" class="form-control" id="indexInput" placeholder="[[global:pagination.enter_index]]">
  							</li>
						</ul>
					</li>
				</ul>

				<ul id="main-nav" class="nav navbar-nav">
					{{{each navigation}}}
					<!-- IF function.displayMenuItem, @index -->
					<li class="{navigation.class}">
						<a class="navigation-link" href="{navigation.route}" title="{navigation.title}" <!-- IF navigation.id -->id="{navigation.id}"<!-- ENDIF navigation.id --><!-- IF navigation.properties.targetBlank --> target="_blank"<!-- ENDIF navigation.properties.targetBlank -->>
							<!-- IF navigation.iconClass -->
							<i class="fa fa-fw {navigation.iconClass}" data-content="{navigation.content}"></i>
							<!-- ENDIF navigation.iconClass -->

							<!-- IF navigation.text -->
							<span class="{navigation.textClass}">{navigation.text}</span>
							<!-- ENDIF navigation.text -->
						</a>
					</li>
					<!-- ENDIF function.displayMenuItem -->
					{{{end}}}
				</ul>

				<!-- ELSE -->
				<ul class="nav navbar-nav navbar-right">
					<li>
						<a href="{relative_path}/login">
							<i class="fa fa-sign-in fa-fw hidden-sm hidden-md hidden-lg"></i>
							<span>[[global:login]]</span>
						</a>
					</li>
				</ul>
				<!-- ENDIF !maintenanceHeader -->
			</div>

			</div>
		</nav>
		<div class="container" id="content">
			<noscript>
		<div class="alert alert-danger">
			<p>
				Your browser does not seem to support JavaScript. As a result, your viewing experience will be diminished, and you may not be able to execute some actions.
			</p>
			<p>
				Please download a browser that supports JavaScript, or enable it if it's disabled (i.e. NoScript).
			</p>
		</div>
	</noscript>

			<svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display:none" data-usage="social-icons-svg"><symbol id="linkedin-icon" viewBox="0 0 64 64"><path d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"></path></symbol><symbol id="linkedin-mask" viewBox="0 0 64 64"><path d="M0,0v64h64V0H0z M25.8,44h-5.4V26.6h5.4V44z M23.1,24.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1 c1.7,0,3.1,1.4,3.1,3.1C26.2,22.9,24.8,24.3,23.1,24.3z M46,44h-5.4v-8.4c0-2,0-4.6-2.8-4.6c-2.8,0-3.2,2.2-3.2,4.5V44h-5.4V26.6 h5.2V29h0.1c0.7-1.4,2.5-2.8,5.1-2.8c5.5,0,6.5,3.6,6.5,8.3V44z"></path></symbol><symbol id="facebook-icon" viewBox="0 0 64 64"><path d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"></path></symbol><symbol id="facebook-mask" viewBox="0 0 64 64"><path d="M0,0v64h64V0H0z M39.6,22l-2.8,0c-2.2,0-2.6,1.1-2.6,2.6V28h5.3l-0.7,5.3h-4.6V47h-5.5V33.3H24V28h4.6V24 c0-4.6,2.8-7,6.9-7c2,0,3.6,0.1,4.1,0.2V22z"></path></symbol><symbol id="twitter-icon" viewBox="0 0 64 64"><path d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"></path></symbol><symbol id="twitter-mask" viewBox="0 0 64 64"><path d="M0,0v64h64V0H0z M44.7,25.5c0,0.3,0,0.6,0,0.8C44.7,35,38.1,45,26.1,45c-3.7,0-7.2-1.1-10.1-2.9 c0.5,0.1,1,0.1,1.6,0.1c3.1,0,5.9-1,8.2-2.8c-2.9-0.1-5.3-2-6.1-4.6c0.4,0.1,0.8,0.1,1.2,0.1c0.6,0,1.2-0.1,1.7-0.2 c-3-0.6-5.3-3.3-5.3-6.4c0,0,0-0.1,0-0.1c0.9,0.5,1.9,0.8,3,0.8c-1.8-1.2-2.9-3.2-2.9-5.5c0-1.2,0.3-2.3,0.9-3.3 c3.2,4,8.1,6.6,13.5,6.9c-0.1-0.5-0.2-1-0.2-1.5c0-3.6,2.9-6.6,6.6-6.6c1.9,0,3.6,0.8,4.8,2.1c1.5-0.3,2.9-0.8,4.2-1.6 c-0.5,1.5-1.5,2.8-2.9,3.6c1.3-0.2,2.6-0.5,3.8-1C47.1,23.4,46,24.5,44.7,25.5z"></path></symbol><symbol id="instagram-icon" viewBox="0 0 64 64"><path d="M46.91,25.816c-0.073-1.597-0.326-2.687-0.697-3.641c-0.383-0.986-0.896-1.823-1.73-2.657c-0.834-0.834-1.67-1.347-2.657-1.73c-0.954-0.371-2.045-0.624-3.641-0.697C36.585,17.017,36.074,17,32,17s-4.585,0.017-6.184,0.09c-1.597,0.073-2.687,0.326-3.641,0.697c-0.986,0.383-1.823,0.896-2.657,1.73c-0.834,0.834-1.347,1.67-1.73,2.657c-0.371,0.954-0.624,2.045-0.697,3.641C17.017,27.415,17,27.926,17,32c0,4.074,0.017,4.585,0.09,6.184c0.073,1.597,0.326,2.687,0.697,3.641c0.383,0.986,0.896,1.823,1.73,2.657c0.834,0.834,1.67,1.347,2.657,1.73c0.954,0.371,2.045,0.624,3.641,0.697C27.415,46.983,27.926,47,32,47s4.585-0.017,6.184-0.09c1.597-0.073,2.687-0.326,3.641-0.697c0.986-0.383,1.823-0.896,2.657-1.73c0.834-0.834,1.347-1.67,1.73-2.657c0.371-0.954,0.624-2.045,0.697-3.641C46.983,36.585,47,36.074,47,32S46.983,27.415,46.91,25.816z M44.21,38.061c-0.067,1.462-0.311,2.257-0.516,2.785c-0.272,0.7-0.597,1.2-1.122,1.725c-0.525,0.525-1.025,0.85-1.725,1.122c-0.529,0.205-1.323,0.45-2.785,0.516c-1.581,0.072-2.056,0.087-6.061,0.087s-4.48-0.015-6.061-0.087c-1.462-0.067-2.257-0.311-2.785-0.516c-0.7-0.272-1.2-0.597-1.725-1.122c-0.525-0.525-0.85-1.025-1.122-1.725c-0.205-0.529-0.45-1.323-0.516-2.785c-0.072-1.582-0.087-2.056-0.087-6.061s0.015-4.48,0.087-6.061c0.067-1.462,0.311-2.257,0.516-2.785c0.272-0.7,0.597-1.2,1.122-1.725c0.525-0.525,1.025-0.85,1.725-1.122c0.529-0.205,1.323-0.45,2.785-0.516c1.582-0.072,2.056-0.087,6.061-0.087s4.48,0.015,6.061,0.087c1.462,0.067,2.257,0.311,2.785,0.516c0.7,0.272,1.2,0.597,1.725,1.122c0.525,0.525,0.85,1.025,1.122,1.725c0.205,0.529,0.45,1.323,0.516,2.785c0.072,1.582,0.087,2.056,0.087,6.061S44.282,36.48,44.21,38.061z M32,24.297c-4.254,0-7.703,3.449-7.703,7.703c0,4.254,3.449,7.703,7.703,7.703c4.254,0,7.703-3.449,7.703-7.703C39.703,27.746,36.254,24.297,32,24.297z M32,37c-2.761,0-5-2.239-5-5c0-2.761,2.239-5,5-5s5,2.239,5,5C37,34.761,34.761,37,32,37z M40.007,22.193c-0.994,0-1.8,0.806-1.8,1.8c0,0.994,0.806,1.8,1.8,1.8c0.994,0,1.8-0.806,1.8-1.8C41.807,22.999,41.001,22.193,40.007,22.193z"></path></symbol><symbol id="instagram-mask" viewBox="0 0 64 64"><path d="M43.693,23.153c-0.272-0.7-0.597-1.2-1.122-1.725c-0.525-0.525-1.025-0.85-1.725-1.122c-0.529-0.205-1.323-0.45-2.785-0.517c-1.582-0.072-2.056-0.087-6.061-0.087s-4.48,0.015-6.061,0.087c-1.462,0.067-2.257,0.311-2.785,0.517c-0.7,0.272-1.2,0.597-1.725,1.122c-0.525,0.525-0.85,1.025-1.122,1.725c-0.205,0.529-0.45,1.323-0.516,2.785c-0.072,1.582-0.087,2.056-0.087,6.061s0.015,4.48,0.087,6.061c0.067,1.462,0.311,2.257,0.516,2.785c0.272,0.7,0.597,1.2,1.122,1.725s1.025,0.85,1.725,1.122c0.529,0.205,1.323,0.45,2.785,0.516c1.581,0.072,2.056,0.087,6.061,0.087s4.48-0.015,6.061-0.087c1.462-0.067,2.257-0.311,2.785-0.516c0.7-0.272,1.2-0.597,1.725-1.122s0.85-1.025,1.122-1.725c0.205-0.529,0.45-1.323,0.516-2.785c0.072-1.582,0.087-2.056,0.087-6.061s-0.015-4.48-0.087-6.061C44.143,24.476,43.899,23.682,43.693,23.153z M32,39.703c-4.254,0-7.703-3.449-7.703-7.703s3.449-7.703,7.703-7.703s7.703,3.449,7.703,7.703S36.254,39.703,32,39.703z M40.007,25.793c-0.994,0-1.8-0.806-1.8-1.8c0-0.994,0.806-1.8,1.8-1.8c0.994,0,1.8,0.806,1.8,1.8C41.807,24.987,41.001,25.793,40.007,25.793z M0,0v64h64V0H0z M46.91,38.184c-0.073,1.597-0.326,2.687-0.697,3.641c-0.383,0.986-0.896,1.823-1.73,2.657c-0.834,0.834-1.67,1.347-2.657,1.73c-0.954,0.371-2.044,0.624-3.641,0.697C36.585,46.983,36.074,47,32,47s-4.585-0.017-6.184-0.09c-1.597-0.073-2.687-0.326-3.641-0.697c-0.986-0.383-1.823-0.896-2.657-1.73c-0.834-0.834-1.347-1.67-1.73-2.657c-0.371-0.954-0.624-2.044-0.697-3.641C17.017,36.585,17,36.074,17,32c0-4.074,0.017-4.585,0.09-6.185c0.073-1.597,0.326-2.687,0.697-3.641c0.383-0.986,0.896-1.823,1.73-2.657c0.834-0.834,1.67-1.347,2.657-1.73c0.954-0.371,2.045-0.624,3.641-0.697C27.415,17.017,27.926,17,32,17s4.585,0.017,6.184,0.09c1.597,0.073,2.687,0.326,3.641,0.697c0.986,0.383,1.823,0.896,2.657,1.73c0.834,0.834,1.347,1.67,1.73,2.657c0.371,0.954,0.624,2.044,0.697,3.641C46.983,27.415,47,27.926,47,32C47,36.074,46.983,36.585,46.91,38.184z M32,27c-2.761,0-5,2.239-5,5s2.239,5,5,5s5-2.239,5-5S34.761,27,32,27z"></path></symbol>
				<symbol xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 15 15">
					<line fill="none" stroke-miterlimit="10" stroke-linecap="butt" x1="9.7" y1="9.8" x2="13.6" y2="13.5"/>
					<circle fill="none" stroke-miterlimit="10" cx="6.5" cy="6.5" r="4.5"/>
				</symbol>
				<symbol xmlns="http://www.w3.org/2000/svg" id="search-icon" viewBox="0 0 16.97 19.21"><defs><style>.cls-1{fill:#231f20;}</style></defs><title>icon-search</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M17,17.93l-4.29-5.15A7.46,7.46,0,1,0,0,6.8,7.47,7.47,0,0,0,6.8,14.9l.67,0A7.41,7.41,0,0,0,11.08,14l4.35,5.23Zm-10-5A5.47,5.47,0,0,1,2,7,5.47,5.47,0,0,1,7.46,2l.48,0A5.46,5.46,0,0,1,7,12.9Z"/></g></g></symbol>
			</svg>

