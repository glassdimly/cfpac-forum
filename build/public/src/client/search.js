"use strict";define("forum/search",["search","autocomplete","storage"],function(e,t,s){var a={};a.init=function(){var t=$("#results").attr("data-search-query");var s=$("#search-in");s.on("change",function(){i(s.val())});c(t);$("#advanced-search").off("submit").on("submit",function(t){t.preventDefault();e.query(r(),function(){$("#search-input").val("")});return false});o();l();n()};function r(){var e=$("#advanced-search");var t={in:$("#search-in").val()};t.term=$("#search-input").val();if(t.in==="posts"||t.in==="titlesposts"||t.in==="titles"){t.matchWords=e.find("#match-words-filter").val();t.by=e.find("#posted-by-user").tagsinput("items");t.categories=e.find("#posted-in-categories").val();t.searchChildren=e.find("#search-children").is(":checked");t.hasTags=e.find("#has-tags").tagsinput("items");t.replies=e.find("#reply-count").val();t.repliesFilter=e.find("#reply-count-filter").val();t.timeFilter=e.find("#post-time-filter").val();t.timeRange=e.find("#post-time-range").val();t.sortBy=e.find("#post-sort-by").val();t.sortDirection=e.find("#post-sort-direction").val();t.showAs=e.find("#show-as-topics").is(":checked")?"topics":"posts"}$(window).trigger("action:search.getSearchDataFromDOM",{form:e,data:t});return t}function i(e){var t=e.indexOf("posts")===-1&&e.indexOf("titles")===-1;$(".post-search-item").toggleClass("hide",t)}function n(){var t=utils.params({disableToType:true});var s=e.getSearchPreferences();var a=utils.merge(s,t);if(a){if(ajaxify.data.term){$("#search-input").val(ajaxify.data.term)}a.in=a.in||"posts";$("#search-in").val(a.in);i(a.in);if(a.matchWords){$("#match-words-filter").val(a.matchWords)}if(a.by){a.by=Array.isArray(a.by)?a.by:[a.by];a.by.forEach(function(e){$("#posted-by-user").tagsinput("add",e)})}if(a.categories){$("#posted-in-categories").val(a.categories)}if(a.searchChildren){$("#search-children").prop("checked",true)}if(a.hasTags){a.hasTags=Array.isArray(a.hasTags)?a.hasTags:[a.hasTags];a.hasTags.forEach(function(e){$("#has-tags").tagsinput("add",e)})}if(a.replies){$("#reply-count").val(a.replies);$("#reply-count-filter").val(a.repliesFilter)}if(a.timeRange){$("#post-time-range").val(a.timeRange);$("#post-time-filter").val(a.timeFilter)}if(a.sortBy||ajaxify.data.searchDefaultSortBy){$("#post-sort-by").val(a.sortBy||ajaxify.data.searchDefaultSortBy)}$("#post-sort-direction").val(a.sortDirection||"desc");if(a.showAs){var r=a.showAs==="topics";var n=a.showAs==="posts";$("#show-as-topics").prop("checked",r).parent().toggleClass("active",r);$("#show-as-posts").prop("checked",n).parent().toggleClass("active",n)}$(window).trigger("action:search.fillOutForm",{form:a})}}function c(e){if(!e){return}e=utils.escapeHTML(e.replace(/^"/,"").replace(/"$/,"").trim());var t=e.split(" ").join("|");var s=new RegExp("("+utils.escapeRegexChars(t)+")","gi");$(".search-result-text p, .search-result-text h4").each(function(){var e=$(this);var t=[];e.find("*").each(function(){$(this).after("\x3c!-- "+t.length+" --\x3e");t.push($("<div />").append($(this)))});e.html(e.html().replace(s,function(e,t){return'<strong class="search-match">'+t+"</strong>"}));t.forEach(function(t,s){e.html(e.html().replace("\x3c!-- "+s+" --\x3e",function(){return t.html()}))})});$(".search-result-text").find("img:not(.not-responsive)").addClass("img-responsive")}function o(){$("#save-preferences").on("click",function(){s.setItem("search-preferences",JSON.stringify(r()));app.alertSuccess("[[search:search-preferences-saved]]");return false});$("#clear-preferences").on("click",function(){s.removeItem("search-preferences");var e=$("#search-input").val();$("#advanced-search")[0].reset();$("#search-input").val(e);app.alertSuccess("[[search:search-preferences-cleared]]");return false})}function l(){var e=$("#posted-by-user");e.tagsinput({confirmKeys:[13,44],trimValue:true});t.user(e.siblings(".bootstrap-tagsinput").find("input"));var s=$("#has-tags");s.tagsinput({confirmKeys:[13,44],trimValue:true});t.tag(s.siblings(".bootstrap-tagsinput").find("input"))}return a});
//# sourceMappingURL=search.js.map