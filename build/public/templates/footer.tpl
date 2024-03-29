	<script>
		function sendBugReport() {
			let a = document.createElement('a');
			a.target = '_blank';
			const body = encodeURIComponent(`Thank you for submitting a bug! A good bug report includes the following information:

1) Screenshot
2) Exact text of the error
3) Your browser name (i.e. Chrome, Safari or Edge)
4) Your operating system (i.e. Windows, Mac, iPhone)

Including this information will help us reproduce and address your problem.

You may delete this text and enter your own information.
			`);
			a.href = "mailto:cfpac-bugs@glassdimly.com&subject=CFPAC%20Forum%20Bug%20Report&body=" + body;
			a.click();
		}

		function contactUs() {
			let a = document.createElement('a');
			a.target = '_blank';
			a.href = "mailto:rcooley@chicagofoodpolicy.com&subject=CFPAC%20Forum%20Contact";
			a.click();
		}

	</script>
	<button class="btn btn-warning btn-sm" onclick="sendBugReport()">Submit a bug report or problem</button>
	<button class="btn btn-success btn-sm" onclick="contactUs()">Contact Us</button>

	</div><!-- /.container#content -->
	</main>
	<!-- IF !isSpider -->
	<div class="topic-search hidden">
		<div class="btn-group">
			<button type="button" class="btn btn-default count"></button>
			<button type="button" class="btn btn-default prev"><i class="fa fa-fw fa-angle-up"></i></button>
			<button type="button" class="btn btn-default next"><i class="fa fa-fw fa-angle-down"></i></button>
		</div>
	</div>

	<div component="toaster/tray" class="alert-window">
		<div id="reconnect-alert" class="alert alert-dismissable alert-warning clearfix hide" component="toaster/toast">
			<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
			<p>[[global:reconnecting-message, {config.siteTitle}]]</p>
		</div>
	</div>
	<!-- ENDIF !isSpider -->


	<script defer src="{relative_path}/assets/nodebb.min.js?{config.cache-buster}"></script>

	{{{each scripts}}}
	<script defer type="text/javascript" src="{scripts.src}"></script>
	{{{end}}}

	<script>
		window.addEventListener('DOMContentLoaded', function () {
			require(['forum/footer']);

			<!-- IF useCustomJS -->
			{{customJS}}
			<!-- ENDIF useCustomJS -->
		});
	</script>

	<script>
		window.addEventListener('DOMContentLoaded', function () {
			$(window).on('action:ajaxify.contentLoaded', function(data) {
				// attach to all login/reg buttons except for the login and register buttons on the login page.
				$("a[href$='/login'], a[href$='/register']").not('#login').not('#login__no-acct').each(function(i, el){
					$(el).off('click').on('click', function(){
						window.setCookie('login:referrer', window.location.href, 10);
					});
				});
			});
		});
	</script>

	<div class="hide">
	<script>
	window.addEventListener('load', function () {
		define(config.relative_path + '/assets/templates/500.js', function () {
			function compiled(helpers, context, get, iter, helper) {
				return '<div class="alert alert-danger">\n\t<strong>[[global:500.title]]</strong>\n\t<p>[[global:500.message]]</p>\n\t<p>' + 
					helpers.__escape(get(context && context['path'])) + '</p>\n\t' + 
					(get(context && context['error']) ? '<p>' + helpers.__escape(get(context && context['error'])) + '</p>' : '') + '\n\n\t' + 
					(get(context && context['returnLink']) ? '\n\t<p>[[error:goback]]</p>\n\t' : '') + '\n</div>\n';
			}

			return compiled;
		});
	});
</script>
	</div>
</body>
</html>
