"use strict";define("handleBack",["components","storage","navigator","forum/pagination"],function(t,o,e,a){var i={};var r;i.init=function(t){r=t;n();$(window).off("action:popstate",c).on("action:popstate",c)};function n(){$('[component="category"]').on("click",'[component="topic/header"]',function(){var t=$(this).parents("[data-index]").attr("data-index");var e=$(window).scrollTop();$('[component="category/topic"]').each(function(a,i){if($(i).offset().top-e>0){o.setItem("category:bookmark",$(i).attr("data-index"));o.setItem("category:bookmark:clicked",t);o.setItem("category:bookmark:offset",$(i).offset().top-e);return false}})})}function c(){if(ajaxify.data.template.category||ajaxify.data.template.recent){var t=o.getItem("category:bookmark");var e=o.getItem("category:bookmark:clicked");o.removeItem("category:bookmark");o.removeItem("category:bookmark:clicked");if(!utils.isNumber(t)){return}t=Math.max(0,parseInt(t,10)||0);e=Math.max(0,parseInt(e,10)||0);if(config.usePagination){var n=Math.ceil((parseInt(t,10)+1)/config.topicsPerPage);if(parseInt(n,10)!==ajaxify.data.pagination.currentPage){a.loadPage(n,function(){i.scrollToTopic(t,e)})}else{i.scrollToTopic(t,e)}}else{if(t===0){i.scrollToTopic(t,e);return}$('[component="category"]').empty();r(Math.max(0,t-1)+1,function(){i.scrollToTopic(t,e)})}}}i.highlightTopic=function(o){var e=t.get("category/topic","index",o);if(e.length&&!e.hasClass("highlight")){e.addClass("highlight");setTimeout(function(){e.removeClass("highlight")},5e3)}};i.scrollToTopic=function(a,r){if(!utils.isNumber(a)){return}var n=t.get("category/topic","index",a);if(n.length){var c=o.getItem("category:bookmark:offset");o.removeItem("category:bookmark:offset");$(window).scrollTop(n.offset().top-c);i.highlightTopic(r);e.update()}};return i});
//# sourceMappingURL=handleBack.js.map