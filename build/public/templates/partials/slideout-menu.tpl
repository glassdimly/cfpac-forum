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