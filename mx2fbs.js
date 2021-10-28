function elcreativeAuthLogin() {
  firebase.auth().onAuthStateChanged(function(location) {
    if (location) {
      window.location.href = authProfilePage;
      localStorage.setItem("auth_image", location.photoURL);
    } else {
      localStorage.removeItem("auth_image")
    }
  });

  var config = {
    signInSuccessUrl : false,
    signInOptions : [firebase.auth.GoogleAuthProvider.PROVIDER_ID, firebase.auth.EmailAuthProvider.PROVIDER_ID],
    tosUrl : false
  };
  (new firebaseui.auth.AuthUI(firebase.auth())).start("#firebaseui-auth-container", config);
};

function elcreativeAuthProfile () {
  firebase.auth().onAuthStateChanged(function(rtdb) {
    if (rtdb) {
      document.getElementById("auth_logout").onclick = function() {
        firebase.auth().signOut();
        localStorage.removeItem("auth_image")
      };
      var profileContent = '<div class="auth_profile"><div class="auth_avatar"><span class="lazyload shimmer" data-image="' + rtdb.photoURL + '"/></div><div class="auth_info"><div class="auth_name">' + rtdb.displayName + '</div><div class="auth_email">' + rtdb.email + "</div></div></div>";
      document.querySelector(".auth_profile_container").classList.remove("loading"), document.querySelector(".auth_profile_container").innerHTML = profileContent, document.querySelector(".elcreative_tab").classList.remove("loading");

      var refUsers = firebase.database().ref().child('Users/' + rtdb.uid);
      refUsers.update({
        userData : {
          userEmail: rtdb.email,
          userName: rtdb.displayName,
          userPhotoUrl: rtdb.photoURL,
          userUID: rtdb.uid
        }
      });

      var refPosts = firebase.database().ref().child('Users/' + rtdb.uid).child("userPost");
      refPosts.limitToLast(5).once("value", function(postItem) {
        var postContent = "";
        postItem.forEach(function($s) {
          entry = $s.val();
          postContent = '<div class="auth_article"><div class="article_info"><a href="' + authUserPostPage + '?id=' + $s.getKey() + '" title="' + entry.title + '">' + entry.title + '</a><small>' + datetimeFormat(entry.updated) + '</small></div><div class="article_action"><small>Pending</small></div></div>' + postContent;
        });

        document.querySelector(".auth_post_container").classList.remove("loading"), document.querySelector(".tab_panel_post").innerHTML = postContent;
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
            window.location.href = authUserPostListPage;
          }
        });

        document.getElementById('update').setAttribute("href", "update-post.html?id=" + postId);
        document.getElementById("delete").addEventListener("click", function() {
          postRef.remove()
        })
      } else {
        window.location.href = authUserPostListPage;
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
