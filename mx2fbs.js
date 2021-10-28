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
    signInOptions : [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    tosUrl : false
  };
  (new firebaseui.auth.AuthUI(firebase.auth())).start("#firebaseui-auth-container", config);
};

function elcreativeAuthProfile () {
  firebase.auth().onAuthStateChanged(function(rtdb) {
    var settings;
    var controller;
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

      var refPosts = (controller = firebase.database().ref().child('Users/' + rtdb.uid)).child("userPost");
      refPosts.limitToLast(5).once("value", function(postItem) {
        postItem.forEach(function($s) {
          var entry = $s.val();
          var out;
          out = '<div class="__article"><a href="my-posts.html?id=' + $s.getKey() + '" title="' + entry.title + '"><div class="panel-heading">' + entry.title + '</div></a></div>' + out;
          document.querySelector(".tab_panel_post").classList.remove("loading"), document.querySelector(".tab_panel_post").innerHTML = out;
        });
      });
    } else {
      window.location.href = authLoginPage;
    }
  });
};

firebase.initializeApp(firebaseConfig);
