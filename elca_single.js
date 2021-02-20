function adBlockNotDetected() {}

var postBody = document.getElementById('post-body'),
var adBlockContent = '<div id="post-body"><blockquote><strong style="display: flex;align-items: center;"><svg width="24" height="24" viewBox="0 0 24 24" style="fill:currentColor;margin-right: 10px;"><path d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z"></path></svg>Ad-Block Terdeteksi</strong><p>Mohon maaf, kami mendeteksi bahwa anda telah mengaktifkan Ad-Blocker. Untuk itu, kami berharap agar anda menonaktifkannya.</p><p>Dengan menonaktifkan Ad-Blocker, anda telah membantu kami dalam mengembangkan Website ini. Terimakasih</p></blockquote></div>';

function adBlockDetected() {
postBody.innerHTML = adBlockContent;
};

var importFAB;
document.addEventListener("DOMContentLoaded", function(e) {
    document.querySelectorAll("pre.hl").forEach(function(e) {
        hljs.highlightBlock(e)
    })
}), "undefined" != typeof fuckAdBlock || "undefined" != typeof FuckAdBlock ? adBlockDetected() : ((importFAB = document.createElement("script")).onload = function() {
    fuckAdBlock.onDetected(adBlockDetected), fuckAdBlock.onNotDetected(adBlockNotDetected)
}, importFAB.onerror = function() {
    adBlockDetected()
}, importFAB.integrity = "sha256-xjwKUY/NgkPjZZBOtOxRYtK20GaqTwUCf7WYCJ1z69w=", importFAB.crossOrigin = "anonymous", importFAB.src = "https://cdnjs.cloudflare.com/ajax/libs/fuckadblock/3.2.1/fuckadblock.min.js", document.head.appendChild(importFAB));


function aFunction() {
    if (document.querySelector("section#comments")) {
        var a = document.createElement("script");
        a.async = !0;
        a.src = "//www.blogger.com/static/v1/jsbin/3858658042-comment_from_post_iframe.js";
        a.onload = function() {
            BLOG_CMT_createIframe("<data:post.appRpcRelayPath/>");
            document.querySelector("#top-continue a").setAttribute("href", "javascript:void(0);");
            document.querySelector(".comment-reply").setAttribute("href", "javascript:void(0);");
            var b = document.getElementById("comment-editor"),
                d = b.src,
                e = document.querySelectorAll("ol .comment-reply"),
                k = document.getElementsByClassName("comment-form")[0],
                q = e.length,
                c = document.getElementById("top-continue"),
                v = function(l, r, t,
                    u) {
                    l.addEventListener("click", function() {
                        var m = l.getAttribute("data-comment-id");
                        document.querySelector("#c" + m + " > .comment-replybox-single").appendChild(r);
                        t.src = u + "&parentID=" + m;
                        c.classList.remove("hidden");
                        c && document.querySelector("#top-continue a").classList.remove("hidden")
                    })
                };
            for (i = 0; i < q; i++) v(e[i], k, b, d);
            if (c) {
                c.classList.add("hidden");
                j = c.getElementsByTagName("a")[0];
                j.removeAttribute("class");
                var n = document.querySelector("#top-continue > a");
                n.addEventListener("click", function() {
                    n.parentNode.appendChild(k);
                    b.src = d;
                    j.classList.add("hidden")
                })
            }
        };
        document.getElementsByTagName("body")[0].appendChild(a);
        a = document.querySelector("#comment-holder .loadmore");
        var p = a.getAttribute("data-published-min"),
            w = parseInt(p) + 1;
        f = a.getAttribute("data-post-id");
        g = document.querySelector('link[rel="canonical').getAttribute("href");
        a && p && (a.classList.contains("hidden") && a.classList.remove("hidden"), a.addEventListener("click", function() {
            var b = document.createElement("script");
            b.src = "//www.blogger.com/static/v1/widgets/2195516358-widgets.js";
            b.async = "true";
            b.onload = function() {
                _WidgetManager._Init("//www.blogger.com/rearrange?blogID=4156644495655521536", "", "4156644495655521536");
                _WidgetManager._SetDataContext([{
                    data: {
                        dynamicViewsCommentsSrc: "//www.blogblog.com/dynamicviews/f0c16c7f605505d1/js/comments.js"
                    }
                }]);
                _WidgetManager._RegisterWidget("_BlogView", new _WidgetInfo("Blog1", "mainbar", document.getElementById("Blog1"), {
                    useNgc: !0
                }, "displayModeFull"));
                h = document.createElement("script");
                h.async = !0;
                h.src = g + "?action=getComments&widgetId=Blog1&widgetType=Blog&responseType=js&postId=" +
                    f + "&publishedMin=" + w + "&xssi_token=AOuZoY4tR91GIm4atCD_-XhxENqtw38CgQ%3A1594209309080";
                document.getElementsByTagName("body")[0].appendChild(h)
            };
            document.getElementsByTagName("body")[0].appendChild(b)
        }))
    }
}


function tocShow() {
    document.querySelector('.modal-backdrop').classList.toggle('show')
};

function modalBackdrop() {
    document.querySelector('.modal-backdrop').classList.remove('show')
}

var toggleComment = document.querySelector('.show-comment-btn, .comment-close, .entry-comments-link'),
blogComment = document.querySelector('.blog-post-comments'),
tocButton = document.querySelector('#elcTOC'),
tocNode = tocButton.cloneNode(true),
tocContent = document.querySelector('.modal-backdrop .title');


toggleComment.addEventListener('click', function(e) {
	e.preventDefault();

	blogComment.classList.toggle('active');

	aFunction();
})

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

insertAfter(tocNode, tocContent);