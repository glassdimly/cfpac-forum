"use strict";define("forum/infinitescroll",function(){var o={};var r;var e=0;var i=false;var t;o.init=function(o,i){if(typeof o==="function"){r=o;t=$("body")}else{r=i;t=o||$("body")}e=$(window).scrollTop();$(window).off("scroll",n).on("scroll",n)};function n(){var o=utils.findBootstrapEnvironment();var n=(o==="xs"||o==="sm")&&$("html").hasClass("composing");if(i||n){return}var a=$(window).scrollTop();var l=$(window).height();var f=t.height()-l;var s=t.offset()?t.offset().top:0;var c=100*(a-s)/(f<=0?l:f);var v=20;var d=80;var u=a>e?1:-1;if(c<v&&a<e){r(u)}else if(c>d&&a>e){r(u)}else if(c<0&&u>0&&f<0){r(u)}e=a}o.loadMore=function(o,r,e){if(i){return}i=true;var t={method:o,data:r};$(window).trigger("action:infinitescroll.loadmore",t);socket.emit(t.method,t.data,function(o,r){if(o){i=false;return app.alertError(o.message)}e(r,function(){i=false})})};o.removeExtra=function(o,r,e){if(o.length<=e){return}var i=o.length-e;if(r>0){var t=$(document).height();var n=$(window).scrollTop();o.slice(0,i).remove();$(window).scrollTop(n+($(document).height()-t))}else{o.slice(o.length-i).remove()}};return o});
//# sourceMappingURL=infinitescroll.js.map