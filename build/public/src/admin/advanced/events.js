"use strict";define("admin/advanced/events",function(){var e={};e.init=function(){$("#apply").on("click",e.refresh)};e.refresh=function(e){e.preventDefault();var n=$("#filters");ajaxify.go("admin/advanced/events?"+n.serialize())};return e});
//# sourceMappingURL=events.js.map