"use strict";define("forum/chats/messages",["components","sounds","translator","benchpress"],function(e,t,a,s){var n={};n.sendMessage=function(e,a){var s=a.val();var r=a.attr("data-mid");if(!s.trim().length){return}a.val("");a.removeAttr("data-mid");n.updateRemainingLength(a.parent());$(window).trigger("action:chat.sent",{roomId:e,message:s,mid:r});if(!r){socket.emit("modules.chats.send",{roomId:e,message:s},function(e){if(e){a.val(s);n.updateRemainingLength(a.parent());if(e.message==="[[error:email-not-confirmed-chat]]"){return app.showEmailConfirmWarning(e)}return app.alert({alert_id:"chat_spam_error",title:"[[global:alert.error]]",message:e.message,type:"danger",timeout:1e4})}t.play("chat-outgoing")})}else{socket.emit("modules.chats.edit",{roomId:e,mid:r,message:s},function(e){if(e){a.val(s);a.attr("data-mid",r);n.updateRemainingLength(a.parent());return app.alertError(e.message)}})}};n.updateRemainingLength=function(e){var t=e.find('[component="chat/input"]');e.find('[component="chat/message/length"]').text(t.val().length);e.find('[component="chat/message/remaining"]').text(config.maximumChatMessageLength-t.val().length);$(window).trigger("action:chat.updateRemainingLength",{parent:e})};n.appendChatMessage=function(e,t){var a=parseInt(e.find(".chat-message").last().attr("data-uid"),10);var s=parseInt(e.find(".chat-message").last().attr("data-timestamp"),10);if(!Array.isArray(t)){t.newSet=a!==parseInt(t.fromuid,10)||parseInt(t.timestamp,10)>parseInt(s,10)+1e3*60*3}n.parseMessage(t,function(t){r(e,t)})};function r(e,t){var a=$(t);a.appendTo(e);a.find(".timeago").timeago();a.find("img:not(.not-responsive)").addClass("img-responsive");n.scrollToBottom(e);$(window).trigger("action:chat.received",{messageEl:a})}n.parseMessage=function(e,t){function n(e){a.translate(e,t)}if(Array.isArray(e)){s.parse("partials/chats/message"+(Array.isArray(e)?"s":""),{messages:e},n)}else{s.parse("partials/chats/"+(e.system?"system-message":"message"),{messages:e},n)}};n.scrollToBottom=function(e){if(e.length){e.scrollTop(e[0].scrollHeight-e.height())}};n.prepEdit=function(e,t,a){socket.emit("modules.chats.getRaw",{mid:t,roomId:a},function(a,s){if(a){return app.alertError(a.message)}if(e.val().length===0){e.attr("data-mid",t).addClass("editing");e.val(s).focus()}})};n.addSocketListeners=function(){socket.removeListener("event:chats.edit",o);socket.on("event:chats.edit",o);socket.removeListener("event:chats.delete",i);socket.on("event:chats.delete",i);socket.removeListener("event:chats.restore",m);socket.on("event:chats.restore",m)};function o(t){t.messages.forEach(function(t){var a=parseInt(t.fromuid,10)===parseInt(app.user.uid,10);t.self=a?1:0;n.parseMessage(t,function(a){var s=e.get("chat/message",t.messageId);if(s.length){s.replaceWith(a);e.get("chat/message",t.messageId).find(".timeago").timeago()}})})}function i(t){e.get("chat/message",t).toggleClass("deleted",true).find('[component="chat/message/body"]').translateHtml("[[modules:chat.message-deleted]]")}function m(t){e.get("chat/message",t.messageId).toggleClass("deleted",false).find('[component="chat/message/body"]').html(t.content)}n.delete=function(t,s){a.translate("[[modules:chat.delete_message_confirm]]",function(a){bootbox.confirm(a,function(a){if(!a){return}socket.emit("modules.chats.delete",{messageId:t,roomId:s},function(a){if(a){return app.alertError(a.message)}e.get("chat/message",t).toggleClass("deleted",true)})})})};n.restore=function(t,a){socket.emit("modules.chats.restore",{messageId:t,roomId:a},function(a){if(a){return app.alertError(a.message)}e.get("chat/message",t).toggleClass("deleted",false)})};return n});
//# sourceMappingURL=messages.js.map