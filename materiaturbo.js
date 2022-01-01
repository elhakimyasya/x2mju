var materiaConfig = {
    themeInfo: {
        version: "2.7",
        config: {
            featuresCustomjQueryScript: "<data:skin.vars.featuresCustomjQueryScript/>",
            featuresNativeShare: "<data:skin.vars.featuresNativeShare/>",
            featuresSubMenu: "<data:skin.vars.featuresSubMenu/>",
            featuresPostScroll: "<data:skin.vars.featuresPostScroll/>",
            featuresRippleEffect: "<data:skin.vars.featuresRippleEffect/>",
            featuresTurbo: "<data:skin.vars.featuresTurbo/>",
            featuresPreloader: "<data:skin.vars.featuresPreloader/>",

            googleTranslate: `<b:eval expr='!data:view.isError and data:widget.sectionId not in {"main_top_section_homepage", "main_widget_section", "main_bottom_section_homepage"} and data:widgets.Translate.notEmpty'/>`,
            navigationDrawerMenu: `<b:eval expr='data:widgets any (w => w.id == "LinkList999")'/>`
        }
    },
    elements: {
        elementHead: document.getElementsByTagName("head")[0],
        elementScript: document.getElementsByTagName("script")[0],
        elementSnackbar: ".snackbar",
        elementButtonColorMode: "#button_color_mode",
        elementButtonShare: ".button_toggle_share",
        elementButtonMenu: "#button_menu",
        elementButtonSearch: ".button_toggle_search",
        elementButtonSearchClose: ".button_close_search",
        elementLogo: ".Header img",
        elementFAB: ".fab_container",
        elementSearchInput: ".search_input",
        elementBackdrop: ".backdrop",
        elementScrollTop: ".scroll_top",
        elementPostBody: ".elcreative_section .post_container_end .post_body",
        elementScrolIndicator: ".scroll_indicator",
        elementDrawerMenu: ".elcreative_navigation .navigation_drawer_menu",

        pager: {
            pagerContainer: ".blog_pager",
            pagerPostContainter: ".blog_posts",
            pagerPostItem: ".blog_posts .post_outer_container",
            pagerOlderLink: ".blog_pager_older_link",
        }
    },

    scripts: {
        scriptGoogleCSE: "https://cse.google.com/cse.js?cx=",
        scriptHighlightJS: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/highlight.min.js",
        scriptJquery: "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js",
        scriptGoogleTranslate: "https://translate.google.com/translate_a/element.js?cb=elcreativeGoogleTranslate",
    },

    icons: {
        iconLoader: `<b:include data='{iconId: "loader"}' name='defaultIcons'/>`,
        iconCheck: `<b:if cond='data:skin.vars.defaultCustomIcon == "2px"'><use xlink:href='#icon_check'/><b:else/><b:include data='{iconId: "icon_check"}' name='defaultIcons'/></b:if>`,
        iconCopy: `<b:if cond='data:skin.vars.defaultCustomIcon == "2px"'><use xlink:href='#icon_copy'/><b:else/><b:include data='{iconId: "icon_copy"}' name='defaultIcons'/></b:if>`,
        iconDocument: `<b:if cond='data:skin.vars.defaultCustomIcon == "2px"'><use xlink:href='#icon_document'/><b:else/><b:include data='{iconId: "icon_document"}' name='defaultIcons'/></b:if>`,
        iconReload: `<b:if cond='data:skin.vars.defaultCustomIcon == "2px"'><use xlink:href='#icon_reload'/><b:else/><b:include data='{iconId: "icon_reload"}' name='defaultIcons'/></b:if>`,
    }
};

