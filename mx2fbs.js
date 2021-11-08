function elcreativeAuthLogin() {
  firebase.auth().onAuthStateChanged(function(database) {
    if (database) {
      var refLoginUserUid = firebase.database().ref().child('Users/' + database.uid);
      refLoginUserUid.update({
        userData: {
          userEmail: database.email,
          userName: database.displayName,
          userPhotoUrl: database.photoURL,
          userUID: database.uid
        }
      }).then(function() {
        localStorage.setItem("auth_image", database.photoURL);
        window.location.href = authProfilePage;
      })
    } else {
      localStorage.removeItem("auth_image")
    }
  });

  var config = {
    signInSuccessUrl : false,
    signInOptions : [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    tosUrl : false
  };

  (new firebaseui.auth.AuthUI(firebase.auth())).start("#firebaseui-auth-container", config)
};

function elcreativeAuthProfile() {
  firebase.auth().onAuthStateChanged(function(database) {
    var userProfileData;
    if (database) {
      var db = firebase.database().ref();
      document.getElementById("auth_logout").onclick = function() {
        firebase.auth().signOut();
        localStorage.removeItem("auth_image")
      };

      document.querySelector(".auth_profile_container").innerHTML = '<div class="auth_profile"><div class="auth_avatar"><span class="lazyload shimmer" data-image="' + database.photoURL + '"></span><button class="auth_profile_edit" type="button" aria-label="Profile Settings" data-toggle-class-on-target="active" data-toggle-target="#dialog_auth_profile_edit" aria-haspopup="listbox" aria-controls="dialog_auth_profile_edit" aria-expanded="false" data-toggle-outside data-toggle-escape><svg width="16" height="16" viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg></button></div><div class="auth_info"><div class="auth_name">' + database.displayName + '</div><div class="auth_email">' + database.email + '</div><div class="auth_bio"></div><div class="auth_action"><a href="/p/' + authCreatePost + '">Create Posts</a></div></div></div>      <div id="dialog_auth_profile_edit" class="elcreative_dialog dialog_auth_profile_edit" aria-hidden="true" role="listbox"><div class="dialog_container"><div class="dialog_header"><span>Profile Settings</span><button class="button_close_dialog elcreative_button_icon small" type="button" aria-label="Close Dialog" data-toggle-trigger-off><svg width="24" height="24" viewBox="0 0 24 24"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg></button></div><div class="dialog_content dialog_auth_profile_edit"><div class="elcreative_input"><input class="auth_user_web_url" id="auth_user_web_url" name="Website URL" placeholder="" type="url"><label for="auth_user_web_url">Website URL</label></div><div class="elcreative_input"><input class="auth_input_location" id="auth_input_location" name="Location" placeholder="" type="text"><label for="auth_input_location">Location</label></div><div class="elcreative_input"><textarea class="auth_input_bio" id="auth_input_bio" name="Bio" placeholder="" maxlength="200"></textarea><label for="auth_input_location">Bio</label></div></div><div class="dialog_footer"><button id="button_auth_profile_save" class="elcreative_button button_auth_profile_save elcreative_ripple raised" type="submit">Save Profile Information</button></div></div></div>';

      var refUserProfile = db.child("Users/" + database.uid + "/userProfile");
      (userProfileData = refUserProfile).on("value", function(userProfileData) {
        userProfileData = userProfileData.val();

        if (userProfileData.userWebURL !== undefined || userProfileData.userWebURL !== null) {
          document.getElementById("auth_user_web_url").value = userProfileData.userWebURL;
        }
        if (userProfileData.userLocation !== undefined || userProfileData.userLocation !== null) {
          document.getElementById("auth_input_location").value = userProfileData.userLocation;
        }
        if (userProfileData.userBio !== undefined || userProfileData.userBio !== null) {
          document.getElementById("auth_input_bio").value = userProfileData.userBio;
          document.querySelector(".auth_bio").innerHTML = userProfileData.userBio;
        }

        easyToggleState();
      });

      var refUserPosts = db.child("Posts/" + database.uid);
      refUserPosts.on("value", function(userPostData) {
        var postsContent = "";
        userPostData.forEach(function(postId) {
          dbPost = postId.val();

          postsContent = '<div class="auth_article"><div class="article_info"><a href="' + authUserPostPage + '?id=' + postId.getKey() + '" title="' + dbPost.title + '">' + dbPost.title + '</a><small>' + dbPost.author + " - " + datetimeFormat(dbPost.updated) + ' | <a href="' + authEditPost + "?id=" + postId.getKey() + '" style="display:inline">Edit</a></small></div><div class="article_action"><small>Pending</small></div></div>' + postsContent;
        });

        if (postsContent !== "") {
          document.querySelector(".elcreative_tab .tab_button_container").innerHTML += "<button id='tab_button_post' class='tab_button elcreative_ripple' type='button' aria-label='Posts' data-toggle-target='#tab_panel_post' aria-controls='tab_panel_post' role='tab' aria-selected='true' data-toggle-radio-group='tab_auth' data-toggle-arrows='' data-toggle-class='' data-toggle-is-active=''>Posts</button>";
          document.querySelector(".elcreative_tab").innerHTML += "<div id='tab_panel_post' class='tab_panel_content tab_panel_post' role='tabpanel' aria-labelledby='tab_button_post' aria-hidden='true'>" + postsContent + "</div>";
        };

        easyToggleState();
      });

      document.getElementById("button_auth_profile_save").addEventListener("click", function(userProfileData) {
        userProfileData.preventDefault();
        functionSnackbar("Saving…", 5000);

        (userProfileData = {}).userWebURL = document.getElementById("auth_user_web_url").value;
        userProfileData.userLocation = document.getElementById("auth_input_location").value;
        userProfileData.userBio = document.getElementById("auth_input_bio").value;

        refUserProfile.update(userProfileData).then(function() {
          location.reload();
        }).catch(function(error) {
          console.log(error);
        }), false;
      });
    } else {
      window.location.href = authLoginPage;
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
        refPost = (database = firebase.database().ref("Posts/" + database.uid)).child(postId);
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
            window.location.href = authProfilePage;
          }
        });

        document.getElementById('auth_post_update').setAttribute("href", authEditPost + "?id=" + postId);
        document.getElementById("auth_post_delete").addEventListener("click", function() {
          if (confirm('Are you sure to delete this post?')) {
            refPost.remove();
            window.location.href = authProfilePage;
          } else {}
        })
      } else {
        window.location.href = authProfilePage;
      }
    } else {
      window.location.href = authLoginPage;
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
        (refPost = firebase.database().ref("Posts/" + database.uid).child(postId)).once("value", function(databases) {
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
            window.location.href = authProfilePage;
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
          }).catch(function(error) {
            console.log(error);
          }), false;
        })
      } else {
        window.location.href = authProfilePage;
      }
    } else {
      window.location.href = authLoginPage;
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

      document.getElementById("btn_create").addEventListener("click", function(postContent) {
        postContent.preventDefault();

        document.getElementById("btn_create").remove();
        functionSnackbar("Uploading…", 5000);

        (postContent = {}).title = document.getElementById("auth_input_post_title").value;
        postContent.description = document.getElementById("auth_input_post_description").value;
        postContent.labels = document.getElementById("auth_input_post_label").value;
        postContent.content = tinymce.get("auth_input_post_content").getContent();
        postContent.created = (new Date).getTime();
        postContent.updated = postContent.created;
        postContent.author = database.displayName;
        postContent.views = 0;
        postContent.status = "Pending";

        var refUid = firebase.database().ref('Users/' + database.uid);
        var refPost = firebase.database().ref("Posts/" + database.uid);

        refUid.child("userProfile").child("userPosts").transaction(function(points) {
          return (points || 0) + 1
        });

        return refUid.child("userProfile").child("userPoints").transaction(function(points) {
          return (points || 0) + 10
        }), refPost.push(postContent).then(function(postId) {
          window.location.href = authUserPostPage + "?id=" + postId.getKey();
        }).catch(function(error) {
          console.log(error);
        }), false;


      });
    } else {
      window.location.href = authLoginPage;
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