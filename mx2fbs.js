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
          postContent = '<div class="auth_article"><div class="article_info"><a href="' + authUserPostPage + '?id=' + $s.getKey() + '" title="' + entry.title + '">' + entry.title + '</a><small>' + datetimeFormat(entry.updated) + '</small></div><div class="article_action"><a href="javascript:;"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" /></svg></a><a href="javascript:;" title="Edit"><svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12H20A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4V2M18.78,3C18.61,3 18.43,3.07 18.3,3.2L17.08,4.41L19.58,6.91L20.8,5.7C21.06,5.44 21.06,5 20.8,4.75L19.25,3.2C19.12,3.07 18.95,3 18.78,3M16.37,5.12L9,12.5V15H11.5L18.87,7.62L16.37,5.12Z" /></svg></a><a href="javascript:;" title="Delete"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M16,10V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V10H16M13.5,6L14.5,7H17V9H7V7H9.5L10.5,6H13.5Z" /></svg></a></div></div>' + postContent;
        });

        document.querySelector(".auth_post_container").classList.remove("loading"), document.querySelector(".tab_panel_post").innerHTML = postContent;
      });
    } else {
      window.location.href = authLoginPage;
    }
  });
};

function elcreativeAuthPost() {
  firebase.auth().onAuthStateChanged(function(rtdb) {
    var postId;
    var postBoolean;
    var postRef;

    var obj;
    
    if (rtdb) {
      if (postId = (postId = "id", obj = {}, window.location.href.split("?").pop().split("&").map(function(param) {
        param = param.split("=");
        obj[param[0]] = param[1];
      }), postId ? obj[postId] || null : obj)) {
        postBoolean = false;
        postRef = (rtdb = firebase.database().ref('Users/' + rtdb.uid)).child("userPost").child(postId);
        postRef.on("value", function(postItem) {
          var ret = postItem.val();
          if (ret) {
            ret["update-formatted"] = datetimeFormat(ret.updated);
            document.querySelector(".Blog .post_title").textContent = ret.title;
          } else {
            window.location.href = "index.html";
          }
        });
        document.getElementById("update").setAttribute("href", "update-post.html?id=" + postId);
        document.getElementById("delete").addEventListener("click", function() {
          postRef.remove();
        })
      } else {
        alert("This entry id does not exist");
        window.location.href = "index.html";
      }
    } else {
      alert("Please login first");
      window.location.href = "sign-in.html";
    }
  });
} ;

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