if (materiaConfig.themeInfo.config.featuresPreloader === "2px") {
    (function(){function aa(a,b){return function(){return a.apply(b,arguments)}}function s(){}function t(){return t.__super__.constructor.apply(this,arguments)}function ba(){this.progress=0}function e(){this.bindings={}}function o(){function a(a){var c=a.open;return a.open=function(d,f){return I(d)&&b.trigger("request",{type:d,url:f,request:a}),c.apply(a,arguments)}}var b=this;o.__super__.constructor.apply(this,arguments),window.XMLHttpRequest=function(b){return b=new U(b),a(b),b};try{D(window.XMLHttpRequest,U)}catch(a){}if(null!=W){window.XDomainRequest=function(){var b=new W;return a(b),b};try{D(window.XDomainRequest,W)}catch(a){}}if(null!=X&&C.ajax.trackWebSockets){window.WebSocket=function(a,c){var d=null==c?new X(a):new X(a,c);return I("socket")&&b.trigger("request",{type:"socket",url:a,protocols:c,request:d}),d};try{D(window.WebSocket,X)}catch(a){}}}function n(){this.complete=aa(this.complete,this);var a=this;this.elements=[],da().on("request",function(){return a.watch.apply(a,arguments)})}function r(a){var b;null==a&&(a={}),this.complete=aa(this.complete,this),this.elements=[],null==a.selectors&&(a.selectors=[]);for(var c=0,d=(b=a.selectors).length;c<d;c++)a=b[c],this.elements.push(new Q(a,this.complete))}function a(a,b){this.selector=a,this.completeCallback=b,this.progress=0,this.check()}function u(){var a,b=this;this.progress=null==(a=this.states[document.readyState])?100:a;var c=document.onreadystatechange;document.onreadystatechange=function(){return null!=b.states[document.readyState]&&(b.progress=b.states[document.readyState]),"function"==typeof c?c.apply(null,arguments):void 0}}function ca(a){this.source=a,this.last=this.sinceLastUpdate=0,this.rate=C.initialRate,this.progress=this.lastProgress=this.catchup=0,null!=this.source&&(this.progress=l(this.source,"progress"))}function m(){var a;return null==(a="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?+new Date:a}function c(a,b,c){if("function"==typeof a.addEventListener)return a.addEventListener(b,c,!1);var d;"function"!=typeof a["on"+b]||"object"!=typeof a["on"+b].eventListeners?(d=new ra,"function"==typeof a["on"+b]&&d.on(b,a["on"+b]),a["on"+b]=function(a){return d.trigger(b,a)},a["on"+b].eventListeners=d):d=a["on"+b].eventListeners,d.on(b,c)}function l(){var a=arguments[0],b=arguments[1],c=3<=arguments.length?ma.call(arguments,2):[];return"function"==typeof a[b]?a[b].apply(a,c):a[b]}function y(a){for(var b,c=C.ajax.ignoreURLs,d=0,f=c.length;d<f;d++)if("string"==typeof(b=c[d])){if(-1!==a.indexOf(b))return 1;}else if(b.test(a))return 1}function E(){return C.restartOnPushState&&qa.restart()}var G,Z,da,ea,fa,ga,ha,ia,ja,ka,la,ma=[].slice,L={}.hasOwnProperty,x=function(a,b){function c(){this.constructor=a}for(var d in b)L.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},na=[].indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1},T={className:"",catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},R=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,oa=window.cancelAnimationFrame||window.mozCancelAnimationFrame;null==R&&(R=function(a){return setTimeout(a,50)},oa=function(a){return clearTimeout(a)});var pa=function(){for(var a,b,c,d=arguments[0],f=2<=arguments.length?ma.call(arguments,1):[],g=0,h=f.length;g<h;g++)if(b=f[g])for(a in b)L.call(b,a)&&(c=b[a],null!=d[a]&&"object"==typeof d[a]&&null!=c&&"object"==typeof c?pa(d[a],c):d[a]=c);return d},M=function(a,b){var c;if(null==a&&(a="options"),null==b&&(b=!0),c=document.querySelector("[data-pace-"+a+"]")){if(c=c.getAttribute("data-pace-"+a),!b)return c;try{return JSON.parse(c)}catch(a){return"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",a):void 0}}};s.prototype.on=function(a,b,c,d){var e;return null==d&&(d=!1),null==this.bindings&&(this.bindings={}),null==(e=this.bindings)[a]&&(e[a]=[]),this.bindings[a].push({handler:b,ctx:c,once:d})},s.prototype.once=function(a,b,c){return this.on(a,b,c,!0)},s.prototype.off=function(a,b){var c,d;if(null!=(null==(c=this.bindings)?void 0:c[a])){if(null==b)return delete this.bindings[a];for(c=0,d=[];c<this.bindings[a].length;)this.bindings[a][c].handler===b?d.push(this.bindings[a].splice(c,1)):d.push(c++);return d}},s.prototype.trigger=function(){var a=arguments[0],b=2<=arguments.length?ma.call(arguments,1):[];if(null!=(f=this.bindings)&&f[a]){for(var c=0,d=[];c<this.bindings[a].length;){var e=(g=this.bindings[a][c]).handler,f=g.ctx,g=g.once;e.apply(null==f?this:f,b),g?d.push(this.bindings[a].splice(c,1)):d.push(c++)}return d}};var qa=window.Pace||{};window.Pace=qa,pa(qa,s.prototype);for(var C=qa.options=pa({},T,window.paceOptions,M()),M=0,N=(ka=["ajax","document","eventLag","elements"]).length;M<N;M++)!0===C[ga=ka[M]]&&(C[ga]=T[ga]);x(t,Error);var _=t;ba.prototype.getElement=function(){var a;if(null==this.el){if(!(a=document.querySelector(C.target)))throw new _;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/(pace-done )|/,"pace-running "),this.el.innerHTML="<div class=\"pace-progress"+(""===C.className?"":" "+C.className)+"\">\n  <div class=\"pace-progress-inner\"></div>\n</div>\n<div class=\"pace-activity\"></div>",null==a.firstChild?a.appendChild(this.el):a.insertBefore(this.el,a.firstChild)}return this.el},ba.prototype.finish=function(){var a=this.getElement();return a.className=a.className.replace("pace-active","pace-inactive"),document.body.className=document.body.className.replace("pace-running ","pace-done ")},ba.prototype.update=function(a){return this.progress=a,qa.trigger("progress",a),this.render()},ba.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(a){_=a}return this.el=void 0},ba.prototype.render=function(){var a,b;if(null==document.querySelector(C.target))return!1;var c=document.querySelector(".rtl"),d=this.getElement(),f=0;for(o=c?"translate3d(-"+this.progress+"%, 0, 0)":"translate3d("+this.progress+"%, 0, 0)",c=(b=["webkitTransform","msTransform","transform"]).length;f<c;f++)d.children[0].style[b[f]]=o;return(!this.lastRenderedProgress||0|this.lastRenderedProgress|0!==this.progress)&&(d.children[0].setAttribute("data-progress-text",(0|this.progress)+"%"),100<=this.progress?a="99":(a=10>this.progress?"0":"",a+=0|this.progress),d.children[0].setAttribute("data-progress",""+a)),qa.trigger("change",this.progress),this.lastRenderedProgress=this.progress},ba.prototype.done=function(){return 100<=this.progress},e.prototype.trigger=function(a,b){var c;if(null!=this.bindings[a]){for(var d=[],e=0,f=(c=this.bindings[a]).length;e<f;e++)d.push(c[e].call(this,b));return d}},e.prototype.on=function(a,b){var c;return null==(c=this.bindings)[a]&&(c[a]=[]),this.bindings[a].push(b)};var ra=e,U=window.XMLHttpRequest,W=window.XDomainRequest,X=window.WebSocket,D=function(a,b){var c,d=[];for(c in b.prototype)try{null==a[c]&&"function"!=typeof b[c]?"function"==typeof Object.defineProperty?d.push(Object.defineProperty(a,c,{get:function(a){return function(){return b.prototype[a]}}(c),configurable:!0,enumerable:!0})):d.push(a[c]=b.prototype[c]):d.push(void 0)}catch(a){}return d},H=[];qa.ignore=function(){var a=arguments[0],b=2<=arguments.length?ma.call(arguments,1):[];return H.unshift("ignore"),b=a.apply(null,b),H.shift(),b},qa.track=function(){var a=arguments[0],b=2<=arguments.length?ma.call(arguments,1):[];return H.unshift("track"),b=a.apply(null,b),H.shift(),b};var I=function(a){return null==a&&(a="GET"),"track"===H[0]?"force":!H.length&&C.ajax&&("socket"===a&&C.ajax.trackWebSockets||(a=a.toUpperCase(),0<=na.call(C.ajax.trackMethods,a)))};x(o,ra);var z=null;(da=function(){return z=null==z?new o:z})().on("request",function(a){var b,c=a.type,d=a.request,f=a.url;if(!y(f))return qa.running||!1===C.restartOnRequestAfter&&"force"!==I(c)?void 0:(b=arguments,"boolean"==typeof(f=C.restartOnRequestAfter||0)&&(f=0),setTimeout(function(){var a;if("socket"===c?1>d.readyState:0<(e=d.readyState)&&4>e){qa.restart();for(var f=[],e=0,g=(a=qa.sources).length;e<g;e++){if((ga=a[e])instanceof sa){ga.watch.apply(ga,b);break}f.push(void 0)}return f}},f))}),n.prototype.watch=function(a){var b=a.type,c=a.request;if(a=a.url,!y(a))return c=new("socket"===b?K:J)(c,this.complete),this.elements.push(c)},n.prototype.complete=function(a){return this.elements=this.elements.filter(function(b){return b!==a})};var sa=n,J=function(a,b){var d,e=this;if(this.progress=0,null!=window.ProgressEvent){c(a,"progress",function(a){return a.lengthComputable?e.progress=100*a.loaded/a.total:e.progress+=(100-e.progress)/2});for(var f=0,g=(d=["load","abort","timeout","error"]).length;f<g;f++)c(a,d[f],function(){return b(e),e.progress=100})}else{var h=a.onreadystatechange;a.onreadystatechange=function(){var c;return 0===(c=a.readyState)||4===c?(b(e),e.progress=100):3===a.readyState&&(e.progress=50),"function"==typeof h?h.apply(null,arguments):void 0}}},K=function(a,b){for(var d,e=this,f=this.progress=0,g=(d=["error","open"]).length;f<g;f++)c(a,d[f],function(){return b(e),e.progress=100})};r.prototype.complete=function(a){return this.elements=this.elements.filter(function(b){return b!==a})},a.prototype.check=function(){var a=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return a.check()},C.elements.checkInterval)},a.prototype.done=function(){return this.completeCallback(this),this.completeCallback=null,this.progress=100};var Q=a;u.prototype.states={loading:0,interactive:50,complete:100},x=function(){var b,d=this;this.progress=0;var f=[],a=0,g=m(),h=setInterval(function(){var c=m()-g-50;g=m(),f.push(c),f.length>C.eventLag.sampleCount&&f.shift();for(var i,j=c=0,k=0,l=f.length;k<l;k++)i=f[k],j+=Math.abs(i),c++;return b=j/c,++a>=C.eventLag.minSamples&&b<C.eventLag.lagThreshold?(d.progress=100,clearInterval(h)):d.progress=100*(3/(3+b))},50)},ca.prototype.tick=function(a,b){return 100<=(b=null==b?l(this.source,"progress"):b)&&(this.done=!0),b===this.last?this.sinceLastUpdate+=a:(this.sinceLastUpdate&&(this.rate=(b-this.last)/this.sinceLastUpdate),this.catchup=(b-this.progress)/C.catchupTime,this.sinceLastUpdate=0,this.last=b),b>this.progress&&(this.progress+=this.catchup*a),b=1-Math.pow(this.progress/100,C.easeFactor),this.progress+=b*this.rate*a,this.progress=Math.min(this.lastProgress+C.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress};var V=G=ia=Z=fa=ha=null;qa.running=!1,null!=window.history.pushState&&(ja=window.history.pushState,window.history.pushState=function(){return E(),ja.apply(window.history,arguments)}),null!=window.history.replaceState&&(la=window.history.replaceState,window.history.replaceState=function(){return E(),la.apply(window.history,arguments)});var ta={ajax:sa,elements:r,document:u,eventLag:x};(ea=function(){var a,b,c;qa.sources=ha=[];for(var d=0,f=(b=["ajax","elements","document","eventLag"]).length;d<f;d++)!1!==C[a=b[d]]&&ha.push(new ta[a](C[a]));for(a=0,d=(f=null==(c=C.extraSources)?[]:c).length;a<d;a++)ga=f[a],ha.push(new ga(C));return qa.bar=Z=new ba,fa=[],ia=new ca})(),qa.stop=function(){return qa.trigger("stop"),qa.running=!1,Z.destroy(),V=!0,null!=G&&("function"==typeof oa&&oa(G),G=null),ea()},qa.restart=function(){return qa.trigger("restart"),qa.stop(),qa.start()},qa.go=function(){var b,a,c,d;return qa.running=!0,Z.render(),b=m(),V=!1,a=function(g,j){Z.progress;for(var e,k,q,t,v,w=k=0,x=!0,y=q=0,z=ha.length;q<z;y=++q){ga=ha[y];for(var l,A=null==fa[y]?fa[y]=[]:fa[y],p=t=0,B=(y=null==(v=ga.elements)?[ga]:v).length;t<B;p=++t)l=y[p],x&=(l=null==A[p]?A[p]=new ca(l):A[p]).done,l.done||(w++,k+=l.tick(g))}return e=k/w,Z.update(ia.tick(g,e)),Z.done()||x||V?(Z.update(100),qa.trigger("done"),setTimeout(function(){return Z.finish(),qa.running=!1,qa.trigger("hide")},Math.max(C.ghostTime,Math.max(C.minTime-(m()-b),0)))):j()},c=m(),G=(d=function(){var b=m()-c;return 33<=b?(c=m(),a(b,function(){return R(d)})):setTimeout(d,33-b)})()},qa.start=function(a){pa(C,a),qa.running=!0;try{Z.render()}catch(a){_=a}return document.querySelector(".pace")?(qa.trigger("start"),qa.go()):setTimeout(qa.start,50)},"function"==typeof define&&define.amd?define(function(){return qa}):"object"==typeof exports?module.exports=qa:C.startOnPageLoad&&qa.start()}).call(this);
};

