!function(e){"object"==typeof module&&module.exports?module.exports=e():"function"==typeof define&&define.amd&&define(e)}(function(){return function(e,n,t,o,i){return(t(n&&n.error)?'\n<div class="alert alert-danger">\n\t<strong>'+e.__escape(t(n&&n.error))+"</strong>\n\t<p>[[notifications:email-confirm-error-message]]</p>\n":'\n<div class="alert alert-success">\n\t<strong>[[notifications:email-confirmed]]</strong>\n\t<p>[[notifications:email-confirmed-message]]</p>\n')+'\n\t<p>\n\t\t<a href="'+e.__escape(t(n&&n.config&&n.config.relative_path))+'/">[[notifications:back_to_home, '+e.__escape(t(n&&n.config&&n.config.siteTitle))+"]]</a>\n\t</p>\n</div>\n"}});