!function(e){"object"==typeof module&&module.exports?module.exports=e():"function"==typeof define&&define.amd&&define(e)}(function(){function a(e,o,t,c,r){return'<noscript><div class="dropdown" component="category-selector"></noscript>\r\n<label component="category/post" for="category-dropdown-check" class="btn btn-primary" id="new_topic">\r\n\t[[category:new_topic_button]]\r\n</label>\r\n<noscript>\r\n\t<input type="checkbox" class="hidden" id="category-dropdown-check" aria-hidden="true">\r\n\t<ul component="category/list" class="dropdown-menu category-dropdown-menu" role="menu">\r\n\t\t'+a.blocks.categories(e,o,t,c,r)+"\r\n\t</ul>\r\n</div>\r\n</noscript>"}return a.blocks={categories:function(o,t,c,e,r){return e(c(t&&t.categories),function(e){return'\r\n\t\t<li role="presentation" class="category '+(c(t&&t.categories&&t.categories[e]&&t.categories[e].disabledClass)?"disabled":"")+'">\r\n\t\t\t<a role="menu-item" href="'+o.__escape(c(t&&t.config&&t.config.relative_path))+"/compose?cid="+o.__escape(c(t&&t.categories&&t.categories[e]&&t.categories[e].cid))+'">'+o.__escape(c(t&&t.categories&&t.categories[e]&&t.categories[e].level))+'<span component="category-markup">'+(c(t&&t.categories&&t.categories[e]&&t.categories[e].icon)?'<span class="fa-stack" style="'+o.__escape(r(t,o,"generateCategoryBackground",[c(t&&t.categories&&t.categories[e])]))+'"><i style="color: '+o.__escape(c(t&&t.categories&&t.categories[e]&&t.categories[e].color))+';" class="fa fa-stack-1x fa-fw '+o.__escape(c(t&&t.categories&&t.categories[e]&&t.categories[e].icon))+'"></i></span>':"")+" "+o.__escape(c(t&&t.categories&&t.categories[e]&&t.categories[e].name))+"</span></a>\r\n\t\t</li>\r\n\t\t"})}},a});