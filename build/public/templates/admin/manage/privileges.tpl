<div class="row">
	<form role="form" class="category">
		<div class="">
			<p>
				[[admin/manage/categories:privileges.description]]
			</p>

			<div class="lead">
				[[admin/manage/categories:privileges.category-selector]]
				<div component="category-selector" class="btn-group <!-- IF pullRight -->pull-right<!-- ENDIF pullRight -->">
	<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
		<span component="category-selector-selected"><!-- IF selectedCategory --><span class="fa-stack" style="{function.generateCategoryBackground, selectedCategory}"><i class="fa fa-fw fa-stack-1x {selectedCategory.icon}" style="color: {selectedCategory.color};"></i></span> {selectedCategory.name}<!-- ELSE -->
		[[topic:thread_tools.select_category]]<!-- ENDIF selectedCategory --></span> <span class="caret"></span>
	</button>
	<div component="category-selector-search" class="hidden">
		<input type="text" class="form-control" autocomplete="off">
	</div>
	<ul component="category/list" class="dropdown-menu category-dropdown-menu" role="menu">
		<li component="category/no-matches" role="presentation" class="category hidden">
			<a role="menu-item">[[search:no-matches]]</a>
		</li>
		{{{each categories}}}
		<li role="presentation" class="category <!-- IF categories.disabledClass -->disabled<!-- ENDIF categories.disabledClass -->" data-cid="{categories.cid}" data-name="{categories.name}" data-parent-cid="{categories.parentCid}">
			<a role="menu-item">{categories.level}<span component="category-markup"><!-- IF categories.icon --><span class="fa-stack" style="{function.generateCategoryBackground}"><i style="color: {categories.color};" class="fa fa-stack-1x fa-fw {categories.icon}"></i></span><!-- ENDIF categories.icon --> {categories.name}</span></a>
		</li>
		{{{end}}}
	</ul>
