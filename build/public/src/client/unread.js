"use strict";define("forum/unread",["topicSelect","components","topicList"],function(e,t,a){var n={};var i={ignoring:1,notwatching:2,watching:3};n.init=function(){app.enterRoom("unread_topics");a.init("unread");e.init();c("/"+ajaxify.data.selectedFilter.url,ajaxify.data.topicCount);$("#markSelectedRead").on("click",function(){var t=e.getSelectedTids();if(!t.length){return}socket.emit("topics.markAsRead",t,function(e){if(e){return app.alertError(e.message)}r(t)})});$("#markAllRead").on("click",function(){socket.emit("topics.markAllRead",function(e){if(e){return app.alertError(e.message)}app.alertSuccess("[[unread:topics_marked_as_read.success]]");$('[component="category"]').empty();$('[component="pagination"]').addClass("hidden");$("#category-no-topics").removeClass("hidden");$(".markread").addClass("hidden")})});$(".markread").on("click",".category",function(){function e(e){var a=[];t.get("category/topic","cid",e).each(function(){a.push($(this).attr("data-tid"))});return a}var a=$(this).attr("data-cid");var n=e(a);socket.emit("topics.markCategoryTopicsRead",a,function(e){if(e){return app.alertError(e.message)}r(n)})})};function r(e){o(e);app.alertSuccess("[[unread:topics_marked_as_read.success]]");if(!$('[component="category"]').children().length){$("#category-no-topics").removeClass("hidden");$(".markread").addClass("hidden")}}function o(e){for(var a=0;a<e.length;a+=1){t.get("category/topic","tid",e[a]).remove()}}function c(e,t){if(!utils.isNumber(t)){return}$('a[href="'+config.relative_path+e+'"].navigation-link i').toggleClass("unread-count",t>0).attr("data-content",t>99?"99+":t)}n.initUnreadTopics=function(){var e=app.user.unreadData;function t(t){if(t&&t.posts&&t.posts.length){var r=t.posts[0];if(parseInt(r.uid,10)===parseInt(app.user.uid,10)||!r.topic.isFollowing&&r.categoryWatchState!==i.watching){return}var o=r.topic.tid;if(!e[""][o]||!e.new[o]||!e.watched[o]||!e.unreplied[o]){n(o)}if(!e[""][o]){a("");e[""][o]=true}var c=r.isMain&&parseInt(r.uid,10)!==parseInt(app.user.uid,10);if(c&&!e.new[o]){a("new");e.new[o]=true}var d=parseInt(r.topic.postcount,10)<=1;if(d&&!e.unreplied[o]){a("unreplied");e.unreplied[o]=true}if(r.topic.isFollowing&&!e.watched[o]){a("watched");e.watched[o]=true}}}function a(e){var t="/unread"+(e?"?filter="+e:"");var a=1+parseInt($('a[href="'+config.relative_path+t+'"].navigation-link i').attr("data-content"),10);c(t,a)}function n(e){$('[data-tid="'+e+'"]').addClass("unread")}$(window).on("action:ajaxify.end",function(){if(ajaxify.data.template.topic){["","new","watched","unreplied"].forEach(function(t){delete e[t][ajaxify.data.tid]})}});socket.removeListener("event:new_post",t);socket.on("event:new_post",t);socket.removeListener("event:unread.updateCount",d);socket.on("event:unread.updateCount",d)};function d(e){c("/unread",e.unreadTopicCount);c("/unread?filter=new",e.unreadNewTopicCount);c("/unread?filter=watched",e.unreadWatchedTopicCount);c("/unread?filter=unreplied",e.unreadUnrepliedTopicCount)}return n});
//# sourceMappingURL=unread.js.map