!function(s){"object"==typeof module&&module.exports?module.exports=s():"function"==typeof define&&define.amd&&define(s)}(function(){function m(s,t,e,a,n){return'\n<div id="chat-modal" class="chat-modal hide" tabindex="-1" role="dialog" aria-labelledby="Chat" aria-hidden="true" data-backdrop="none">\n\t<div class="modal-dialog">\n\t\t<div class="modal-content">\n\t\t\t<div class="modal-header">\n\t\t\t\t<button id="chat-close-btn" type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n\t\t\t\t<button type="button" class="close hidden-xs hidden-sm" data-action="maximize"><span aria-hidden="true"><i class="fa fa-expand"></i></span><span class="sr-only">[[modules:chat.maximize]]</span></button>\n\t\t\t\t<button type="button" class="close hidden-xs hidden-sm" data-action="minimize"><span aria-hidden="true"><i class="fa fa-minus"></i></span><span class="sr-only">[[modules:chat.minimize]]</span></button>\n\t\t\t\t<div class="dropdown pull-right">\n\t\t\t\t\t<button class="close" data-toggle="dropdown" component="chat/controlsToggle"><i class="fa fa-gear"></i></button>\n\t\t\t\t\t<ul class="dropdown-menu dropdown-menu-right pull-right" component="chat/controls">\n\t\t\t\t\t\t<li class="dropdown-header">[[modules:chat.options]]</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href="#" data-action="members"><i class="fa fa-fw fa-cog"></i> [[modules:chat.manage-room]]</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href="#" data-action="rename"><i class="fa fa-fw fa-edit"></i> [[modules:chat.rename-room]]</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href="#" data-action="leave"><i class="fa fa-fw fa-sign-out"></i> [[modules:chat.leave]]</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t'+(e(t&&t.users&&t.users.length)?'\n\t\t\t\t\t\t<li role="separator" class="divider"></li>\n\t\t\t\t\t\t<li class="dropdown-header">[[modules:chat.in-room]]</li>\n\t\t\t\t\t\t'+m.blocks.users(s,t,e,a,n)+"\n\t\t\t\t\t\t":"")+'\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\n\t\t\t\t<h4 component="chat/room/name">'+(e(t&&t.roomName)?s.__escape(e(t&&t.roomName)):s.__escape(e(t&&t.usernames)))+'</h4>\n\t\t\t</div>\n\n\t\t\t<div class="modal-body">\n\t\t\t\t<ul class="chat-content" component="chat/messages">\n\t\t\t\t\t'+m.blocks.messages(s,t,e,a,n)+'\n\t\t\t\t</ul>\n\n\t\t\t\t<div component="chat/composer">\n\t\t\t\t\t<textarea component="chat/input" placeholder="[[modules:chat.placeholder]]" class="form-control chat-input mousetrap" rows="1"></textarea>\n\t\t\t\t\t<button class="btn btn-primary" type="button" data-action="send"><i class="fa fa-fw fa-2x fa-paper-plane"></i></button>\n\t\t\t\t\t<span component="chat/message/remaining">'+s.__escape(e(t&&t.maximumChatMessageLength))+"</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"}return m.blocks={messages:function(t,e,a,s,n){return s(a(e&&e.messages),function(s){return"\n\t"+(a(e&&e.messages&&e.messages[s]&&e.messages[s].system)?'\n\t<li component="chat/system-message" class="system-message clear" data-index="'+t.__escape(a(e&&e.messages&&e.messages[s]&&e.messages[s].index))+'" data-mid="'+t.__escape(a(e&&e.messages&&e.messages[s]&&e.messages[s].messageId))+'" data-uid="'+t.__escape(a(e&&e.messages&&e.messages[s]&&e.messages[s].fromuid))+'" data-self="'+t.__escape(a(e&&e.messages&&e.messages[s]&&e.messages[s].self))+'" data-break="0" data-timestamp="'+t.__escape(a(e&&e.messages&&e.messages[s]&&e.messages[s].timestamp))+'">\n\t[[modules:chat.system.'+t.__escape(a(e&&e.messages&&e.messages[s]&&e.messages[s].content))+", "+t.__escape(a(e&&e.messages&&e.messages[s]&&e.messages[s].fromUser&&e.messages[s].fromUser.username))+"]]\n</li>\n\t":'\n\t<li component="chat/message" class="chat-message clear'+(a(e&&e.messages&&e.messages[s]&&e.messages[s].deleted)?" deleted":"")+'" data-index="'+t.__escape(a(e&&e.messages&&e.messages[s]&&e.messages[s].index))+'" data-mid="'+t.__escape(a(e&&e.messages&&e.messages[s]&&e.messages[s].messageId))+'" data-uid="'+t.__escape(a(e&&e.messages&&e.messages[s]&&e.messages[s].fromuid))+'" data-self="'+t.__escape(a(e&&e.messages&&e.messages[s]&&e.messages[s].self))+'" data-break="'+t.__escape(a(e&&e.messages&&e.messages[s]&&e.messages[s].newSet))+'" data-timestamp="'+t.__escape(a(e&&e.messages&&e.messages[s]&&e.messages[s].timestamp))+'">\n\t<div class="message-header">\n\t\t<a href="'+t.__escape(a(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(a(e&&e.messages&&e.messages[s]&&e.messages[s].fromUser&&e.messages[s].fromUser.userslug))+'">'+t.__escape(n(e,t,"buildAvatar",[a(e&&e.messages&&e.messages[s]&&e.messages[s].fromUser),"md",a(e&&e.true),"not-responsive"]))+'</a>\n\t\t<strong><span class="chat-user"><a href="'+t.__escape(a(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(a(e&&e.messages&&e.messages[s]&&e.messages[s].fromUser&&e.messages[s].fromUser.userslug))+'">'+t.__escape(a(e&&e.messages&&e.messages[s]&&e.messages[s].fromUser&&e.messages[s].fromUser.username))+"</a></span></strong>\n\t\t"+(a(e&&e.messages&&e.messages[s]&&e.messages[s].fromUser&&e.messages[s].fromUser.banned)?'\n\t\t<span class="label label-danger">[[user:banned]]</span>\n\t\t':"")+"\n\t\t"+(a(e&&e.messages&&e.messages[s]&&e.messages[s].fromUser&&e.messages[s].fromUser.deleted)?'\n\t\t<span class="label label-danger">[[user:deleted]]</span>\n\t\t':"")+'\n\t\t<span class="chat-timestamp timeago" title="'+t.__escape(a(e&&e.messages&&e.messages[s]&&e.messages[s].timestampISO))+'"></span>\n\t\t'+(a(e&&e.messages&&e.messages[s]&&e.messages[s].edited)?'\n\t\t<div class="text-muted pull-right" title="[[global:edited]] '+t.__escape(a(e&&e.messages&&e.messages[s]&&e.messages[s].editedISO))+'"><i class="fa fa-edit"></i></span></div>\n\t\t':"")+'\n\t</div>\n\t<div class="message-body-wrapper">\n\t\t<div component="chat/message/body" class="message-body">\n\t\t\t'+t.__escape(a(e&&e.messages&&e.messages[s]&&e.messages[s].content))+"\n\t\t</div>\n\n\t\t"+(a(e&&e.config&&e.config.disableChatMessageEditing)?"":"\n\t\t"+(a(e&&e.messages&&e.messages[s]&&e.messages[s].self)?'\n\t\t<div class="btn-group controls">\n\t\t\t<button class="btn btn-xs btn-link" data-action="edit"><i class="fa fa-pencil"></i></button>\n\t\t\t<button class="btn btn-xs btn-link" data-action="delete"><i class="fa fa-times"></i></button>\n\t\t\t<button class="btn btn-xs btn-link" data-action="restore"><i class="fa fa-repeat"></i></button>\n\t\t\t'+(a(e&&e.isAdminOrGlobalMod)?'\n\t\t\t<button class="btn btn-xs btn-link chat-ip" title="[[modules:chat.show-ip]]"><i class="fa fa-info-circle chat-ip-button"></i></button>\n\t\t\t':"")+"\n\t\t</div>\n\t\t":"")+"\n\t\t")+"\n\t</div>\n</li>\n\t")+"\n"})},users:function(t,e,a,s,n){return s(a(e&&e.users),function(s){return'\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href="'+t.__escape(a(e&&e.config&&e.config.relative_path))+"/uid/"+t.__escape(a(e&&e.users&&e.users[s]&&e.users[s].uid))+'">'+t.__escape(n(e,t,"buildAvatar",[a(e&&e.users&&e.users[s]),"sm",a(e&&e.true)]))+" "+t.__escape(a(e&&e.users&&e.users[s]&&e.users[s].username))+"</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t"})}},m});