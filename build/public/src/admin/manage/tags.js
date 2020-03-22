"use strict";define("admin/manage/tags",["forum/infinitescroll","admin/modules/selectable","admin/modules/colorpicker"],function(a,e,t){var n={};var o=0;n.init=function(){e.enable(".tag-management",".tag-row");r();i();c();s();l()};function r(){var a=$("#create-modal");var e=$("#create-tag-name");var t=$("#create-modal-go");a.on("keypress",function(a){if(a.keyCode===13){t.click()}});$("#create").on("click",function(){a.modal("show");setTimeout(function(){e.focus()},250)});t.on("click",function(){socket.emit("admin.tags.create",{tag:e.val()},function(t){if(t){return app.alertError(t.message)}e.val("");a.on("hidden.bs.modal",function(){ajaxify.refresh()});a.modal("hide")})})}function i(){$("#tag-search").on("input propertychange",function(){if(o){clearTimeout(o);o=0}o=setTimeout(function(){socket.emit("topics.searchAndLoadTags",{query:$("#tag-search").val()},function(a,t){if(a){return app.alertError(a.message)}app.parseAndTranslate("admin/manage/tags","tags",{tags:t.tags},function(a){$(".tag-list").html(a);utils.makeNumbersHumanReadable(a.find(".human-readable-number"));o=0;e.enable(".tag-management",".tag-row")})})},250)})}function c(){$("#modify").on("click",function(){var a=$(".tag-row.ui-selected");if(!a.length){return}var e=$(a[0]);var t=bootbox.dialog({title:"[[admin/manage/tags:alerts.editing]]",message:e.find(".tag-modal").html(),buttons:{success:{label:"Save",className:"btn-primary save",callback:function(){var e=$(".bootbox");var t=e.find('[data-name="bgColor"]').val();var n=e.find('[data-name="color"]').val();var o=[];a.each(function(a,r){r=$(r);o.push({value:r.attr("data-tag"),color:e.find('[data-name="color"]').val(),bgColor:e.find('[data-name="bgColor"]').val()});r.find('[data-name="bgColor"]').val(t);r.find('[data-name="color"]').val(n);r.find(".tag-item").css("background-color",t).css("color",n)});socket.emit("admin.tags.update",o,function(a){if(a){return app.alertError(a.message)}app.alertSuccess("[[admin/manage/tags:alerts.update-success]]")})}}}});m(t)})}function s(){$("#rename").on("click",function(){var a=$(".tag-row.ui-selected");if(!a.length){return}var e=bootbox.dialog({title:"[[admin/manage/tags:alerts.editing]]",message:$(".rename-modal").html(),buttons:{success:{label:"Save",className:"btn-primary save",callback:function(){var t=[];a.each(function(a,n){n=$(n);t.push({value:n.attr("data-tag"),newName:e.find('[data-name="value"]').val()})});socket.emit("admin.tags.rename",t,function(a){if(a){return app.alertError(a.message)}app.alertSuccess("[[admin/manage/tags:alerts.update-success]]")})}}}})})}function l(){$("#deleteSelected").on("click",function(){var a=$(".tag-row.ui-selected");if(!a.length){return}bootbox.confirm("[[admin/manage/tags:alerts.confirm-delete]]",function(e){if(!e){return}var t=[];a.each(function(a,e){t.push($(e).attr("data-tag"))});socket.emit("admin.tags.deleteTags",{tags:t},function(e){if(e){return app.alertError(e.message)}a.remove()})})})}function m(a){function e(a,e){var n=$(e);t.enable(n)}a.find('[data-name="bgColor"], [data-name="color"]').each(e)}return n});
//# sourceMappingURL=tags.js.map