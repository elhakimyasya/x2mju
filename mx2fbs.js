function elcreativeAuthLogin() {
  firebase.auth().onAuthStateChanged(function(database) {
    if (database) {
      window.location.href = authProfilePage;
      localStorage.setItem("auth_image", database.photoURL)
    } else {
      localStorage.removeItem("auth_image")
    }
  });

  var config = {
    signInSuccessUrl : false,
    signInOptions : [firebase.auth.GoogleAuthProvider.PROVIDER_ID], //, firebase.auth.FacebookAuthProvider.PROVIDER_ID, firebase.auth.GithubAuthProvider.PROVIDER_ID, firebase.auth.EmailAuthProvider.PROVIDER_ID
    tosUrl : false
  };

  (new firebaseui.auth.AuthUI(firebase.auth())).start("#firebaseui-auth-container", config)
};

function elcreativeAuthProfile () {
  firebase.auth().onAuthStateChanged(function(database) {
    if (database) {
      document.getElementById("auth_logout").onclick = function() {
        firebase.auth().signOut();
        localStorage.removeItem("auth_image")
      };

      document.querySelector(".auth_profile_container").innerHTML = '<div class="auth_profile"><div class="auth_avatar"><span class="lazyload shimmer" data-image="' + database.photoURL + '"/></div><div class="auth_info"><div class="auth_name">' + database.displayName + '</div><div class="auth_email">' + database.email + '</div></div></div>';

      var refUser = firebase.database().ref().child('Users/' + database.uid);
      refUser.update({
        userData : {
          userEmail: database.email,
          userName: database.displayName,
          userPhotoUrl: database.photoURL,
          userUID: database.uid
        }
      });

      var refUserPost = firebase.database().ref().child('Users/' + database.uid).child("userPost");
      refUserPost.limitToLast(6).once("value", function(postItem) {
        var postContent = "";
        postItem.forEach(function(postId) {
          database = postId.val();
          postContent = '<div class="auth_article"><div class="article_info"><a href="' + authUserPostPage + '?id=' + postId.getKey() + '" title="' + database.title + '">' + database.title + '</a><small>' + database.author + " - " + datetimeFormat(database.updated) + ' | <a href="' + authEditPost + "?id=" + postId.getKey() + '" style="display:inline">Edit</a></small></div><div class="article_action"><small>Pending</small></div></div>' + postContent;
        });

        if (postContent !== "") {
          document.querySelector(".tab_panel_post").innerHTML = postContent;
        }
      });
    } else {
      if (confirm('You need to login to access this page. Do you want to log in?')) {
        window.location.href = authLoginPage;
      } else {
        window.location.href = "/";
      }
    }
  });
};

function elcreativeAuthPost() {
  firebase.auth().onAuthStateChanged(function(database) {
    var postId;
    var postObject;
    var postBoolean;
    var refPost;

    if (database) {
      if (postId = (postId = "id", postObject = {}, window.location.href.split("?").pop().split("&").map(function(url) {
        url = url.split("=");
        postObject[url[0]] = url[1];
      }), postId ? postObject[postId] || null : postObject)) {
        postBoolean = false;
        refPost = (database = firebase.database().ref('Users/' + database.uid)).child("userPost").child(postId);
        refPost.on("value", function(postItem) {
          var postData = postItem.val();
          if (postData) {
            document.querySelector(".panel_content").innerHTML = postData.content;

            if (!postBoolean) {
              postBoolean = true;
              refPost.child("views").transaction(function(count) {
                return (count || 0) + 1
              });
            };

            document.querySelector(".Blog .post_title").innerText = postData.title;
          } else {
            if (confirm('Sorry, this post has not been created or does not exist. Do you want to write it?')) {
              window.location.href = authCreatePost;
            } else {
              window.location.href = authProfilePage;
            }
          }
        });

        document.getElementById('auth_post_update').setAttribute("href", authEditPost + "?id=" + postId);
        document.getElementById("auth_post_delete").addEventListener("click", function() {
          if (confirm('Are you sure you want to delete this post?')) {
            refPost.remove()
          } else {}
        })
      } else {
        if (confirm('Sorry, this post has not been created or does not exist. Do you want to write it?')) {
          window.location.href = authCreatePost;
        } else {
          window.location.href = authProfilePage;
        }
      }
    } else {
      if (confirm('You need to login to access this page. Do you want to log in?')) {
        window.location.href = authLoginPage;
      } else {
        window.location.href = "/";
      }
    }
  });
};

