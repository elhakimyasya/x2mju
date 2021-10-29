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
      refUserPost.limitToLast(5).once("value", function(postItem) {
        var postContent = "";
        postItem.forEach(function(postId) {
          database = postId.val();
          postContent = '<div class="auth_article"><div class="article_info"><a href="' + authUserPostPage + '?id=' + postId.getKey() + '" title="' + database.title + '">' + database.title + '</a><small>' + database.author + " | " + datetimeFormat(database.updated) + '</small></div><div class="article_action"><small>Pending</small></div></div>' + postContent;
        });

        if (postContent !== "") {
          document.querySelector(".tab_panel_post").innerHTML = postContent;
        }
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
    var postRef;

    if (database) {
      if (postId = (postId = "id", postObject = {}, window.location.href.split("?").pop().split("&").map(function(url) {
        url = url.split("=");
        postObject[url[0]] = url[1];
      }), postId ? postObject[postId] || null : postObject)) {
        postBoolean = false;
        postRef = (database = firebase.database().ref('Users/' + database.uid)).child("userPost").child(postId);
        postRef.on("value", function(postItem) {
          var postData = postItem.val();
          if (postData) {
            postData["updatedAt-formatted"] = datetimeFormat(postData.updatedAt);
            var postContent = document.querySelector(".panel_content");
            postContent.innerHTML = postData.content;

            if (!postBoolean) {
              postBoolean = true;
              postRef.child("views").transaction(function(count) {
                return (count || 0) + 1;
              });
            };

            document.querySelector(".Blog .post_title").innerText = postData.title;
          } else {
            window.location.href = authProfilePage;
          }
        });

        document.getElementById('auth_post_update').setAttribute("href", "update-post.html?id=" + postId);
        document.getElementById("auth_post_delete").addEventListener("click", function() {
          if (confirm('Are you sure you want to delete this post?')) {
            postRef.remove()
          } else {

          }
        })
      } else {
        window.location.href = authProfilePage;
      }
    } else {
      window.location.href = authLoginPage;
    }
  });
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
