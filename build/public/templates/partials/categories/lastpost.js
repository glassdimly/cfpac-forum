!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function p(t,s,o,e,n){return'<div class="card" style="border-color: '+t.__escape(o(s&&s.bgColor))+'">\r\n\t'+p.blocks.posts(t,s,o,e,n)+"\r\n\r\n\t"+(o(s&&s.posts&&s.posts.length)?"":'\r\n\t<div component="category/posts">\r\n\t\t<div class="post-content">\r\n\t\t\t[[category:no_new_posts]]\r\n\t\t</div>\r\n\t</div>\r\n\t')+"\r\n</div>\r\n"}return p.blocks={posts:function(o,e,n,t,p){return t(n(e&&e.posts),function(t,s){return"\r\n\t"+(0===s?'\r\n\t<div component="category/posts">\r\n\t\t<p>\r\n\t\t\t<a href="'+o.__escape(n(e&&e.config&&e.config.relative_path))+"/user/"+o.__escape(n(e&&e.posts&&e.posts[t]&&e.posts[t].user&&e.posts[t].user.userslug))+'">'+o.__escape(p(e,o,"buildAvatar",[n(e&&e.posts&&e.posts[t]&&e.posts[t].user),"sm",n(e&&e.true)]))+'</a>\r\n\t\t\t<a class="permalink" href="'+o.__escape(n(e&&e.config&&e.config.relative_path))+"/topic/"+o.__escape(n(e&&e.posts&&e.posts[t]&&e.posts[t].topic&&e.posts[t].topic.slug))+(n(e&&e.posts&&e.posts[t]&&e.posts[t].index)?"/"+o.__escape(n(e&&e.posts&&e.posts[t]&&e.posts[t].index)):"")+'">\r\n\t\t\t\t<small class="timeago" title="'+o.__escape(n(e&&e.posts&&e.posts[t]&&e.posts[t].timestampISO))+'"></small>\r\n\t\t\t</a>\r\n\t\t</p>\r\n\t\t<div class="post-content">\r\n\t\t\t'+o.__escape(n(e&&e.posts&&e.posts[t]&&e.posts[t].content))+"\r\n\t\t</div>\r\n\t</div>\r\n\t":"")+"\r\n\t"})}},p});