function elcreativeAuthPostEdit() {
  firebase.auth().onAuthStateChanged(function(database) {
    var postId;
    var refPost;
    var postIds;
    var postObject;
    if (database) {
      if (postId = (postIds = "id", postObject = {}, window.location.href.split("?").pop().split("&").map(function(strings) {
        strings = strings.split("=");
        postObject[strings[0]] = strings[1];
      }), postIds ? postObject[postIds] || null : postObject)) {
        (refPost = firebase.database().ref('Users/' + database.uid).child("userPost").child(postId)).once("value", function(databases) {
          databases = databases.val();

          if (databases !== null) {
            document.getElementById("auth_input_post_title").value = databases.title;
            document.getElementById("auth_input_post_description").value = databases.description;
            document.getElementById("auth_input_post_label").value = databases.labels;
            document.getElementById("auth_input_post_content").value = databases.content;

            tinymce.init({
              selector : "textarea",
              height : 500,
              branding : false,
              menubar : "file edit view insert format tools table",
              plugins : "link image preview toc codesample table wordcount code lists insertdatetime emoticons visualblocks",
              toolbar : "formatselect | bold italic underline strikethrough superscript subscript blockquote | link image |  alignleft aligncenter alignright alignjustify bullist numlist | table toc | codesample preview insertdatetime emoticons visualblocks code",
              toc_class : "elcTOC",
              toc_depth : 6,
              content_style : 'body { font-family: "Segoe UI"}',
              codesample_languages : [{
                text : "Command Line",
                value : "command hljs hl hljs"
              }, {
                text : "CSS",
                value : "css hljs hl css"
              }, {
                text : "C",
                value : "c hljs hl c"
              }, {
                text : "C++",
                value : "cpp hljs hl cpp"
              }, {
                text : "HTML/XML",
                value : "html hljs hl html xml"
              }, {
                text : "Java",
                value : "java hljs hl java"
              }, {
                text : "JavaScript",
                value : "javascript hljs hl javascript"
              }, {
                text : "JSON",
                value : "json hljs hl json"
              }, {
                text : "Markdown",
                value : "markdown hljs hl markdown"
              }, {
                text : "PHP",
                value : "php hljs hl php"
              }, {
                text : "Python",
                value : "python hljs hl python"
              }, {
                text : "TypeScript",
                value : "typescript hljs hl typescript"
              }],
              insertdatetime_formats : ["Updated: %A, %d %B %Y"],
              rel_list : [{
                title : "Internal Link",
                value : ""
              }, {
                title : "External Link",
                value : "noopener noreferer nofollow"
              }],
              extended_valid_elements : "img[src|loading=lazy|alt|title|width|height|align|onmouseover|onmouseout|name]",
              init_instance_callback : function(ed) {

              }
            });
          } else {
            if (confirm('Sorry, this post has not been created or does not exist. Do you want to write it?')) {
              window.location.href = authCreatePost;
            } else {
              window.location.href = authProfilePage;
            }
          }
        });
        document.getElementById("auth_post_edit").addEventListener("submit", function(postContent) {
          postContent.preventDefault();

          var postResult = {
            '"' : "'",
            mcetoc : "elcreative_toc"
          };
          postContent = tinymce.get("auth_input_post_content").getContent().replace(/"|mcetoc/g, function(x) {
            return postResult[x];
          });
          var postContentUnescaped = unescape(postContent);
          return refPost.transaction(function(o) {
            return (o = o || {}).title = document.getElementById("auth_input_post_title").value, o.description = document.getElementById("auth_input_post_description").value, o.labels = document.getElementById("auth_input_post_label").value, o.content = postContentUnescaped, o.updated = (new Date).getTime(), o.author = database.displayName, o;
          }).then(function() {
            window.location.href = authUserPostPage + "?id=" + postId;
          }).catch(function(bbls) {
            console.log(bbls);
          }), false;
        })
      } else {
        if (confirm('Sorry, this post has not been created or does not exist. Do you want to write it?')) {
          window.location.href = authCreatePost;
        } else {
          window.location.href = authProfilePage;
        }
      }
    } else {
      if (confirm('You need to login to access this page. Do you want to log in?')) {
        window.location.href = authLoginPage;
      } else {
        window.location.href = "/";
      }
    }
  });
};

