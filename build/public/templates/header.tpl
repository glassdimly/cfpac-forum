<!DOCTYPE html>
<html lang="{function.localeToHTML, userLang, defaultLang}" <!-- IF languageDirection -->data-dir="{languageDirection}" style="direction: {languageDirection};" <!-- ENDIF languageDirection --> >
<head>
	<title>{browserTitle}</title>
	{{{each metaTags}}}{function.buildMetaTag}{{{end}}}
	<link rel="stylesheet" type="text/css" href="{relative_path}/assets/client<!-- IF bootswatchSkin -->-{bootswatchSkin}<!-- END -->.css?{config.cache-buster}" />
	{{{each linkTags}}}{function.buildLinkTag}{{{end}}}

	<script>
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
	<style>


	</style>
</head>

<body class="{bodyClass} skin-<!-- IF bootswatchSkin -->{bootswatchSkin}<!-- ELSE -->noskin<!-- END -->">
<div><a href="{config.relative_path}">{{config.relative_path}}</a></div>
	<header class="Header Header--top">
	<div class="Header-inner Header-inner--top" data-nc-group="top" data-nc-collapse="">
		<div data-nc-container="top-left">


			<nav class="Header-nav Header-nav--primary" data-nc-element="primary-nav" data-content-field="navigation">

				<div class="Header-nav-inner">
    <span class="Header-nav-item Header-nav-item--folder">

      <a href="/about" class="Header-nav-folder-title" data-controller="HeaderNavFolderTouch" data-controllers-bound="HeaderNavFolderTouch">About</a>

      <span class="Header-nav-folder">



              <a href="/services" class="Header-nav-folder-item">Overview</a>





              <a href="/services-type-1" class="Header-nav-folder-item">Our Mission &amp; Vision</a>





              <a href="/board-1" class="Header-nav-folder-item">Our Board</a>





              <a href="/our-staff" class="Header-nav-folder-item">Our Staff</a>





              <a href="/menu-details" class="Header-nav-folder-item">Our Accomplishments</a>



      </span>
    </span><a href="/covid19" class="Header-nav-item" data-test="template-nav">COVID-19</a><a href="/blog" class="Header-nav-item" data-test="template-nav">News</a><span class="Header-nav-item Header-nav-item--folder">

      <a href="/working-groups-1" class="Header-nav-folder-title" data-controller="HeaderNavFolderTouch" data-controllers-bound="HeaderNavFolderTouch">Initiatives</a>

      <span class="Header-nav-folder">



              <a href="/initiatives" class="Header-nav-folder-item">Overview</a>





              <a href="/procurement" class="Header-nav-folder-item">Procurement</a>





              <a href="/landaccess" class="Header-nav-folder-item">Land Access</a>





              <a href="/urbanagriculture" class="Header-nav-folder-item">Urban Agriculture</a>





              <a href="/licensespermits" class="Header-nav-folder-item">Licenses + Permits</a>





              <a href="/urbanfarmland" class="Header-nav-folder-item">Urban Farmland Policy</a>



      </span>
    </span><a href="/events-1" class="Header-nav-item">Events</a><span class="Header-nav-item Header-nav-item--folder">

      <a href="/resources" class="Header-nav-folder-title" data-controller="HeaderNavFolderTouch" data-controllers-bound="HeaderNavFolderTouch">Resources</a>

      <span class="Header-nav-folder">



              <a href="http://www.chicagofoodpolicy.com/resources-1" class="Header-nav-folder-item">Reports</a>





              <a href="http://www.chicagofoodpolicy.com/reports-press-releases/#docs" class="Header-nav-folder-item">Policy Documents</a>





              <a href="http://www.chicagofoodpolicy.com/reports-press-releases/#presentations" class="Header-nav-folder-item">Presentations</a>



      </span>
    </span><span class="Header-nav-item Header-nav-item--folder">

      <a href="/connect" class="Header-nav-folder-title" data-controller="HeaderNavFolderTouch" data-controllers-bound="HeaderNavFolderTouch">Connect</a>

      <span class="Header-nav-folder">



              <a href="/contact" class="Header-nav-folder-item">Connect With Us</a>





              <a href="/speakingandtraining-overview" class="Header-nav-folder-item">Public Speaking &amp; Training</a>



      </span>
    </span>
				</div>

			</nav><a href="/" class="Header-branding" data-nc-element="branding" data-content-field="site-title">


				<img src="//static1.squarespace.com/static/5a8c555751a5846fc4c22984/t/5b94928cc2241b0779113936/1584495272576/?format=1500w" alt="Chicago Food Policy Action Council" class="Header-branding-logo">


			</a><nav class="Header-nav Header-nav--secondary" data-nc-element="secondary-nav" data-content-field="navigation">

				<div class="Header-nav-inner">
					<a href="https://chicagofoodpolicy.z2systems.com/donation.jsp?campaign=1&amp;" target="_blank" class="Header-nav-item">Donate</a>
				</div>

			</nav></div>
		<div data-nc-container="top-center">




		</div>
		<div data-nc-container="top-right">



			<div class="Header-search" data-nc-element="search">
				<form class="Header-search-form" action="/search" method="get">
					<input class="Header-search-form-input" name="q" type="text" spellcheck="false" value="" autocomplete="off" placeholder="Search">
					<button class="Header-search-form-submit" type="submit" data-test="template-search">
						<svg class="Icon Icon--search--small" viewBox="0 0 15 15">
							<use xlink:href="/assets/ui-icons.svg#search-icon--small"></use>
						</svg>
						<svg class="Icon Icon--search" viewBox="0 0 20 20">
							<use xlink:href="/assets/ui-icons.svg#search-icon"></use>
						</svg>
					</button>
				</form>
			</div><div class="Header-social" data-nc-element="social">

				<nav class="SocialLinks" data-content-field="connected-accounts">
					<div class="SocialLinks-inner">
						<a href="https://www.linkedin.com/company/cfpac/" target="_blank" class="SocialLinks-link linkedin" style="">
							<div>
								<svg class="SocialLinks-link-svg" viewBox="0 0 64 64">

									<use class="SocialLinks-link-icon" xlink:href="https://www.chicagofoodpolicy.com/#linkedin-icon"></use>
									<use class="SocialLinks-link-mask" xlink:href="https://www.chicagofoodpolicy.com/#linkedin-mask"></use>
								</svg>
							</div>
						</a><a href="http://www.facebook.com/chifoodpolicy" target="_blank" class="SocialLinks-link facebook" style="">
							<div>
								<svg class="SocialLinks-link-svg" viewBox="0 0 64 64">

									<use class="SocialLinks-link-icon" xlink:href="https://www.chicagofoodpolicy.com/#facebook-icon"></use>
									<use class="SocialLinks-link-mask" xlink:href="https://www.chicagofoodpolicy.com/#facebook-mask"></use>
								</svg>
							</div>
						</a><a href="https://twitter.com/ChiFoodPolicy" target="_blank" class="SocialLinks-link twitter" style="">
							<div>
								<svg class="SocialLinks-link-svg" viewBox="0 0 64 64">

									<use class="SocialLinks-link-icon" xlink:href="https://www.chicagofoodpolicy.com/#twitter-icon"></use>
									<use class="SocialLinks-link-mask" xlink:href="https://www.chicagofoodpolicy.com/#twitter-mask"></use>
								</svg>
							</div>
						</a><a href="https://www.instagram.com/chifoodpolicy/" target="_blank" class="SocialLinks-link instagram" style="">
							<div>
								<svg class="SocialLinks-link-svg" viewBox="0 0 64 64">

									<use class="SocialLinks-link-icon" xlink:href="https://www.chicagofoodpolicy.com/#instagram-icon"></use>
									<use class="SocialLinks-link-mask" xlink:href="https://www.chicagofoodpolicy.com/#instagram-mask"></use>
								</svg>
							</div>
						</a>
					</div>
				</nav>

			</div></div>
	</div>
</header>

	<nav id="menu" class="slideout-menu hidden">
		<div class="menu-profile">
	<!-- IF user.uid -->
	{buildAvatar(user, "lg", true, "user-icon")}
	<i component="user/status" class="fa fa-fw fa-circle status {user.status}"></i>
	<!-- ENDIF user.uid -->
</div>

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
		<span class="counter unread-count" component="notifications/icon" data-content="{unreadCount.notification}"></span>
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
				<div>biiiig test</div>

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
