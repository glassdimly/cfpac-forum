"use strict";define("settings",function(){var e=["settings/checkbox","settings/number","settings/textarea","settings/select","settings/array","settings/key","settings/object","settings/sorted-list"];var t;var n=[];var i=0;var a;function r(e,n){var i;var a;if(typeof e!=="string"){e=$(e);e=e.data("type")||e.attr("type")||e.prop("tagName")}a=t.plugins[e.toLowerCase()];if(a==null){return}i=a[n];if(typeof i==="function"){return i}return null}a={deepClone:function(e){if(typeof e==="object"){return JSON.parse(JSON.stringify(e))}return e},createElement:function(e,t,n){var i=document.createElement(e);for(var a in t){if(t.hasOwnProperty(a)){i.setAttribute(a,t[a])}}if(n){i.appendChild(document.createTextNode(n))}return i},initElement:function(e){var n=r(e,"init");if(n!=null){n.call(t,$(e))}},destructElement:function(e){var n=r(e,"destruct");if(n!=null){n.call(t,$(e))}},createElementOfType:function(e,n,i){var s;var l=r(e,"create");if(l!=null){s=$(l.call(t,e,n,i))}else{if(i==null){i={}}if(e!=null){i.type=e}s=$(a.createElement(n||"input",i))}s.data("type",e);a.initElement(s);return s},cleanArray:function(e,t,n){var i=[];if(!t&&n){return e}for(var a=0;a<e.length;a+=1){var r=e[a];if(t){if(r===!!r){r=+r}else if(r&&typeof r.trim==="function"){r=r.trim()}}if(n||r!=null&&r.length){i.push(r)}}return i},isTrue:function(e){return e==="true"||+e===1},isFalse:function(e){return e==="false"||+e===0},readValue:function(e){var n=!a.isFalse(e.data("empty"));var i=!a.isFalse(e.data("trim"));var s=e.data("split");var l=r(e,"get");var f;if(l!=null){return l.call(t,e,i,n)}if(s!=null){n=a.isTrue(e.data("empty"));f=e.val();var u=f!=null&&f.split(s||",")||[];return a.cleanArray(u,i,n)}f=e.val();if(i&&f!=null&&typeof f.trim==="function"){f=f.trim()}if(n||f!==undefined&&(f==null||f.length!==0)){return f}},fillField:function(e,n){var i=r(e,"set");var a=e.data("trim");a=a!=="false"&&+a!==0;if(i!=null){return i.call(t,e,n,a)}if(n instanceof Array){n=n.join(e.data("split")||(a?", ":","))}if(a&&n&&typeof n.trim==="function"){n=n.trim();if(typeof n.toString==="function"){n=n.toString()}}else if(n!=null){if(typeof n.toString==="function"){n=n.toString()}if(a){n=n.trim()}}else{n=""}if(n!==undefined){e.val(n)}},initFields:function(e){$("[data-key]",e).each(function(e,n){n=$(n);var i=r(n,"init");var s=n.data("key").split(".");var l=t.get();if(i!=null){i.call(t,n)}for(var f=0;f<s.length;f+=1){var u=s[f];if(u&&l!=null){l=l[u]}}a.fillField(n,l)})},registerReadyJobs:function(e){i+=e;return i},beforeReadyJobsDecreased:function(e){if(e==null){e=1}if(i>0){i-=e;if(i<=0){for(var t=0;t<n.length;t+=1){n[t]()}n=[]}}},whenReady:function(e){if(i<=0){e()}else{n.push(e)}},serializeForm:function(e){var t=e.serializeObject();e.find('input[type="checkbox"]').each(function(e,n){n=$(n);if(!n.is(":checked")){t[n.attr("name")]="off"}});e.find("select[multiple]").each(function(e,n){n=$(n);t[n.attr("name")]=JSON.stringify(n.val())});return t},persistSettings:function(e,t,n,i){if(t!=null&&t._!=null&&typeof t._!=="string"){t=a.deepClone(t);t._=JSON.stringify(t._)}socket.emit("admin.settings.set",{hash:e,values:t},function(e){if(n){if(e){app.alert({title:"Settings Not Saved",type:"danger",message:"NodeBB failed to save the settings.",timeout:5e3})}else{app.alert({title:"Settings Saved",type:"success",message:"Settings have been successfully saved",timeout:2500})}}if(typeof i==="function"){i(e)}})},use:function(e){try{e._=JSON.parse(e._)}catch(e){}t.cfg=e}};t={helper:a,plugins:{},cfg:{},get:function(){if(t.cfg!=null&&t.cfg._!==undefined){return t.cfg._}return t.cfg},registerPlugin:function(e,n){if(n==null){n=e.types}else{e.types=n}if(typeof e.use==="function"){e.use.call(t)}for(var i=0;i<n.length;i+=1){var a=n[i].toLowerCase();if(t.plugins[a]==null){t.plugins[a]=e}}},set:function(e,t,n,i,r){if(r==null){r=true}a.whenReady(function(){a.use(t);a.initFields(n||"form");a.persistSettings(e,t,r,i)})},sync:function(e,t,n){socket.emit("admin.settings.get",{hash:e},function(e,i){if(e){if(typeof n==="function"){n(e)}}else{a.whenReady(function(){a.use(i);a.initFields(t||"form");if(typeof n==="function"){n()}})}})},persist:function(e,n,i,r){var s=[];var l=$("[data-key]",n||"form").toArray();if(r==null){r=true}for(var f=0;f<l.length;f+=1){var u=$(l[f]);var o=a.readValue(u);var c=t.get();var g=u.data("key").split(".");var d=g[g.length-1];if(g.length>1){for(var p=0;p<g.length-1;p+=1){var v=g[p];if(v&&c!=null){c=c[v]}}}if(c!=null){if(o!=null){c[d]=o}else{delete c[d]}}else{s.push(u.data("key"))}}if(s.length){app.alert({title:"Attributes Not Saved",message:"'"+s.join(", ")+"' could not be saved. Please contact the plugin-author!",type:"danger",timeout:5e3})}a.persistSettings(e,t.cfg,r,i)},load:function(e,n,i){i=i||function(){};socket.emit("admin.settings.get",{hash:e},function(s,l){if(s){return i(s)}$(n).find("select[multiple]").each(function(e,t){var n=$(t).attr("name");if(n&&l.hasOwnProperty(n)){try{l[n]=JSON.parse(l[n])}catch(e){}}});ajaxify.data.settings=l;a.whenReady(function(){$(n).find("[data-sorted-list]").each(function(n,i){r(i,"get").call(t,$(i),e)})});$(n).deserialize(l);$(n).find('input[type="checkbox"]').each(function(){$(this).parents(".mdl-switch").toggleClass("is-checked",$(this).is(":checked"))});$(window).trigger("action:admin.settingsLoaded");$(n).on("change","input, select, textarea",function(){app.flags=app.flags||{};app.flags._unsaved=true});i(null,l)})},save:function(e,n,i){n=$(n);if(n.length){var s=a.serializeForm(n);a.whenReady(function(){var e=n.find("[data-sorted-list]");if(e.length){r(e,"set").call(t,e,s)}});socket.emit("admin.settings.set",{hash:e,values:s},function(e){app.flags._unsaved=false;ajaxify.data.settings=s;if(typeof i==="function"){i(e)}else if(e){app.alert({title:"Error while saving settings",type:"error",timeout:2500})}else{app.alert({title:"Settings Saved",type:"success",timeout:2500})}})}}};a.registerReadyJobs(1);require(e,function(){for(var e=0;e<arguments.length;e+=1){t.registerPlugin(arguments[e])}a.beforeReadyJobsDecreased()});return t});
//# sourceMappingURL=settings.js.map