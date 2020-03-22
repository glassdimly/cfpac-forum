!function(s){"object"==typeof module&&module.exports?module.exports=s():"function"==typeof define&&define.amd&&define(s)}(function(){function r(e,t,a,s,n){return a(t&&t.roomId)?'\r\n<div component="chat/messages" class="expanded-chat" data-roomid="'+e.__escape(a(t&&t.roomId))+'">\r\n\t<div component="chat/header">\r\n\t\t<button type="button" class="close" data-action="pop-out"><span aria-hidden="true"><i class="fa fa-compress"></i></span><span class="sr-only">[[modules:chat.pop-out]]</span></button>\r\n\t\t<button type="button" class="close" aria-label="Close" data-action="close"><span aria-hidden="true">&times;</span></button>\r\n\r\n\t\t<div class="dropdown pull-right">\r\n\t\t\t<button class="close" data-toggle="dropdown" component="chat/controlsToggle"><i class="fa fa-gear"></i></button>\r\n\t\t\t<ul class="dropdown-menu dropdown-menu-right pull-right" component="chat/controls">\r\n\t\t\t\t<li class="dropdown-header">[[modules:chat.options]]</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href="#" data-action="members"><i class="fa fa-fw fa-cog"></i> [[modules:chat.manage-room]]</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href="#" data-action="rename"><i class="fa fa-fw fa-edit"></i> [[modules:chat.rename-room]]</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href="#" data-action="leave"><i class="fa fa-fw fa-sign-out"></i> [[modules:chat.leave]]</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t'+(a(t&&t.users&&t.users.length)?'\r\n\t\t\t\t<li role="separator" class="divider"></li>\r\n\t\t\t\t<li class="dropdown-header">[[modules:chat.in-room]]</li>\r\n\t\t\t\t'+s(a(t&&t.users),function(s){return'\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href="'+e.__escape(a(t&&t.config&&t.config.relative_path))+"/uid/"+e.__escape(a(t&&t.users&&t.users[s]&&t.users[s].uid))+'">'+e.__escape(n(t,e,"buildAvatar",[a(t&&t.users&&t.users[s]),"sm",a(t&&t.true)]))+" "+e.__escape(a(t&&t.users&&t.users[s]&&t.users[s].username))+"</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t"})+"\r\n\t\t\t\t":"")+'\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<span class="members">\r\n\t\t\t[[modules:chat.chatting_with]]:\r\n\t\t\t'+r.blocks.users(e,t,a,s,n)+'\r\n\t\t</span>\r\n\t</div>\r\n\t<ul class="chat-content">\r\n\t\t'+r.blocks.messages(e,t,a,s,n)+'\r\n\t</ul>\r\n\t<div component="chat/composer">\r\n\t\t<textarea component="chat/input" placeholder="[[modules:chat.placeholder]]" class="form-control chat-input mousetrap" rows="2"></textarea>\r\n\t\t<button class="btn btn-primary" type="button" data-action="send"><i class="fa fa-fw fa-2x fa-paper-plane"></i></button>\r\n\t\t<span component="chat/message/remaining">'+e.__escape(a(t&&t.maximumChatMessageLength))+"</span>\r\n\t</div>\r\n</div>\r\n":'\r\n<div class="alert alert-info">\r\n\t[[modules:chat.no-messages]]\r\n</div>\r\n'}return r.blocks={messages:function(e,t,a,s,n){return s(a(t&&t.messages),function(s){return"\r\n\t"+(a(t&&t.messages&&t.messages[s]&&t.messages[s].system)?'\r\n\t<li component="chat/system-message" class="system-message clear" data-index="'+e.__escape(a(t&&t.messages&&t.messages[s]&&t.messages[s].index))+'" data-mid="'+e.__escape(a(t&&t.messages&&t.messages[s]&&t.messages[s].messageId))+'" data-uid="'+e.__escape(a(t&&t.messages&&t.messages[s]&&t.messages[s].fromuid))+'" data-self="'+e.__escape(a(t&&t.messages&&t.messages[s]&&t.messages[s].self))+'" data-break="0" data-timestamp="'+e.__escape(a(t&&t.messages&&t.messages[s]&&t.messages[s].timestamp))+'">\r\n\t[[modules:chat.system.'+e.__escape(a(t&&t.messages&&t.messages[s]&&t.messages[s].content))+", "+e.__escape(a(t&&t.messages&&t.messages[s]&&t.messages[s].fromUser&&t.messages[s].fromUser.username))+"]]\r\n</li>\r\n\t":'\r\n\t<li component="chat/message" class="chat-message clear'+(a(t&&t.messages&&t.messages[s]&&t.messages[s].deleted)?" deleted":"")+'" data-index="'+e.__escape(a(t&&t.messages&&t.messages[s]&&t.messages[s].index))+'" data-mid="'+e.__escape(a(t&&t.messages&&t.messages[s]&&t.messages[s].messageId))+'" data-uid="'+e.__escape(a(t&&t.messages&&t.messages[s]&&t.messages[s].fromuid))+'" data-self="'+e.__escape(a(t&&t.messages&&t.messages[s]&&t.messages[s].self))+'" data-break="'+e.__escape(a(t&&t.messages&&t.messages[s]&&t.messages[s].newSet))+'" data-timestamp="'+e.__escape(a(t&&t.messages&&t.messages[s]&&t.messages[s].timestamp))+'">\r\n\t<div class="message-header">\r\n\t\t<a href="'+e.__escape(a(t&&t.config&&t.config.relative_path))+"/user/"+e.__escape(a(t&&t.messages&&t.messages[s]&&t.messages[s].fromUser&&t.messages[s].fromUser.userslug))+'">'+e.__escape(n(t,e,"buildAvatar",[a(t&&t.messages&&t.messages[s]&&t.messages[s].fromUser),"md",a(t&&t.true),"not-responsive"]))+'</a>\r\n\t\t<strong><span class="chat-user"><a href="'+e.__escape(a(t&&t.config&&t.config.relative_path))+"/user/"+e.__escape(a(t&&t.messages&&t.messages[s]&&t.messages[s].fromUser&&t.messages[s].fromUser.userslug))+'">'+e.__escape(a(t&&t.messages&&t.messages[s]&&t.messages[s].fromUser&&t.messages[s].fromUser.username))+"</a></span></strong>\r\n\t\t"+(a(t&&t.messages&&t.messages[s]&&t.messages[s].fromUser&&t.messages[s].fromUser.banned)?'\r\n\t\t<span class="label label-danger">[[user:banned]]</span>\r\n\t\t':"")+"\r\n\t\t"+(a(t&&t.messages&&t.messages[s]&&t.messages[s].fromUser&&t.messages[s].fromUser.deleted)?'\r\n\t\t<span class="label label-danger">[[user:deleted]]</span>\r\n\t\t':"")+'\r\n\t\t<span class="chat-timestamp timeago" title="'+e.__escape(a(t&&t.messages&&t.messages[s]&&t.messages[s].timestampISO))+'"></span>\r\n\t\t'+(a(t&&t.messages&&t.messages[s]&&t.messages[s].edited)?'\r\n\t\t<div class="text-muted pull-right" title="[[global:edited]] '+e.__escape(a(t&&t.messages&&t.messages[s]&&t.messages[s].editedISO))+'"><i class="fa fa-edit"></i></span></div>\r\n\t\t':"")+'\r\n\t</div>\r\n\t<div class="message-body-wrapper">\r\n\t\t<div component="chat/message/body" class="message-body">\r\n\t\t\t'+e.__escape(a(t&&t.messages&&t.messages[s]&&t.messages[s].content))+"\r\n\t\t</div>\r\n\r\n\t\t"+(a(t&&t.config&&t.config.disableChatMessageEditing)?"":"\r\n\t\t"+(a(t&&t.messages&&t.messages[s]&&t.messages[s].self)?'\r\n\t\t<div class="btn-group controls">\r\n\t\t\t<button class="btn btn-xs btn-link" data-action="edit"><i class="fa fa-pencil"></i></button>\r\n\t\t\t<button class="btn btn-xs btn-link" data-action="delete"><i class="fa fa-times"></i></button>\r\n\t\t\t<button class="btn btn-xs btn-link" data-action="restore"><i class="fa fa-repeat"></i></button>\r\n\t\t\t'+(a(t&&t.isAdminOrGlobalMod)?'\r\n\t\t\t<button class="btn btn-xs btn-link chat-ip" title="[[modules:chat.show-ip]]"><i class="fa fa-info-circle chat-ip-button"></i></button>\r\n\t\t\t':"")+"\r\n\t\t</div>\r\n\t\t":"")+"\r\n\t\t")+"\r\n\t</div>\r\n</li>\r\n\t")+"\r\n"})},users:function(a,n,r,s){return s(r(n&&n.users),function(s,e,t){return'\r\n\t\t\t<a href="'+a.__escape(r(n&&n.config&&n.config.relative_path))+"/uid/"+a.__escape(r(n&&n.users&&n.users[s]&&n.users[s].uid))+'">'+a.__escape(r(n&&n.users&&n.users[s]&&n.users[s].username))+"</a>"+(e!==t-1?",":"")+"\r\n\t\t\t"})}},r});