</div>
			</div>

			<div class="privilege-table-container">
				<!-- IF cid -->
									<label>[[admin/manage/privileges:group-privileges]]</label>
					<table class="table table-striped privilege-table">
						<thead>
							<tr class="privilege-table-header">
								<th colspan="2"></th>
								<th class="arrowed" colspan="3">
									[[admin/manage/categories:privileges.section-viewing]]
								</th>
								<th class="arrowed" colspan="9">
									[[admin/manage/categories:privileges.section-posting]]
								</th>
								<th class="arrowed" colspan="3">
									[[admin/manage/categories:privileges.section-moderation]]
								</th>
								<!-- IF privileges.columnCountGroupOther -->
								<th class="arrowed" colspan="{privileges.columnCountGroupOther}">
									[[admin/manage/categories:privileges.section-other]]
								</th>
								<!-- END -->
							</tr><tr><!-- zebrastripe reset --></tr>
							<tr>
								<th colspan="2">[[admin/manage/categories:privileges.section-group]]</th>
								<!-- BEGIN privileges.labels.groups -->
								<th class="text-center">{privileges.labels.groups.name}</th>
								<!-- END privileges.labels.groups -->
							</tr>
						</thead>
						<tbody>
							<!-- BEGIN privileges.groups -->
							<tr data-group-name="{privileges.groups.nameEscaped}" data-private="<!-- IF privileges.groups.isPrivate -->1<!-- ELSE -->0<!-- ENDIF privileges.groups.isPrivate -->">
								<td>
									<!-- IF privileges.groups.isPrivate -->
									<i class="fa fa-lock text-muted" title="[[admin/manage/categories:privileges.group-private]]"></i>
									<!-- ENDIF privileges.groups.isPrivate -->
									{privileges.groups.name}
								</td>
								<td>
									<div class="dropdown">
										<button class="btn btn-default btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
											<i class="fa fa-copy"></i>
										</button>
										<ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
											<li data-action="copyToAllGroup"><a href="#">[[admin/manage/categories:privileges.copy-group-privileges-to-all-categories]]</a></li>
											<li data-action="copyToChildrenGroup"><a href="#">[[admin/manage/categories:privileges.copy-group-privileges-to-children]]</a></li>
											<li data-action="copyPrivilegesFromGroup"><a href="#">[[admin/manage/categories:privileges.copy-group-privileges-from]]</a></li>
										</ul>
									</div>
								</td>
								{function.spawnPrivilegeStates, privileges.groups.name, ../privileges}
							</tr>
							<!-- END privileges.groups -->
							<tr>
								<td colspan="{privileges.columnCountGroup}">
									<div class="btn-toolbar">
										<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.group">
											[[admin/manage/categories:privileges.search-group]]
										</button>
										<button type="button" class="btn btn-info pull-right" data-ajaxify="false" data-action="copyPrivilegesFrom">
											[[admin/manage/categories:privileges.copy-from-category]]
										</button>
										<button type="button" class="btn btn-info pull-right" data-ajaxify="false" data-action="copyToChildren">
											[[admin/manage/categories:privileges.copy-to-children]]
										</button>
										<button type="button" class="btn btn-info pull-right" data-ajaxify="false" data-action="copyToAll">
											[[admin/manage/categories:privileges.copy-privileges-to-all-categories]]
										</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="help-block">
						[[admin/manage/categories:privileges.inherit]]
					</div>
					<hr/>
					<label>[[admin/manage/privileges:user-privileges]]</label>
					<table class="table table-striped privilege-table">
						<thead>
							<tr class="privilege-table-header">
								<th colspan="2"></th>
								<th class="arrowed" colspan="3">
									[[admin/manage/categories:privileges.section-viewing]]
								</th>
								<th class="arrowed" colspan="9">
									[[admin/manage/categories:privileges.section-posting]]
								</th>
								<th class="arrowed" colspan="3">
									[[admin/manage/categories:privileges.section-moderation]]
								</th>
								<!-- IF privileges.columnCountUserOther -->
								<th class="arrowed" colspan="{privileges.columnCountUserOther}">
									[[admin/manage/categories:privileges.section-other]]
								</th>
								<!-- END -->
							</tr><tr><!-- zebrastripe reset --></tr>
							<tr>
								<th colspan="2">[[admin/manage/categories:privileges.section-user]]</th>
								<!-- BEGIN privileges.labels.users -->
								<th class="text-center">{privileges.labels.users.name}</th>
								<!-- END privileges.labels.users -->
							</tr>
						</thead>
						<tbody>
							<!-- IF privileges.users.length -->
							<!-- BEGIN privileges.users -->
							<tr data-uid="{privileges.users.uid}">
								<td>
									<!-- IF ../picture -->
									<img class="avatar avatar-sm" src="{privileges.users.picture}" title="{privileges.users.username}" />
									<!-- ELSE -->
									<div class="avatar avatar-sm" style="background-color: {../icon:bgColor};">{../icon:text}</div>
									<!-- ENDIF ../picture -->
								</td>
								<td>{privileges.users.username}</td>
								{function.spawnPrivilegeStates, privileges.users.username, ../privileges}
							</tr>
							<!-- END privileges.users -->
							<tr>
								<td colspan="{privileges.columnCountUser}">
									<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.user">
										[[admin/manage/categories:privileges.search-user]]
									</button>
								</td>
							</tr>
							<!-- ELSE -->
							<tr>
								<td colspan="{privileges.columnCountUser}">
									[[admin/manage/categories:privileges.no-users]]
									<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.user">
										[[admin/manage/categories:privileges.search-user]]
									</button>
								</td>
							</tr>
							<!-- ENDIF privileges.users.length -->
						</tbody>
					</table>

				<!-- ELSE -->
									<label>[[admin/manage/privileges:group-privileges]]</label>
					<table class="table table-striped privilege-table">
						<thead>
							<tr class="privilege-table-header">
								<th colspan="15"></th>
							</tr><tr><!-- zebrastripe reset --></tr>
							<tr>
								<th colspan="2">[[admin/manage/categories:privileges.section-group]]</th>
								<!-- BEGIN privileges.labels.groups -->
								<th class="text-center">{privileges.labels.groups.name}</th>
								<!-- END privileges.labels.groups -->
							</tr>
						</thead>
						<tbody>
							<!-- BEGIN privileges.groups -->
							<tr data-group-name="{privileges.groups.nameEscaped}" data-private="<!-- IF privileges.groups.isPrivate -->1<!-- ELSE -->0<!-- ENDIF privileges.groups.isPrivate -->">
								<td>
									<!-- IF privileges.groups.isPrivate -->
									<i class="fa fa-lock text-muted" title="[[admin/manage/categories:privileges.group-private]]"></i>
									<!-- ENDIF privileges.groups.isPrivate -->
									{privileges.groups.name}
								</td>
								<td></td>
								{function.spawnPrivilegeStates, privileges.groups.name, ../privileges}
							</tr>
							<!-- END privileges.groups -->
							<tr>
								<td colspan="{privileges.columnCount}">
									<div class="btn-toolbar">
										<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.group">
											[[admin/manage/categories:privileges.search-group]]
										</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="help-block">
						[[admin/manage/categories:privileges.inherit]]
					</div>
					<hr/>
					<label>[[admin/manage/privileges:user-privileges]]</label>
					<table class="table table-striped privilege-table">
						<thead>
							<tr class="privilege-table-header">
								<th colspan="15"></th>
							</tr><tr><!-- zebrastripe reset --></tr>
							<tr>
								<th colspan="2">[[admin/manage/categories:privileges.section-user]]</th>
								<!-- BEGIN privileges.labels.users -->
								<th class="text-center">{privileges.labels.users.name}</th>
								<!-- END privileges.labels.users -->
							</tr>
						</thead>
						<tbody>
							<!-- IF privileges.users.length -->
							<!-- BEGIN privileges.users -->
							<tr data-uid="{privileges.users.uid}">
								<td>
									<!-- IF ../picture -->
									<img class="avatar avatar-sm" src="{privileges.users.picture}" title="{privileges.users.username}" />
									<!-- ELSE -->
									<div class="avatar avatar-sm" style="background-color: {../icon:bgColor};">{../icon:text}</div>
									<!-- ENDIF ../picture -->
								</td>
								<td>{privileges.users.username}</td>
								{function.spawnPrivilegeStates, privileges.users.username, ../privileges}
							</tr>
							<!-- END privileges.users -->
							<tr>
								<td colspan="{privileges.columnCount}">
									<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.user">
										[[admin/manage/categories:privileges.search-user]]
									</button>
								</td>
							</tr>
							<!-- ELSE -->
							<tr>
								<td colspan="{privileges.columnCount}">
									[[admin/manage/privileges:global.no-users]]
									<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.user">
										[[admin/manage/categories:privileges.search-user]]
									</button>
								</td>
							</tr>
							<!-- ENDIF privileges.users.length -->
						</tbody>
					</table>

				<!-- ENDIF cid -->
			</div>
		</div>
	</form>
</div>
