function elcreativeAuthLogin() {
  firebase.auth().onAuthStateChanged(function(event) {
    if (event) {
      window.location.href = authProfilePage;
      localStorage.setItem("auth_image", event.photoURL);
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
  firebase.auth().onAuthStateChanged(function(db) {
    var settings;
    var controller;
    var n;
    if (db) {
      document.getElementById("auth_logout").onclick = function() {
        firebase.auth().signOut();
        localStorage.removeItem("auth_image")
      };
      n = "";
      settings = (controller = firebase.database().ref(db.displayName)).child("Posts");
      controller = controller.child("Files");

      n = '<div class="auth_profile"><div class="auth_avatar"><span class="lazyload shimmer" data-src="' + db.photoURL + '"/></div><div class="auth_info"><div class="auth_name">' + db.displayName + '</div><div class="auth_email">' + db.email + "</div></div></div>";

      document.querySelector(".auth_profile_container").classList.remove("loading"), document.querySelector(".auth_profile_container").innerHTML = n;

      

      // settings.limitToLast(5).once("value", function(wrappersTemplates) {
      //   var out = "";
      //   wrappersTemplates.forEach(function($s) {
      //     entry = $s.val();
      //     out = '<div class="__article"><a href="my-posts.html?id=' + $s.getKey() + '" title="' + entry.title + '"><div class="panel-heading">' + excerpt(entry.title, 140) + '</div><div class="panel-body"><small>' + datetimeFormat(entry.updatedAt) + '</small></div></a><small class="' + entry.status + '">' + entry.status + "</small></div>" + out;
      //   });
      //   $("#__entries.__post").removeClass("__loading");
      //   $("#__entries.__post .__panel_content").prepend(out).find(".__loading").remove();
      // });
      // controller.once("value", function(wrappersTemplates) {
      //   var out = "";
      //   wrappersTemplates.forEach(function(postDataObj) {
      //     out = '<div class="__article"><div class="panel-heading">' + postDataObj.key + '</div><a href="' + postDataObj.val() + '" title="' + postDataObj.key + '" target="_blank" rel="nofollow noopener noreferer"><small>Download</small></a></div>' + out;
      //   });
      //   $("#__entries.__files").removeClass("__loading");
      //   $("#__entries.__files .__panel_content").prepend(out).find(".__loading").remove();
      // });
    } else {
      window.location.href = authLoginPage;
    }
  });
};

firebase.initializeApp(authConfig);
