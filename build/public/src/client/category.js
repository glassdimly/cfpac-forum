"use strict";define("forum/category",["forum/infinitescroll","share","navigator","forum/category/tools","topicList","sort"],function(t,o,a,n,e,i){var c={};$(window).on("action:ajaxify.start",function(t,o){if(!String(o.url).startsWith("category/")){a.disable();r()}});function r(){n.removeListeners();e.removeListeners()}c.init=function(){var t=ajaxify.data.cid;app.enterRoom("category_"+t);o.addShareHandlers(ajaxify.data.name);n.init(t);e.init("category",d);i.handleSort("categoryTopicSort","user.setCategorySort","category/"+ajaxify.data.slug);if(!config.usePagination){a.init('[component="category/topic"]',ajaxify.data.topic_count,c.toTop,c.toBottom,c.navigatorCallback)}else{a.disable()}g();s(t);$(window).trigger("action:topics.loaded",{topics:ajaxify.data.topics});$(window).trigger("action:category.loaded",{cid:ajaxify.data.cid})};function g(){var t=window.location.pathname.split("/");var o=t[t.length-1];if(o&&utils.isNumber(o)){o=Math.max(0,parseInt(o,10)-1);if(o&&window.location.search.indexOf("page=")===-1){a.scrollToElement($('[component="category/topic"][data-index="'+o+'"]'),true,0)}}}function s(t){$('[component="category/watching"], [component="category/ignoring"], [component="category/notwatching"]').on("click",function(){var o=$(this);var a=o.attr("data-state");socket.emit("categories.setWatchState",{cid:t,state:a},function(t){if(t){return app.alertError(t.message)}$('[component="category/watching/menu"]').toggleClass("hidden",a!=="watching");$('[component="category/watching/check"]').toggleClass("fa-check",a==="watching");$('[component="category/notwatching/menu"]').toggleClass("hidden",a!=="notwatching");$('[component="category/notwatching/check"]').toggleClass("fa-check",a==="notwatching");$('[component="category/ignoring/menu"]').toggleClass("hidden",a!=="ignoring");$('[component="category/ignoring/check"]').toggleClass("fa-check",a==="ignoring");app.alertSuccess("[[category:"+a+".message]]")})})}c.toTop=function(){a.scrollTop(0)};c.toBottom=function(){socket.emit("categories.getTopicCount",ajaxify.data.cid,function(t,o){if(t){return app.alertError(t.message)}a.scrollBottom(o-1)})};c.navigatorCallback=function(t,o){return o};function d(o,a,n){n=n||function(){};$(window).trigger("action:category.loading");var e=utils.params();t.loadMore("categories.loadMore",{cid:ajaxify.data.cid,after:o,direction:a,query:e,categoryTopicSort:config.categoryTopicSort},function(t,o){$(window).trigger("action:category.loaded");n(t,o)})}return c});
//# sourceMappingURL=category.js.map