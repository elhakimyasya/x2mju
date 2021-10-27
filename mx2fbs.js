var config = {
    apiKey: "AIzaSyCmWRraw2UZWfp_C6p3a4QYhci5LmhtSfY",
    authDomain: "elc-academy.firebaseapp.com",
    databaseURL: "https://elc-academy-default-rtdb.firebaseio.com/",
    storageBucket: "elc-academy.appspot.com"
};

function login() {
    firebase.auth().onAuthStateChanged(function(e) {
        e && (window.location.href = authProfilePage)
    });
    var e = {
        signInSuccessUrl: !1,
        signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
        tosUrl: !1
    };
    new firebaseui.auth.AuthUI(firebase.auth()).start("#firebaseui-auth-container", e)
}

function index() {
    firebase.auth().onAuthStateChanged(function(e) {
        e ? firebase.database().ref(e.displayName).child("Posts").orderByChild("updatedAt").on("value", function(e) {
            var t = "";
            e.forEach(function(e) {
                entry = e.val(), t = '<div class="__article"><a href="my-posts.html?id=' + e.getKey() + '"><div class="panel-heading">' + excerpt(entry.title, 140) + '</div><div class="panel-body"><small>' + datetimeFormat(entry.updatedAt) + '</small></div></a><small class="' + entry.status + '">' + entry.status + "</small></div>" + t
            }), $("#__entries.__post").removeClass("__loading").find(".__loader").remove(), $("#__entries.__post .__panel_content").append(t)
        }) : (alert("Please login first"), window.location.href = "sign-in.html")
    })
}

function profile() {
    firebase.auth().onAuthStateChanged(function(e) {
        var t, a, n;
        e ? (document.getElementById("logout").onclick = function() {
            firebase.auth().signOut()
        }, n = "", t = (a = firebase.database().ref(e.displayName)).child("Posts"), a = a.child("Files"), n = '<div class="__avatar"><img src="' + e.photoURL + '"/></div><div class="__info"><div class="__name"><span>' + e.displayName + '</span></div><span></span><span class="__email">' + e.email + "</span></div></div>", $(".__profile_container").removeClass("__loading").prepend(n).find(".__loader").remove(), t.limitToLast(5).once("value", function(e) {
            var t = "";
            e.forEach(function(e) {
                entry = e.val(), t = '<div class="__article"><a href="my-posts.html?id=' + e.getKey() + '" title="' + entry.title + '"><div class="panel-heading">' + excerpt(entry.title, 140) + '</div><div class="panel-body"><small>' + datetimeFormat(entry.updatedAt) + '</small></div></a><small class="' + entry.status + '">' + entry.status + "</small></div>" + t
            }), $("#__entries.__post").removeClass("__loading"), $("#__entries.__post .__panel_content").prepend(t).find(".__loading").remove()
        }), a.once("value", function(e) {
            var t = "";
            e.forEach(function(e) {
                t = '<div class="__article"><div class="panel-heading">' + e.key + '</div><a href="' + e.val() + '" title="' + e.key + '" target="_blank" rel="nofollow noopener noreferer"><small>Download</small></a></div>' + t
            }), $("#__entries.__files").removeClass("__loading"), $("#__entries.__files .__panel_content").prepend(t).find(".__loading").remove()
        })) : window.location.href = "sign-in.html"
    })
}

function entry() {
    firebase.auth().onAuthStateChanged(function(e) {
        var a, n, t, i;
        e ? (t = (t = "id", i = {}, window.location.href.split("?").pop().split("&").map(function(e) {
            e = e.split("="), i[e[0]] = e[1]
        }), t ? i[t] || null : i)) ? (a = !1, n = (e = firebase.database().ref(e.displayName)).child("Posts").child(t), e.child("Points"), n.on("value", function(e) {
            var t = e.val();
            t ? (t["updatedAt-formatted"] = datetimeFormat(t.updatedAt), $("[data-bind]").each(function() {
                $(this).html(t[$(this).data("bind")])
            }), a || (a = !0, n.child("views").transaction(function(e) {
                return (e || 0) + 1
            })), $(".__blog_post_header .__post_title").text(t.title), $(".bq em").text(t.description)) : window.location.href = "index.html"
        }), $("#update").attr("href", "update-post.html?id=" + t), $("#delete").click(function() {
            n.remove()
        })) : (alert("This entry id does not exist"), window.location.href = "index.html") : (alert("Please login first"), window.location.href = "sign-in.html")
    })
}