function elcreativeAuthPostCreate() {
  firebase.auth().onAuthStateChanged(function(database) {
    if (database) {
      tinymce.init({
        selector : "textarea",
        height : 500,
        branding : false,
        menubar : "file edit view insert format tools table",
        plugins : "link image preview toc codesample table wordcount code lists insertdatetime emoticons visualblocks",
        toolbar : "formatselect | bold italic underline strikethrough superscript subscript blockquote | link image |  alignleft aligncenter alignright alignjustify bullist numlist | table toc | codesample preview insertdatetime emoticons visualblocks code",
        toc_class : "elcTOC",
        toc_depth : 6,
        content_style : 'body { font-family: "Segoe UI"}',
        codesample_languages : [{
          text : "Command Line",
          value : "command hljs hl hljs"
        }, {
          text : "CSS",
          value : "css hljs hl css"
        }, {
          text : "C",
          value : "c hljs hl c"
        }, {
          text : "C++",
          value : "cpp hljs hl cpp"
        }, {
          text : "HTML/XML",
          value : "html hljs hl html xml"
        }, {
          text : "Java",
          value : "java hljs hl java"
        }, {
          text : "JavaScript",
          value : "javascript hljs hl javascript"
        }, {
          text : "JSON",
          value : "json hljs hl json"
        }, {
          text : "Markdown",
          value : "markdown hljs hl markdown"
        }, {
          text : "PHP",
          value : "php hljs hl php"
        }, {
          text : "Python",
          value : "python hljs hl python"
        }, {
          text : "TypeScript",
          value : "typescript hljs hl typescript"
        }],
        insertdatetime_formats : ["Updated: %A, %d %B %Y"],
        rel_list : [{
          title : "Internal Link",
          value : ""
        }, {
          title : "External Link",
          value : "noopener noreferer nofollow"
        }],
        extended_valid_elements : "img[src|loading=lazy|alt|title|width|height|align|onmouseover|onmouseout|name]",
        init_instance_callback : function(ed) {
        }
      });

      document.getElementById("auth_post_create").addEventListener("submit", function(postContent) {
        postContent.preventDefault();

        (postContent = {}).title = document.getElementById("auth_input_post_title").value;
        postContent.description = document.getElementById("auth_input_post_description").value;
        postContent.labels = document.getElementById("auth_input_post_label").value;
        postContent.content = tinymce.get("auth_input_post_content").getContent();
        postContent.created = (new Date).getTime();
        postContent.updated = postContent.created;
        postContent.views = 0;
        postContent.status = "Pending";

        var refUid = firebase.database().ref('Users/' + database.uid);
        var refData = refUid.child("userData");
        var refPost = refUid.child("userPost");

        return refData.child("userPoints").transaction(function(points) {
          return (points || 0) + 10
        }), refPost.push(postContent).then(function(postId) {
          window.location.href = authUserPostPage + "?id=" + postId.getKey();
        }).catch(function(error) {
          console.log(error);
        }), false
      });
    } else {
      if (confirm('You need to login to access this page. Do you want to log in?')) {
        window.location.href = authLoginPage;
      } else {
        window.location.href = "/";
      }
    }
  })
};

function datetimeFormat(e) {
  return (e = new Date(e)).getDate() + " " + "January February March April May June July August September October November December".split(" ")[e.getMonth()] + " " + pad2Digit(e.getFullYear())
};

function pad2Digit(e) {
  return ("0" + e.toString()).slice(-4)
};

function strip(e) {
  var t = document.createElement("DIV");
  return t.innerHTML = e, t.textContent || t.innerText || ""
};

firebase.initializeApp(firebaseConfig);
