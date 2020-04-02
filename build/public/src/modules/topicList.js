"use strict";define("topicList",["forum/infinitescroll","handleBack","topicSelect","categorySearch"],function(e,t,a,i){var n={};var o="";var c={recent:"recent",unread:"unread",popular:"posts",top:"votes"};var r=0;var s=0;var d;var l;$(window).on("action:ajaxify.start",function(){n.removeListeners()});n.init=function(a,i){l=f();o=a;d=i||m;n.watchForNewPosts();n.handleCategorySelection();if(!config.usePagination){e.init(n.loadMoreTopics)}t.init(function(e,t){d(e,1,function(e,a){n.onTopicsLoaded(o,e.topics,ajaxify.data.showSelect,1,function(){t();a()})})});if($("body").height()<=$(window).height()&&l.children().length>=20){$("#load-more-btn").show()}$("#load-more-btn").on("click",function(){n.loadMoreTopics(1)});$(window).trigger("action:topics.loaded",{topics:ajaxify.data.topics})};function f(){return $('[component="category"]').filter(function(e,t){return!$(t).parents("[widget-area],[data-widget-area]").length})}n.watchForNewPosts=function(){$("#new-topics-alert").on("click",function(){$(this).addClass("hide")});s=0;r=0;n.removeListeners();socket.on("event:new_topic",g);socket.on("event:new_post",h)};n.removeListeners=function(){socket.removeListener("event:new_topic",g);socket.removeListener("event:new_post",h)};function p(e){return ajaxify.data.categories&&ajaxify.data.categories.length&&ajaxify.data.categories.some(function(t){return parseInt(t.cid,10)===parseInt(e,10)})}function g(e){if(ajaxify.data.selectedCids&&ajaxify.data.selectedCids.length&&ajaxify.data.selectedCids.indexOf(parseInt(e.cid,10))===-1||ajaxify.data.selectedFilter&&ajaxify.data.selectedFilter.filter==="watched"||ajaxify.data.template.category&&parseInt(ajaxify.data.cid,10)!==parseInt(e.cid,10)||!p(e.cid)){return}r+=1;u()}function h(e){var t=e.posts[0];if(!t||!t.topic){return}if(!t.topic.isFollowing&&(parseInt(t.topic.mainPid,10)===parseInt(t.pid,10)||ajaxify.data.selectedCids&&ajaxify.data.selectedCids.length&&ajaxify.data.selectedCids.indexOf(parseInt(t.topic.cid,10))===-1||ajaxify.data.selectedFilter&&ajaxify.data.selectedFilter.filter==="new"||ajaxify.data.selectedFilter&&ajaxify.data.selectedFilter.filter==="watched"&&!t.topic.isFollowing||ajaxify.data.template.category&&parseInt(ajaxify.data.cid,10)!==parseInt(t.topic.cid,10)||!p(t.topic.cid))){return}s+=1;u()}function u(){var e="";if(r===0){if(s===1){e="[[recent:there-is-a-new-post]]"}else if(s>1){e="[[recent:there-are-new-posts, "+s+"]]"}}else if(r===1){if(s===0){e="[[recent:there-is-a-new-topic]]"}else if(s===1){e="[[recent:there-is-a-new-topic-and-a-new-post]]"}else if(s>1){e="[[recent:there-is-a-new-topic-and-new-posts, "+s+"]]"}}else if(r>1){if(s===0){e="[[recent:there-are-new-topics, "+r+"]]"}else if(s===1){e="[[recent:there-are-new-topics-and-a-new-post, "+r+"]]"}else if(s>1){e="[[recent:there-are-new-topics-and-new-posts, "+r+", "+s+"]]"}}e+=" [[recent:click-here-to-reload]]";$("#new-topics-alert").translateText(e).removeClass("hide").fadeIn("slow");$("#category-no-topics").addClass("hide")}n.handleCategorySelection=function(){function e(){var e=[];$('[component="category/list"] [data-cid]').each(function(t,a){if($(a).find("i.fa-check").length){e.push(parseInt($(a).attr("data-cid"),10))}});e.sort(function(e,t){return e-t});return e}i.init($('[component="category/dropdown"]'));$('[component="category/dropdown"]').on("hidden.bs.dropdown",function(){var t=e();var a=ajaxify.data.selectedCids.length!==t.length;ajaxify.data.selectedCids.forEach(function(e,i){if(e!==t[i]){a=true}});if(a){var i=window.location.pathname;var n=utils.params();if(t.length){n.cid=t;i+="?"+decodeURIComponent($.param(n))}ajaxify.go(i)}});$('[component="category/list"]').on("click","[data-cid]",function(t){function a(e,t){$('[component="category/list"] [data-parent-cid="'+e+'"] [component="category/select/icon"]').toggleClass("fa-check",t);$('[component="category/list"] [data-parent-cid="'+e+'"]').each(function(e,i){a($(i).attr("data-cid"),t)})}var i=$(this);var n=$(this).attr("data-cid");if(t.ctrlKey){a(n,!i.find('[component="category/select/icon"]').hasClass("fa-check"))}i.find('[component="category/select/icon"]').toggleClass("fa-check");$('[component="category/list"] li').first().find("i").toggleClass("fa-check",!e().length);return false})};n.loadMoreTopics=function(e){if(!l.length||!l.children().length){return}var t=l.find('[component="category/topic"]');var a=e>0?t.last():t.first();var i=(parseInt(a.attr("data-index"),10)||0)+(e>0?1:0);if(!utils.isNumber(i)||i===0&&l.find('[component="category/topic"][data-index="0"]').length){return}d(i,e,function(t,a){n.onTopicsLoaded(o,t.topics,ajaxify.data.showSelect,e,a)})};function m(t,a,i){i=i||function(){};var n=utils.params();e.loadMore("topics.loadMoreSortedTopics",{after:t,direction:a,sort:c[o],count:config.topicsPerPage,cid:n.cid,query:n,term:ajaxify.data.selectedTerm&&ajaxify.data.selectedTerm.term,filter:ajaxify.data.selectedFilter.filter,set:l.attr("data-set")?l.attr("data-set"):"topics:recent"},i)}function y(e){return e.filter(function(e){return!l.find('[component="category/topic"][data-tid="'+e.tid+'"]').length})}n.onTopicsLoaded=function(t,i,n,o,c){if(!i||!i.length){$("#load-more-btn").hide();return c()}i=y(i);if(!i.length){$("#load-more-btn").hide();return c()}var r;var s;var d=l.find('[component="category/topic"]');if(o>0&&i.length){r=d.last()}else if(o<0&&i.length){s=d.first()}var f={topics:i,showSelect:n,template:{name:t}};f.template[t]=true;app.parseAndTranslate(t,"topics",f,function(n){l.removeClass("hidden");$("#category-no-topics").remove();if(r&&r.length){n.insertAfter(r)}else if(s&&s.length){var d=$(document).height();var f=$(window).scrollTop();n.insertBefore(s);$(window).scrollTop(f+($(document).height()-d))}else{l.append(n)}if(!a.getSelectedTids().length){e.removeExtra(l.find('[component="category/topic"]'),o,config.topicsPerPage*3)}n.find(".timeago").timeago();app.createUserTooltips(n);utils.makeNumbersHumanReadable(n.find(".human-readable-number"));$(window).trigger("action:topics.loaded",{topics:i,template:t});c()})};return n});
//# sourceMappingURL=topicList.js.map