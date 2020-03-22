"use strict";define("forum/topic/fork",["components","postSelect"],function(t,i){var e={};var n;var o;var a;e.init=function(){a=ajaxify.data.tid;$(window).off("action:ajaxify.end",f).on("action:ajaxify.end",f);if(n){return}app.parseAndTranslate("partials/fork_thread_modal",{},function(t){n=t;o=n.find("#fork_thread_commit");$("body").append(n);n.find(".close,#fork_thread_cancel").on("click",s);n.find("#fork-title").on("keyup",d);i.init(function(){d();c()});c();o.on("click",r)})};function f(){if(ajaxify.data.template.name!=="topic"||ajaxify.data.tid!==a){s();$(window).off("action:ajaxify.end",f)}}function r(){o.attr("disabled",true);socket.emit("topics.createTopicFromPosts",{title:n.find("#fork-title").val(),pids:i.pids,fromTid:a},function(e,n){function a(i){t.get("post","pid",i).fadeOut(500,function(){$(this).remove()})}o.removeAttr("disabled");if(e){return app.alertError(e.message)}app.alert({timeout:5e3,title:"[[global:alert.success]]",message:"[[topic:fork_success]]",type:"success",clickfn:function(){ajaxify.go("topic/"+n.slug)}});i.pids.forEach(function(t){a(t)});s()})}function c(){if(i.pids.length){n.find("#fork-pids").translateHtml("[[topic:fork_pid_count, "+i.pids.length+"]]")}else{n.find("#fork-pids").translateHtml("[[topic:fork_no_pids]]")}}function d(){if(n.find("#fork-title").val().length&&i.pids.length){o.removeAttr("disabled")}else{o.attr("disabled",true)}}function s(){if(n){n.remove();n=null;i.disable()}}return e});
//# sourceMappingURL=fork.js.map