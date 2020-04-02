"use strict";(function(e){if(typeof module==="object"&&module.exports){var r=require("nconf").get("relative_path");module.exports=e(require("../utils"),require("benchpressjs"),r)}else if(typeof define==="function"&&define.amd){define("helpers",["benchpress"],function(r){return e(utils,r,config.relative_path)})}})(function(e,r,a){r.setGlobal("true",true);r.setGlobal("false",false);var i={displayMenuItem:s,buildMetaTag:n,buildLinkTag:o,stringify:u,escape:l,stripTags:c,generateCategoryBackground:f,generateChildrenCategories:p,generateTopicClass:d,membershipBtn:g,spawnPrivilegeStates:m,localeToHTML:b,renderTopicImage:h,renderDigestAvatar:v,userAgentIcons:k,buildAvatar:w,register:x,__escape:t};function t(e){return e}function s(e,r){var a=e.navigation[r];if(!a){return false}if(a.route.match("/users")&&e.user&&!e.user.privileges["view:users"]){return false}if(a.route.match("/tags")&&e.user&&!e.user.privileges["view:tags"]){return false}if(a.route.match("/groups")&&e.user&&!e.user.privileges["view:groups"]){return false}return true}function n(e){var r=e.name?'name="'+e.name+'" ':"";var a=e.property?'property="'+e.property+'" ':"";var i=e.content?'content="'+e.content.replace(/\n/g," ")+'" ':"";return"<meta "+r+a+i+"/>\n\t"}function o(e){var r=e.link?'link="'+e.link+'" ':"";var a=e.rel?'rel="'+e.rel+'" ':"";var i=e.type?'type="'+e.type+'" ':"";var t=e.href?'href="'+e.href+'" ':"";var s=e.sizes?'sizes="'+e.sizes+'" ':"";var n=e.title?'title="'+e.title+'" ':"";return"<link "+r+a+i+s+n+t+"/>\n\t"}function u(e){return JSON.stringify(e).replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/g,"&quot;")}function l(r){return e.escapeHTML(r)}function c(r){return e.stripHTMLTags(r)}function f(e){if(!e){return""}var r=[];if(e.bgColor){r.push("background-color: "+e.bgColor)}if(e.color){r.push("color: "+e.color)}if(e.backgroundImage){r.push("background-image: url("+e.backgroundImage+")");if(e.imageClass){r.push("background-size: "+e.imageClass)}}return r.join("; ")+";"}function p(e){var r="";if(!e||!e.children||!e.children.length){return r}e.children.forEach(function(e){if(e&&!e.isSection){var i=e.link?e.link:a+"/category/"+e.slug;r+='<span class="category-children-item pull-left">'+'<div role="presentation" class="icon pull-left" style="'+f(e)+'">'+'<i class="fa fa-fw '+e.icon+'"></i>'+"</div>"+'<a href="'+i+'"><small>'+e.name+"</small></a></span>"}});r=r?'<span class="category-children">'+r+"</span>":r;return r}function d(e){var r=[];if(e.locked){r.push("locked")}if(e.pinned){r.push("pinned")}if(e.deleted){r.push("deleted")}if(e.unread){r.push("unread")}return r.join(" ")}function g(e){if(e.isMember&&e.name!=="administrators"){return'<button class="btn btn-danger" data-action="leave" data-group="'+e.displayName+'"'+(e.disableLeave?" disabled":"")+'><i class="fa fa-times"></i> [[groups:membership.leave-group]]</button>'}if(e.isPending&&e.name!=="administrators"){return'<button class="btn btn-warning disabled"><i class="fa fa-clock-o"></i> [[groups:membership.invitation-pending]]</button>'}else if(e.isInvited){return'<button class="btn btn-link" data-action="rejectInvite" data-group="'+e.displayName+'">[[groups:membership.reject]]</button><button class="btn btn-success" data-action="acceptInvite" data-group="'+e.name+'"><i class="fa fa-plus"></i> [[groups:membership.accept-invitation]]</button>'}else if(!e.disableJoinRequests&&e.name!=="administrators"){return'<button class="btn btn-success" data-action="join" data-group="'+e.displayName+'"><i class="fa fa-plus"></i> [[groups:membership.join-group]]</button>'}return""}function m(e,r){var a=[];for(var i in r){if(r.hasOwnProperty(i)){a.push({name:i,state:r[i]})}}return a.map(function(r){var a=["groups:moderate","groups:posts:upvote","groups:posts:downvote","groups:local:login","groups:group:create"];var i=["groups:find","groups:read","groups:topics:read","groups:view:users","groups:view:tags","groups:view:groups"];var t=["groups:moderate"];var s=e==="guests"&&a.includes(r.name)||e==="spiders"&&!i.includes(r.name)||e==="Global Moderators"&&t.includes(r.name);return'<td class="text-center" data-privilege="'+r.name+'"><input type="checkbox"'+(r.state?" checked":"")+(s?' disabled="disabled"':"")+" /></td>"}).join("")}function b(e,r){e=e||r||"en-GB";return e.replace("_","-")}function h(e){if(e.thumb){return'<img src="'+e.thumb+'" class="img-circle user-img" title="'+e.user.username+'" />'}return'<img component="user/picture" data-uid="'+e.user.uid+'" src="'+e.user.picture+'" class="user-img" title="'+e.user.username+'" />'}function v(e){if(e.teaser){if(e.teaser.user.picture){return'<img style="vertical-align: middle; width: 32px; height: 32px; border-radius: 50%;" src="'+e.teaser.user.picture+'" title="'+e.teaser.user.username+'" />'}return'<div style="vertical-align: middle; width: 32px; height: 32px; line-height: 32px; font-size: 16px; background-color: '+e.teaser.user["icon:bgColor"]+'; color: white; text-align: center; display: inline-block; border-radius: 50%;">'+e.teaser.user["icon:text"]+"</div>"}if(e.user.picture){return'<img style="vertical-align: middle; width: 32px; height: 32px; border-radius: 50%;" src="'+e.user.picture+'" title="'+e.user.username+'" />'}return'<div style="vertical-align: middle; width: 32px; height: 32px; line-height: 32px; font-size: 16px; background-color: '+e.user["icon:bgColor"]+'; color: white; text-align: center; display: inline-block; border-radius: 50%;">'+e.user["icon:text"]+"</div>"}function k(e){var r="";switch(e.platform){case"Linux":r+='<i class="fa fa-fw fa-linux"></i>';break;case"Microsoft Windows":r+='<i class="fa fa-fw fa-windows"></i>';break;case"Apple Mac":r+='<i class="fa fa-fw fa-apple"></i>';break;case"Android":r+='<i class="fa fa-fw fa-android"></i>';break;case"iPad":r+='<i class="fa fa-fw fa-tablet"></i>';break;case"iPod":case"iPhone":r+='<i class="fa fa-fw fa-mobile"></i>';break;default:r+='<i class="fa fa-fw fa-question-circle"></i>';break}switch(e.browser){case"Chrome":r+='<i class="fa fa-fw fa-chrome"></i>';break;case"Firefox":r+='<i class="fa fa-fw fa-firefox"></i>';break;case"Safari":r+='<i class="fa fa-fw fa-safari"></i>';break;case"IE":r+='<i class="fa fa-fw fa-internet-explorer"></i>';break;case"Edge":r+='<i class="fa fa-fw fa-edge"></i>';break;default:r+='<i class="fa fa-fw fa-question-circle"></i>';break}return r}function w(e,r,a,i,t){var s=['alt="'+e.username+'"','title="'+e.username+'"','data-uid="'+e.uid+'"'];var n=[];i=i||"";if(["xs","sm","sm2x","md","lg","xl"].includes(r)){i+=" avatar-"+r}else if(!isNaN(parseInt(r,10))){n.push("width: "+r+"px;","height: "+r+"px;","line-height: "+r+"px;","font-size: "+parseInt(r,10)/16+"rem;")}else{i+=" avatar-sm"}s.unshift('class="avatar '+i+(a?" avatar-rounded":"")+'"');if(t){s.push('component="'+t+'"')}else{s.push('component="avatar/'+(e.picture?"picture":"icon")+'"')}if(e.picture){return"<img "+s.join(" ")+' src="'+e.picture+'" style="'+n.join(" ")+'" />'}n.push("background-color: "+e["icon:bgColor"]+";");return"<span "+s.join(" ")+' style="'+n.join(" ")+'">'+e["icon:text"]+"</span>"}function x(){Object.keys(i).forEach(function(e){r.registerHelper(e,i[e])})}return i});
//# sourceMappingURL=helpers.js.map