Defer(function(){window.lazySizesConfig=window.lazySizesConfig||{},lazySizesConfig.loadMode=1,lazySizesConfig.preloadAfterLoad=!1;!function(a){var b=function(aa,ba,v){function r(a,b){return _a[b]||(_a[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),_a[b].test(a.getAttribute("class")||"")&&_a[b]}function ca(a,b){r(a,b)||a.setAttribute("class",(a.getAttribute("class")||"").trim()+" "+b)}function u(a,b){(b=r(a,b))&&a.setAttribute("class",(a.getAttribute("class")||"").replace(b," "))}function c(b,c,d,e,f){var g=ba.createEvent("Event");return(d=d||{}).instance=ka,g.initEvent(c,!e,!f),g.detail=d,b.dispatchEvent(g),g}function f(b,c){var d;!V&&(d=aa.picturefill||la.pf)?(c&&c.src&&!b.getAttribute("srcset")&&b.setAttribute("srcset",c.src),d({reevaluate:!0,elements:[b]})):c&&c.src&&(b.src=c.src)}function g(b,c,d){for(d=d||b.offsetWidth;d<la.minSize&&c&&!b._lazysizesWidth;)d=c.offsetWidth,c=c.parentNode;return d}function i(b,a){return a?function(){cb(b)}:function(){var a=this,c=arguments;cb(function(){b.apply(a,c)})}}function e(b){function c(){d=null,b()}var d,f,g=function(){var a=v.now()-f;99>a?Y(g,99-a):(Ya||c)(c)};return function(){f=v.now(),d=d||Y(g,99)}}function n(b,d,e){var f=b.parentNode;f&&(e=g(b,f,e),(d=c(b,"lazybeforesizes",{width:e,dataAttr:!!d})).defaultPrevented||(e=d.detail.width)&&e!==b._lazysizesWidth&&na(b,f,d,e))}function da(a){Ja--,a&&!(0>Ja)&&a.target||(Ja=0)}function ea(a){return null==Aa&&(Aa="hidden"==(getComputedStyle(ba.body,null)||{}).visibility),Aa||"hidden"!=(getComputedStyle(a.parentNode,null)||{}).visibility||"hidden"!=(getComputedStyle(a,null)||{}).visibility}function o(){var b,h,j,k,p,q,v,w,x,y=ka.elements;if((sa=la.loadMode)&&8>Ja&&(b=y.length)){var d=0;for(Ka++;d<b;d++)if(y[d]&&!y[d]._lazyRace)if(!Ha||ka.prematureUnveil&&ka.prematureUnveil(y[d]))Pa(y[d]);else{(q=y[d].getAttribute("data-expand"))&&(k=+q)||(k=Ia),w||(w=!la.expand||1>la.expand?500<Xa.clientHeight&&500<Xa.clientWidth?500:370:la.expand,A=(ka._defEx=w)*la.expFactor,x=la.hFac,Aa=null,Ia<A&&1>Ja&&2<Ka&&2<sa&&!ba.hidden?(Ia=A,Ka=0):Ia=1<sa&&1<Ka&&6>Ja?w:0),v!==k&&(ua=innerWidth+k*x,va=innerHeight+k,p=-1*k,v=k);var z=y[d].getBoundingClientRect();if((z=(za=z.bottom)>=p&&(wa=z.top)<=va&&(ya=z.right)>=p*x&&(xa=z.left)<=ua&&(za||ya||xa||wa)&&(la.loadHidden||ea(y[d])))&&!(z=qa&&3>Ja&&!q&&(3>sa||4>Ka))){z=void 0;var A=k,B=C=y[d],C=ea(C);for(wa-=A,za+=A,xa-=A,ya+=A;C&&(B=B.offsetParent)&&B!=ba.body&&B!=Xa;)(C=0<((getComputedStyle(B,null)||{}).opacity||1))&&"visible"!=(getComputedStyle(B,null)||{}).overflow&&(z=B.getBoundingClientRect(),C=ya>z.left&&xa<z.right&&za>z.top-1&&wa<z.bottom+1);z=C}if(!z)!j&&qa&&!h&&4>Ja&&4>Ka&&2<sa&&(pa[0]||la.preloadAfterLoad)&&(pa[0]||!q&&(za||ya||xa||wa||"auto"!=y[d].getAttribute(la.sizesAttr)))&&(h=pa[0]||y[d]);else if(Pa(y[d]),j=!0,9<Ja)break}h&&!j&&Pa(h)}}function fa(a){var b=a.target;return b._lazyCache?void delete b._lazyCache:(da(a),ca(b,la.loadedClass),u(b,la.loadingClass),bb(b,Na),void c(b,"lazyloaded"))}function ga(b){var c,d=b.getAttribute(la.srcsetAttr);(c=la.customMedia[b.getAttribute("data-media")||b.getAttribute("media")])&&b.setAttribute("media",c),b.setAttribute("srcset",d)}function t(){3==la.loadMode&&(la.loadMode=2),Qa()}function ha(){Ca=!1,Da=v.now(),Ba()}function ia(){var a=Wa;for(Wa=Ua.length?Va:Ua,Ta=!(Sa=!0);a.length;)a.shift()();Sa=!1}function ja(a,b){Sa&&!b?a.apply(this,arguments):(Wa.push(a),Ta||(Ta=!0,(ba.hidden?Y:Z)(ia)))}var ka,la;if(function(){var a,b={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(a in la=aa.lazySizesConfig||aa.lazysizesConfig||{},b)a in la||(la[a]=b[a])}(),!ba||!ba.getElementsByClassName)return{init:function(){},cfg:la,noSupport:!0};var ma,na,oa,pa,qa,ra,sa,ta,ua,va,wa,xa,ya,za,Aa,Ba,Ca,Da,Ea,Fa,Ga,Ha,Ia,Ja,Ka,La,Ma,Na,Oa,Pa,Qa,Ra,Sa,Ta,Ua,Va,Wa,Xa=ba.documentElement,V=aa.HTMLPictureElement,X=aa.addEventListener.bind(aa),Y=aa.setTimeout,Z=aa.requestAnimationFrame||Y,Ya=aa.requestIdleCallback,Za=/^picture$/i,$a=["load","error","lazyincluded","_lazyloaded"],_a={},ab=Array.prototype.forEach,bb=function(b,c,a){var d=a?"addEventListener":"removeEventListener";a&&bb(b,c),$a.forEach(function(a){b[d](a,c)})},cb=(Va=[],Wa=Ua=[],ja._lsFlush=ia,ja),db=(Ha="onscroll"in aa&&!/(gle|ing)bot/.test(navigator.userAgent),Ka=-1,Ba=o,Da=Ja=Ia=0,Ea=la.throttleDelay,Fa=la.ricTimeout,Ga=Ya&&49<Fa?function(){Ya(ha,{timeout:Fa}),Fa!==la.ricTimeout&&(Fa=la.ricTimeout)}:i(function(){Y(ha)},!0),Ma=i(fa),Na=function(a){Ma({target:a.target})},Oa=i(function(b,g,h,j,k){var m,n,p,q,t;(p=c(b,"lazybeforeunveil",g)).defaultPrevented||(j&&(h?ca(b,la.autosizesClass):b.setAttribute("sizes",j)),m=b.getAttribute(la.srcsetAttr),h=b.getAttribute(la.srcAttr),k&&(n=(t=b.parentNode)&&Za.test(t.nodeName||"")),q=g.firesLoad||"src"in b&&(m||h||n),p={target:b},ca(b,la.loadingClass),q&&(clearTimeout(ra),ra=Y(da,2500),bb(b,Na,!0)),n&&ab.call(t.getElementsByTagName("source"),ga),m?b.setAttribute("srcset",m):h&&!n&&(/^iframe$/i.test(b.nodeName)?(j=h,0==(t=(g=b).getAttribute("data-load-mode")||la.iframeLoadMode)?g.contentWindow.location.replace(j):1==t&&(g.src=j)):b.src=h),k&&(m||n)&&f(b,{src:h})),b._lazyRace&&delete b._lazyRace,u(b,la.lazyClass),cb(function(){var a=b.complete&&1<b.naturalWidth;q&&!a||(a&&ca(b,la.fastLoadedClass),fa(p),b._lazyCache=!0,Y(function(){"_lazyCache"in b&&delete b._lazyCache},9)),"lazy"==b.loading&&Ja--},!0)}),Qa=e(function(){la.loadMode=3,La()}),Ra=function(){return qa?void 0:999>v.now()-ta?void Y(Ra,999):(qa=!0,la.loadMode=3,La(),void X("scroll",t,!0))},{_:function(){ta=v.now(),ka.elements=ba.getElementsByClassName(la.lazyClass),pa=ba.getElementsByClassName(la.lazyClass+" "+la.preloadClass),X("scroll",La,!0),X("resize",La,!0),X("pageshow",function(a){var b;!a.persisted||(b=ba.querySelectorAll("."+la.loadingClass)).length&&b.forEach&&Z(function(){b.forEach(function(a){a.complete&&Pa(a)})})}),aa.MutationObserver?new MutationObserver(La).observe(Xa,{childList:!0,subtree:!0,attributes:!0}):(Xa.addEventListener("DOMNodeInserted",La,!0),Xa.addEventListener("DOMAttrModified",La,!0),setInterval(La,999)),X("hashchange",La,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(a){ba.addEventListener(a,La,!0)}),/d$|^c/.test(ba.readyState)?Ra():(X("load",Ra),ba.addEventListener("DOMContentLoaded",La),Y(Ra,2e4)),ka.elements.length?(o(),cb._lsFlush()):La()},checkElems:La=function(a){var b;(a=!0===a)&&(Fa=33),Ca||(Ca=!0,0>(b=Ea-(v.now()-Da))&&(b=0),a||9>b?Ga():Y(Ga,b))},unveil:Pa=function(b){var d,e,f,g;b._lazyRace||(e=/^img$/i.test(b.nodeName),((g="auto"==(f=b.getAttribute(la.sizesAttr)||b.getAttribute("sizes")))||!qa)&&e&&(b.getAttribute("src")||b.srcset)&&!b.complete&&!r(b,la.errorClass)&&r(b,la.lazyClass)||(d=c(b,"lazyunveilread").detail,g&&eb.updateElem(b,!0,b.offsetWidth),b._lazyRace=!0,Ja++,Oa(b,d,g,f,e)))},_aLSL:t}),eb=(na=i(function(b,c,d,a){if(b._lazysizesWidth=a,a+="px",b.setAttribute("sizes",a),Za.test(c.nodeName||""))for(var e=0,g=(c=c.getElementsByTagName("source")).length;e<g;e++)c[e].setAttribute("sizes",a);d.detail.dataAttr||f(b,d.detail)}),{_:function(){ma=ba.getElementsByClassName(la.autosizesClass),X("resize",oa)},checkElems:oa=e(function(){var a,b=ma.length;if(b)for(a=0;a<b;a++)n(ma[a])}),updateElem:n}),fb=function(){!fb.i&&ba.getElementsByClassName&&(fb.i=!0,eb._(),db._())};return Y(function(){la.init&&fb()}),ka={cfg:la,autoSizer:eb,loader:db,init:fb,uP:f,aC:ca,rC:u,hC:r,fire:c,gW:g,rAF:cb}}(a,a.document,Date);a.lazySizes=b,"object"==typeof module&&module.exports&&(module.exports=b)}("undefined"==typeof window?{}:window),document.addEventListener("lazybeforeunveil",function(a){var b=a.target.getAttribute("data-image");b&&(a.target.style.backgroundImage="url("+b+")")});}, 2000);

!function(b,c){function d(a){this.elem=a}d.init=function(){for(var b=c.querySelectorAll("[data-sharer]"),f=b.length,e=0;e<f;e++)b[e].addEventListener("click",d.add)},d.add=function(a){new d(a.currentTarget||a.srcElement).share()},d.prototype={constructor:d,getValue:function(a){var b=this.elem.getAttribute("data-"+a);return b&&"hashtag"===a&&(b.startsWith("#")||(b="#"+b)),b},share:function(){var a=this.getValue("sharer").toLowerCase();return(a={facebook:{shareUrl:"https://www.facebook.com/sharer/sharer.php",params:{u:this.getValue("url"),hashtag:this.getValue("hashtag")}},linkedin:{shareUrl:"https://www.linkedin.com/shareArticle",params:{url:this.getValue("url"),mini:!0}},twitter:{shareUrl:"https://twitter.com/intent/tweet/",params:{text:this.getValue("title"),url:this.getValue("url"),hashtags:this.getValue("hashtags"),via:this.getValue("via")}},email:{shareUrl:"mailto:"+this.getValue("to")||"",params:{subject:this.getValue("subject"),body:this.getValue("title")+"\n"+this.getValue("url")},isLink:!0},whatsapp:{shareUrl:null===this.getValue("web")?"https://wa.me/":"https://api.whatsapp.com/send",params:{text:this.getValue("title")+" "+this.getValue("url")},isLink:!0},telegram:{shareUrl:null===this.getValue("web")?"tg://msg_url":"https://telegram.me/share",params:{text:this.getValue("title"),url:this.getValue("url")},isLink:!0},pinterest:{shareUrl:"https://www.pinterest.com/pin/create/button/",params:{url:this.getValue("url"),media:this.getValue("image"),description:this.getValue("description")}},reddit:{shareUrl:"https://www.reddit.com/submit",params:{url:this.getValue("url")}},vk:{shareUrl:"http://vk.com/share.php",params:{url:this.getValue("url"),title:this.getValue("title"),description:this.getValue("caption"),image:this.getValue("image")}},flipboard:{shareUrl:"https://share.flipboard.com/bookmarklet/popout",params:{v:2,title:this.getValue("title"),url:this.getValue("url"),t:Date.now()}},blogger:{shareUrl:"https://www.blogger.com/blog-this.g",params:{u:this.getValue("url"),n:this.getValue("title"),t:this.getValue("description")}},evernote:{shareUrl:"https://www.evernote.com/clip.action",params:{url:this.getValue("url"),title:this.getValue("title")}},skype:{shareUrl:"https://web.skype.com/share",params:{url:this.getValue("url"),title:this.getValue("title")}},quora:{shareUrl:"https://www.quora.com/share",params:{url:this.getValue("url"),title:this.getValue("title")}},messenger:{shareUrl:"fb-messenger://share",params:{link:this.getValue("url")}}}[a])&&(a.width=this.getValue("width"),a.height=this.getValue("height")),void 0!==a&&this.urlSharer(a)},urlSharer:function(c){for(var d=c.params||{},f=Object.keys(d),g=0<f.length?"?":"",h=0;h<f.length;h++)"?"!=g&&(g+="&"),d[f[h]]&&(g+=f[h]+"="+encodeURIComponent(d[f[h]]));c.shareUrl+=g,c.isLink?b.location.href=c.shareUrl:(d=c.width||600,f=c.height||480,c=b.open(c.shareUrl,"","scrollbars=no, width="+d+", height="+f+", top="+(b.innerHeight/2-f/2+b.screenY)+", left="+(b.innerWidth/2-d/2+b.screenX)),b.focus&&c.focus())}},"complete"===c.readyState||"loading"!==c.readyState?d.init():c.addEventListener("DOMContentLoaded",d.init),b.Sharer=d}(window,document);

!function(){"use strict";const t=document.documentElement.getAttribute("data-easy-toggle-state-custom-prefix")||"toggle",e=(e,r=(()=>t)())=>["data",r,e].filter(Boolean).join("-"),r=e("arrows"),i=e("class"),n=e("class-on-target"),s=e("class-on-trigger"),a="is-active",o=e("escape"),u=e("event"),c=e("group"),l=e("is-active"),g=e("modal"),d=e("outside"),h=e("outside-event"),A=e("radio-group"),b=e("target"),f=e("target-all"),$=e("target-next"),v=e("target-parent"),m=e("target-previous"),E=e("target-self"),w=e("state"),p=e("trigger-off"),y=new Event("toggleAfter"),k=new Event("toggleBefore"),L=(t,e)=>{const r=t?`[${t}]`:"";if(e)return[...e.querySelectorAll(r)];const a=[`[${i}]${r}`,`[${s}]${r}`,`[${n}][${b}]${r}`,`[${n}][${f}]${r}`,`[${n}][${$}]${r}`,`[${n}][${m}]${r}`,`[${n}][${v}]${r}`,`[${n}][${E}]${r}`].join().trim();return[...document.querySelectorAll(a)]},x=(t,e)=>t.dispatchEvent(e),O=t=>"easyToggleState_"+t,S=(t,e={"aria-checked":t[O("isActive")],"aria-expanded":t[O("isActive")],"aria-hidden":!t[O("isActive")],"aria-pressed":t[O("isActive")],"aria-selected":t[O("isActive")]})=>Object.keys(e).forEach(r=>t.hasAttribute(r)&&t.setAttribute(r,e[r])),D=(t,e,r=!1)=>`This trigger has the class name '${t}' filled in both attributes '${i}' and '${e}'. As a result, this class will be toggled ${r&&"on its target(s)"} twice at the same time.`,z=(t,e)=>(t.getAttribute(e)||"").split(" ").filter(Boolean),I=t=>{const e=t.hasAttribute(c)?c:A;return L(`${e}="${t.getAttribute(e)}"`).filter(t=>t[O("isActive")])},T=(t,e)=>{t||console.warn(`You should fill the attribute '${e}' with a selector`)},q=(t,e)=>{if(0===e.length)return console.warn(`There's no match with the selector '${t}' for this trigger`),[];const r=t.match(/#\w+/gi);return r&&r.forEach(t=>{const r=[...e].filter(e=>e.id===t.slice(1));r.length>1&&console.warn(`There's ${r.length} matches with the selector '${t}' for this trigger`)}),[...e]},K=(t,e)=>e.forEach(e=>{t.classList.toggle(e)}),j={},B=t=>document.addEventListener(t.getAttribute(h)||t.getAttribute(u)||"click",Y,!1),Y=t=>{const e=t.target,r=t.type;let a=!1;L(d).filter(t=>t.getAttribute(h)===r||t.getAttribute(u)===r&&!t.hasAttribute(h)||"click"===r&&!t.hasAttribute(u)&&!t.hasAttribute(h)).forEach(t=>{const r=e.closest(`[${w}="true"]`);r&&r[O("trigger")]===t&&(a=!0),a||t===e||t.contains(e)||!t[O("isActive")]||(t.hasAttribute(c)||t.hasAttribute(A)?R:M)(t)}),a||document.removeEventListener(r,Y,!1);const o=e.closest(`[${i}][${d}],[${s}][${d}],[${n}][${d}]`);o&&o[O("isActive")]&&B(e)},C=t=>M(t.currentTarget[O("target")]),H=(t,e,r)=>(t=>{if(t.hasAttribute(b)||t.hasAttribute(f)){const e=t.getAttribute(b)||t.getAttribute(f);return T(e,t.hasAttribute(b)?b:f),q(e,document.querySelectorAll(e))}if(t.hasAttribute(v)){const e=t.getAttribute(v);return T(e,v),q(e,t.parentElement.querySelectorAll(e))}if(t.hasAttribute(E)){const e=t.getAttribute(E);return T(e,E),q(e,t.querySelectorAll(e))}return t.hasAttribute(m)?q("previous",[t.previousElementSibling].filter(Boolean)):t.hasAttribute($)?q("next",[t.nextElementSibling].filter(Boolean)):[]})(t).forEach(i=>{x(i,k),i[O("isActive")]=!i[O("isActive")],S(i),r?i.classList.add(...e):K(i,e),t.hasAttribute(d)&&(i.setAttribute(w,t[O("isActive")]),i[O("trigger")]=t),t.hasAttribute(g)&&(i[O("isActive")]?(j[i]=(t=>e=>{const r=[...t.querySelectorAll("a[href], area[href], input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]")];if(!r.length||"Tab"!==e.key)return;const i=e.target,n=r[0],s=r[r.length-1];return-1===r.indexOf(i)?(e.preventDefault(),n.focus()):e.shiftKey&&i===n?(e.preventDefault(),s.focus()):e.shiftKey||i!==s?void 0:(e.preventDefault(),n.focus())})(i),document.addEventListener("keydown",j[i],!1)):(document.removeEventListener("keydown",j[i],!1),delete j[i])),x(i,y),((t,e)=>{const r=L(p,t).filter(e=>!e.getAttribute(p)||t.matches(e.getAttribute(p)));if(0!==r.length)e[O("isActive")]?r.forEach(t=>{t[O("target")]||(t[O("target")]=e,t.addEventListener("click",C,!1))}):(r.forEach(t=>{t[O("target")]===e&&(t[O("target")]=null,t.removeEventListener("click",C,!1))}),e.focus())})(i,t)}),M=t=>{x(t,k);const e=(t=>{if(t.hasAttribute(i)&&t.getAttribute(i)&&(t.hasAttribute(s)||t.hasAttribute(n))){const e=z(t,s),r=z(t,n);z(t,i).forEach(i=>{e.includes(i)&&console.warn(D(i,s),t),r.includes(i)&&console.warn(D(i,n,!0),t)})}const e=[i,s,n].reduce((e,r)=>{const a=z(t,r);return(r===i||r===s)&&e.trigger.push(...a),(r===i||r===n)&&e.target.push(...a),e},{trigger:[],target:[]});return!e.trigger.length&&(t.hasAttribute(i)||t.hasAttribute(s))&&e.trigger.push(a),!e.target.length&&(t.hasAttribute(i)||t.hasAttribute(n))&&e.target.push(a),e})(t);return K(t,e.trigger),t[O("isActive")]=!t[O("isActive")],S(t),x(t,y),H(t,e.target,!1),(t=>{if(t.hasAttribute(d))return t.hasAttribute(A)?console.warn(`You can't use '${d}' on a radio grouped trigger`):t[O("isActive")]?B(t):void 0})(t)},R=t=>{const e=I(t);return 0===e.length?M(t):-1===e.indexOf(t)?(e.forEach(M),M(t)):-1===e.indexOf(t)||t.hasAttribute(A)?void 0:M(t)},U=t=>((t[Symbol.iterator]?[...t]:[t]).forEach(t=>{t[O("unbind")]&&t[O("unbind")]()}),t),_=()=>{[...document.querySelectorAll(`[${n}]:not([${b}]):not([${f}]):not([${$}]):not([${m}]):not([${v}]):not([${E}])`)].forEach(t=>{console.warn(`This trigger has the attribute '${n}', but no specified target\n`,t)}),L(l).filter(t=>!t[O("isDefaultInitialized")]).forEach(t=>{if((t.hasAttribute(c)||t.hasAttribute(A))&&I(t).length>0)return console.warn(`Toggle group '${t.getAttribute(c)||t.getAttribute(A)}' must not have more than one trigger with '${l}'`);M(t),t[O("isDefaultInitialized")]=!0});const t=L().filter(t=>!t[O("isInitialized")]);return t.forEach(t=>{const e=e=>{e.preventDefault(),(t.hasAttribute(c)||t.hasAttribute(A)?R:M)(t)},r=t.getAttribute(u)||"click";t.addEventListener(r,e,!1),t[O("unbind")]=()=>{t.removeEventListener(r,e,!1),t[O("isInitialized")]=!1},t[O("isInitialized")]=!0}),L(o).length>0&&!document[O("isEscapeKeyInitialized")]&&(document.addEventListener("keydown",t=>{"Escape"!==t.key&&"Esc"!==t.key||L(o).forEach(t=>{if(t[O("isActive")])return t.hasAttribute(A)?console.warn(`You can't use '${o}' on a radio grouped trigger`):(t.hasAttribute(c)?R:M)(t)})},!1),document[O("isEscapeKeyInitialized")]=!0),L(r).length>0&&!document[O("isArrowKeysInitialized")]&&(document.addEventListener("keydown",t=>{const e=document.activeElement;if(-1===["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Home","End"].indexOf(t.key)||!e.hasAttribute(i)&&!e.hasAttribute(s)&&!e.hasAttribute(n)||!e.hasAttribute(r))return;if(!e.hasAttribute(c)&&!e.hasAttribute(A))return console.warn(`You can't use '${r}' on a trigger without '${c}' or '${A}'`);t.preventDefault();const a=e.hasAttribute(c)?L(`${c}='${e.getAttribute(c)}'`):L(`${A}='${e.getAttribute(A)}'`);let o=e;switch(t.key){case"ArrowUp":case"ArrowLeft":o=a.indexOf(e)>0?a[a.indexOf(e)-1]:a[a.length-1];break;case"ArrowDown":case"ArrowRight":o=a.indexOf(e)<a.length-1?a[a.indexOf(e)+1]:a[0];break;case"Home":o=a[0];break;case"End":o=a[a.length-1]}return o.focus(),o.dispatchEvent(new Event(o.getAttribute(u)||"click"))},!1),document[O("isArrowKeysInitialized")]=!0),t},F=()=>{_(),document.removeEventListener("DOMContentLoaded",F)};document.addEventListener("DOMContentLoaded",F),window.easyToggleState=Object.assign(_,{isActive:t=>!!t[O("isActive")],unbind:U,unbindAll:()=>U(L().filter(t=>t[O("isInitialized")]))})}();

// Create Element
function functionCreateElement(type, config) {
    var element = document.createElement(type);
    var attributes;
    for (attributes in config) {
        if (attributes == "class") {
            element.classList.add.apply(element.classList, config[attributes]);
        } else {
            if (attributes == "content") {
                element.innerHTML = config[attributes];
            } else {
                element[attributes] = config[attributes];
            }
        }
    };
    return element
};

// Promise
function functionLoadScriptAsync(url) {
    return new Promise(function (resolve, reject) {
        var element = functionCreateElement("script", {
            "src": url,
            "async": true
        });
        element.onload = function () {
            resolve();
        };
        element.onerror = function () {
            reject(url);
        };
        materiaConfig.elements.elementScript.parentNode.insertBefore(element, materiaConfig.elements.elementScript);
    });
};

// Snackbar
function functionSnackbar(content, duration) {
    var element = functionCreateElement("div", {
        "class": [
            "snackbar",
        ],
        "content": `<span class='snackbar_text'>${content}</span>`
    });
    document.body.appendChild(element);

    document.querySelectorAll(materiaConfig.elements.elementSnackbar).forEach(function (element, index) {
        setTimeout(function () {
            element.classList.add("active");

            setTimeout(function () {
                element.classList.remove("active");
            }, index + duration + 100);

            setTimeout(function () {
                element.remove();
            }, index + duration + 200);
        }, index * 50);
    })
};

// Copy
async function functionCopy(text) {
    try {
        await navigator.clipboard.writeText(text);
        functionSnackbar("Copied!", 2000)
    } catch (error) {
        functionSnackbar("Failed to copy: " + error, 2000)
    }
};

// Toggle Share
function functionToggleShare(selector) {
    var button = [].slice.call(document.querySelectorAll(selector));

    if (materiaConfig.themeInfo.config.featuresNativeShare === "2px") {
        // If Native Share Feature is Enabled
        if (typeof navigator.share === "undefined") {
            document.querySelectorAll(selector).forEach(function (element) {
                element.remove();
            });

            console.warn("The browser does not support the Share API. Please disable this feature on Materia X2 Theme.");
        };
    };

    if (button) {
        button.forEach(function (element, index) {
            element.addEventListener("click", function () {
                var attrPostURL = element.getAttribute("data-post-url");
                var attrPostTitle = element.getAttribute("data-post-title");

                if (materiaConfig.themeInfo.config.featuresNativeShare === "2px") {
                    if (typeof navigator.share !== 'undefined') {
                        navigator.share({
                            title: attrPostTitle,
                            url: attrPostURL,
                            text: `${attrPostTitle}\n\n<data:messages.readMore/>:`
                        }).then(function () {
                            console.log("Share API is Enabled")
                        }).catch(function (error) {
                            console.log(error)
                        })
                    };
                } else {
                    // If Native Share Feature is Disabled
                    var dialogShareBox = document.querySelector(".dialog_share_box");
                    var dialogShareBoxButton = dialogShareBox.querySelectorAll("button");

                    if (dialogShareBox) {
                        dialogShareBoxButton.forEach(function (element) {
                            element.setAttribute("data-url", attrPostURL);
                            element.setAttribute("data-title", `${attrPostTitle}\n\n<data:messages.readMore/>:`);

                            dialogShareBox.querySelector(".dialog_header span").innerHTML = "<data:messages.share.escaped/>: " + attrPostTitle;
                        });
                    };
                }
            });
        });
    }
};
functionToggleShare(materiaConfig.elements.elementButtonShare);

// Google Translate
if (materiaConfig.themeInfo.config.googleTranslate === "2px") {
    Defer(function () {
        functionLoadScriptAsync(materiaConfig.scripts.scriptGoogleTranslate).then(function () {
            var loader = document.querySelector("#google_translate_element .loader");
            loader.parentNode.removeChild(loader)
        })
    });
    function elcreativeGoogleTranslate() {
        new google.translate.TranslateElement({
            pageLanguage: "<b:eval expr='data:blog.locale.language ?: &quot;auto&quot;'/>", // auto
            autoDisplay: true
        }, "google_translate_element")
    };
};

// jQuery Script
if (materiaConfig.themeInfo.config.featuresCustomjQueryScript === "2px") {
    Defer(function () {
        functionLoadScriptAsync(materiaConfig.scripts.scriptJquery)
    });
};

// Navigation Drawer and Sub Menu
if (materiaConfig.themeInfo.config.navigationDrawerMenu === "true") {
    if (document.querySelector(materiaConfig.elements.elementButtonMenu)) {
        document.querySelector(materiaConfig.elements.elementButtonMenu).addEventListener("click", function () {
            document.body.classList.toggle("drawer_menu_active");
            document.body.classList.remove("search_active", "comments_active");
        });

        if (materiaConfig.themeInfo.config.featuresSubMenu === "2px") {
            // Submenu
            function functionDrawerSubmenu(selector) {
                var drawerResult = "";
                drawerBoolean = false;
                document.querySelector(selector).querySelectorAll("li").forEach(function (element, index) {
                    var drawerText = element.innerText;
                    if (drawerText.startsWith("_")) {
                        element = element.outerHTML.replace(">_", ">");
                        drawerText = "";
                        if (!drawerBoolean) {
                            drawerResult = drawerResult.replace(/<\/li>$/, "");
                            drawerText = '<ul class="drawer_sub">';
                        };
                        drawerResult = drawerResult + (drawerText + element);
                        drawerBoolean = true;
                    } else {
                        if (drawerBoolean) {
                            drawerResult = drawerResult + "</ul>";
                        };
                        drawerResult = drawerResult + element.outerHTML;
                        drawerBoolean = false;
                    }
                    if (drawerBoolean & index == document.querySelector(selector).querySelectorAll("li").length - 1) {
                        drawerResult = drawerResult + "</ul></li>";
                    }
                });
                document.querySelector(selector).querySelectorAll("ul")[0].innerHTML = drawerResult;
                document.querySelector(selector).querySelector("ul").classList.remove("visibility_hidden");
                document.querySelector(selector).querySelectorAll(".drawer_sub").forEach((element) => {
                    element.parentNode.classList.add("toggle");
                });
                document.querySelector(selector).querySelectorAll(".toggle > a").forEach((element) => {
                    element.setAttribute("href", "javascript:");
                    element.addEventListener("click", () => {
                        element.classList.toggle("visible");
                    });
                });
            };
            if (document.querySelector(materiaConfig.elements.elementDrawerMenu)) {
                functionDrawerSubmenu(materiaConfig.elements.elementDrawerMenu);
            }
        }
    };
};

// Ripple Effects
if (materiaConfig.themeInfo.config.featuresRippleEffect === "2px") {
    Defer(function () {
        var elcreativeRipple;
        document.onpointerdown = function (event) {
            var rippleTarget = event.target;
            var rippleElement;

            if (elcreativeRipple) {
                var rippleContent = elcreativeRipple;
                elcreativeRipple = null;

                setTimeout(function () {
                    if (rippleContent.parentNode) {
                        rippleContent.parentNode.removeChild(rippleContent)
                    }
                }, 400)
            };

            for (; rippleTarget && rippleTarget.classList && !rippleTarget.classList.contains("elcreative_ripple");) {
                rippleTarget = rippleTarget.parentNode;
            };

            if (rippleTarget && rippleTarget.classList && rippleTarget.classList.contains("elcreative_ripple")) {
                var rippleAxisX = event.x - rippleTarget.getBoundingClientRect().left;
                var rippleAxisY = event.y - rippleTarget.getBoundingClientRect().top;
                var rippleWidth = Math.max(rippleAxisX, rippleTarget.offsetWidth - rippleAxisX);
                var rippleHeight = Math.max(rippleAxisY, rippleTarget.offsetHeight - rippleAxisY);

                rippleWidth = Math.sqrt(rippleWidth * rippleWidth + rippleHeight * rippleHeight);
                (rippleHeight = document.createElement("i")).classList.add("ripple_container");
                rippleTarget.appendChild(rippleHeight);

                (rippleElement = document.createElement("i")).style.top = rippleAxisY - rippleWidth + "px";
                rippleElement.style.left = rippleAxisX - rippleWidth + "px";
                rippleElement.style.height = 2 * rippleWidth + "px";
                rippleElement.style.width = 2 * rippleWidth + "px";
                rippleElement.style.transform = "scale(0)";
                rippleHeight.appendChild(rippleElement);

                elcreativeRipple = rippleHeight;
                var rippleTimeOut = setTimeout(function () {
                    rippleElement.style.transform = "scale(1)";
                }, 24);

                document.onpointerup = document.onpointercancel = function () {
                    document.onpointerup = document.onpointercancel = document.onpointermove = null;
                    elcreativeRipple.firstChild.style.opacity = "0";
                };

                document.onpointermove = function (render) {
                    if (4 < event.rippleWidth - render.rippleWidth || -4 > event.rippleWidth - render.rippleWidth || 4 < event.y - render.y || -4 > event.y - render.y) {
                        clearTimeout(rippleTimeOut), document.onpointercancel();
                    }
                }
            }
        };
    });
};

// Turboload
if (materiaConfig.themeInfo.config.featuresTurbo === "2px") {
    document.addEventListener("turbo:load", function () {
        window.easyToggleState();
        window.Sharer.init();
        functionToggleShare(materiaConfig.elements.elementButtonShare);
    });
};

// Toggle Dark/Light Mode
if (document.querySelector(materiaConfig.elements.elementButtonColorMode)) {
    document.querySelector(materiaConfig.elements.elementButtonColorMode).addEventListener("click", function () {
        var logo = document.querySelector(materiaConfig.elements.elementLogo);

        document.body.classList.toggle("darkmode");
        localStorage.setItem("color_mode", "dark" === localStorage.getItem("color_mode") ? "light" : "dark");

        if (localStorage.getItem("color_mode") === "dark") {
            document.body.classList.add("darkmode");
            if (typeof logo !== "undefined" && logo !== null && typeof logoDark !== "undefined") {
                logo.setAttribute("src", logoDark)
            }
        } else {
            document.body.classList.remove("darkmode");
            if (typeof logo !== "undefined" && logo !== null && typeof logoLight !== "undefined") {
                logo.setAttribute("src", logoLight)
            }
        }
    });

    if (localStorage.getItem("color_mode") === "dark") {
        if (typeof logo !== "undefined" && logo !== null && typeof logoDark !== "undefined") {
            logo.setAttribute("src", logoDark)
        }
    } else {
        if (typeof logo !== "undefined" && logo !== null && typeof logoLight !== "undefined") {
            logo.setAttribute("src", logoLight)
        }
    };
};

// Toggle Search
if (document.querySelector(materiaConfig.elements.elementButtonSearch)) {
    document.querySelector(materiaConfig.elements.elementButtonSearch).addEventListener("click", function () {
        document.body.classList.toggle("search_active");
        document.body.classList.remove("drawer_menu_active")
        document.querySelector(materiaConfig.elements.elementSearchInput).focus();
    });
};

// Close Search Button
if (document.querySelector(materiaConfig.elements.elementButtonSearchClose)) {
    document.querySelector(materiaConfig.elements.elementButtonSearchClose).addEventListener("click", function () {
        document.body.classList.remove("search_active");
        document.querySelector(materiaConfig.elements.elementSearchInput).blur()
    })
};

// Backdrop
if (document.querySelector(materiaConfig.elements.elementBackdrop)) {
    document.querySelector(materiaConfig.elements.elementBackdrop).addEventListener("click", function () {
        document.body.classList.remove("search_active", "drawer_menu_active", "comments_active");
        document.querySelector(materiaConfig.elements.elementSearchInput).blur()
    })
};

// Scroll Top
if (document.querySelector(materiaConfig.elements.elementScrollTop)) {
    document.querySelector(materiaConfig.elements.elementScrollTop).addEventListener("click", function () {
        document.documentElement.scrollTop = 0
    })
};

// Floating Action Button and Scroll Indicator
window.addEventListener("scroll", function () {
    if (document.querySelector(materiaConfig.elements.elementFAB) && window.pageYOffset > 150) {
        document.querySelector(materiaConfig.elements.elementFAB).classList.add("visible")
    } else {
        document.querySelector(materiaConfig.elements.elementFAB).classList.remove("visible")
    };

    if (materiaConfig.themeInfo.config.featuresPostScroll === "2px") {
        // Scroll Indicator
        function functionScrollIndicator(selector) {
            var scrollWindow = document.body.scrollTop || document.documentElement.scrollTop;
            var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (scrollWindow / scrollHeight) * 100;

            document.querySelector(selector).style.width = scrolled + "%"
        };

        functionScrollIndicator(materiaConfig.elements.elementScrolIndicator);
    }
});
