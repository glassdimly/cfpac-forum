"use strict";define("sounds",["storage"],function(n){var e={};var t;var o;var r={};e.loadMap=function n(e){socket.emit("modules.sounds.getUserSoundMap",function(n,t){if(n){return app.alertError(n.message)}o=t;if(e){e()}})};function u(n){var o=2;function r(){o-=1;if(o===0&&n){n()}}if(t){o-=1}else{$.getJSON(config.relative_path+"/assets/sounds/fileMap.json",function(n){t=n;r()})}e.loadMap(r)}e.playSound=function n(e){if(!o||!t){return u(i)}function i(){if(!t[e]){return}var n=r[e]||new Audio(config.relative_path+"/assets/sounds/"+t[e]);r[e]=n;n.pause();n.currentTime=0;n.play()}i()};e.play=function r(i,a){function s(){if(!o[i]){return}if(a){var t="sounds.handled:"+a;if(n.getItem(t)){return}n.setItem(t,true);setTimeout(function(){n.removeItem(t)},5e3)}e.playSound(o[i])}if(!o||!t){return u(s)}s()};socket.on("event:sounds.reloadMapping",function(){e.loadMap()});return e});
//# sourceMappingURL=sounds.js.map