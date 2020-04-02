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
		if (window.location.href.includes('://cfpac-forum.herokuapp.com')) {
			const locationArray = window.location.href.split('.com/').shift();
			window.location.replace(`https://covid.chicagofoodpolicy.com/${locationArray.join('')}`)
		}
		var RELATIVE_PATH = "{relative_path}";
		var config = JSON.parse('{{configJSON}}');
		var app = {
			template: "{template.name}",
			user: JSON.parse('{{userJSON}}')
		};
	</script>

	<script>

		window.setCookie = function(name, value, minutesToLive) {
			// Encode value in order to escape semicolons, commas, and whitespace
			var cookie = name + "=" + encodeURIComponent(value);
			cookie += '; path=/';
			/* Sets the max-age attribute so that the cookie expires
			after the specified number of days */
			cookie += "; max-age=" + (minutesToLive*60);

			document.cookie = cookie;
		}

		window.getCookie = function(name) {
			// Split cookie string and get all individual name=value pairs in an array
			var cookieArr = document.cookie.split(";");

			// Loop through the array elements
			for(var i = 0; i < cookieArr.length; i++) {
				var cookiePair = cookieArr[i].split("=");

				/* Removing whitespace at the beginning of the cookie name
				and compare it with the given string */
				if(name == cookiePair[0].trim()) {
					// Decode the cookie value and return
					return decodeURIComponent(cookiePair[1]);
				}
			}

			// Return null if not found
			return null;
		}

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
	<nav id="menu" class="slideout-menu hidden">
		<!-- IMPORT partials/slideout-menu.tpl -->
	</nav>
	<nav id="chats-menu" class="slideout-menu hidden">
		<!-- IMPORT partials/chats-menu.tpl -->
	</nav>
	<main id="panel" class="slideout-panel">
		<nav class="navbar navbar-default navbar-fixed-top header" id="header-menu" component="navbar">
			<div class="container">
				<!-- IMPORT partials/menu.tpl -->
			</div>
		</nav>
		<div class="container" id="content">
		<!-- IMPORT partials/noscript/warning.tpl -->