function update() {
    firebase.auth().onAuthStateChanged(function(n) {
        var i, l, e, t;
        n ? (i = (e = "id", t = {}, window.location.href.split("?").pop().split("&").map(function(e) {
            e = e.split("="), t[e[0]] = e[1]
        }), e ? t[e] || null : t)) ? ((l = firebase.database().ref(n.displayName).child("Posts").child(i)).once("value", function(e) {
            e = e.val(), $('#update_entry [name="title"]').val(e.title), $('#update_entry [name="description"]').val(e.description), $('#update_entry [name="labels"]').val(e.labels), $('#update_entry [name="content"]').val(e.content), tinymce.init({
                selector: "textarea",
                height: 500,
                branding: !1,
                menubar: "file edit view insert format tools table",
                plugins: "link image preview toc codesample table wordcount code lists insertdatetime emoticons visualblocks",
                toolbar: "formatselect | bold italic underline strikethrough superscript subscript blockquote | link image |  alignleft aligncenter alignright alignjustify bullist numlist | table toc | codesample preview insertdatetime emoticons visualblocks code",
                toc_class: "elcTOC",
                toc_depth: 6,
                content_style: 'body { font-family: "Segoe UI"}',
                codesample_languages: [{
                    text: "Command Line",
                    value: "command hljs hl hljs"
                }, {
                    text: "CSS",
                    value: "css hljs hl css"
                }, {
                    text: "C",
                    value: "c hljs hl c"
                }, {
                    text: "C++",
                    value: "cpp hljs hl cpp"
                }, {
                    text: "HTML/XML",
                    value: "html hljs hl html xml"
                }, {
                    text: "Java",
                    value: "java hljs hl java"
                }, {
                    text: "JavaScript",
                    value: "javascript hljs hl javascript"
                }, {
                    text: "JSON",
                    value: "json hljs hl json"
                }, {
                    text: "Markdown",
                    value: "markdown hljs hl markdown"
                }, {
                    text: "PHP",
                    value: "php hljs hl php"
                }, {
                    text: "Python",
                    value: "python hljs hl python"
                }, {
                    text: "TypeScript",
                    value: "typescript hljs hl typescript"
                }],
                insertdatetime_formats: ["Updated: %A, %d %B %Y"],
                rel_list: [{
                    title: "Internal Link",
                    value: ""
                }, {
                    title: "External Link",
                    value: "noopener noreferer nofollow"
                }],
                extended_valid_elements: "img[src|loading=lazy|alt|title|width|height|align|onmouseover|onmouseout|name]",
                init_instance_callback: function(e) {
                    $(".__loader").remove()
                }
            })
        }), $("#update_entry").submit(function(e) {
            e.preventDefault();
            var t = {
                '"': "'",
                mcetoc: "elcreative_toc"
            };
            e = tinymce.get("content").getContent().replace(/"|mcetoc/g, function(e) {
                return t[e]
            });
            var a = unescape(e);
            return l.transaction(function(e) {
                return (e = e || {}).title = $('#update_entry [name="title"]').val(), e.description = $('#update_entry [name="description"]').val(), e.labels = $('#update_entry [name="labels"]').val(), e.content = a, e.updatedAt = (new Date).getTime(), e.author = n.email, e
            }).then(function() {
                window.location.href = "my-posts.html?id=" + i
            }).catch(function(e) {
                alert(e)
            }), !1
        })) : window.location.href = "create-posts.html" : (alert("Please log-in"), window.location.href = "sign-in.html")
    })
}

function create() {
    firebase.auth().onAuthStateChanged(function(n) {
        n ? (tinymce.init({
            selector: "textarea",
            height: 500,
            branding: !1,
            menubar: "file edit view insert format tools table",
            plugins: "link image preview toc codesample table wordcount code lists insertdatetime emoticons visualblocks",
            toolbar: "formatselect | bold italic underline strikethrough superscript subscript blockquote | link image |  alignleft aligncenter alignright alignjustify bullist numlist | table toc | codesample preview insertdatetime emoticons visualblocks code",
            toc_class: "elcTOC",
            toc_depth: 6,
            content_style: 'body { font-family: "Segoe UI"}',
            codesample_languages: [{
                text: "Command Line",
                value: "command hljs hl hljs"
            }, {
                text: "CSS",
                value: "css hljs hl css"
            }, {
                text: "C",
                value: "c hljs hl c"
            }, {
                text: "C++",
                value: "cpp hljs hl cpp"
            }, {
                text: "HTML/XML",
                value: "html hljs hl html xml"
            }, {
                text: "Java",
                value: "java hljs hl java"
            }, {
                text: "JavaScript",
                value: "javascript hljs hl javascript"
            }, {
                text: "JSON",
                value: "json hljs hl json"
            }, {
                text: "Markdown",
                value: "markdown hljs hl markdown"
            }, {
                text: "PHP",
                value: "php hljs hl php"
            }, {
                text: "Python",
                value: "python hljs hl python"
            }, {
                text: "TypeScript",
                value: "typescript hljs hl typescript"
            }],
            insertdatetime_formats: ["Updated: %A, %d %B %Y"],
            rel_list: [{
                title: "Internal Link",
                value: ""
            }, {
                title: "External Link",
                value: "noopener noreferer nofollow"
            }],
            extended_valid_elements: "img[src|loading=lazy|alt|title|width|height|align|onmouseover|onmouseout|name]",
            init_instance_callback: function(e) {
                $(".__loader").remove()
            }
        }), $("#new_entry").submit(function(e) {
            e.preventDefault(), (e = {}).title = $(this).find('[name="title"]').val(), e.description = $(this).find('[name="description"]').val(), e.labels = $(this).find('[name="labels"]').val(), e.content = tinymce.get("content").getContent(), e.createdAt = (new Date).getTime(), e.updatedAt = e.createdAt, e.views = 0, e.status = "Pending";
            var t = firebase.database().ref(n.displayName),
                a = t.child("Posts");
            return t.child("Points").transaction(function(e) {
                return (e || 0) + 10
            }), a.push(e).then(function(e) {
                window.location.href = "my-posts.html?id=" + e.getKey()
            }).catch(function(e) {
                alert(e), console.error(e)
            }), !1
        })) : (alert("Please login first"), window.location.href = "sign-in.html")
    })
}

function strip(e) {
    var t = document.createElement("DIV");
    return t.innerHTML = e, t.textContent || t.innerText || ""
}

function excerpt(e, t) {
    return e = strip(e), (e = $.trim(e)).length > t && (e = e.substring(0, t - 3) + "..."), e
}

function pad2Digit(e) {
    return ("0" + e.toString()).slice(-4)
}

function datetimeFormat(e) {
    return (e = new Date(e)).getDate() + " " + "Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember".split(" ")[e.getMonth()] + " " + pad2Digit(e.getFullYear())
}
firebase.initializeApp(config);
