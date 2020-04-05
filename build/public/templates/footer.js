!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function r(t,n,e,o,i){return'\t<script>\n\t\tfunction sendBugReport() {\n\t\t\tlet a = document.createElement(\'a\');\n\t\t\ta.target= \'_blank\';\n\t\t\tconst body = encodeURIComponent(`Thank you for submitting a bug! A good bug report includes the following information:\n\n1) Screenshot\n2) Exact text of the error\n3) Your browser name (i.e. Chrome, Safari or Edge)\n4) Your operating system (i.e. Windows, Mac, iPhone)\n\nIncluding this information will help us reproduce and address your problem.\n\nYou may delete this text and enter your own information.\n\t\t\t`);\n\t\t\ta.href = "mailto:cfpac-bugs@glassdimly.com&subject=CFPAC%20Forum%20Bug%20Report&body=" + body;\n\t\t\ta.click();\n\t\t}\n\t<\/script>\n\t<button class="btn btn-primary btn-sm" onclick="sendBugReport()">Submit a bug report or problem</button>\n\t\t</div>\x3c!-- /.container#content --\x3e\n\t</main>\n\t'+(e(n&&n.isSpider)?"":'\n\t<div class="topic-search hidden">\n\t\t<div class="btn-group">\n\t\t\t<button type="button" class="btn btn-default count"></button>\n\t\t\t<button type="button" class="btn btn-default prev"><i class="fa fa-fw fa-angle-up"></i></button>\n\t\t\t<button type="button" class="btn btn-default next"><i class="fa fa-fw fa-angle-down"></i></button>\n\t\t</div>\n\t</div>\n\n\t<div component="toaster/tray" class="alert-window">\n\t\t<div id="reconnect-alert" class="alert alert-dismissable alert-warning clearfix hide" component="toaster/toast">\n\t\t\t<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n\t\t\t<p>[[global:reconnecting-message, '+t.__escape(e(n&&n.config&&n.config.siteTitle))+"]]</p>\n\t\t</div>\n\t</div>\n\t")+'\n\n\n\t<script defer src="'+t.__escape(e(n&&n.relative_path))+"/assets/nodebb.min.js?"+t.__escape(e(n&&n.config&&n.config["cache-buster"]))+'"><\/script>\n\n\t'+r.blocks.scripts(t,n,e,o,i)+"\n\n\t<script>\n\t\twindow.addEventListener('DOMContentLoaded', function () {\n\t\t\trequire(['forum/footer']);\n\n\t\t\t"+(e(n&&n.useCustomJS)?"\n\t\t\t"+e(n&&n.customJS)+"\n\t\t\t":"")+"\n\t\t});\n\t<\/script>\n\n\t<script>\n\t\twindow.addEventListener('DOMContentLoaded', function () {\n\t\t\t$(window).on('action:ajaxify.contentLoaded', function(data) {\n\t\t\t\t// attach to all login/reg buttons except for the login and register buttons on the login page.\n\t\t\t\t$(\"a[href$='/login'], a[href$='/register']\").not('#login').not('#login__no-acct').each(function(i, el){\n\t\t\t\t\t$(el).off('click').on('click', function(){\n\t\t\t\t\t\twindow.setCookie('login:referrer', window.location.href, 10);\n\t\t\t\t\t});\n\t\t\t\t});\n\t\t\t});\n\t\t});\n\t<\/script>\n\n\t<div class=\"hide\">\n\t<script>\n\twindow.addEventListener('load', function () {\n\t\tdefine(config.relative_path + '/assets/templates/500.js', function () {\n\t\t\tfunction compiled(helpers, context, get, iter, helper) {\n\t\t\t\treturn '<div class=\"alert alert-danger\">\\n\\t<strong>[[global:500.title]]</strong>\\n\\t<p>[[global:500.message]]</p>\\n\\t<p>' + \n\t\t\t\t\thelpers.__escape(get(context && context['path'])) + '</p>\\n\\t' + \n\t\t\t\t\t(get(context && context['error']) ? '<p>' + helpers.__escape(get(context && context['error'])) + '</p>' : '') + '\\n\\n\\t' + \n\t\t\t\t\t(get(context && context['returnLink']) ? '\\n\\t<p>[[error:goback]]</p>\\n\\t' : '') + '\\n</div>\\n';\n\t\t\t}\n\n\t\t\treturn compiled;\n\t\t});\n\t});\n<\/script>\n\t</div>\n</body>\n</html>\n"}return r.blocks={scripts:function(n,e,o,t){return t(o(e&&e.scripts),function(t){return'\n\t<script defer type="text/javascript" src="'+n.__escape(o(e&&e.scripts&&e.scripts[t]&&e.scripts[t].src))+'"><\/script>\n\t'})}},r});