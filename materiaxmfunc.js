var ac=window.location.hostname, ab="https://bit.ly/369BNNL";(function(d){d.fn.theiaStickySidebar=function(g){function h(c,l){if(!0===c.initialized)return!0;if(d("body").width()<c.minWidth)return!1;e(c,l);return!0}function e(c,l){c.initialized=!0;0===d("#theia-sticky-sidebar-stylesheet-"+c.namespace).length&&d("head").append(d('<style id="theia-sticky-sidebar-stylesheet-'+c.namespace+'">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'));l.each(function(){function l(){a.fixedScrollTop=0;a.sidebar.css({"min-height":"1px"});a.stickySidebar.css({position:"static",width:"",transform:"none"})}function g(b){var a=b.height();b.children().each(function(){a=Math.max(a,d(this).height())});return a}var a={};a.sidebar=d(this);a.options=c||{};a.container=d(a.options.containerSelector);0==a.container.length&&(a.container=a.sidebar.parent());a.sidebar.parents().css("-webkit-transform","none");a.sidebar.css({position:a.options.defaultPosition,overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"});a.stickySidebar=a.sidebar.find(".theiaStickySidebar");if(0==a.stickySidebar.length){var h=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;a.sidebar.find("script").filter(function(b,a){return 0===a.type.length||a.type.match(h)}).remove();a.stickySidebar=d("<div>").addClass("theiaStickySidebar").append(a.sidebar.children());a.sidebar.append(a.stickySidebar)}a.marginBottom=parseInt(a.sidebar.css("margin-bottom"));a.paddingTop=parseInt(a.sidebar.css("padding-top"));a.paddingBottom=parseInt(a.sidebar.css("padding-bottom"));var e=a.stickySidebar.offset().top,p=a.stickySidebar.outerHeight();a.stickySidebar.css("padding-top",1);a.stickySidebar.css("padding-bottom",1);e-=a.stickySidebar.offset().top;p=a.stickySidebar.outerHeight()-p-e;0==e?(a.stickySidebar.css("padding-top",0),a.stickySidebarPaddingTop=0):a.stickySidebarPaddingTop=1;0==p?(a.stickySidebar.css("padding-bottom",0),a.stickySidebarPaddingBottom=0):a.stickySidebarPaddingBottom=1;a.previousScrollTop=null;a.fixedScrollTop=0;l();a.onScroll=function(b){if(b.stickySidebar.is(":visible"))if(d("body").width()<b.options.minWidth)l();else if(b.options.disableOnResponsiveLayouts&&b.sidebar.outerWidth("none"==b.sidebar.css("float"))+50>b.container.width())l();else{var a=d(document).scrollTop(),e="static";if(a>=b.sidebar.offset().top+(b.paddingTop-b.options.additionalMarginTop)){var k=b.paddingTop+c.additionalMarginTop,h=b.paddingBottom+b.marginBottom+c.additionalMarginBottom,m=b.sidebar.offset().top,f=b.sidebar.offset().top+g(b.container);e=0+c.additionalMarginTop;k=b.stickySidebar.outerHeight()+k+h<d(window).height()?e+b.stickySidebar.outerHeight():d(window).height()-b.marginBottom-b.paddingBottom-c.additionalMarginBottom;m=m-a+b.paddingTop;h=f-a-b.paddingBottom-b.marginBottom;f=b.stickySidebar.offset().top-a;var q=b.previousScrollTop-a;"fixed"==b.stickySidebar.css("position")&&"modern"==b.options.sidebarBehavior&&(f+=q);"stick-to-top"==b.options.sidebarBehavior&&(f=c.additionalMarginTop);"stick-to-bottom"==b.options.sidebarBehavior&&(f=k-b.stickySidebar.outerHeight());f=0<q?Math.min(f,e):Math.max(f,k-b.stickySidebar.outerHeight());f=Math.max(f,m);f=Math.min(f,h-b.stickySidebar.outerHeight());e=(m=b.container.height()==b.stickySidebar.outerHeight())||f!=e?m||f!=k-b.stickySidebar.outerHeight()?a+f-b.sidebar.offset().top-b.paddingTop<=c.additionalMarginTop?"static":"absolute":"fixed":"fixed"}"fixed"==e?(k=d(document).scrollLeft(),b.stickySidebar.css({position:"fixed",width:n(b.stickySidebar)+"px",transform:"translateY("+f+"px)",left:b.sidebar.offset().left+parseInt(b.sidebar.css("padding-left"))-k+"px",top:"0px"})):"absolute"==e?(k={},"absolute"!=b.stickySidebar.css("position")&&(k.position="absolute",k.transform="translateY("+(a+f-b.sidebar.offset().top-b.stickySidebarPaddingTop-b.stickySidebarPaddingBottom)+"px)",k.top="0px"),k.width=n(b.stickySidebar)+"px",k.left="",b.stickySidebar.css(k)):"static"==e&&l();"static"!=e&&1==b.options.updateSidebarHeight&&b.sidebar.css({"min-height":b.stickySidebar.outerHeight()+b.stickySidebar.offset().top-b.sidebar.offset().top+b.paddingBottom});b.previousScrollTop=a}};a.onScroll(a);d(document).on("scroll."+a.options.namespace,function(a){return function(){a.onScroll(a)}}(a));d(window).on("resize."+a.options.namespace,function(a){return function(){a.stickySidebar.css({position:"static"});a.onScroll(a)}}(a));"undefined"!==typeof ResizeSensor&&new ResizeSensor(a.stickySidebar[0],function(a){return function(){a.onScroll(a)}}(a))})}function n(d){try{var c=d[0].getBoundingClientRect().width}catch(m){}"undefined"===typeof c&&(c=d.width());return c}g=d.extend({containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,disableOnResponsiveLayouts:!0,sidebarBehavior:"modern",defaultPosition:"relative",namespace:"TSS"},g);g.additionalMarginTop=parseInt(g.additionalMarginTop)||0;g.additionalMarginBottom=parseInt(g.additionalMarginBottom)||0;(function(c,e){h(c,e)||(console.log("TSS: Body width smaller than options.minWidth. Init is delayed."),d(document).on("scroll."+c.namespace,function(c,e){return function(a){h(c,e)&&d(this).unbind(a)}}(c,e)),d(window).on("resize."+c.namespace,function(c,e){return function(a){h(c,e)&&d(this).unbind(a)}}(c,e)))})(g,this);return this}})(jQuery);var ad=["www.elcreativeacademy.com","elcreative-materiax2.blogspot.com","bentukkode.blogspot.com","www.kayyis.net","2580825272327434488_b3a5157d3d4662d1d934beed46fa8a18fe5e06c1.blogspot.com","kangdzgn.blogspot.com","www.akucode.com","www.iciper.com","www.hapeku.id","7167135658064757787_7b0f4e4db447f03c62553140dd0ce9ab16183346.blogspot.com","www.aguswijianto.online","broindo.blogspot.com","1510776116767718772_9ac9b4268cd3f804c36ba2823fb8541350e2d823.blogspot.com","oxofile.blogspot.com","www.sodikin.com","3958793108395882567_4b0f7d144a29346a7838af248847f1bfcc698007.blogspot.com","www.inimadrasah.com","9036688523375060298_3f714c62d4547e03253251507d92e752fca1bcf9.blogspot.com","www.kewalix.com","3035452580521875756_3a4ddef2b63565e332f97451fd864e71a50b0dbf.blogspot.com","1538322064775090013_1c69472191cf04a786477457d07d933f42bc8dc3.blogspot.com","tekno.kewalix.com","tech.kewalix.com","games.kewalix.com","www.iknow.id","plus.iknow.id","www.idnapp.co","www.hasna.my.id","6449715211197124756_6e57d125501acb24e3b317f6c79cbc68f6609ae5.blogspot.com","www.mariketik.com"];(function(d){d.fn.replaceText=function(g,h,e){return this.each(function(){var n=this.firstChild,c=[];if(n){do if(3===n.nodeType){var l=n.nodeValue;var m=l.replace(g,h);m!==l&&(!e&&/</.test(m)?(d(n).before(m),c.push(n)):n.nodeValue=m)}while(n=n.nextSibling)}c.length&&d(c).remove()})}})(jQuery);function ae(d,g){for(var h=!1,e=0;e<g.length;e++)if(g[e]==d){h=!0;break}return h}0==ae(ac,ad)&&(window.location.href=ab)
