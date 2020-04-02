"use strict";define("forum/groups/details",["forum/groups/memberlist","iconSelect","components","coverPhoto","pictureCropper","translator","vendor/colorpicker/colorpicker"],function(e,a,t,r,o,i){var n={};var s;n.init=function(){var a=t.get("groups/container");s=ajaxify.data.group.name;if(ajaxify.data.group.isOwner){n.prepareSettings();r.init(t.get("groups/cover"),function(e,a,t){socket.emit("groups.cover.update",{groupName:s,imageData:e,position:a},t)},function(){o.show({title:"[[groups:upload-group-cover]]",socketMethod:"groups.cover.update",aspectRatio:NaN,allowSkippingCrop:true,restrictImageDimension:false,paramName:"groupName",paramValue:s},function(e){e=(!e.startsWith("http")?config.relative_path:"")+e+"?"+Date.now();t.get("groups/cover").css("background-image","url("+e+")")})},u)}e.init();c();t.get("groups/activity").find(".content img:not(.not-responsive)").addClass("img-responsive");a.on("click","[data-action]",function(){var e=$(this);var a=e.parents("[data-uid]");var t=a.find(".member-name > i");var r=!t.hasClass("invisible");var o=a.attr("data-uid");var c=e.attr("data-action");switch(c){case"toggleOwnership":socket.emit("groups."+(r?"rescind":"grant"),{toUid:o,groupName:s},function(e){if(!e){t.toggleClass("invisible")}else{app.alertError(e.message)}});break;case"kick":i.translate("[[groups:details.kick_confirm]]",function(e){bootbox.confirm(e,function(e){if(!e){return}socket.emit("groups.kick",{uid:o,groupName:s},function(e){if(!e){a.slideUp().remove()}else{app.alertError(e.message)}})})});break;case"update":n.update();break;case"delete":n.deleteGroup();break;case"join":case"leave":case"accept":case"reject":case"issueInvite":case"rescindInvite":case"acceptInvite":case"rejectInvite":case"acceptAll":case"rejectAll":socket.emit("groups."+c,{toUid:o,groupName:s},function(e){if(!e){ajaxify.refresh()}else{app.alertError(e.message)}});break}})};n.prepareSettings=function(){var e=t.get("groups/settings");var r=e.find('[data-action="label-color-select"]');var o=e.find('[data-action="text-color-select"]');var i=e.find('[name="labelColor"]');var n=e.find('[name="textColor"]');var s=e.find('[data-action="icon-select"]');var c=e.find(".label");var u=c.find("i");var p=e.find('[name="userTitle"]');var l=e.find('[name="userTitleEnabled"]');var f=e.find('[name="icon"]');r.ColorPicker({color:i.val()||"#000",onChange:function(e,a){i.val("#"+a);c.css("background-color","#"+a)},onShow:function(e){$(e).css("z-index",1051)}});o.ColorPicker({color:n.val()||"#fff",onChange:function(e,a){n.val("#"+a);c.css("color","#"+a)},onShow:function(e){$(e).css("z-index",1051)}});s.on("click",function(){a.init(u,function(){f.val(u.val())})});p.on("keyup",function(){var a=u.detach();c.text(" "+(this.value||e.find("#name").val()));c.prepend(a)});l.on("change",function(){var e=t.get("groups/userTitleOption");if(this.checked){e.removeAttr("disabled");c.removeClass("hide")}else{e.attr("disabled","disabled");c.addClass("hide")}})};n.update=function(){var e=t.get("groups/settings");var a=e.find('input[type="checkbox"][name]');if(e.length){require(["vendor/jquery/serializeObject/jquery.ba-serializeobject.min"],function(){var t=e.serializeObject();a.each(function(e,a){a=$(a);if(a.length){t[a.attr("name")]=a.prop("checked")}});socket.emit("groups.update",{groupName:s,values:t},function(e){if(e){return app.alertError(e.message)}if(t.name){var a=window.location.pathname;a=a.substr(1,a.lastIndexOf("/"));ajaxify.go(a+utils.slugify(t.name))}else{ajaxify.refresh()}app.alertSuccess("[[groups:event.updated]]")})})}};n.deleteGroup=function(){bootbox.confirm("Are you sure you want to delete the group: "+utils.escapeHTML(s),function(e){if(e){bootbox.prompt("Please enter the name of this group in order to delete it:",function(e){if(e===s){socket.emit("groups.delete",{groupName:s},function(e){if(!e){app.alertSuccess("[[groups:event.deleted, "+utils.escapeHTML(s)+"]]");ajaxify.go("groups")}else{app.alertError(e.message)}})}})}})};function c(){if(!ajaxify.data.group.isOwner){return}var e=$('[component="groups/members/invite"]');require(["autocomplete"],function(a){a.user(e,function(e,a){socket.emit("groups.issueInvite",{toUid:a.item.user.uid,groupName:ajaxify.data.group.name},function(e){if(e){return app.alertError(e.message)}ajaxify.refresh()})})});$('[component="groups/members/bulk-invite-button"]').on("click",function(){var e=$('[component="groups/members/bulk-invite"]').val();if(!e){return false}socket.emit("groups.issueMassInvite",{usernames:e,groupName:ajaxify.data.group.name},function(e){if(e){return app.alertError(e.message)}ajaxify.refresh()});return false})}function u(){i.translate("[[groups:remove_group_cover_confirm]]",function(e){bootbox.confirm(e,function(e){if(!e){return}socket.emit("groups.cover.remove",{groupName:ajaxify.data.group.name},function(e){if(!e){ajaxify.refresh()}else{app.alertError(e.message)}})})})}return n});
//# sourceMappingURL=details.js.map