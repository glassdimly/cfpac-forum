"use strict";define("forum/footer",["components","translator","forum/unread","forum/header/notifications","forum/header/chat"],function(e,t,n,r,a){r.prepareDOM();a.prepareDOM();t.prepareDOM();socket.on("event:unread.updateChatCount",function(t){e.get("chat/icon").toggleClass("unread-count",t>0).attr("data-content",t>99?"99+":t)});if(app.user.uid>0){n.initUnreadTopics()}});
//# sourceMappingURL=footer.js.map